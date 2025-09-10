const fs = require('fs');

const template = (name, dataFile) => `'use client';

import ExampleCard from '@/components/ExampleCard';
import SectionGrid from '@/components/SectionGrid';
import { ${dataFile}Examples } from '@/content/content/${dataFile}';

export default function ${name}Page() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">${name} 範例</h1>
        <SectionGrid columns={2}>
          {${dataFile}Examples.map((example) => (
            <ExampleCard key={example.id} item={example} />
          ))}
        </SectionGrid>
      </div>
    </div>
  );
}`;

const pages = [
  { path: 'app/content/mermaid/page.tsx', name: 'Mermaid', dataFile: 'mermaid' },
  { path: 'app/content/mdx/page.tsx', name: 'MDX', dataFile: 'mdx' },
  { path: 'app/content/frontmatter/page.tsx', name: 'Frontmatter', dataFile: 'frontmatter' },
];

pages.forEach(({ path, name, dataFile }) => {
  fs.writeFileSync(path, template(name, dataFile));
  console.log(`Created: ${path}`);
});