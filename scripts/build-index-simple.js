#!/usr/bin/env node

/**
 * 簡化版建置索引腳本（不依賴外部套件）
 */

const fs = require('fs')
const path = require('path')

const CONTENT_DIR = path.join(process.cwd(), 'content')
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'search-index.json')

// 簡單的 frontmatter 解析
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
  if (!match) return { data: {}, content }

  const frontmatterText = match[1]
  const bodyContent = content.slice(match[0].length).trim()

  // 簡單的 YAML 解析（僅支援基本格式）
  const data = {}
  const lines = frontmatterText.split('\n')
  let currentKey = null
  let arrayMode = false

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    if (trimmed.startsWith('- ')) {
      // 陣列項目
      if (currentKey && arrayMode) {
        if (!Array.isArray(data[currentKey])) data[currentKey] = []
        data[currentKey].push(trimmed.slice(2).replace(/['"]/g, ''))
      }
    } else if (trimmed.includes(':')) {
      // 鍵值對
      const [key, ...valueParts] = trimmed.split(':')
      const value = valueParts.join(':').trim()
      
      if (value.startsWith('[') && value.endsWith(']')) {
        // 陣列格式 [item1, item2]
        const items = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''))
        data[key.trim()] = items
        arrayMode = false
      } else if (value === '') {
        // 多行陣列開始
        currentKey = key.trim()
        arrayMode = true
        data[currentKey] = []
      } else {
        // 一般值
        data[key.trim()] = value.replace(/['"]/g, '')
        arrayMode = false
      }
    }
  }

  return { data, content: bodyContent }
}

// 提取內容摘要
function extractExcerpt(content, maxLength = 200) {
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

// 計算閱讀時間
function calculateReadingTime(content) {
  const chineseChars = content.match(/[\u4e00-\u9fff]/g)?.length || 0
  const englishWords = content.match(/[a-zA-Z]+/g)?.length || 0
  
  const chineseTime = chineseChars / 300
  const englishTime = englishWords / 200
  
  return Math.ceil(chineseTime + englishTime) || 1
}

// 掃描內容目錄
function scanContentDirectory(dir) {
  const items = []
  
  if (!fs.existsSync(dir)) {
    console.warn(`Content directory not found: ${dir}`)
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
        const { data, content } = parseFrontmatter(fileContent)
        
        // 基本驗證
        if (!data.title || !data.description) {
          console.warn(`Skipping ${fullPath}: missing title or description`)
          continue
        }

        // 生成路徑
        const relativePath = path.relative(CONTENT_DIR, fullPath)
        const slug = path.basename(entry.name, '.mdx')
        const pathSegments = relativePath.replace('.mdx', '').split(path.sep)
        
        const item = {
          title: data.title,
          description: data.description,
          domain: data.domain || 'frontend',
          tech: Array.isArray(data.tech) ? data.tech : [],
          intent: Array.isArray(data.intent) ? data.intent : [],
          category: data.category || 'uncategorized',
          tags: Array.isArray(data.tags) ? data.tags : [],
          updated: data.updated || '2024-01-15',
          slug,
          path: `/${pathSegments.join('/')}`,
          excerpt: extractExcerpt(content),
          readingTime: calculateReadingTime(content)
        }

        items.push(item)
        console.log(`✓ Processed: ${relativePath}`)
      } catch (error) {
        console.error(`✗ Error processing ${fullPath}:`, error.message)
      }
    }
  }

  return items
}

// 生成搜尋索引
function generateSearchIndex() {
  console.log('🔍 Generating search index...')
  
  const items = scanContentDirectory(CONTENT_DIR)
  
  if (items.length === 0) {
    console.warn('No content items found!')
  }

  // 提取唯一值
  const domains = [...new Set(items.map(item => item.domain))]
  const categories = [...new Set(items.map(item => item.category))]
  const tags = [...new Set(items.flatMap(item => item.tags))]
  const techStacks = [...new Set(items.flatMap(item => item.tech))]
  const intents = [...new Set(items.flatMap(item => item.intent))]

  const index = {
    items: items.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()),
    domains,
    categories,
    tags,
    techStacks,
    intents,
    generatedAt: new Date().toISOString()
  }

  // 確保輸出目錄存在
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  
  // 寫入索引檔案
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(index, null, 2))
  
  console.log(`✅ Generated search index with ${index.items.length} items`)
  console.log(`📝 Index saved to: ${OUTPUT_PATH}`)
  
  return index
}

// 執行建置
if (require.main === module) {
  try {
    generateSearchIndex()
  } catch (error) {
    console.error('❌ Build failed:', error.message)
    process.exit(1)
  }
}

module.exports = { generateSearchIndex }