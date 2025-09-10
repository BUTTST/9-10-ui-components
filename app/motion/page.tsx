import Link from 'next/link';

export default function MotionPage() {
  const topics = [
    { id: 'framer', title: 'Framer Motion', icon: '🎬' },
    { id: 'gsap', title: 'GSAP', icon: '🚀' },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">視覺動效</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/motion/${topic.id}`}
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