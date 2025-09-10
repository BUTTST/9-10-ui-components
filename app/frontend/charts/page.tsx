'use client';

import ExampleCard from '@/components/ExampleCard';
import SectionGrid from '@/components/SectionGrid';
import ChartRenderer from '@/components/ChartRenderer';
import { chartsExamples, chartData } from '@/content/frontend/charts';

export default function ChartsPage() {
  // 為每個範例注入實際的 ChartRenderer
  const examplesWithDemo = chartsExamples.map(example => ({
    ...example,
    demo: example.id === 'line-chart' ? (
      <ChartRenderer type="line" data={chartData.line} />
    ) : example.id === 'bar-chart' ? (
      <ChartRenderer type="bar" data={chartData.bar} />
    ) : (
      <ChartRenderer type="pie" data={chartData.pie} />
    )
  }));

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">圖表範例</h1>
        <SectionGrid columns={2}>
          {examplesWithDemo.map((example) => (
            <ExampleCard key={example.id} item={example} />
          ))}
        </SectionGrid>
      </div>
    </div>
  );
}