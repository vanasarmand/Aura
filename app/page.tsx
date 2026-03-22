import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Package, Truck, Lock } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/cannabishero/1920/1080?blur=2"
            alt="Premium Cannabis"
            fill
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/80 via-[#FAF9F6]/50 to-[#FAF9F6]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-stone-200 text-stone-800 text-xs font-medium tracking-wider uppercase mb-6">
            South Africa's Premier Private Club
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 leading-tight">
            Premium Cannabis <br/>
            <span className="italic text-[#4A5D23]">Delivered Discreetly.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
            Lab-tested. Fast delivery. Private & secure. Experience wellness elevated to an art form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-stone-900 text-[#FAF9F6] px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors text-center">
              Shop Collection
            </Link>
            <Link href="/club" className="bg-transparent border border-stone-300 text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-colors text-center">
              Join Private Club
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-stone-900 text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Package className="w-8 h-8 mb-4 text-[#4A5D23]" />
              <h3 className="font-medium mb-2">Discreet Packaging</h3>
              <p className="text-sm text-stone-400">Odor-proof, unmarked boxes</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="w-8 h-8 mb-4 text-[#4A5D23]" />
              <h3 className="font-medium mb-2">Fast Delivery</h3>
              <p className="text-sm text-stone-400">2-4 days nationwide</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 mb-4 text-[#4A5D23]" />
              <h3 className="font-medium mb-2">Verified Quality</h3>
              <p className="text-sm text-stone-400">Lab-tested for purity</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock className="w-8 h-8 mb-4 text-[#4A5D23]" />
              <h3 className="font-medium mb-2">Secure Payments</h3>
              <p className="text-sm text-stone-400">EFT & Crypto accepted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Curated Selection</h2>
              <p className="text-stone-600">Our most sought-after strains and wellness products.</p>
            </div>
            <Link href="/shop" className="hidden md:inline-block text-sm font-medium text-stone-900 border-b border-stone-900 pb-1 hover:text-[#4A5D23] hover:border-[#4A5D23] transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/shop" className="inline-block text-sm font-medium text-stone-900 border-b border-stone-900 pb-1">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Education Hook */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/education/1000/800?blur=1"
                alt="Cannabis Education"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">New to Cannabis?</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Whether you're looking for deep relaxation, creative energy, or better sleep, finding the right product is key. Explore our guides to understand what works best for your body.
              </p>
              <div className="space-y-4">
                <Link href="/education/indica-vs-sativa" className="block p-6 bg-[#FAF9F6] rounded-2xl hover:shadow-md transition-shadow group">
                  <h3 className="font-medium text-stone-900 group-hover:text-[#4A5D23] transition-colors">Indica vs Sativa</h3>
                  <p className="text-sm text-stone-500 mt-1">Understand the fundamental differences in effects.</p>
                </Link>
                <Link href="/education/dosage" className="block p-6 bg-[#FAF9F6] rounded-2xl hover:shadow-md transition-shadow group">
                  <h3 className="font-medium text-stone-900 group-hover:text-[#4A5D23] transition-colors">Dosage Guide</h3>
                  <p className="text-sm text-stone-500 mt-1">Start low and go slow. Learn how to dose correctly.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-16">Trusted by our Members</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The discreet packaging and fast delivery to Cape Town was exactly what I needed. Top tier quality.", author: "M.K." },
              { text: "Finally a professional service in SA. The starter kit was perfect for getting back into it.", author: "Sarah T." },
              { text: "Clean, lab-tested products make a huge difference. The CBD tincture fixed my sleep issues.", author: "David L." }
            ].map((review, i) => (
              <div key={i} className="p-8 bg-stone-50 rounded-3xl text-left">
                <div className="flex text-[#4A5D23] mb-4">
                  {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="text-stone-700 mb-6 italic">"{review.text}"</p>
                <p className="font-medium text-stone-900 text-sm">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
