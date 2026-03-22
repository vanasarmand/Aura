import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Cannabis Education</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Knowledge is the key to a better experience. Learn about strains, dosing, and how to integrate cannabis into your wellness routine.
        </p>
      </div>

      <div className="space-y-12">
        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-200">
          <h2 className="text-2xl font-serif text-stone-900 mb-4">Indica vs Sativa: Understanding the Basics</h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            The traditional classification of cannabis divides strains into two main categories: Indica and Sativa. While modern science suggests the reality is more complex (driven by terpenes and cannabinoids), these terms remain useful shorthand for expected effects.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-stone-50 p-6 rounded-2xl">
              <h3 className="font-medium text-stone-900 mb-2">Indica (In-da-couch)</h3>
              <ul className="list-disc list-inside text-sm text-stone-600 space-y-2">
                <li>Deep physical relaxation</li>
                <li>Better for evening/nighttime use</li>
                <li>May help with sleep and pain relief</li>
                <li>"Body high"</li>
              </ul>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl">
              <h3 className="font-medium text-stone-900 mb-2">Sativa</h3>
              <ul className="list-disc list-inside text-sm text-stone-600 space-y-2">
                <li>Energizing and uplifting</li>
                <li>Better for daytime use</li>
                <li>May boost creativity and focus</li>
                <li>"Head high"</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-200">
          <h2 className="text-2xl font-serif text-stone-900 mb-4">The Golden Rule: Start Low, Go Slow</h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            When trying a new product, especially edibles or tinctures, dosage is critical. Everyone's endocannabinoid system is unique, meaning a dose that works for a friend might be too strong or too weak for you.
          </p>
          <div className="space-y-4 text-sm text-stone-600">
            <p><strong>Flower/Vapes:</strong> Take one small inhalation and wait 15 minutes before consuming more. Effects are usually felt within minutes.</p>
            <p><strong>Edibles:</strong> Start with 2.5mg to 5mg of THC. Wait at least 2 hours before taking more. Edibles must be digested, delaying the onset of effects.</p>
            <p><strong>Tinctures:</strong> Start with a quarter dropper under the tongue. Hold for 60 seconds before swallowing. Effects typically begin in 15-45 minutes.</p>
          </div>
        </article>
      </div>
    </div>
  );
}
