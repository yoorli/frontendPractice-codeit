'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [fill, setFill] = useState("#000000");
  const [border, setBorder] = useState("#000000");

  // 초기 마운트 시 localStorage에서 저장된 값 불러오기
  useEffect(() => {
    const initializeTheme = () => {
      const savedFill = localStorage.getItem("fill");
      const savedBorder = localStorage.getItem("border");

      if (savedFill) setFill(savedFill);
      if (savedBorder) setBorder(savedBorder);
    };
    initializeTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem('fill', fill);
    localStorage.setItem('border', border);
  }, [fill, border]);

  return (
    <>
      문제 1) 로컬 스토리지를 이용하여 색깔 저장하기
      <div className="flex h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">테마 설정</h1>
        <div className="flex items-center justify-center gap-6">
          <div className="flex h-18 w-48 items-center justify-center gap-2 rounded-md bg-gray-300">
            <span>채우기</span>
            <input
              type="color"
              name="fill"
              id="fill"
              value={fill}
              onChange={(e) => setFill(e.target.value)}
            />
          </div>
          <div className="flex h-18 w-48 items-center justify-center gap-2 rounded-md bg-gray-300">
            <span>테두리</span>
            <input
              type="color"
              name="border"
              id="border"
              value={border}
              onChange={(e) => setBorder(e.target.value)}
            />
          </div>
        </div>
        <div
          className={`h-24 w-48 rounded-md border-4`}
          style={{ backgroundColor: fill, borderColor: border }}
        ></div>
      </div>
    </>
  );
}
