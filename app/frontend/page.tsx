import Link from 'next/link';

export default function FrontendPage() {
  const topics = [
    { id: 'html5', title: 'HTML5', icon: '🏗️' },
    { id: 'css', title: 'CSS', icon: '🎨' },
    { id: 'tailwind', title: 'Tailwind', icon: '🌊' },
    { id: 'typescript', title: 'TypeScript', icon: '📘' },
    { id: 'react', title: 'React', icon: '⚛️' },
    { id: 'nextjs', title: 'Next.js', icon: '▲' },
    { id: 'charts', title: '圖表', icon: '📊' },
    { id: 'icons', title: '圖示', icon: '🎯' },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">前端技術</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/frontend/${topic.id}`}
              className="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-2">{topic.icon}</div>
              <h3 className="text-lg font-semibold">{topic.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}