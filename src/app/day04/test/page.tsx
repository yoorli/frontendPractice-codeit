'use client';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'motion/react';
import { useEffect, useRef } from 'react';

import InViewSlideSection from './components/InViewSlideSection';

export default function Home() {
  const motionValue = useMotionValue(0);
  const toFixed = useTransform(motionValue, (value) => value.toFixed(0));

  useEffect(() => {
    const control = animate(motionValue, 100, { duration: 2 });
    return () => control.stop();
  }, [motionValue]);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      alert('요소가 화면에 보여요!');
    }
  }, [isInView]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">스크롤 테스트</h1>
        {[...Array(50)].map((_, i) => (
          <p key={i} className="mb-4">
            테스트 문단 {i + 1}. 스크롤을 내려서 슬라이드인을 확인해보세요.
          </p>
        ))}

        {/* 첫 번째 섹션: 왼쪽에서 오른쪽으로 */}
        <InViewSlideSection
          direction="left"
          className="mb-8 rounded-lg bg-blue-100 p-6"
        >
          <h2 className="mb-2 text-xl font-bold">왼쪽에서 슬라이드</h2>
          <p>이 섹션은 왼쪽에서 슬라이드됩니다.</p>
        </InViewSlideSection>

        {/* 두 번째 섹션: 위에서 아래로 */}
        <InViewSlideSection
          direction="top"
          className="mb-8 rounded-lg bg-purple-100 p-6"
        >
          <h2 className="mb-2 text-xl font-bold">위에서 슬라이드</h2>
          <p>이 섹션은 위에서 아래로 슬라이드됩니다.</p>
        </InViewSlideSection>

        {/* 세 번째 섹션: 아래에서 위로 */}
        <InViewSlideSection
          direction="bottom"
          className="mb-8 rounded-lg bg-green-100 p-6"
        >
          <h2 className="mb-2 text-xl font-bold">아래에서 슬라이드</h2>
          <p>이 섹션은 아래에서 위로 슬라이드됩니다.</p>
        </InViewSlideSection>
      </div>
      <motion.pre className="text-4xl">{toFixed}</motion.pre>
      <div className="flex items-center gap-5">
        <motion.div
          className="h-48 w-48 bg-amber-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 1 }}
        ></motion.div>
        <motion.div
          ref={ref}
          className="h-48 w-48 bg-amber-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>
    </div>
  );
}
