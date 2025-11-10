import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const product = await response.json();

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
