'use client';

import React from 'react';

interface SectionGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}

export default function SectionGrid({ children, columns = 2 }: SectionGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {children}
    </div>
  );
}