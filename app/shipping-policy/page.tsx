import { PolicyLayout } from '@/components/PolicyLayout';

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout title="Shipping Policy">
      <div className="space-y-6">
        <p className="text-[#1C1C1C]/80 leading-relaxed">
          Delivery of material depends upon the availability of the item.
        </p>

        <p className="text-[#1C1C1C]/80 leading-relaxed">
          Delivery time depends on your location is in or outside our designated delivery zone.
        </p>

        <p className="text-[#1C1C1C]/80 leading-relaxed">
          The product will be shipped within <strong>3 business days</strong> after receiving the Order & Payment.
        </p>

        <p className="text-[#1C1C1C]/80 leading-relaxed">
          The material may get delayed if any natural calamities/mishap/mishandling of the courier service.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">Damage in Transportation</h2>
          
          <div className="bg-amber-50 border-l-4 border-[#fac938] p-6 rounded-r-lg">
            <p className="text-[#1C1C1C]/80 leading-relaxed mb-3">
              <strong>No Refund</strong> as the product is fully rugged and we do not guarantee its properties.
            </p>
            
            <p className="text-[#1C1C1C]/80 leading-relaxed mb-3">
              Also we do not assure about the packing as the material inside is heavy, sharp hence the packing may get damaged.
            </p>
            
            <p className="text-red-700 font-semibold">
              ⚠️ Caution: Heavy weight material, handle with care.
            </p>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
