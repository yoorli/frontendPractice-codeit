'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      문제 3)
      <div>
        <motion.button
          className="rounded-md border-none bg-blue-500 px-5 py-2.5 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          마우스를 올려보세요!
        </motion.button>
      </div>
    </>
  );
}
