import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ContentFrontmatter, ContentItem, SearchIndex, Domain } from '@/types/content'

const CONTENT_DIR = path.join(process.cwd(), 'content')

// 驗證 frontmatter 型別
function validateFrontmatter(data: any, filePath: string): ContentFrontmatter {
  const required = [
    'title', 'description', 'domain', 'tech', 'intent', 'category',
    'tags', 'updated', 'design_intent', 'react_patterns', 'tailwind_tokens',
    'next_features', 'ts_types', 'ai_prompt', 'links'
  ]

  for (const field of required) {
    if (!(field in data)) {
      throw new Error(`Missing required field "${field}" in ${filePath}`)
    }
  }

  // 驗證日期格式
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(data.updated)) {
    throw new Error(`Invalid date format in ${filePath}. Expected YYYY-MM-DD`)
  }

  // 驗證 domain
  if (!['frontend', 'notes'].includes(data.domain)) {
    throw new Error(`Invalid domain "${data.domain}" in ${filePath}`)
  }

  // 驗證陣列欄位
  const arrayFields = ['tech', 'intent', 'tags', 'react_patterns', 'next_features', 'ts_types', 'links']
  for (const field of arrayFields) {
    if (!Array.isArray(data[field])) {
      throw new Error(`Field "${field}" must be an array in ${filePath}`)
    }
  }

  // 驗證 design_intent 結構
  const designIntent = data.design_intent
  if (!designIntent || typeof designIntent !== 'object') {
    throw new Error(`Invalid design_intent structure in ${filePath}`)
  }

  const requiredDesignFields = ['goal', 'constraints', 'variations']
  for (const field of requiredDesignFields) {
    if (!(field in designIntent)) {
      throw new Error(`Missing design_intent.${field} in ${filePath}`)
    }
  }

  return data as ContentFrontmatter
}

// 計算閱讀時間（基於中文字符數）
function calculateReadingTime(content: string): number {
  const chineseChars = content.match(/[\u4e00-\u9fff]/g)?.length || 0
  const englishWords = content.match(/[a-zA-Z]+/g)?.length || 0
  
  // 中文：每分鐘 300 字，英文：每分鐘 200 字
  const chineseTime = chineseChars / 300
  const englishTime = englishWords / 200
  
  return Math.ceil(chineseTime + englishTime) || 1
}

// 提取內容摘要
function extractExcerpt(content: string, maxLength: number = 200): string {
  // 移除 MDX 標記和程式碼區塊
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*([^*]*)\*\*/g, '$1')
    .replace(/\*([^*]*)\*/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim()

  if (cleanContent.length <= maxLength) {
    return cleanContent
  }

  return cleanContent.slice(0, maxLength).trim() + '...'
}

// 遞迴掃描內容目錄
function scanContentDirectory(dir: string): ContentItem[] {
  const items: ContentItem[] = []
  
  if (!fs.existsSync(dir)) {
    return items
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      items.push(...scanContentDirectory(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      try {
        const fileContent = fs.readFileSync(fullPath, 'utf-8')
        const { data, content } = matter(fileContent)
        
        const frontmatter = validateFrontmatter(data, fullPath)
        
        // 生成 slug 和路徑
        const relativePath = path.relative(CONTENT_DIR, fullPath)
        const slug = path.basename(entry.name, '.mdx')
        const pathSegments = relativePath.replace('.mdx', '').split(path.sep)
        
        const item: ContentItem = {
          ...frontmatter,
          slug,
          path: `/${pathSegments.join('/')}`,
          excerpt: extractExcerpt(content),
          readingTime: calculateReadingTime(content)
        }

        items.push(item)
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error)
        // 在嚴格模式下，讓 build 失敗
        if (process.env.NODE_ENV === 'production') {
          throw error
        }
      }
    }
  }

  return items
}

// 生成搜尋索引
export function generateSearchIndex(): SearchIndex {
  const items = scanContentDirectory(CONTENT_DIR)
  
  // 提取唯一值
  const domains = [...new Set(items.map(item => item.domain))] as Domain[]
  const categories = [...new Set(items.map(item => item.category))]
  const tags = [...new Set(items.flatMap(item => item.tags))]
  const techStacks = [...new Set(items.flatMap(item => item.tech))]
  const intents = [...new Set(items.flatMap(item => item.intent))]

  return {
    items: items.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()),
    domains,
    categories,
    tags,
    techStacks,
    intents
  }
}

// 根據路徑獲取內容
export function getContentByPath(contentPath: string): ContentItem | null {
  const fullPath = path.join(CONTENT_DIR, `${contentPath}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  try {
    const fileContent = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContent)
    
    const frontmatter = validateFrontmatter(data, fullPath)
    const slug = path.basename(contentPath)
    
    return {
      ...frontmatter,
      slug,
      path: contentPath,
      excerpt: extractExcerpt(content),
      readingTime: calculateReadingTime(content)
    }
  } catch (error) {
    console.error(`Error loading content ${contentPath}:`, error)
    return null
  }
}

// 獲取 MDX 內容（用於渲染）
export function getMDXContent(contentPath: string): { frontmatter: ContentFrontmatter; content: string } | null {
  const fullPath = path.join(CONTENT_DIR, `${contentPath}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  try {
    const fileContent = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContent)
    
    const frontmatter = validateFrontmatter(data, fullPath)
    
    return { frontmatter, content }
  } catch (error) {
    console.error(`Error loading MDX content ${contentPath}:`, error)
    return null
  }
}

// 根據條件篩選內容
export function filterContent(
  items: ContentItem[],
  filters: {
    domain?: Domain
    category?: string
    tags?: string[]
    tech?: string[]
    intent?: string[]
  }
): ContentItem[] {
  return items.filter(item => {
    if (filters.domain && item.domain !== filters.domain) return false
    if (filters.category && item.category !== filters.category) return false
    
    if (filters.tags && filters.tags.length > 0) {
      if (!filters.tags.some(tag => item.tags.includes(tag))) return false
    }
    
    if (filters.tech && filters.tech.length > 0) {
      if (!filters.tech.some(tech => item.tech.includes(tech as any))) return false
    }
    
    if (filters.intent && filters.intent.length > 0) {
      if (!filters.intent.some(intent => item.intent.includes(intent as any))) return false
    }
    
    return true
  })
}

// 獲取相關內容
export function getRelatedContent(item: ContentItem, allItems: ContentItem[], limit: number = 5): ContentItem[] {
  const related = allItems
    .filter(other => other.path !== item.path)
    .map(other => {
      let score = 0
      
      // 相同領域 +2
      if (other.domain === item.domain) score += 2
      
      // 相同分類 +3
      if (other.category === item.category) score += 3
      
      // 共同標籤 +1 per tag
      const commonTags = other.tags.filter(tag => item.tags.includes(tag))
      score += commonTags.length
      
      // 共同技術 +2 per tech
      const commonTech = other.tech.filter(tech => item.tech.includes(tech))
      score += commonTech.length * 2
      
      // 共同意圖 +2 per intent
      const commonIntent = other.intent.filter(intent => item.intent.includes(intent))
      score += commonIntent.length * 2
      
      return { item: other, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item)

  return related
}

// Build 時生成靜態索引檔案
export function buildStaticIndex(): void {
  const index = generateSearchIndex()
  const outputPath = path.join(process.cwd(), 'public', 'search-index.json')
  
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2))
  
  console.log(`Generated search index with ${index.items.length} items`)
}