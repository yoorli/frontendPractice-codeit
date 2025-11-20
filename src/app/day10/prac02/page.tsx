import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>시나리오 테스트</h1>
      <Link href={'./prac02/auth/signup'}>회원가입 페이지로 이동</Link>
    </>
  );
}
