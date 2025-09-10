'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCopy, faCheck, faFilter } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-hot-toast'
import { copyToClipboard } from '@/lib/utils'
import { IntentMappingProps, Density } from '@/types/components'
import { IntentMappingItem, DesignIntent } from '@/types/content'

// 設計語彙 → 技術落地速查表資料
const INTENT_MAPPING_DATA: IntentMappingItem[] = [
  {
    intent: '卡片',
    react: 'div + props interface',
    tailwind: 'rounded-xl shadow-sm border',
    nextjs: 'Image component',
    typescript: 'CardProps interface',
    chart: 'Bar chart for metrics',
    motion: 'hover variants',
    accessibility: 'role="article", tabIndex'
  },
  {
    intent: '導覽列',
    react: 'nav + Link components',
    tailwind: 'sticky top-0 backdrop-blur',
    nextjs: 'usePathname, Link',
    typescript: 'NavItem[] type',
    motion: 'slide animations',
    accessibility: 'role="navigation", aria-current'
  },
  {
    intent: '表單',
    react: 'react-hook-form + zod',
    tailwind: '@tailwindcss/forms',
    nextjs: 'Server Actions',
    typescript: 'FormData type',
    motion: 'error shake animation',
    accessibility: 'aria-describedby, aria-invalid'
  },
  {
    intent: '資料表',
    react: 'table + generic ColumnDef<T>',
    tailwind: 'table-auto overflow-x-auto',
    nextjs: 'Suspense + loading',
    typescript: 'TableData<T> generic',
    chart: 'Line chart for trends',
    motion: 'row hover effects',
    accessibility: 'scope="col", caption'
  },
  {
    intent: '模態框',
    react: 'Portal + useEffect',
    tailwind: 'fixed inset-0 z-50',
    nextjs: 'dynamic import',
    typescript: 'ModalProps interface',
    motion: 'AnimatePresence',
    accessibility: 'role="dialog", aria-modal'
  },
  {
    intent: '抽屜',
    react: 'useState + useEffect',
    tailwind: 'transform translate-x-full',
    nextjs: 'useRouter for navigation',
    typescript: 'DrawerProps interface',
    motion: 'slide-in variants',
    accessibility: 'role="complementary"'
  },
  {
    intent: '資料視覺化',
    react: 'react-chartjs-2',
    tailwind: 'aspect-ratio responsive',
    nextjs: 'dynamic import Chart.js',
    typescript: 'ChartData<T> type',
    chart: 'Line/Bar/Pie charts',
    motion: 'number counting animation',
    accessibility: 'aria-label for charts'
  },
  {
    intent: '圖示系統',
    react: 'FontAwesome components',
    tailwind: 'text-lg text-blue-500',
    nextjs: 'tree-shaking imports',
    typescript: 'IconProps interface',
    motion: 'spin/bounce effects',
    accessibility: 'aria-hidden, aria-label'
  },
  {
    intent: '微互動',
    react: 'useState + event handlers',
    tailwind: 'hover:scale-105 transition',
    nextjs: 'client components',
    typescript: 'InteractionState type',
    motion: 'whileHover, whileTap',
    accessibility: 'focus-visible states'
  },
  {
    intent: '滾動動效',
    react: 'useEffect + IntersectionObserver',
    tailwind: 'transform translate-y-8',
    nextjs: 'dynamic GSAP import',
    typescript: 'ScrollTrigger types',
    motion: 'scroll-triggered variants',
    accessibility: 'prefers-reduced-motion'
  },
  {
    intent: '分頁',
    react: 'usePagination hook',
    tailwind: 'flex justify-between',
    nextjs: 'searchParams',
    typescript: 'PaginationProps',
    motion: 'page transition',
    accessibility: 'aria-label="pagination"'
  },
  {
    intent: '空狀態',
    react: 'conditional rendering',
    tailwind: 'flex flex-col items-center',
    nextjs: 'Image for illustrations',
    typescript: 'EmptyStateProps',
    motion: 'fade-in animation',
    accessibility: 'role="status"'
  },
  {
    intent: '命令面板',
    react: 'useReducer + Portal',
    tailwind: 'backdrop-blur-sm',
    nextjs: 'useRouter navigation',
    typescript: 'CommandItem[] type',
    motion: 'scale + opacity',
    accessibility: 'role="combobox"'
  }
]

export default function IntentMapping({
  showSearch = true,
  density = 'comfy',
  className = ''
}: IntentMappingProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedCell, setCopiedCell] = useState<string | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'with-chart' | 'with-motion'>('all')

  // 篩選和搜尋資料
  const filteredData = useMemo(() => {
    let data = INTENT_MAPPING_DATA

    // 依篩選條件過濾
    if (selectedFilter === 'with-chart') {
      data = data.filter(item => item.chart)
    } else if (selectedFilter === 'with-motion') {
      data = data.filter(item => item.motion)
    }

    // 依搜尋關鍵字過濾
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      data = data.filter(item =>
        item.intent.toLowerCase().includes(query) ||
        item.react.toLowerCase().includes(query) ||
        item.tailwind.toLowerCase().includes(query) ||
        item.nextjs.toLowerCase().includes(query) ||
        item.typescript.toLowerCase().includes(query)
      )
    }

    return data
  }, [searchQuery, selectedFilter])

  const handleCopy = async (content: string, cellId: string) => {
    const success = await copyToClipboard(content)
    if (success) {
      setCopiedCell(cellId)
      toast.success('已複製到剪貼簿')
      setTimeout(() => setCopiedCell(null), 2000)
    } else {
      toast.error('複製失敗')
    }
  }

  const getDensityClasses = () => {
    switch (density) {
      case 'compact':
        return 'text-xs p-2'
      case 'spacious':
        return 'text-sm p-4'
      default:
        return 'text-sm p-3'
    }
  }

  return (
    <div className={`rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 ${className}`}>
      {/* Header */}
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              設計語彙 → 技術落地速查表
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              從設計意圖快速找到對應的技術實作方案
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            {(['all', 'with-chart', 'with-motion'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                <FontAwesomeIcon icon={faFilter} className="mr-1" />
                {filter === 'all' ? '全部' : filter === 'with-chart' ? '含圖表' : '含動效'}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        {showSearch && (
          <div className="mt-4 relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="搜尋設計意圖或技術關鍵字..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                設計意圖
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                React 模式
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tailwind 關鍵類
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Next.js 功能
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                TypeScript 型別
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Chart/Motion
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                無障礙設計
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <AnimatePresence>
              {filteredData.map((item, index) => (
                <motion.tr
                  key={item.intent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {/* 設計意圖 */}
                  <td className={`font-medium text-gray-900 dark:text-gray-100 ${getDensityClasses()}`}>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {item.intent}
                      </span>
                    </div>
                  </td>

                  {/* React 模式 */}
                  <CopyableCell
                    content={item.react}
                    cellId={`react-${index}`}
                    copiedCell={copiedCell}
                    onCopy={handleCopy}
                    className={getDensityClasses()}
                  />

                  {/* Tailwind 關鍵類 */}
                  <CopyableCell
                    content={item.tailwind}
                    cellId={`tailwind-${index}`}
                    copiedCell={copiedCell}
                    onCopy={handleCopy}
                    className={getDensityClasses()}
                  />

                  {/* Next.js 功能 */}
                  <CopyableCell
                    content={item.nextjs}
                    cellId={`nextjs-${index}`}
                    copiedCell={copiedCell}
                    onCopy={handleCopy}
                    className={getDensityClasses()}
                  />

                  {/* TypeScript 型別 */}
                  <CopyableCell
                    content={item.typescript}
                    cellId={`typescript-${index}`}
                    copiedCell={copiedCell}
                    onCopy={handleCopy}
                    className={getDensityClasses()}
                  />

                  {/* Chart/Motion */}
                  <td className={getDensityClasses()}>
                    <div className="space-y-1">
                      {item.chart && (
                        <CopyableCell
                          content={item.chart}
                          cellId={`chart-${index}`}
                          copiedCell={copiedCell}
                          onCopy={handleCopy}
                          className="text-xs text-purple-600 dark:text-purple-400"
                        />
                      )}
                      {item.motion && (
                        <CopyableCell
                          content={item.motion}
                          cellId={`motion-${index}`}
                          copiedCell={copiedCell}
                          onCopy={handleCopy}
                          className="text-xs text-green-600 dark:text-green-400"
                        />
                      )}
                    </div>
                  </td>

                  {/* 無障礙設計 */}
                  <CopyableCell
                    content={item.accessibility}
                    cellId={`a11y-${index}`}
                    copiedCell={copiedCell}
                    onCopy={handleCopy}
                    className={`${getDensityClasses()} text-orange-600 dark:text-orange-400`}
                  />
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>顯示 {filteredData.length} 個設計意圖</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-xs">圖表相關</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-xs">動效相關</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <span className="text-xs">無障礙</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 可複製的表格儲存格元件
interface CopyableCellProps {
  content: string
  cellId: string
  copiedCell: string | null
  onCopy: (content: string, cellId: string) => void
  className?: string
}

function CopyableCell({ content, cellId, copiedCell, onCopy, className = '' }: CopyableCellProps) {
  const isCopied = copiedCell === cellId

  return (
    <td className={`group relative ${className}`}>
      <div className="flex items-center justify-between">
        <code className="text-gray-700 dark:text-gray-300">
          {content}
        </code>
        <button
          onClick={() => onCopy(content, cellId)}
          className="ml-2 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={`複製 ${content}`}
        >
          <FontAwesomeIcon
            icon={isCopied ? faCheck : faCopy}
            className={`text-xs ${isCopied ? 'text-green-500' : 'text-gray-400 hover:text-gray-600'}`}
          />
        </button>
      </div>
    </td>
  )
}