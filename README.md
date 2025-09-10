# 設計意圖速查站 (Design to Code Hub)

一站式前端開發速查平台，將設計構想快速轉換為可執行的 React + TypeScript + Tailwind 程式碼，並提供精準的 AI 命令模板。

## 🎯 專案目標

- **縮短落地時間**：從設計語彙（卡片、表單、導覽列、動畫）直達可複製的程式碼與配置
- **精準 AI 指令**：提供結構化 AI Prompt 模板，讓您能精準命令 AI 生成對的元件
- **一致與可擴充**：清楚的內容模型與檔案結構，可持續新增條目、長期維護

## 🚀 技術棧

### 核心技術
- **Next.js 14** (App Router) - React 框架
- **TypeScript** (嚴格模式) - 型別安全
- **Tailwind CSS** - 原子化 CSS 框架
- **MDX** - Markdown + JSX 內容系統

### 專業功能
- **Chart.js + react-chartjs-2** - 資料視覺化
- **Framer Motion** - 動畫系統
- **GSAP** - 高階動畫
- **Font Awesome** - 圖示系統
- **Fuse.js** - 前端搜尋
- **Mermaid** - 圖表渲染

### 開發工具
- **ESLint + Prettier** - 程式碼品質
- **Gray Matter** - Frontmatter 解析
- **React Hook Form + Zod** - 表單驗證

## 📁 專案結構

```
design-to-code-hub/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全域樣式
│   ├── layout.tsx         # 根佈局
│   └── page.tsx           # 首頁
├── components/            # React 元件
│   ├── CodeBlock.tsx      # 程式碼區塊
│   ├── PreviewPane.tsx    # 預覽面板
│   ├── AIPromptCard.tsx   # AI 命令模板卡片
│   ├── IntentMapping.tsx  # 設計意圖對照表
│   ├── Sidebar.tsx        # 側邊欄導航
│   ├── SearchBox.tsx      # 搜尋框
│   ├── DomainTabs.tsx     # 領域切換
│   ├── ThemeToggle.tsx    # 主題切換
│   ├── TagPills.tsx       # 標籤藥丸
│   └── RelatedList.tsx    # 相關內容列表
├── content/               # MDX 內容
│   ├── frontend/          # 前端實作
│   │   ├── ui/           # UI 元件
│   │   ├── layout/       # 佈局系統
│   │   ├── form/         # 表單處理
│   │   ├── chart/        # 圖表系統
│   │   ├── icons/        # 圖示系統
│   │   └── motion/       # 動畫效果
│   └── notes/             # 筆記參考
│       ├── html5/        # HTML5 語法
│       ├── markdown/     # Markdown 語法
│       └── mermaid/      # Mermaid 圖表
├── lib/                   # 工具函數
│   ├── content.ts        # 內容系統
│   └── utils.ts          # 通用工具
├── types/                 # TypeScript 型別
│   ├── content.ts        # 內容型別
│   └── components.ts     # 元件型別
├── scripts/               # 建置腳本
│   └── build-index.js    # 搜尋索引生成
└── public/               # 靜態資源
    └── search-index.json # 搜尋索引
```

## 🛠️ 安裝與開發

### 環境需求
- Node.js 18.0+
- npm 或 yarn

### 快速開始

```bash
# 複製專案
git clone https://github.com/your-repo/design-to-code-hub.git
cd design-to-code-hub

# 安裝依賴
npm install

# 生成搜尋索引
npm run build:index

# 啟動開發伺服器
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 可用指令

```bash
npm run dev          # 啟動開發伺服器
npm run build        # 建置生產版本
npm run build:index  # 生成搜尋索引
npm run start        # 啟動生產伺服器
npm run lint         # 執行 ESLint 檢查
npm run format       # 格式化程式碼
```

## 📝 內容管理

### 新增設計意圖主題

1. **建立 MDX 檔案**

在適當的分類目錄下建立新的 `.mdx` 檔案：

```
content/
├── frontend/
│   ├── ui/           # UI 元件類
│   ├── layout/       # 佈局類
│   ├── form/         # 表單類
│   ├── chart/        # 圖表類
│   ├── icons/        # 圖示類
│   └── motion/       # 動畫類
└── notes/
    ├── html5/        # HTML5 參考
    ├── markdown/     # Markdown 語法
    └── mermaid/      # 圖表語法
```

2. **Frontmatter 結構**

每個 MDX 檔案必須包含完整的 frontmatter：

```yaml
---
title: "元件標題"
description: "簡短描述，用於搜尋和預覽"
domain: "frontend"  # 或 "notes"
tech: ["react", "tailwind", "typescript"]
intent: ["卡片", "微互動"]
category: "ui"
tags: ["元件", "響應式", "無障礙"]
updated: "2024-01-15"  # YYYY-MM-DD 格式
design_intent:
  goal: "建立目標描述"
  constraints: ["限制條件1", "限制條件2"]
  variations: ["變體1", "變體2"]
react_patterns: ["模式1", "模式2"]
tailwind_tokens:
  spacing: "p-4, gap-6"
  colors: "bg-white dark:bg-gray-800"
next_features: ["功能1", "功能2"]
ts_types: ["型別1", "型別2"]
ai_prompt: |
  多行 AI 命令模板
  包含具體的技術需求
  和實作細節
links:
  - label: "參考連結標題"
    url: "https://example.com"
---
```

3. **內容撰寫指南**

- **使用繁體中文**撰寫所有內容
- **包含程式碼範例**和即時預覽
- **提供 AI Prompt**，可直接複製使用
- **說明常見陷阱**與解決方案
- **注重無障礙設計**要點

### 內容區塊範例

```markdown
# 元件標題

元件的基本介紹和使用場景。

## 基礎實作

### TypeScript 型別定義

\```typescript
export interface ComponentProps {
  // 型別定義
}
\```

### 元件實作

\```tsx
export const Component = ({ ...props }: ComponentProps) => {
  // 實作內容
}
\```

## 使用範例

\```tsx
<Component prop="value" />
\```

## 常見陷阱與解決方案

### 1. 問題描述
\```tsx
// ❌ 錯誤做法
// ✅ 正確做法
\```

## 無障礙設計要點

1. **重點一**：說明
2. **重點二**：說明
```

### 特殊內容類型

#### 圖表相關 (Chart.js)
```markdown
## Chart.js 實作

\```tsx
import { Line, Bar, Pie } from 'react-chartjs-2'

// 圖表元件實作
\```
```

#### 動畫相關 (Framer Motion / GSAP)
```markdown
## 動畫效果

\```tsx
import { motion } from 'framer-motion'

// 動畫變體定義
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}
\```
```

#### 圖示相關 (Font Awesome)
```markdown
## 圖示使用

\```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcon } from '@fortawesome/free-solid-svg-icons'

// 圖示元件
\```
```

4. **重新生成索引**

新增內容後，執行以下指令更新搜尋索引：

```bash
npm run build:index
```

## 🎨 設計系統

### 主題配色

```css
/* 主要色彩 */
--primary: #3b82f6;      /* 藍色 */
--secondary: #8b5cf6;    /* 紫色 */
--success: #10b981;      /* 綠色 */
--warning: #f59e0b;      /* 黃色 */
--danger: #ef4444;       /* 紅色 */

/* 中性色 */
--gray-50: #f9fafb;
--gray-900: #111827;
```

### 間距系統

```css
/* Tailwind 間距 token */
gap-4     /* 1rem */
gap-6     /* 1.5rem */
gap-8     /* 2rem */
p-4       /* padding: 1rem */
p-6       /* padding: 1.5rem */
```

### 圓角系統

```css
rounded-lg     /* 0.5rem */
rounded-xl     /* 0.75rem */
rounded-2xl    /* 1rem */
```

## 🔍 搜尋系統

搜尋功能基於 Fuse.js，支援以下欄位：

- **標題** (title)
- **描述** (description)
- **標籤** (tags)
- **技術棧** (tech)
- **設計意圖** (intent)
- **分類** (category)
- **內容摘要** (excerpt)

### 搜尋權重

```javascript
const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.3 },
    { name: 'description', weight: 0.2 },
    { name: 'tags', weight: 0.2 },
    { name: 'tech', weight: 0.15 },
    { name: 'intent', weight: 0.1 },
    { name: 'excerpt', weight: 0.05 }
  ]
}
```

## 🚀 部署

### Vercel 部署 (推薦)

1. 將程式碼推送到 GitHub
2. 在 Vercel 中匯入專案
3. 設定建置指令：`npm run build`
4. 自動部署完成

### 其他平台

```bash
# 建置靜態檔案
npm run build

# 啟動生產伺服器
npm start
```

## 🤝 貢獻指南

歡迎貢獻新的設計意圖主題或改善現有內容！

### 貢獻流程

1. **Fork** 專案
2. **建立分支** (`git checkout -b feature/new-component`)
3. **新增內容** 遵循內容撰寫指南
4. **測試** 確保建置成功 (`npm run build`)
5. **提交** (`git commit -m 'Add new component guide'`)
6. **推送** (`git push origin feature/new-component`)
7. **建立 Pull Request**

### 內容品質標準

- ✅ 使用繁體中文撰寫
- ✅ 包含完整的 frontmatter
- ✅ 提供可執行的程式碼範例
- ✅ 包含 AI Prompt 模板
- ✅ 說明無障礙設計要點
- ✅ 通過 TypeScript 嚴格檢查
- ✅ 遵循 ESLint 規則

## 📚 相關資源

### 官方文檔
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### 設計系統參考
- [Headless UI](https://headlessui.com)
- [Radix UI](https://www.radix-ui.com)
- [Chakra UI](https://chakra-ui.com)

### 無障礙資源
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE) 檔案

## 🙏 致謝

感謝所有為前端開發社群貢獻的開發者們，以及以下開源專案：

- Next.js Team
- Tailwind Labs
- Framer Motion
- Chart.js
- Font Awesome
- 所有相關的開源專案

---

**設計意圖速查站** - 讓設計構想快速轉化為高品質程式碼 🚀