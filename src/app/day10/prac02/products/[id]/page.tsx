'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { safeFetchJson } from '@/lib/safeFetchJson';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      // 무료 상품 API 문서: https://fakestoreapi.com/docs
      const data = await safeFetchJson<Product>(
        `https://fakestoreapi.com/products/${params.id}`,
        undefined
      );
      // 원코드, 배포를 위해 위 코드로 수정.
      // const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      // const data = await response.json();

      setProduct(data);
      setIsLoading(false);
    };
    fetchProduct();
  }, [params.id]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (!product) {
    // safeFetchJson 실패 시
    return <div>상품 정보를 불러오지 못했습니다.</div>;
  }

  return (
    <div>
      <div className="h-auto w-78 border">
        <img className="w-78" src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="border px-4 py-2 rounded-md bg-gray-200"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          className="border px-4 py-2 rounded-md bg-gray-200"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            router.push("/day10/prac02/purchase/complete");
          }}
        >
          구매
        </button>
      </div>
    </div>
  );
}
