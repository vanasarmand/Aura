import Link from 'next/link';
import Image from 'next/image';
import { Lock, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-stone-900 mb-12">Your Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Empty Cart State for Demo */}
          <div className="text-center py-24 bg-stone-50 rounded-3xl border border-stone-100">
            <p className="text-stone-500 mb-6">Your cart is currently empty.</p>
            <Link href="/shop" className="inline-block bg-stone-900 text-white px-8 py-3 rounded-full font-medium hover:bg-stone-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>

        <div>
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 sticky top-24">
            <h2 className="text-xl font-serif text-stone-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>R0.00</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-stone-200 pt-4 mb-8">
              <div className="flex justify-between text-lg font-medium text-stone-900">
                <span>Total</span>
                <span>R0.00</span>
              </div>
            </div>

            <button disabled className="w-full bg-stone-300 text-stone-500 py-4 rounded-xl font-medium cursor-not-allowed mb-6">
              Checkout
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-stone-500">
                <Lock className="w-4 h-4" />
                <span>Secure, encrypted checkout</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4" />
                <span>Discreet billing (appears as "Aura Wellness")</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-200">
              <p className="text-xs text-stone-500 mb-2">Accepted Payment Methods:</p>
              <div className="flex gap-2 text-xs font-medium text-stone-700">
                <span className="px-2 py-1 bg-stone-200 rounded">EFT</span>
                <span className="px-2 py-1 bg-stone-200 rounded">Credit Card</span>
                <span className="px-2 py-1 bg-stone-200 rounded">Crypto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
