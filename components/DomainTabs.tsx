'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCog, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { DomainTabsProps } from '@/types/components'

const TABS = [
  {
    id: 'design',
    label: '設計意圖',
    description: '從視覺構想找技術方案',
    icon: faCode,
    color: 'blue'
  },
  {
    id: 'tech',
    label: '技術向',
    description: '按技術棧分類瀏覽',
    icon: faCog,
    color: 'purple'
  },
  {
    id: 'notes',
    label: '筆記向',
    description: '語法參考與最佳實務',
    icon: faStickyNote,
    color: 'green'
  }
]

export default function DomainTabs({
  activeTab,
  onTabChange,
  className = ''
}: DomainTabsProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Tab List */}
      <div className="flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
              activeTab === tab.id
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            {/* Active Background */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-gray-700"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {/* Tab Content */}
            <div className="relative flex items-center gap-3">
              <FontAwesomeIcon
                icon={tab.icon}
                className={`text-lg ${
                  activeTab === tab.id
                    ? `text-${tab.color}-500`
                    : 'text-gray-400'
                }`}
              />
              <div className="text-left">
                <div className="font-semibold">{tab.label}</div>
                <div className="text-xs opacity-75">{tab.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Tab Panels Info */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50"
      >
        {activeTab === 'design' && (
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              設計意圖導向
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              從您腦中的視覺構想出發，快速找到對應的 React 元件模式、Tailwind 樣式類別、Next.js 功能和 TypeScript 型別定義。適合有明確 UI 想法的開發者。
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['卡片', '表單', '導覽列', '資料表', '圖表', '動畫'].map(intent => (
                <span
                  key={intent}
                  className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {intent}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tech' && (
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              技術棧導向
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              按照特定技術分類瀏覽，深入了解 React、Tailwind、Chart.js、Framer Motion、GSAP 等技術的具體應用與最佳實務。適合想精進特定技術的開發者。
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Next.js', 'Chart.js', 'GSAP', 'Framer Motion'].map(tech => (
                <span
                  key={tech}
                  className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              筆記與參考
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              語法參考、最佳實務、常見陷阱與解決方案。包含 HTML5 語意化、Markdown 語法、Mermaid 圖表等基礎知識。適合查閱語法細節與學習新概念。
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['HTML5', 'Markdown', 'Mermaid', '語意化', '無障礙', 'SEO'].map(topic => (
                <span
                  key={topic}
                  className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}