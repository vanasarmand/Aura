import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#FAF9F6] rounded-full flex items-center justify-center">
                <span className="text-stone-900 font-serif font-bold text-xl leading-none">A</span>
              </div>
              <span className="font-serif text-2xl tracking-tight text-[#FAF9F6]">Aura</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium cannabis delivered discreetly in South Africa. Lab-tested, private, and secure.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#FAF9F6] font-medium mb-4 uppercase tracking-wider text-xs">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="hover:text-[#FAF9F6] transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=flower" className="hover:text-[#FAF9F6] transition-colors">Flower</Link></li>
              <li><Link href="/shop?category=wellness" className="hover:text-[#FAF9F6] transition-colors">Wellness</Link></li>
              <li><Link href="/shop?category=bundles" className="hover:text-[#FAF9F6] transition-colors">Bundles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FAF9F6] font-medium mb-4 uppercase tracking-wider text-xs">Learn</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/education" className="hover:text-[#FAF9F6] transition-colors">Cannabis 101</Link></li>
              <li><Link href="/education/dosage" className="hover:text-[#FAF9F6] transition-colors">Dosage Guide</Link></li>
              <li><Link href="/education/strains" className="hover:text-[#FAF9F6] transition-colors">Indica vs Sativa</Link></li>
              <li><Link href="/about" className="hover:text-[#FAF9F6] transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FAF9F6] font-medium mb-4 uppercase tracking-wider text-xs">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/faq" className="hover:text-[#FAF9F6] transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-[#FAF9F6] transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="/contact" className="hover:text-[#FAF9F6] transition-colors">Contact Us</Link></li>
              <li><a href="https://wa.me/1234567890" className="hover:text-[#FAF9F6] transition-colors flex items-center gap-2">WhatsApp Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Aura Wellness. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[#FAF9F6] transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-[#FAF9F6] transition-colors">Privacy Policy</Link>
          </div>
        </div>
        
        <div className="mt-8 text-[10px] text-stone-600 text-center max-w-3xl mx-auto">
          Disclaimer: Aura operates as a private members club in compliance with South African privacy laws regarding the personal cultivation and consumption of cannabis. Products containing THC are available exclusively to verified members aged 18 and over. This website does not promote illegal activities.
        </div>
      </div>
    </footer>
  );
}
