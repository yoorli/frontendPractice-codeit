import Link from 'next/link';

import { safeFetchJson } from '@/lib/safeFetchJson';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default async function ProductsPage() {
  // 무료 상품 API 문서: https://fakestoreapi.com/docs
  const products =
    (await safeFetchJson<Product[]>(
      'https://fakestoreapi.com/products',
      undefined
    )) ?? [];
  // 원코드, 배포를 위해 위 코드로 수정.
  // const response = await fetch('https://fakestoreapi.com/products');
  // const products = await response.json();

  return (
    <div>
      <ul className="flex flex-wrap gap-4">
        {products.map((product: Product) => (
          <Link
            className="h-auto w-64 border"
            key={product.id}
            href={`/day10/prac02/products/${product.id}`}
            data-testid={`product-${product.id}`}
            data-product-id={product.id}
          >
            <li>
              <img className="w-full" src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
