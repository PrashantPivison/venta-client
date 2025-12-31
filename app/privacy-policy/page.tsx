import { PolicyLayout } from '@/components/PolicyLayout';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <p className="text-[#1C1C1C]/80 leading-relaxed">
            This Privacy Policy ("Policy") describes the policies and procedures on the collection, use, disclosure and protection of your information when you use our website "www.ventainternational.in", made available by <strong>VENTA INTERNATIONAL LLP</strong> ("Venta", "Company", "we", "us" and "our"), a Limited Liability Partnership registered under the provisions of Limited Liability Partnership Act, 2008 and having its registered office at Office no. 229, Satra Plaza, Plot no. 19/20, Sector 19D, Vashi, Navi Mumbai – 400705.
          </p>

          <p className="text-[#1C1C1C]/80 leading-relaxed mt-4">
            The terms "you" and "your" refer to the user of the Venta's Website. The term "Services" refers to any services offered by Venta whether on the Venta's Website or otherwise.
          </p>

          <p className="text-[#1C1C1C]/80 leading-relaxed mt-4">
            Please read this Policy before using the Venta's Website or submitting any personal information to Venta. This Policy is a part of and incorporated within, and is to be read along with, the Terms of Use.
          </p>
        </section>

        {/* Your Consent */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">YOUR CONSENT</h2>
          
          <p className="text-[#1C1C1C]/80 leading-relaxed">
            By using the Venta's Website and the Services, you agree and consent to the collection, transfer, use, storage, disclosure and sharing of your information as described and collected by us in accordance with this Policy. If you do not agree with the Policy, please do not use or access the Venta's Website.
          </p>
        </section>

        {/* Policy Changes */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">POLICY CHANGES</h2>
          
          <p className="text-[#1C1C1C]/80 leading-relaxed">
            We may occasionally update this Policy and such changes will be posted on this page. If we make any significant changes to this Policy we will endeavour to provide you with reasonable notice of such changes, such as via prominent notice on the Venta's Website or to your email address on record and where required by applicable law, we will obtain your consent. To the extent permitted under the applicable law, your continued use of our Services after we publish or send a notice about our changes to this Policy shall constitute your consent to the updated Policy.
          </p>
        </section>

        {/* Links to Other Websites */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">LINKS TO OTHER WEBSITES</h2>
          
          <p className="text-[#1C1C1C]/80 leading-relaxed">
            The Venta's Website may contain links to other websites. Any personal information about you collected whilst visiting such websites is not governed by this Policy. Venta shall not be responsible for and has no control over the practices and content of any website accessed using the links contained on the Venta's Website. This Policy shall not apply to any information you may disclose to any of our service providers/service personnel which we do not require you to disclose to us or any of our service providers under this Policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">INFORMATION WE COLLECT FROM YOU</h2>
          
          <p className="text-[#1C1C1C]/80 leading-relaxed mb-4">
            We will collect and process the following information about you:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Information you give us</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-3">
                This includes information submitted when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#1C1C1C]/80 ml-4">
                <li>When you place a order on Venta's Website, which may include your name, email, phone number, delivery address, payment or banking information.</li>
                <li>Provide content to us, which may include reviews, ordering details and history, contact information of people you refer to us and other information you provide on the Venta's Website ("Your Content").</li>
                <li>Use our Services, we may collect and store information about you to process your requests and automatically complete forms for future transactions, including (but not limited to) your phone number, address, email, billing information and credit or payment card information.</li>
                <li>Correspond with Venta for customer support;</li>
                <li>Participate in the interactive services offered by the Venta's Website such as discussion boards, competitions, promotions or surveys, other social media functions or make payments etc., or</li>
                <li>Enable features that require Venta's access to your address book or calendar;</li>
                <li>Report problems for troubleshooting.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Information we collect about you</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-3">
                With regard to each of your visits to the Venta's Website, we will automatically collect and analyse the following demographic and other information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#1C1C1C]/80 ml-4">
                <li>When you communicate with us (via email, phone, through the Venta's Website or otherwise), we may maintain a record of your communication;</li>
                <li><strong>Location information:</strong> Depending on the Services that you use, and your app settings or device permissions, we may collect your real time information, or approximate location information as determined through data such as GPS, IP address;</li>
                <li><strong>Usage and Preference Information:</strong> We collect information as to how you interact with our Services, preferences expressed and settings chosen. Venta's Website includes the Venta advertising services ("Ad Services"), which may collect user activity and browsing history within the Venta's Website and across third-party sites and online services, including those sites and services that include our ad pixels ("Pixels"), widgets, plug-ins, buttons, or related services or through the use of cookies.</li>
                <li><strong>Transaction Information:</strong> We collect transaction details related to your use of our Services, and information about your activity on the Services, including the full Uniform Resource Locators (URL), the type of Services you requested or provided, comments, domain names, search results selected, number of clicks, information and pages viewed and searched for, the order of those pages, length of your visit to our Services, the date and time you used the Services, amount charged, details regarding application of promotional code, methods used to browse away from the page and any phone number used to call our customer service number and other related transaction details;</li>
                <li><strong>Device Information:</strong> We may collect information about the devices you use to access our Services, including the hardware models, operating systems and versions, software, file names and versions, preferred languages, unique device identifiers, advertising identifiers, serial numbers, device motion information and mobile network information.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookies Section */}
        <section id="cookies">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">COOKIES</h2>
          
          <div className="space-y-4">
            <p className="text-[#1C1C1C]/80 leading-relaxed">
              Our Venta's Website and third parties with whom we partner, may use cookies, pixel tags, web beacons, mobile device IDs, "flash cookies" and similar files or technologies to collect and store information with respect to your use of the Services and third-party websites.
            </p>

            <p className="text-[#1C1C1C]/80 leading-relaxed">
              Cookies are small files that are stored on your browser or device by websites, apps, online media and advertisements. We use cookies and similar technologies for purposes such as:
            </p>

            <ul className="list-disc list-inside space-y-2 text-[#1C1C1C]/80 ml-4">
              <li>Authenticating users;</li>
              <li>Remembering user preferences and settings;</li>
              <li>Determining the popularity of content;</li>
              <li>Delivering and measuring the effectiveness of advertising campaigns;</li>
              <li>Analysing site traffic and trends, and generally understanding the online behaviours and interests of people who interact with our services.</li>
            </ul>

            <p className="text-[#1C1C1C]/80 leading-relaxed">
              A pixel tag (also called a web beacon or clear GIF) is a tiny graphic with a unique identifier, embedded invisibly on a webpage (or an online ad or email), and is used to count or track things like activity on a webpage or ad impressions or clicks, as well as to access cookies stored on users' computers. We use pixel tags to measure the popularity of our various pages, features and services. We also may include web beacons in e-mail messages or newsletters to determine whether the message has been opened and for other analytics.
            </p>

            <p className="text-[#1C1C1C]/80 leading-relaxed">
              To modify your cookie settings, please visit your browser's settings. By using our Services with your browser settings to accept cookies, you are consenting to our use of cookies in the manner described in this section.
            </p>

            <p className="text-[#1C1C1C]/80 leading-relaxed">
              We may also allow third parties to provide audience measurement and analytics services for us, to serve advertisements on our behalf across the Internet, and to track and report on the performance of those advertisements. These entities may use cookies, web beacons, SDKs and other technologies to identify your device when you visit the Venta's Website and use our Services, as well as when you visit other online sites and services.
            </p>
          </div>
        </section>

        {/* Uses of Your Information */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">USES OF YOUR INFORMATION</h2>
          
          <p className="text-[#1C1C1C]/80 leading-relaxed mb-3">
            We use the information we collect for following purposes, including:
          </p>

          <ul className="list-disc list-inside space-y-2 text-[#1C1C1C]/80 ml-4">
            <li>To provide, personalise, maintain and improve our products and services, such as to enable deliveries and other services, enable features to personalize your experience on Website.</li>
            <li>To carry out our obligations arising from any contracts entered into between you and us and to provide you with the relevant information and services;</li>
            <li>To administer and enhance the security of our Venta's Website and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;</li>
            <li>To provide you with information about services we consider similar to those that you are already using, or have enquired about, or may interest you. If you are a registered user, we will contact you by electronic means (e-mail or SMS or telephone) with information about these services;</li>
            <li>To understand our users (what they do on our Services, what features they like, how they use them, etc.), improve the content and features of our Services (such as by personalizing content to your interests), process and complete your transactions, make special offers, provide customer support, process and respond to your queries;</li>
            <li>To generate and review reports and data about, and to conduct research on, our user base and Service usage patterns;</li>
            <li>To allow you to participate in interactive features of our Services, if any; or</li>
            <li>To measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you.</li>
          </ul>

          <p className="text-[#1C1C1C]/80 leading-relaxed mt-4">
            We may combine the information that we receive from third parties with the information you give to us and information we collect about you for the purposes set out above. Further, we may anonymize and/or de-identify information collected from you through the Services or via other means, including via the use of third-party web analytic tools. As a result, our use and disclosure of aggregated and/or de-identified information is not restricted by this Policy, and it may be used and disclosed to others without limitation.
          </p>

          <p className="text-[#1C1C1C]/80 leading-relaxed mt-4">
            We analyse the log files of our Venta's Website that may contain Internet Protocol (IP) addresses, browser type and language, Internet service provider (ISP), referring, app crashes, page viewed and exit websites and applications, operating system, date/time stamp, and clickstream data. This helps us to administer the website, to learn about user behavior on the site, to improve our product and services, and to gather demographic information about our user base as a whole.
          </p>
        </section>

        {/* Disclosure and Distribution */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">DISCLOSURE AND DISTRIBUTION OF YOUR INFORMATION</h2>
          
          <p className="text-[#1C1C1C]/80 leading-relaxed mb-4">
            We may share your information that we collect for following purposes:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">With Service Providers:</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed">
                We may share your information with our vendors, consultants, marketing partners, research firms and other service providers or business partners, such as Payment processing companies, to support our business.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">With Other Users:</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed">
                If you are a delivery partner, we may share your name, phone number and/or profile picture (if applicable), tracking details with other users to provide them the Services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">For Crime Prevention or Investigation:</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed">
                We may share this information with governmental agencies or other companies assisting us when detecting and preventing fraud, responding to legal claims, or under duty to enforce our agreements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">With Advertisers and advertising networks:</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed">
                We may work with third parties such as network advertisers to serve advertisements on the Venta's Website and on third-party websites or other media. While you cannot opt out of advertising on the Venta's Website, you may opt out of much interest-based advertising on third party sites. For more information, visit www.aboutads.info/choices.
              </p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">DATA SECURITY PRECAUTIONS</h2>
          
          <div className="space-y-4">
            <p className="text-[#1C1C1C]/80 leading-relaxed">
              We have in place appropriate technical and security measures to secure the information collected by us.
            </p>

            <p className="text-[#1C1C1C]/80 leading-relaxed">
              We use vault and tokenization services from third party service providers to protect the sensitive personal information provided by you. The third-party service providers with respect to our vault and tokenization services and our payment gateway and payment processing are compliant with the payment card industry standard (generally referred to as PCI compliant service providers). You are advised not to send your full credit/debit card details through unencrypted electronic platforms. Where we have given you (or where you have chosen) a username and password which enables you to access certain parts of the Venta's Website, you are responsible for keeping these details confidential. We ask you not to share your password with anyone.
            </p>

            <p className="text-[#1C1C1C]/80 leading-relaxed">
              Please be aware that the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted through the Venta's Website. Once we have received your information, we will use strict physical, electronic, and procedural safeguards to try to prevent unauthorised access.
            </p>
          </div>
        </section>

        {/* Opt-Out */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">OPT-OUT</h2>
          
          <div className="space-y-4">
            <p className="text-[#1C1C1C]/80 leading-relaxed">
              When you sign up for an account, you are opting in to receive emails from Venta. You can log in to manage your email preferences or you can follow the "unsubscribe" instructions in commercial email messages, but note that you cannot opt out of receiving certain administrative notices, service notices, or legal notices from Venta.
            </p>

            <p className="text-[#1C1C1C]/80 leading-relaxed">
              If you wish to withdraw your consent for the use and disclosure of your personal information in the manner provided in this Policy, please write to us at <a href="mailto:mail@ventainternational.in" className="text-[#fac938] hover:underline">mail@ventainternational.in</a>. Please note that we may take time to process such requests, and your request shall take effect no later than 5 (Five) business days from the receipt of such request, after which we will not use your personal data for any processing unless required by us to comply with our legal obligations. We may not be able offer you any or all Services upon such withdrawal of your consent.
            </p>
          </div>
        </section>

        {/* Grievance Officer */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">GRIEVANCE OFFICER AND VENTA'S WEBSITE SECURITY</h2>
          
          <div className="space-y-4">
            <p className="text-[#1C1C1C]/80 leading-relaxed">
              If you have any queries relating to the processing or usage of information provided by you in connection with this Policy, please email us at <a href="mailto:mail@ventainternational.in" className="text-[#fac938] hover:underline">mail@ventainternational.in</a> or write to our Grievance Officer at the following address:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-[#1C1C1C] mb-2">Venta Grievance Officer</p>
              <p className="text-[#1C1C1C]/80">
                Office no. 229, Satra Plaza,<br />
                Plot no. 19/20, Sector 19D,<br />
                Vashi, Navi Mumbai – 400705
              </p>
            </div>
          </div>
        </section>

        {/* Cookie Policy Note */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="text-[#1C1C1C]/80 leading-relaxed">
            <strong>Note:</strong> For detailed information about cookies, please refer to the <Link href="#cookies" className="text-[#fac938] hover:underline">Cookies section</Link> above in this Privacy Policy.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
