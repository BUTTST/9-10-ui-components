import Link from 'next/link';

export default function ContentPage() {
  const topics = [
    { id: 'markdown', title: 'Markdown', icon: '📝' },
    { id: 'mermaid', title: 'Mermaid', icon: '📊' },
    { id: 'mdx', title: 'MDX', icon: '⚛️' },
    { id: 'frontmatter', title: 'Frontmatter', icon: '📋' },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">內容格式</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/content/${topic.id}`}
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