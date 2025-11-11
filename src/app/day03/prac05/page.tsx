export default function Home() {
  return (
    <>
      문제 2) 카드 나타나기 - 커스텀 애니메이션
      <div className=" flex h-screen items-center justify-center gap-2">
        <div className="h-96 w-72 rounded-lg border shadow-md animate-card-show"></div>
      </div>
    </>
  );
}
