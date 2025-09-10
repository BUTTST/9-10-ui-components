'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheck, faRobot, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-hot-toast'
import { copyToClipboard } from '@/lib/utils'
import { AIPromptCardProps } from '@/types/components'

export default function AIPromptCard({
  prompt,
  title = 'AI 命令模板',
  description,
  className = ''
}: AIPromptCardProps) {
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCopy = async () => {
    const success = await copyToClipboard(prompt)
    if (success) {
      setCopied(true)
      toast.success('AI 命令已複製，可直接貼到 Cursor 使用！', {
        icon: '🤖',
        duration: 3000
      })
      setTimeout(() => setCopied(false), 2000)
    } else {
      toast.error('複製失敗，請手動選取')
    }
  }

  const shouldShowExpand = prompt.length > 200

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm dark:border-blue-800 dark:from-blue-950 dark:to-indigo-950 ${className}`}
    >
      {/* 裝飾性背景 */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 blur-2xl" />

      {/* Header */}
      <div className="relative flex items-center gap-3 p-4 pb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg">
          <FontAwesomeIcon icon={faRobot} className="text-lg" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 dark:bg-blue-900">
          <FontAwesomeIcon icon={faWandMagicSparkles} className="text-xs text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
            AI Ready
          </span>
        </div>
      </div>

      {/* Prompt Content */}
      <div className="relative px-4 pb-4">
        <div className={`rounded-xl border border-gray-200 bg-white/80 p-4 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80 ${!isExpanded && shouldShowExpand ? 'max-h-32 overflow-hidden' : ''}`}>
          <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
            {prompt}
          </pre>
          
          {/* Expand Gradient */}
          {!isExpanded && shouldShowExpand && (
            <div className="absolute bottom-0 left-4 right-4 h-8 bg-gradient-to-t from-white/80 to-transparent dark:from-gray-900/80" />
          )}
        </div>

        {/* Controls */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {shouldShowExpand && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                {isExpanded ? '收合' : '展開完整命令'}
              </button>
            )}
            <span className="text-xs text-gray-400">
              {prompt.length} 字符
            </span>
          </div>
          
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <motion.div
              animate={copied ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon 
                icon={copied ? faCheck : faCopy} 
                className={copied ? 'text-green-300' : ''} 
              />
            </motion.div>
            <span>{copied ? '已複製！' : '複製命令'}</span>
          </motion.button>
        </div>
      </div>

      {/* Usage Tips */}
      <div className="border-t border-blue-200 bg-blue-50/50 px-4 py-3 dark:border-blue-800 dark:bg-blue-950/50">
        <div className="flex items-start gap-2">
          <div className="mt-0.5 h-2 w-2 rounded-full bg-blue-400" />
          <div className="text-xs text-gray-600 dark:text-gray-400">
            <strong>使用提示：</strong>複製後直接貼到 Cursor 對話框，AI 會根據這個模板為您生成對應的程式碼。您可以根據需要修改參數或添加具體需求。
          </div>
        </div>
      </div>
    </motion.div>
  )
}