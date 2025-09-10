'use client';

import { useState } from 'react';
import CopyButton from '@/components/CopyButton';
import { prompts, getPromptsByGroup } from '@/prompts';

export default function PromptsPage() {
  const grouped = getPromptsByGroup();
  
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">AI 提示詞模板</h1>
        
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
              {group}
            </h2>
            <div className="grid gap-4">
              {items.map((prompt, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{prompt.title}</h3>
                    <CopyButton text={prompt.body} />
                  </div>
                  <pre className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap font-sans">
                    {prompt.body}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}