'use client';

import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full 
        transition-all duration-200 
        ${copied 
          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
        } ${className}`}
      aria-label={copied ? '已複製' : '複製'}
    >
      {copied ? (
        <>
          <FaCheck className="w-3.5 h-3.5" />
          <span>已複製</span>
        </>
      ) : (
        <>
          <FaCopy className="w-3.5 h-3.5" />
          <span>複製</span>
        </>
      )}
    </button>
  );
}