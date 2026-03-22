import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    thc: string;
    popular?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.popular && (
          <div className="absolute top-3 left-3 bg-stone-900 text-[#FAF9F6] text-xs font-medium px-2.5 py-1 rounded-full">
            Popular 🔥
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs text-stone-500 mb-1 uppercase tracking-wider">{product.category}</p>
          <h3 className="font-medium text-stone-900 group-hover:text-[#4A5D23] transition-colors">{product.name}</h3>
          <p className="text-sm text-stone-500 mt-1">THC: {product.thc}</p>
        </div>
        <p className="font-medium text-stone-900">R{product.price}</p>
      </div>
    </Link>
  );
}
