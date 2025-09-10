'use client';

import ExampleCard from '@/components/ExampleCard';
import SectionGrid from '@/components/SectionGrid';
import { tailwindExamples } from '@/content/frontend/tailwind';

export default function TailwindPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Tailwind 範例</h1>
        <SectionGrid columns={2}>
          {tailwindExamples.map((example) => (
            <ExampleCard key={example.id} item={example} />
          ))}
        </SectionGrid>
      </div>
    </div>
  );
}