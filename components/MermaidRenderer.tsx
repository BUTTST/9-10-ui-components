'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MermaidRendererProps {
  code: string;
  className?: string;
}

export default function MermaidRenderer({ code, className = '' }: MermaidRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderMermaid = async () => {
      if (!containerRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        // 動態載入 mermaid
        const mermaid = (await import('mermaid')).default;
        
        // 初始化 mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          themeVariables: {
            primaryColor: '#3b82f6',
            primaryTextColor: '#fff',
            primaryBorderColor: '#2563eb',
            lineColor: '#94a3b8',
            secondaryColor: '#f3f4f6',
            tertiaryColor: '#fff',
          },
        });

        // 生成唯一 ID
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        
        // 渲染圖表
        const { svg } = await mermaid.render(id, code);
        
        // 注入 SVG
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError('無法渲染 Mermaid 圖表');
      } finally {
        setIsLoading(false);
      }
    };

    renderMermaid();
  }, [code]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-800 rounded-lg ${className}`}>
        <div className="text-neutral-500 dark:text-neutral-400">載入中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg ${className}`}>
        {error}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`mermaid-container overflow-x-auto ${className}`}
    />
  );
}