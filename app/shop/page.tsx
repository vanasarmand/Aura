import { products } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
        <h1 className="text-4xl font-serif text-stone-900 mb-4 md:mb-0">Shop Collection</h1>
        <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
          <button className="px-4 py-2 rounded-full bg-stone-900 text-white text-sm font-medium whitespace-nowrap">All</button>
          <button className="px-4 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm font-medium whitespace-nowrap transition-colors">Flower</button>
          <button className="px-4 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm font-medium whitespace-nowrap transition-colors">Wellness</button>
          <button className="px-4 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-sm font-medium whitespace-nowrap transition-colors">Bundles</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
