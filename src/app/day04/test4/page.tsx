'use client';

import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <div className="flex h-[200dvh] items-center justify-center border-2 border-amber-300">
      <div
        ref={ref}
        className={`h-48 w-48 bg-amber-300 transition-all duration-1000 ease-in-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      ></div>
    </div>
  );
}
