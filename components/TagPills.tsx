'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faPlus } from '@fortawesome/free-solid-svg-icons'
import { TagPillsProps } from '@/types/components'

const TAG_COLORS = [
  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
]

export default function TagPills({
  tags,
  onTagClick,
  maxDisplay = 10,
  className = ''
}: TagPillsProps) {
  const displayTags = tags.slice(0, maxDisplay)
  const remainingCount = tags.length - maxDisplay

  const getTagColor = (index: number) => {
    return TAG_COLORS[index % TAG_COLORS.length]
  }

  if (tags.length === 0) {
    return (
      <div className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>
        無標籤
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {displayTags.map((tag, index) => (
        <motion.button
          key={tag}
          onClick={() => onTagClick?.(tag)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-all hover:shadow-sm ${
            onTagClick
              ? `cursor-pointer hover:opacity-80 ${getTagColor(index)}`
              : `${getTagColor(index)}`
          }`}
        >
          <FontAwesomeIcon icon={faTag} className="text-xs opacity-75" />
          {tag}
        </motion.button>
      ))}
      
      {remainingCount > 0 && (
        <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-400">
          <FontAwesomeIcon icon={faPlus} className="text-xs" />
          +{remainingCount}
        </div>
      )}
    </div>
  )
}