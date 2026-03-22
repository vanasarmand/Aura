import Link from 'next/link';

export default function ClubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Aura Private Club</h1>
      <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto">
        In compliance with South African law, access to THC products requires membership to our private club. Membership is free but requires age and identity verification.
      </p>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-200 text-left max-w-md mx-auto">
        <h2 className="text-2xl font-serif text-stone-900 mb-6">Sign In / Apply</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">ID Number (SA) or Passport</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none transition-all"
              placeholder="For age verification"
            />
          </div>
          
          <div className="pt-4">
            <button type="button" className="w-full bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-stone-800 transition-colors">
              Continue
            </button>
          </div>
        </form>
        
        <p className="text-xs text-stone-500 mt-6 text-center">
          By continuing, you agree to our Terms of Use and confirm you are over 18 years of age. Your data is encrypted and stored securely.
        </p>
      </div>
    </div>
  );
}
