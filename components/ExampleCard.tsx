'use client';

import React, { useState } from 'react';
import CopyButton from './CopyButton';

export interface ExampleItem {
  id: string;
  title: string;
  description?: string;
  badges?: string[];
  deps?: string;
  demo: React.ReactNode | string;
  code: string;
  explain: string;
  prompt: string;
}

interface ExampleCardProps {
  item: ExampleItem;
}

type TabType = 'demo' | 'code' | 'explain' | 'prompt';

export default function ExampleCard({ item }: ExampleCardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('demo');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'demo', label: 'Demo' },
    { id: 'code', label: 'Code' },
    { id: 'explain', label: 'Explain' },
    { id: 'prompt', label: 'Prompt' },
  ];

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:shadow-sm transition-shadow duration-200">
      {/* Header */}
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {item.description}
          </p>
        )}
        {item.badges && item.badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {item.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        {item.deps && (
          <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
            ⚠️ {item.deps}
          </p>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-200 dark:border-neutral-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-500 dark:bg-primary-900/20 dark:text-primary-400'
                : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 min-h-[200px]">
        {activeTab === 'demo' && (
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {typeof item.demo === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: item.demo }} />
            ) : (
              item.demo
            )}
          </div>
        )}

        {activeTab === 'code' && (
          <div className="relative">
            <CopyButton text={item.code} className="absolute top-2 right-2 z-10" />
            <pre className="p-4 bg-neutral-900 dark:bg-black rounded-lg overflow-x-auto">
              <code className="text-sm text-neutral-100 font-mono whitespace-pre">
                {item.code}
              </code>
            </pre>
          </div>
        )}

        {activeTab === 'explain' && (
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: item.explain }} />
          </div>
        )}

        {activeTab === 'prompt' && (
          <div className="relative">
            <CopyButton text={item.prompt} className="absolute top-2 right-2 z-10" />
            <pre className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-x-auto">
              <code className="text-sm text-neutral-700 dark:text-neutral-300 font-mono whitespace-pre-wrap">
                {item.prompt}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}