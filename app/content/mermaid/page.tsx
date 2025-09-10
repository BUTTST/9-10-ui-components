'use client';

import ExampleCard from '@/components/ExampleCard';
import SectionGrid from '@/components/SectionGrid';
import { mermaidExamples } from '@/content/content/mermaid';

export default function MermaidPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mermaid 範例</h1>
        <SectionGrid columns={2}>
          {mermaidExamples.map((example) => (
            <ExampleCard key={example.id} item={example} />
          ))}
        </SectionGrid>
      </div>
    </div>
  );
}