'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FramerDemoProps {
  variant?: 'fade' | 'slide' | 'scale' | 'spring';
  children?: React.ReactNode;
  className?: string;
}

export default function FramerDemo({ variant = 'fade', children, className = '' }: FramerDemoProps) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.5 },
    },
    slide: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 },
      transition: { type: 'spring', stiffness: 100 },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.8, opacity: 0 },
      transition: { duration: 0.3 },
    },
    spring: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 50, opacity: 0 },
      transition: { type: 'spring', bounce: 0.4 },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={`framer-demo ${className}`}
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        exit={selectedVariant.exit}
        transition={selectedVariant.transition}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children || (
          <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl shadow-lg cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Framer Motion 示例</h3>
            <p className="text-sm opacity-90">
              滑鼠懸停或點擊查看互動效果
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}