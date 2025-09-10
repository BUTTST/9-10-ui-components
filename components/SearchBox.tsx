'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { debounce } from '@/lib/utils'
import { SearchBoxProps } from '@/types/components'

export default function SearchBox({
  placeholder = '搜尋設計意圖、技術或內容...',
  onSearch,
  debounceMs = 300,
  className = ''
}: SearchBoxProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [showShortcuts, setShowShortcuts] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // 防抖搜尋
  const debouncedSearch = useRef(
    debounce((searchQuery: string) => {
      if (onSearch) {
        onSearch(searchQuery)
      } else if (searchQuery.trim()) {
        // 預設行為：導航到搜尋頁面
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      }
    }, debounceMs)
  ).current

  useEffect(() => {
    debouncedSearch(query)
  }, [query, debouncedSearch])

  // 鍵盤快捷鍵
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K 或 Ctrl+K 聚焦搜尋框
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
      
      // Escape 清空搜尋或失去焦點
      if (e.key === 'Escape') {
        if (query) {
          setQuery('')
        } else {
          inputRef.current?.blur()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [query])

  const handleClear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          {/* Search Icon */}
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              setIsFocused(true)
              setShowShortcuts(true)
            }}
            onBlur={() => {
              setIsFocused(false)
              setTimeout(() => setShowShortcuts(false), 200)
            }}
            placeholder={placeholder}
            className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-20 text-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400"
          />

          {/* Clear Button */}
          <AnimatePresence>
            {query && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                type="button"
                onClick={handleClear}
                className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                aria-label="清空搜尋"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xs" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Keyboard Shortcut */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="hidden rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400 sm:block">
              ⌘K
            </kbd>
          </div>
        </div>
      </form>

      {/* Search Shortcuts Tooltip */}
      <AnimatePresence>
        {showShortcuts && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-lg border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 mb-2">
                <FontAwesomeIcon icon={faKeyboard} className="text-gray-400" />
                <span className="font-medium">搜尋提示</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span>聚焦搜尋框</span>
                  <kbd className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-700">⌘K</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>清空 / 取消</span>
                  <kbd className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-700">Esc</kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span>執行搜尋</span>
                  <kbd className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-700">Enter</kbd>
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                <p className="text-gray-500">
                  搜尋範圍：標題、描述、標籤、技術棧、設計意圖
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Ring Effect */}
      <motion.div
        initial={false}
        animate={{
          scale: isFocused ? 1.02 : 1,
          opacity: isFocused ? 1 : 0
        }}
        className="absolute inset-0 -z-10 rounded-xl bg-blue-500/10 blur-xl"
      />
    </div>
  )
}