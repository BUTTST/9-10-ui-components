'use client';

import { useState } from 'react';
import { lexiconData } from '@/lexicon/mapping';

export default function LexiconPage() {
  const [filter, setFilter] = useState('');
  
  const filteredData = lexiconData.filter(item =>
    item.term.includes(filter) ||
    item.meaning.includes(filter) ||
    item.tailwind.includes(filter)
  );

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">設計語彙 → 技術映射表</h1>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="篩選語彙..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full max-w-md dark:bg-neutral-800 dark:border-neutral-700"
          />
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800">
                <th className="border p-2 text-left">語彙</th>
                <th className="border p-2 text-left">說明</th>
                <th className="border p-2 text-left">Tailwind</th>
                <th className="border p-2 text-left">React</th>
                <th className="border p-2 text-left">動效</th>
                <th className="border p-2 text-left">備註</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <td className="border p-2 font-medium">{item.term}</td>
                  <td className="border p-2 text-sm">{item.meaning}</td>
                  <td className="border p-2 text-xs font-mono">{item.tailwind}</td>
                  <td className="border p-2 text-xs font-mono">{item.react}</td>
                  <td className="border p-2 text-xs">{item.motion}</td>
                  <td className="border p-2 text-xs text-neutral-600 dark:text-neutral-400">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}