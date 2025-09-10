import Link from 'next/link';

export default function HomePage() {
  const categories = [
    {
      href: '/frontend',
      title: '前端',
      description: 'HTML5、CSS、React、Next.js',
      icon: '🎨',
      color: 'from-blue-500 to-purple-500',
    },
    {
      href: '/motion',
      title: '視覺動效',
      description: 'Framer Motion、GSAP',
      icon: '✨',
      color: 'from-purple-500 to-pink-500',
    },
    {
      href: '/content',
      title: '內容格式',
      description: 'Markdown、MDX、Mermaid',
      icon: '📝',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  {category.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center gap-6">
          <Link
            href="/prompts"
            className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            💡 AI 提示詞
          </Link>
          <Link
            href="/lexicon"
            className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            📖 設計語彙
          </Link>
        </div>
      </div>
    </div>
  );
}