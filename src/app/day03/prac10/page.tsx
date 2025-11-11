'use client';
import { easeInOut, motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      문제 4)
      <motion.div
        className="flex h-screen items-center justify-center gap-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: easeInOut },
        }}
      >
        <div className="h-96 w-72 rounded-lg border shadow-md"></div>
      </motion.div>
    </>
  );
}
