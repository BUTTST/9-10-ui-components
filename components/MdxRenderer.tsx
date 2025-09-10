'use client';

import React from 'react';

interface MdxRendererProps {
  content: string;
  components?: Record<string, React.ComponentType<any>>;
  className?: string;
}

// 簡化的 MDX 客戶端渲染器
// 注意：在實際專案中，建議使用 @next/mdx 或 next-mdx-remote
export default function MdxRenderer({ content, components = {}, className = '' }: MdxRendererProps) {
  // 這是一個簡化版本，實際應用中應使用完整的 MDX 解析器
  // 這裡只是展示基本結構
  
  return (
    <div className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

// 範例自訂元件
export const mdxComponents = {
  Button: ({ children, ...props }: any) => (
    <button
      className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
      {...props}
    >
      {children}
    </button>
  ),
  Callout: ({ children, type = 'info', ...props }: any) => {
    const styles = {
      info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-100',
      warning: 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-100',
      error: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-100',
      success: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-100',
    };

    return (
      <div className={`p-4 rounded-lg border ${styles[type as keyof typeof styles] || styles.info}`} {...props}>
        {children}
      </div>
    );
  },
};