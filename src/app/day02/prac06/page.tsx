import Image from 'next/image';

import { safeFetchJson } from '@/lib/safeFetchJson';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default async function Home() {
  // 무료 상품 API 문서: https://fakestoreapi.com/docs
  const product = await safeFetchJson<Product>(
    'https://fakestoreapi.com/products/1',
    undefined
  );
  // 원코드, 배포를 위해 위 코드로 수정.
  // const response = await fetch('https://fakestoreapi.com/products/1');
  // const product = await response.json();

  if (!product) {
    // safeFetchJson 실패 시
    return <div>상품 정보를 불러오지 못했습니다.</div>;
  }

  return (
    <>
      문제 3) 상품 상세 반응형 적용하기
      <div className="items-center md:flex md:gap-2">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
        <div>
          <h1 className="font-bold md:text-2xl">{product.title}</h1>
          <p className="text-sm text-gray-500 md:text-xl">
            {product.description}
          </p>
          <p className="font-bold md:text-lg">$ {product.price}</p>
        </div>
      </div>
    </>
  );
}
