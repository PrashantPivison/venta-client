'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShoppingBag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { useProducts } from '@/hooks/useProductQueries';
import { Product } from '@/api/products';

export default function ShopPage() {
  const { data: products = [], isLoading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'name'>('default');

  // Validate and filter products with required data
  const validProducts = useMemo(() => {
    return products.filter((p: Product) => 
      p.title && p.slug && p.images && p.images.length > 0
    );
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = validProducts.filter((product: Product) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        product.title.toLowerCase().includes(searchLower) ||
        (product.sku && product.sku.toLowerCase().includes(searchLower))
      );
    });

    // Sort products
    if (sortBy === 'price-low' || sortBy === 'price-high') {
      filtered = [...filtered].sort((a: Product, b: Product) => {
        const priceA = a.price || 0;
        const priceB = b.price || 0;
        return sortBy === 'price-low' ? priceA - priceB : priceB - priceA;
      });
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a: Product, b: Product) => 
        a.title.localeCompare(b.title)
      );
    }

    return filtered;
  }, [validProducts, searchQuery, sortBy]);

  // Format price for display
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-24">
        <Hero
          tag="Order Online"
          tagIcon={<ShoppingBag className="w-5 h-5 text-[#fac938]" />}
          title={<>Shop <span className="text-[#fac938]">Online</span></>}
          description="Browse our complete range of scaffolding products. Quality materials delivered to your doorstep."
          backgroundImage="/assets/section1.webp"
          backgroundGradient="from-[#3b2f0d]/90 to-[#5a4a1f]/90"
          textColor="light"
        />

        {/* Search and Filters */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products by name or SKU..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none"
                />
              </div>

              {/* Sort */}
              <div className="md:w-64">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fac938] focus:ring-2 focus:ring-[#fac938]/20 outline-none bg-white"
                >
                  <option value="default">Sort By</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            {!isLoading && (
              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredProducts.length} of {validProducts.length} products
              </div>
            )}
          </div>
        </div>

        {/* Products Grid or States */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#fac938] mb-4"></div>
                <p className="text-gray-500">Loading products...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-red-500 text-lg mb-4">Failed to load products. Please try again later.</p>
              <button 
                onClick={() => window.location.reload()}
                className="inline-block px-6 py-2 bg-[#fac938] text-[#1C1C1C] font-semibold rounded-lg hover:bg-[#e6b800] transition-colors"
              >
                Retry
              </button>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product: Product) => (
                <Link
                  key={product._id}
                  href={`/shop/${product.slug}?id=${product._id}`}
                  className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-[#1C1C1C] mb-2 line-clamp-2 group-hover:text-[#fac938] transition-colors">
                      {product.title}
                    </h3>
                    
                    {product.sku && (
                      <p className="text-sm text-gray-500 mb-2">SKU: {product.sku}</p>
                    )}
                    
                    {product.price && (
                      <p className="text-xl font-bold text-[#1C1C1C]">{formatPrice(product.price)}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
