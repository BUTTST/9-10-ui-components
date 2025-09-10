'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface ChartRendererProps {
  type: 'line' | 'bar' | 'pie' | 'doughnut';
  data: any;
  options?: any;
  className?: string;
}

// 動態載入 Chart 元件
const ChartComponent = dynamic(
  () => import('./ChartComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
        <div className="text-neutral-500 dark:text-neutral-400">載入圖表中...</div>
      </div>
    )
  }
);

export default function ChartRenderer({ type, data, options, className = '' }: ChartRendererProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
        <div className="text-neutral-500 dark:text-neutral-400">準備圖表...</div>
      </div>
    );
  }

  return <ChartComponent type={type} data={data} options={options} className={className} />;
}