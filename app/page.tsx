import { Suspense } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRocket, 
  faCode, 
  faWandMagicSparkles, 
  faArrowRight,
  faSearch,
  faBookOpen,
  faCog
} from '@fortawesome/free-solid-svg-icons'
import SearchBox from '@/components/SearchBox'
import IntentMapping from '@/components/IntentMapping'
import DomainTabs from '@/components/DomainTabs'
import ClientThemeToggle from '@/components/ClientThemeToggle'
import { generateSearchIndex } from '@/lib/content'

// 首頁特色亮點
const FEATURES = [
  {
    icon: faWandMagicSparkles,
    title: '設計意圖直達程式碼',
    description: '從腦中的視覺構想，快速找到對應的 React 模式、Tailwind 樣式和 TypeScript 型別',
    color: 'blue'
  },
  {
    icon: faCode,
    title: '即時預覽與複製',
    description: '每個元件都提供即時預覽、完整程式碼和一鍵複製功能，支援 Chart.js、GSAP、Framer Motion',
    color: 'purple'
  },
  {
    icon: faRocket,
    title: 'AI 命令模板',
    description: '精心設計的 AI Prompt 模板，讓您能精準指揮 Cursor 或其他 AI 工具生成所需元件',
    color: 'green'
  }
]

// 快速開始卡片
const QUICK_START_CARDS = [
  {
    title: '🎨 設計意圖',
    description: '從視覺構想找技術方案',
    href: '/design',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: '⚙️ 技術棧',
    description: '按技術分類深入學習',
    href: '/tech',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: '📚 筆記參考',
    description: '語法與最佳實務',
    href: '/notes',
    color: 'from-green-500 to-emerald-500'
  }
]

export default async function HomePage() {
  // 獲取內容統計
  const searchIndex = generateSearchIndex()
  const stats = {
    totalItems: searchIndex.items.length,
    frontendItems: searchIndex.items.filter(item => item.domain === 'frontend').length,
    notesItems: searchIndex.items.filter(item => item.domain === 'notes').length,
    techStacks: searchIndex.techStacks.length
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Header */}
        <header className="relative border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="text-lg" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    設計意圖速查站
                  </h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Design to Code Hub
                  </p>
                </div>
              </div>
              
              <nav className="hidden items-center gap-6 md:flex">
                <Link 
                  href="/design" 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  設計意圖
                </Link>
                <Link 
                  href="/tech" 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  技術棧
                </Link>
                <Link 
                  href="/notes" 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  筆記參考
                </Link>
                <Link 
                  href="/search" 
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  搜尋
                </Link>
              </nav>
              
              <ClientThemeToggle />
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              從
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                設計意圖
              </span>
              到
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                技術落地
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              一站式前端開發速查平台，將您腦中的視覺構想快速轉換為可執行的
              <br />
              <strong>React + TypeScript + Tailwind</strong> 程式碼，並提供精準的 AI 命令模板
            </p>
            
            {/* Search Bar */}
            <div className="mt-10 mx-auto max-w-2xl">
              <SearchBox placeholder="搜尋設計意圖、技術棧或元件名稱..." />
            </div>

            {/* Quick Stats */}
            <div className="mt-10 flex justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBookOpen} className="text-blue-500" />
                <span>{stats.totalItems} 個條目</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} className="text-purple-500" />
                <span>{stats.techStacks} 種技術</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-green-500" />
                <span>AI 就緒</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              為什麼選擇設計意圖速查站？
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              專為前端開發者設計的技術決策與程式碼生成工具
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${feature.color}-100 text-${feature.color}-600 dark:bg-${feature.color}-900 dark:text-${feature.color}-400`}>
                  <FontAwesomeIcon icon={feature.icon} className="text-xl" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              快速開始
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              選擇您的探索方式
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {QUICK_START_CARDS.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-gray-900"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5 transition-opacity group-hover:opacity-10`} />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {card.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                    開始探索
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intent Mapping Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              設計語彙 → 技術落地速查表
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              從設計意圖快速找到對應的技術實作方案
            </p>
          </div>

          <IntentMapping />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            準備好加速您的開發流程了嗎？
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            立即開始探索，將您的設計構想轉化為高品質的程式碼
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/design"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
            >
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              開始搜尋
            </Link>
            <Link
              href="/frontend/ui/card"
              className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-blue-600"
            >
              查看範例
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-sm" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                設計意圖速查站
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with Next.js, TypeScript, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
