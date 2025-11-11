// 'use client';
// import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

import * as motion from 'motion/react-client';

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // key={pathname} 
    >
      {children}
    </motion.div>
  );
}

// 주석 코드 설명
// pathnames가 바뀔 때마다 PageTransition 컴포넌트가 리마운트되어
// children을 감싸는 motion.div가 다시 렌더링됨
// → CSS 애니메이션이 다시 실행됨
// template 파일이 /app/day03/prac11 아래에 있을 때는 필요 없음
// template 파일이 /app 아래에 있을 때는 필요
// 다만 layout에서 PageTransition + key={pathname} 조합 사용 시 
// 애니메이션이 의도치 않게 여러 번 실행될 수 있음 
// 실제 프로젝트에서는 신중히 사용할 것