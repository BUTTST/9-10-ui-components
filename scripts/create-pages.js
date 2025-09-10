const fs = require('fs');
const path = require('path');

// Page templates
const topicPageTemplate = (topic, category, dataFile) => `'use client';

import ExampleCard from '@/components/ExampleCard';
import SectionGrid from '@/components/SectionGrid';
import { ${topic}Examples } from '@/content/${category}/${dataFile}';

export default function ${topic.charAt(0).toUpperCase() + topic.slice(1)}Page() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">${topic.charAt(0).toUpperCase() + topic.slice(1)} 範例</h1>
        <SectionGrid columns={2}>
          {${topic}Examples.map((example) => (
            <ExampleCard key={example.id} item={example} />
          ))}
        </SectionGrid>
      </div>
    </div>
  );
}`;

// Pages to create
const pages = [
  { path: 'app/frontend/css/page.tsx', topic: 'css', category: 'frontend', dataFile: 'css' },
  { path: 'app/frontend/tailwind/page.tsx', topic: 'tailwind', category: 'frontend', dataFile: 'tailwind' },
  { path: 'app/frontend/typescript/page.tsx', topic: 'typescript', category: 'frontend', dataFile: 'typescript' },
  { path: 'app/frontend/react/page.tsx', topic: 'react', category: 'frontend', dataFile: 'react' },
  { path: 'app/frontend/nextjs/page.tsx', topic: 'nextjs', category: 'frontend', dataFile: 'nextjs' },
  { path: 'app/frontend/charts/page.tsx', topic: 'charts', category: 'frontend', dataFile: 'charts' },
  { path: 'app/frontend/icons/page.tsx', topic: 'icons', category: 'frontend', dataFile: 'icons' },
  { path: 'app/motion/framer/page.tsx', topic: 'framer', category: 'motion', dataFile: 'framer' },
  { path: 'app/motion/gsap/page.tsx', topic: 'gsap', category: 'motion', dataFile: 'gsap' },
];

// Create pages
pages.forEach(({ path: filePath, topic, category, dataFile }) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, topicPageTemplate(topic, category, dataFile));
  console.log(`Created: ${filePath}`);
});

console.log('All pages created!');