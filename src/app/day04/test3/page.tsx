'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log('보임');
        } else {
          setIsVisible(false);
          console.log('안보임');
        }
      });
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="flex h-[400dvh] items-center justify-center border-2 border-amber-300">
      <div
        ref={ref}
        className={`h-48 w-48 bg-amber-300 transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      ></div>
    </div>
  );
}
