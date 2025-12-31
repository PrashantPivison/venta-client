// Vercel API route: sendEmail (ESM)
import SibApiV3Sdk from 'sib-api-v3-sdk';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    recaptchaToken,
    ...formData
  } = req.body;

  if (!recaptchaToken) {
    return res.status(400).json({ error: 'Missing reCAPTCHA token' });
  }

  // Verify reCAPTCHA
  try {
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
    });
    const recaptchaJson = await recaptchaRes.json();
    
    if (!recaptchaJson.success) {
      return res.status(403).json({ error: 'Verification failed, please try again' });
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return res.status(500).json({ error: 'Verification error' });
  }

  // Format email body with all non-empty fields in a table
  const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #fac938; margin-bottom: 24px; border-bottom: 3px solid #fac938; padding-bottom: 12px;">
        New Contact Form Submission - Venta International
      </h2>
      <table style="border-collapse: collapse; width: 100%; background: #fff; border: 1px solid #e0e0e0;">
        <tbody>
          ${Object.entries(formData)
            .filter(([_, v]) => v && String(v).trim() !== '')
            .map(([k, v]) => {
              const label = k.replace(/([A-Z])/g, ' $1').trim().replace(/^./, str => str.toUpperCase());
              return `
              <tr>
                <td style="border: 1px solid #eee; padding: 12px; font-weight: bold; background: #f9f9f9; width: 35%;">${label}</td>
                <td style="border: 1px solid #eee; padding: 12px;">${String(v)}</td>
              </tr>`;
            })
            .join('')}
        </tbody>
      </table>
      <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; color: #888; font-size: 13px; text-align: center;">
        This email was sent from the Venta International website contact form.<br>
        &copy; ${new Date().getFullYear()} Venta International LLP
      </div>
    </div>
  `;

  // Send email via Brevo
  try {
    const brevoClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = brevoClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    
    const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.sender = { 
      name: `${formData.firstName} ${formData.lastName}` || 'Website Contact Form', 
      email: process.env.SMTP_FROM_EMAIL || 'no-reply@ventainternational.com'
    };
    sendSmtpEmail.to = [{ 
      email: process.env.SMTP_TO_EMAIL || 'info@ventainternational.com', 
      name: 'Venta International' 
    }];
    sendSmtpEmail.subject = `Contact Form: ${formData.inquiryType || 'General Inquiry'}`;
    sendSmtpEmail.htmlContent = emailBody;
    
    if (formData.email) {
      sendSmtpEmail.replyTo = { email: formData.email, name: `${formData.firstName} ${formData.lastName}` };
    }
    
    await emailApi.sendTransacEmail(sendSmtpEmail);
    
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Brevo email error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: String(error) });
  }
}
