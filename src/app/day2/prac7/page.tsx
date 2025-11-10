export default function Home() {
  return (
    // noto sans kr 폰트 적용
    <div className="font-noto-sans-kr min-h-screen bg-gray-100">
      문제 1) 나만의 회사 디자인 시스템 구축 실습
      {/* 헤더 섹션 */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
        {/* 여기에 헤더 내용 구현 */}
        {/* 텍스트에 flow-blue 색상 적용 */}
        <h1 className="text-flow-blue text-2xl font-semibold">헤더</h1>
        <div className="flex gap-2">
          <button className="rounded-md bg-gray-200 px-4 py-2">로그인</button>
          {/* 회원가입 버튼에 배경색을 flow-blue로 설정 */}
          <button className="bg-flow-blue rounded-md px-4 py-2 text-white">
            회원가입
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {/* 통계 카드 섹션 */}
        <section className="mb-8">
          {/* 텍스트에 flow-purple 색상 적용 */}
          <h2 className="text-flow-purple mb-4 text-2xl font-semibold">
            대시보드 개요
          </h2>

          {/* 텍스트에 보조 색상 적용 */}
          <div className="text-flow-teal grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            카드
          </div>
        </section>

        {/* 최근 활동 섹션 */}
        <section className="mb-8">
          {/* 여기에 최근 활동 목록 구현 */}
          최근 활동
        </section>

        {/* CTA 섹션 */}
        <section className="mb-8">
          {/* 강조 색상 적용 */}
          <button className="bg-flow-orange rounded-md px-4 py-2 text-white">
            CTA 버튼
          </button>
        </section>
      </main>
    </div>
  );
}
