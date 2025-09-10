'use client';

import ExampleCard from '@/components/ExampleCard';
import SectionGrid from '@/components/SectionGrid';
import { framerExamples } from '@/content/motion/framer';

export default function FramerPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Framer 範例</h1>
        <SectionGrid columns={2}>
          {framerExamples.map((example) => (
            <ExampleCard key={example.id} item={example} />
          ))}
        </SectionGrid>
      </div>
    </div>
  );
}