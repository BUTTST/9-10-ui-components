import { ReactNode } from 'react'
import { ContentItem, PreviewType, ChartType, Theme, Density } from './content'

// Re-export types that components need
export type { Density, ChartType, Theme, PreviewType } from './content'

// 通用元件 Props
export interface BaseProps {
  className?: string
  children?: ReactNode
}

// 程式碼區塊元件
export interface CodeBlockProps extends BaseProps {
  code: string
  language: string
  title?: string
  showCopy?: boolean
  showLineNumbers?: boolean
}

// 預覽面板元件
export interface PreviewPaneProps extends BaseProps {
  type: PreviewType
  content: string
  title?: string
  height?: string
  theme?: Theme
}

// AI 命令模板卡片
export interface AIPromptCardProps extends BaseProps {
  prompt: string
  title?: string
  description?: string
}

// 意圖對照表元件
export interface IntentMappingProps extends BaseProps {
  showSearch?: boolean
  density?: Density
}

// 側邊欄元件
export interface SidebarProps extends BaseProps {
  items: ContentItem[]
  currentPath?: string
  isOpen?: boolean
  onToggle?: () => void
}

// 搜尋框元件
export interface SearchBoxProps extends BaseProps {
  placeholder?: string
  onSearch?: (query: string) => void
  debounceMs?: number
}

// 領域標籤頁元件
export interface DomainTabsProps extends BaseProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

// 主題切換元件
export interface ThemeToggleProps extends BaseProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

// 標籤藥丸元件
export interface TagPillsProps extends BaseProps {
  tags: string[]
  onTagClick?: (tag: string) => void
  maxDisplay?: number
}

// 相關內容列表
export interface RelatedListProps extends BaseProps {
  items: ContentItem[]
  maxItems?: number
  title?: string
}

// Toast 通知類型
export interface ToastOptions {
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  duration?: number
}

// Chart.js 元件 Props
export interface ChartComponentProps extends BaseProps {
  type: ChartType
  data: any
  options?: any
  theme?: Theme
}

// Framer Motion 變體
export interface MotionVariants {
  initial: any
  animate: any
  exit?: any
  hover?: any
  tap?: any
}

// GSAP 時間軸選項
export interface GSAPTimelineOptions {
  duration?: number
  delay?: number
  ease?: string
  repeat?: number
  yoyo?: boolean
}