// 嚴格的內容型別定義
export type Domain = 'frontend' | 'notes'

export type TechStack = 
  | 'react'
  | 'tailwind'
  | 'nextjs'
  | 'typescript'
  | 'html5'
  | 'chartjs'
  | 'fontawesome'
  | 'gsap'
  | 'framer-motion'
  | 'mermaid'
  | 'mdx'
  | 'css'
  | 'javascript'

export type DesignIntent =
  | '卡片'
  | '表單'
  | '資料視覺化'
  | '圖示系統'
  | '微互動'
  | '滾動動效'
  | '導覽列'
  | '側邊欄'
  | '資料表'
  | '分頁'
  | '模態框'
  | '抽屜'
  | '命令面板'
  | '空狀態'

export interface DesignIntentDetails {
  goal: string
  constraints: string[]
  variations: string[]
}

export interface ContentLink {
  label: string
  url: string
}

// frontmatter 的嚴格型別定義
export interface ContentFrontmatter {
  title: string
  description: string
  domain: Domain
  tech: TechStack[]
  intent: DesignIntent[]
  category: string
  tags: string[]
  updated: string // YYYY-MM-DD format
  design_intent: DesignIntentDetails
  react_patterns: string[]
  tailwind_tokens: Record<string, string> | string[]
  next_features: string[]
  ts_types: string[]
  ai_prompt: string
  links: ContentLink[]
}

// 內容索引項目
export interface ContentItem extends ContentFrontmatter {
  slug: string
  path: string
  excerpt: string
  readingTime: number
}

// 搜尋索引
export interface SearchIndex {
  items: ContentItem[]
  domains: Domain[]
  categories: string[]
  tags: string[]
  techStacks: TechStack[]
  intents: DesignIntent[]
}

// 導覽視圖類型
export type ViewMode = 'design' | 'tech' | 'notes'

// 預覽面板支援的內容類型
export type PreviewType = 
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'markdown'
  | 'mermaid'
  | 'chart'
  | 'motion'
  | 'gsap'

// Chart.js 圖表類型
export type ChartType = 'line' | 'bar' | 'pie' | 'doughnut'

// 主題類型
export type Theme = 'light' | 'dark'

// 密度設定
export type Density = 'compact' | 'comfy' | 'spacious'

// 設計語彙對照表項目
export interface IntentMappingItem {
  intent: DesignIntent
  react: string
  tailwind: string
  nextjs: string
  typescript: string
  chart?: string
  motion?: string
  accessibility: string
}