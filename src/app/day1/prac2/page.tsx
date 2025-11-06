export default function Prac2() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex max-w-sm flex-col gap-2 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm shadow-gray-300">
        <img
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="trend"
        />
        <div className="m-4 flex flex-col items-start gap-2 ">
          <h5 className="text-xl font-bold tracking-tight text-gray-700">
            2024년 기술 동향
          </h5>
          <p className="font-medium text-gray-500">
            최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 트렌드를
            탐구해보세요. 이 글에서는 인공지능과 머신러닝의 발전이 우리 생활에
            미치는 영향을 다룹니다.
          </p>
          <button className="rounded-xl border bg-blue-700 p-2 text-sm font-medium text-white">
            더보기
          </button>
        </div>
      </div>
    </div>
  );
}
