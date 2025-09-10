#!/usr/bin/env node

/**
 * 建置時生成搜尋索引
 * 掃描 content 目錄下的所有 MDX 檔案，生成搜尋索引
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const CONTENT_DIR = path.join(process.cwd(), 'content')
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'search-index.json')

// 驗證 frontmatter 型別
function validateFrontmatter(data, filePath) {
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

  return data
}

// 計算閱讀時間（基於中文字符數）
function calculateReadingTime(content) {
  const chineseChars = content.match(/[\u4e00-\u9fff]/g)?.length || 0
  const englishWords = content.match(/[a-zA-Z]+/g)?.length || 0
  
  // 中文：每分鐘 300 字，英文：每分鐘 200 字
  const chineseTime = chineseChars / 300
  const englishTime = englishWords / 200
  
  return Math.ceil(chineseTime + englishTime) || 1
}

// 提取內容摘要
function extractExcerpt(content, maxLength = 200) {
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
        const { data, content } = matter(fileContent)
        
        const frontmatter = validateFrontmatter(data, fullPath)
        
        // 生成 slug 和路徑
        const relativePath = path.relative(CONTENT_DIR, fullPath)
        const slug = path.basename(entry.name, '.mdx')
        const pathSegments = relativePath.replace('.mdx', '').split(path.sep)
        
        const item = {
          ...frontmatter,
          slug,
          path: `/${pathSegments.join('/')}`,
          excerpt: extractExcerpt(content),
          readingTime: calculateReadingTime(content)
        }

        items.push(item)
        console.log(`✓ Processed: ${relativePath}`)
      } catch (error) {
        console.error(`✗ Error processing ${fullPath}:`, error.message)
        process.exit(1) // 在建置時失敗
      }
    }
  }

  return items
}

// 生成搜尋索引
function generateSearchIndex() {
  console.log('🔍 Generating search index...')
  
  const items = scanContentDirectory(CONTENT_DIR)
  
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
  console.log(`   - ${index.domains.length} domains`)
  console.log(`   - ${index.categories.length} categories`) 
  console.log(`   - ${index.tags.length} tags`)
  console.log(`   - ${index.techStacks.length} tech stacks`)
  console.log(`   - ${index.intents.length} design intents`)
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