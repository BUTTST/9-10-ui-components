'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function ClientThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
  }, [])
  
  return <ThemeToggle theme={theme} onThemeChange={setTheme} />
}