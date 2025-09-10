'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
// Note: Install react-syntax-highlighter for syntax highlighting
// npm install react-syntax-highlighter @types/react-syntax-highlighter
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { copyToClipboard, isDarkMode } from '@/lib/utils'
import { CodeBlockProps } from '@/types/components'

export default function CodeBlock({
  code,
  language,
  title,
  showCopy = true,
  showLineNumbers = true,
  className = ''
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const isDark = isDarkMode()

  const handleCopy = async () => {
    const success = await copyToClipboard(code)
    if (success) {
      setCopied(true)
      toast.success('程式碼已複製到剪貼簿')
      setTimeout(() => setCopied(false), 2000)
    } else {
      toast.error('複製失敗，請手動選取')
    }
  }

  const shouldShowExpand = code.split('\n').length > 20

  return (
    <div className={`relative rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 ${className}`}>
      {/* Header */}
      {(title || showCopy) && (
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
          {title && (
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          )}
          <div className="flex items-center gap-2">
            {shouldShowExpand && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-lg px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                aria-label={isExpanded ? '收合程式碼' : '展開程式碼'}
              >
                {isExpanded ? '收合' : '展開'}
              </button>
            )}
            {showCopy && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                aria-label="複製程式碼"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="text-green-500"
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="ml-1">
                  {copied ? '已複製' : '複製'}
                </span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Code Content */}
      <div className={`relative overflow-hidden ${!isExpanded && shouldShowExpand ? 'max-h-96' : ''}`}>
        <pre className="overflow-x-auto">
          <code className="block p-4 text-sm font-mono">
            {code}
          </code>
        </pre>

        {/* Expand Gradient */}
        {!isExpanded && shouldShowExpand && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-900" />
        )}
      </div>

      {/* Language Badge */}
      <div className="absolute right-2 top-2">
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
          {language}
        </span>
      </div>
    </div>
  )
}