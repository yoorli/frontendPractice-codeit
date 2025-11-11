import Link from 'next/link';

export default function Home() {
  return (
    <>
      문제 5)
      <div>
        <Link className="text-blue-500 underline" href="./prac11/about">
          About으로
        </Link>
      </div>
    </>
  );
}
