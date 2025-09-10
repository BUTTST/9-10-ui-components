'use client';

import ExampleCard from '@/components/ExampleCard';
import SectionGrid from '@/components/SectionGrid';
import { html5Examples } from '@/content/frontend/html5';

export default function HTML5Page() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">HTML5 範例</h1>
        <SectionGrid columns={2}>
          {html5Examples.map((example) => (
            <ExampleCard key={example.id} item={example} />
          ))}
        </SectionGrid>
      </div>
    </div>
  );
}