'use client';

import { easeOut, motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      문제 2)
      <motion.div
        initial={{
          x: '-100px',
          opacity: 0,
        }}
        animate={{
          x: '0px',
          opacity: 1,
        }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        왼쪽에서 슬라이드 인!
      </motion.div>
    </>
  );
}
