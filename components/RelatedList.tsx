'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock, faTag } from '@fortawesome/free-solid-svg-icons'
import { RelatedListProps } from '@/types/components'
import { formatDate } from '@/lib/utils'

export default function RelatedList({
  items,
  maxItems = 5,
  title = '相關內容',
  className = ''
}: RelatedListProps) {
  const displayItems = items.slice(0, maxItems)

  if (displayItems.length === 0) {
    return (
      <div className={`rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800 ${className}`}>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          暫無相關內容
        </p>
      </div>
    )
  }

  return (
    <div className={`rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 ${className}`}>
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          基於標籤、分類和技術棧的相關推薦
        </p>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {displayItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.path}
              className="block p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 line-clamp-1">
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Meta Info */}
                  <div className="mt-2 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} />
                      <span>{formatDate(item.updated)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{item.readingTime} 分鐘閱讀</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faTag} />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tech.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="rounded px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.tech.length > 3 && (
                      <span className="rounded px-1.5 py-0.5 text-xs bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-500">
                        +{item.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="ml-4 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-gray-400 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      {items.length > maxItems && (
        <div className="border-t border-gray-200 px-4 py-3 text-center dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            還有 {items.length - maxItems} 個相關項目
          </p>
        </div>
      )}
    </div>
  )
}