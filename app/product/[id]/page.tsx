'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ShieldCheck, Truck, Droplets, Wind, Sparkles } from 'lucide-react';
import { products } from '@/lib/data';

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id) || products[0]; // Fallback for demo
  const [selectedTier, setSelectedTier] = useState(product.tiers[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-stone-100 cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src={`${product.image}?random=${i}`}
                  alt={`${product.name} view ${i}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="text-4xl font-serif text-stone-900 mb-4">{product.name}</h1>
            <p className="text-2xl font-medium text-stone-900">R{selectedTier.price}</p>
          </div>

          <p className="text-stone-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-stone-50 rounded-2xl border border-stone-100">
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">THC</p>
              <p className="font-medium text-stone-900">{product.thc}</p>
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">CBD</p>
              <p className="font-medium text-stone-900">{product.cbd}</p>
            </div>
          </div>

          {/* Size/Weight Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-stone-900">Select Size</h3>
              {product.stock < 10 && (
                <span className="text-sm text-[#D9534F] font-medium">Only {product.stock} left</span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.tiers.map((tier) => (
                <button
                  key={tier.weight}
                  onClick={() => setSelectedTier(tier)}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                    selectedTier.weight === tier.weight
                      ? 'border-stone-900 bg-stone-900 text-white'
                      : 'border-stone-200 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  {tier.weight}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="w-full bg-[#4A5D23] text-white py-4 rounded-full font-medium text-lg hover:bg-[#3A4A1C] transition-colors mb-6 shadow-lg shadow-[#4A5D23]/20">
            Add to Cart — R{selectedTier.price}
          </button>

          {/* Trust Badges */}
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-3 text-sm text-stone-600">
              <Truck className="w-5 h-5 text-stone-400" />
              <span>Arrives in 2-4 days in South Africa</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-stone-600">
              <ShieldCheck className="w-5 h-5 text-stone-400" />
              <span>Lab tested for purity and potency</span>
            </div>
          </div>

          {/* Effects & Flavors */}
          <div className="border-t border-stone-200 pt-8 mt-auto">
            <div className="mb-6">
              <h3 className="flex items-center gap-2 font-medium text-stone-900 mb-4">
                <Sparkles className="w-5 h-5" /> Effects
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.effects.map(effect => (
                  <span key={effect} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">
                    {effect}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-medium text-stone-900 mb-4">
                <Wind className="w-5 h-5" /> Flavor Profile
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map(flavor => (
                  <span key={flavor} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
