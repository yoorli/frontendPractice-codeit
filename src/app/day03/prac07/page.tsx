'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      문제 1)
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>안녕하세요! 페이드인 효과입니다.</div>
      </motion.div>
    </>
  );
}
