'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useProductById, useProductBySlug } from '@/hooks/useProductQueries';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  const [selectedImage, setSelectedImage] = useState(0);

  // Use React Query to fetch product by ID (primary) or slug (fallback)
  const {
    data: productById,
    isLoading: isLoadingById,
    error: errorById,
  } = useProductById(productId);

  const {
    data: productBySlug,
    isLoading: isLoadingBySlug,
    error: errorBySlug,
  } = useProductBySlug(!productById ? slug : null);

  // Determine which product data to use
  const product = productById || productBySlug;
  const isLoading = productId ? isLoadingById : isLoadingBySlug;
  const error = productId ? errorById : errorBySlug;

  // Format price for display
  const formatPrice = (price: number | undefined) => {
    if (!price) return 'N/A';
    return `₹${price.toLocaleString('en-IN')}`;
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white pt-24 flex justify-center items-center">
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#fac938] mb-4"></div>
            <p className="text-gray-500">Loading product details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-24">
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link 
              href="/shop" 
              className="inline-flex items-center gap-2 text-[#1C1C1C]/70 hover:text-[#fac938] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Shop</span>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? 'border-[#fac938]'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
                {product.title}
              </h1>

              {product.sku && (
                <p className="text-lg text-gray-600 mb-4">
                  SKU: <span className="font-semibold">{product.sku}</span>
                </p>
              )}

              {product.price && (
                <div className="mb-6">
                  <p className="text-4xl font-bold text-[#1C1C1C]">{formatPrice(product.price)}</p>
                </div>
              )}

              <div className="space-y-3 mb-8">
                <p className="text-sm font-semibold text-[#1C1C1C] mb-2">Buy this product from:</p>
                
                {product.links?.amazon ? (
                  <a
                    href={product.links.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-6 py-4 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white rounded-lg font-semibold transition-all group"
                  >
                    <span>Buy on Amazon</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : null}

                {product.links?.industrybuy ? (
                  <a
                    href={product.links.industrybuy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-6 py-4 bg-[#0066CC] hover:bg-[#0066CC]/90 text-white rounded-lg font-semibold transition-all group"
                  >
                    <span>Buy on IndustryBuying</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : null}

                {!product.links?.amazon && !product.links?.industrybuy && (
                  <p className="text-gray-500 text-sm">Buy links coming soon</p>
                )}
              </div>

              {product.description && (
                <>
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">Product Details</h2>
                    <div 
                      className="prose prose-lg max-w-none text-[#1C1C1C]/80 product-description"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  </div>
                  
                  {/* Product Notes */}
                  <div className="border-t border-gray-200 mt-8 pt-8">
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                      <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Important Notes
                      </h3>
                      <ul className="space-y-2 text-sm text-amber-900/90">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span>The image displayed is for reference purposes only. The actual product may differ slightly in appearance.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span>The final product size, color, weight, and shape may vary slightly from the specifications listed.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span>The product is fully rugged and built for industrial use. We do not guarantee specific properties beyond standard specifications.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span>Packaging may be damaged during transit due to the heavy and sharp nature of the materials inside.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span className="font-semibold">⚠️ Caution: Heavy weight material - Handle with care</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

