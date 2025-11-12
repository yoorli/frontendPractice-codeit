'use client';

import Cookies from 'js-cookie';
import { useState } from 'react';

import { deleteCookie, isCookieExists, setCookie } from '../lib/cookies';

export default function Home() {
  const [showModal, setShowModal] = useState(() => {
    return typeof window !== 'undefined' && !Cookies.get('isModalHidden');
  });

  // useEffect(() => {
  //   // 1. 현재 isModalHidden 쿠키가 존재하는지 확인하세요.
  //   // 여기에 코드를 작성하세요.
  //   // 2. 쿠키가 없으면 모달을 표시하세요.
  //   // 여기에 코드를 작성하세요.
  //   if (!isCookieExists('isModalHidden')) {
  //     setShowModal(true);
  //   }
  // }, []);
  // 실행은 되나 린트 에러가 발생. js-cookie 라이브러리로 해결

  // 혹은
  //   const [showModal, setShowModal] = useState(() => {
  //   const hasCookie = isCookieExists('isModalHidden');
  //   return !hasCookie;
  // });

  // 혹은 컴포넌트로 분리 후 dynamic으로 import, ssr:false
  // "use client";
  // import dynamic from "next/dynamic";
  // const OnboardingModal = dynamic(() => import("@/components/OnboardingModal"), {
  //   ssr: false,
  // });
  // export default function Home() {
  //   return (
  //     <div className="flex h-screen w-screen items-center justify-center">
  //       메인 화면
  //       <OnboardingModal />
  //     </div>
  //   );
  // }

  // 혹은 함수로 감싸기
  // useEffect(() => {
  //   const handleCheckCookie = () => {
  //     if (!isCookieExists('isModalHidden')) {
  //       setShowModal(true);
  //     }
  //   };
  //   handleCheckCookie();
  // }, []);

  const handleModalCheckboxChange = () => {
    // 3. 쿠키가 존재하면 쿠키를 삭제하세요.
    // 여기에 코드를 작성하세요.
    // 4. 쿠키가 존재하지 않으면 24시간 후 만료되는 쿠키를 설정하세요.
    // 아래에 코드를 작성하세요.
    // 24시간 후
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

    if (isCookieExists('isModalHidden')) {
      deleteCookie('isModalHidden');
    } else {
      setCookie('isModalHidden', 'true', {
        path: '/',
        'max-age': Number(date),
      });
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      문제 2) 팝업 하루 동안 보지 않기 기능 구현
      <div className="flex h-screen w-screen items-center justify-center">
        메인 화면
        {showModal && (
          <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-bold">안내</h2>
              <p className="mb-4">환영합니다! 이것은 모달창입니다.</p>
              <div className="flex justify-end gap-2">
                <label
                  htmlFor="modalCheckbox"
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="modalCheckbox"
                    onChange={handleModalCheckboxChange}
                  />
                  오늘 하루 보지 않기
                </label>

                <button
                  onClick={handleClose}
                  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
