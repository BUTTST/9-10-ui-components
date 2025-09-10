'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeToggleProps, Theme } from '@/types/components'
import { storage } from '@/lib/utils'

export default function ThemeToggle({
  theme,
  onThemeChange,
  className = ''
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    onThemeChange(newTheme)
    
    // 更新 HTML class 和 localStorage
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    storage.set('theme', newTheme)
  }

  // 避免 hydration 錯誤
  if (!mounted) {
    return (
      <div className={`h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-700 ${className}`} />
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative h-10 w-10 rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 ${className}`}
      aria-label={theme === 'light' ? '切換到深色模式' : '切換到淺色模式'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 1 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <FontAwesomeIcon
          icon={theme === 'dark' ? faMoon : faSun}
          className="h-full w-full"
        />
      </motion.div>
    </motion.button>
  )
}