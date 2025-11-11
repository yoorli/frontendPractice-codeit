import Link from 'next/link';

export default function Home() {
  return (
    <>
      문제 5)
      <div>
        <h1>About 페이지</h1>
      </div>
      <Link className="text-blue-500 underline" href="./">
        prac11으로
      </Link>
    </>
  );
}
