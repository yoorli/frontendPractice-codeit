'use client';

import './page.css';

import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      문제 2) 버튼 hover 시 배경색 변경 애니메이션 - transition
      <div className="container">
        <button
          className="btn"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          아이콘 버튼
        </button>
        <div className={`menu-container ${open ? 'active' : ''}`}>
          <div className="menu-item">메뉴1</div>
          <div className="menu-item">메뉴2</div>
          <div className="menu-item">메뉴3</div>
        </div>
      </div>
    </>
  );
}
