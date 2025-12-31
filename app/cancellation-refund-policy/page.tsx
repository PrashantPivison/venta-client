import { PolicyLayout } from '@/components/PolicyLayout';

export default function CancellationRefundPolicyPage() {
  return (
    <PolicyLayout title="Cancellation & Refund Policy">
      <div className="space-y-8">
        {/* CANCELLATION SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">CANCELLATION</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">1.1</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed">
                As a general rule you shall not be entitled to cancel your order once you have received confirmation of the same. If you cancel your order after it has been confirmed, Venta shall have a right to charge you cancellation fee of full order value, with a right to either not to refund the order value or recover from your subsequent order, the complete/ deficit cancellation fee, as applicable, to compensate our Merchants and delivery partners. Venta shall also have right to charge you cancellation fee for the orders cancelled by Venta for the reasons specified under clause 1.3 of this cancellation and refunds policy. In case of cancellations for the reasons attributable to Venta or its merchants and delivery partners, Venta shall not charge you any cancellation fee.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">1.2</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed">
                However, in the unlikely event of an item on your order being unavailable, we will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund in accordance with our refund policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">1.3</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-3">
                We reserve the sole right to cancel your order in the following circumstance:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#1C1C1C]/80 ml-4">
                <li>in the event of the designated address falls outside the delivery zone offered by us;</li>
                <li>failure to contact you by phone or email at the time of confirming the order booking;</li>
                <li>failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or</li>
                <li>unavailability of all the items ordered by you at the time of booking the order</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
              <p className="text-[#1C1C1C]/80 leading-relaxed">
                Our customer-first approach to business, our hospitality, the insistence on quality over quantity and ability to deliver complex customized machinery and large tonnage of all forms of scaffolding accessories have together helped us gain trust and expand into markets like U.K., Turkey, Qatar, Iran, Israel and newer markets such as Africa, US and Russia.
              </p>
            </div>
          </div>
        </section>

        {/* REFUNDS SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">REFUNDS</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">A. Refund Eligibility</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-4">
                You shall be entitled to a refund only if you pre-pay for your order at the time of placing your order on the Platform and only in the event of any of the following circumstances:
              </p>

              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-2">A.1.1</h4>
                  <p className="text-[#1C1C1C]/80 leading-relaxed">
                    us cancelling your order due to (A) your delivery location following outside our designated delivery zones; (B) failure to contact you by phone or email at the time of confirming the order booking; or (C) failure to contact you by phone or email at the time of confirming the order booking; or
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-2">A.1.2</h4>
                  <p className="text-[#1C1C1C]/80 leading-relaxed">
                    you cancel the order at the time of confirmation due to unavailability of the items you ordered for at the time of booking.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-2">A.2</h4>
                  <p className="text-[#1C1C1C]/80 leading-relaxed">
                    Our decision on refunds shall be at our sole discretion and shall be final and binding.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-2">A.3</h4>
                  <p className="text-[#1C1C1C]/80 leading-relaxed">
                    All refund amounts shall be credited to your account within <strong>5-7 business days</strong> in accordance with the terms that may be stipulated by the bank which has issued the credit/ debit card
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">B. Non-Refundable Circumstances</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-4">
                You shall not be entitled to a refund only in the event of any of the following circumstances:
              </p>

              <div className="space-y-3 ml-4">
                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-2">B.1</h4>
                  <p className="text-[#1C1C1C]/80 leading-relaxed">
                    If the product is fully rugged and we do not guarantee its properties.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1C1C1C] mb-2">B.2</h4>
                  <p className="text-[#1C1C1C]/80 leading-relaxed">
                    Also we do not assure about the packing as the material inside is heavy, sharp hence the packing may get damaged
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REFUND TURNAROUND TIME TABLE */}
        <section>
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">Refund Turnaround Time (TAT)</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-3 text-left font-bold text-[#1C1C1C]">Process</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-bold text-[#1C1C1C]">Payment Method</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-bold text-[#1C1C1C]">Refund Source</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-bold text-[#1C1C1C]">TAT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 align-top" rowSpan={4}>
                    <span className="font-semibold text-[#1C1C1C]">
                      Order Edit/Cancellation/IGCC/Payment Failure
                    </span>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">Net Banking</td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">Source</td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">5-7 Business Days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">Debit/Credit Cards</td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">Source</td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">5-7 Business Days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">UPI</td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">Source</td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">5-7 Business Days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">Other Wallets</td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">Source</td>
                  <td className="border border-gray-300 px-6 py-4 text-[#1C1C1C]/80">5-7 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}
