'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import mermaid from 'mermaid'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { Line, Bar, Pie } from 'react-chartjs-2'
import { gsap } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { PreviewPaneProps, ChartType } from '@/types/components'
import { isDarkMode } from '@/lib/utils'

// 註冊 Chart.js 元件
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

export default function PreviewPane({
  type,
  content,
  title,
  height = '400px',
  theme,
  className = ''
}: PreviewPaneProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const gsapTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const isDark = theme === 'dark' || (theme === undefined && isDarkMode())

  useEffect(() => {
    // 初始化 Mermaid（客端渲染）
    if (type === 'mermaid') {
      mermaid.initialize({
        startOnLoad: true,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'Inter, system-ui, sans-serif'
      })
    }

    // 清理 GSAP Timeline
    return () => {
      if (gsapTimelineRef.current) {
        gsapTimelineRef.current.kill()
      }
    }
  }, [type, isDark])

  // HTML/CSS 預覽（使用 iframe 沙盒隔離）
  const renderHTMLPreview = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="zh-TW">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { 
            margin: 0; 
            padding: 1rem; 
            font-family: Inter, system-ui, sans-serif;
            background: ${isDark ? '#111827' : '#ffffff'};
            color: ${isDark ? '#f9fafb' : '#111827'};
          }
          ${isDark ? 'html { color-scheme: dark; }' : ''}
        </style>
      </head>
      <body>
        ${content}
      </body>
      </html>
    `

    return (
      <iframe
        ref={iframeRef}
        srcDoc={htmlContent}
        className="w-full border-0"
        style={{ height }}
        sandbox="allow-scripts allow-same-origin"
        title="HTML Preview"
      />
    )
  }

  // Markdown 預覽
  const renderMarkdownPreview = () => (
    <div
      className={`prose max-w-none p-4 ${isDark ? 'prose-invert' : ''}`}
      style={{ height, overflow: 'auto' }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )

  // Mermaid 圖表預覽
  const renderMermaidPreview = () => {
    useEffect(() => {
      if (previewRef.current && type === 'mermaid') {
        previewRef.current.innerHTML = content
        const element = previewRef.current.querySelector('.mermaid')
        if (element) {
          mermaid.init(undefined, element as HTMLElement)
        }
      }
    }, [content])

    return (
      <div
        className="flex items-center justify-center p-4"
        style={{ height, overflow: 'auto' }}
      >
        <div className="mermaid">{content}</div>
      </div>
    )
  }

  // Chart.js 預覽（深淺色主題自動調整）
  const renderChartPreview = () => {
    let chartData
    let chartType: ChartType = 'line'

    try {
      const parsed = JSON.parse(content)
      chartData = parsed.data
      chartType = parsed.type || 'line'
    } catch {
      // 預設示例資料
      chartData = {
        labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
        datasets: [{
          label: '示例資料',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: isDark ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 2
        }]
      }
    }

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: isDark ? '#f9fafb' : '#111827'
          }
        }
      },
      scales: chartType !== 'pie' ? {
        x: {
          ticks: { color: isDark ? '#d1d5db' : '#6b7280' },
          grid: { color: isDark ? '#374151' : '#e5e7eb' }
        },
        y: {
          ticks: { color: isDark ? '#d1d5db' : '#6b7280' },
          grid: { color: isDark ? '#374151' : '#e5e7eb' }
        }
      } : undefined
    }

    const ChartComponent = chartType === 'bar' ? Bar : chartType === 'pie' ? Pie : Line

    return (
      <div className="p-4" style={{ height }}>
        <ChartComponent data={chartData} options={options} />
      </div>
    )
  }

  // Framer Motion 預覽
  const renderMotionPreview = () => {
    const [demoState, setDemoState] = useState(0)

    const cardVariants = {
      hidden: { opacity: 0, y: 50, scale: 0.9 },
      visible: { opacity: 1, y: 0, scale: 1 },
      hover: { scale: 1.05, y: -5 },
      tap: { scale: 0.95 }
    }

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    }

    return (
      <div className="flex flex-col items-center justify-center p-4" style={{ height }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className={`cursor-pointer rounded-lg p-4 shadow-lg ${
                isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}
            >
              <h3 className="font-semibold">卡片 {i}</h3>
              <p className="text-sm opacity-75">Framer Motion 示例</p>
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={() => setDemoState(state => state + 1)}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          重新播放動畫
        </button>
      </div>
    )
  }

  // GSAP 預覽（含清理副作用）
  const renderGSAPPreview = () => {
    const gsapRef = useRef<HTMLDivElement>(null)

    const startAnimation = () => {
      if (!gsapRef.current) return

      // 清理舊的 timeline
      if (gsapTimelineRef.current) {
        gsapTimelineRef.current.kill()
      }

      const elements = gsapRef.current.querySelectorAll('.gsap-demo-item')
      
      gsapTimelineRef.current = gsap.timeline()
        .fromTo(elements, 
          { opacity: 0, y: 50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.7)' }
        )
        .to(elements, {
          rotation: 360,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.inOut'
        }, '-=0.3')

      setIsPlaying(true)
      gsapTimelineRef.current.eventCallback('onComplete', () => setIsPlaying(false))
    }

    const stopAnimation = () => {
      if (gsapTimelineRef.current) {
        gsapTimelineRef.current.kill()
        setIsPlaying(false)
        
        // 重置元素狀態
        if (gsapRef.current) {
          gsap.set(gsapRef.current.querySelectorAll('.gsap-demo-item'), {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0
          })
        }
      }
    }

    return (
      <div className="flex flex-col items-center justify-center p-4" style={{ height }}>
        <div ref={gsapRef} className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`gsap-demo-item w-16 h-16 rounded-lg flex items-center justify-center font-bold ${
                isDark ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
              }`}
            >
              {i}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={startAnimation}
            disabled={isPlaying}
            className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faPlay} />
            開始動畫
          </button>
          <button
            onClick={stopAnimation}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <FontAwesomeIcon icon={faStop} />
            停止動畫
          </button>
        </div>

        {/* ScrollTrigger 示例註解 */}
        <div className={`mt-4 rounded-lg p-3 text-xs ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
          <strong>ScrollTrigger 安全寫法：</strong>
          <pre className="mt-1 text-xs">{`// SSR 安全載入
useEffect(() => {
  import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger)
    // 使用 ScrollTrigger...
  })
}, [])`}</pre>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    switch (type) {
      case 'html':
      case 'css':
        return renderHTMLPreview()
      case 'markdown':
        return renderMarkdownPreview()
      case 'mermaid':
        return renderMermaidPreview()
      case 'chart':
        return renderChartPreview()
      case 'motion':
        return renderMotionPreview()
      case 'gsap':
        return renderGSAPPreview()
      default:
        return (
          <div className="flex items-center justify-center p-8 text-gray-500">
            不支援的預覽類型: {type}
          </div>
        )
    }
  }

  return (
    <div className={`relative rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 ${isFullscreen ? 'fixed inset-4 z-50' : ''} ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {title || `${type.toUpperCase()} 預覽`}
        </h3>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          aria-label={isFullscreen ? '退出全螢幕' : '全螢幕預覽'}
        >
          <FontAwesomeIcon icon={isFullscreen ? faCompressArrowsAlt : faExpandArrowsAlt} />
        </button>
      </div>

      {/* Content */}
      <div ref={previewRef} className="overflow-hidden">
        {renderContent()}
      </div>
    </div>
  )
}