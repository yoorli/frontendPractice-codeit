import Image from 'next/image';

import { safeFetchJson } from '@/lib/safeFetchJson';

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export default async function Home() {
  // 무료 상품 API 문서: https://fakestoreapi.com/docs
  const products = await safeFetchJson<Product[]>(
    'https://fakestoreapi.com/products',
    undefined,
    [] // 실패 시 빈 배열
  );
  // 원코드, 배포를 위해 위 코드로 수정. 방법 1
  // const response = await fetch('https://fakestoreapi.com/products');
  // const products = await response.json();

  return (
    <>
      문제 1) 상품 목록 반응형 적용하기
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: Product) => (
          <div key={product.id} className="border shadow-sm">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
