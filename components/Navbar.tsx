'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#FAF9F6]/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center">
              <span className="text-[#FAF9F6] font-serif font-bold text-xl leading-none">A</span>
            </div>
            <span className="font-serif text-2xl tracking-tight text-stone-900">Aura</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Shop</Link>
            <Link href="/club" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Private Club</Link>
            <Link href="/education" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Education</Link>
            <Link href="/about" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">About</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/club" className="hidden sm:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
            <Link href="/cart" className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#4A5D23] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <button 
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF9F6] border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link href="/shop" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              <Link href="/club" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Private Club</Link>
              <Link href="/education" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Education</Link>
              <Link href="/about" className="text-lg font-medium text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <div className="h-px bg-stone-200 my-2" />
              <Link href="/club" className="text-lg font-medium text-stone-900 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <User className="w-5 h-5" /> Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
