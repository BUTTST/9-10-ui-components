# 技術語法 × 成果演示庫（完整版）

## 🎯 專案概述
純前端技術展示平台，提供完整的程式碼範例、即時預覽、說明文件和 AI 提示詞模板。

## ✅ 驗收清單

### 核心功能
- [x] **首頁**：三大入口（前端/視覺動效/內容格式），清爽無搜尋
- [x] **前端技術**：HTML5、CSS、Tailwind、TypeScript、React、Next.js、圖表、圖示
- [x] **視覺動效**：Framer Motion、GSAP（含 ScrollTrigger）
- [x] **內容格式**：Markdown、Mermaid、MDX、Frontmatter
- [x] **範例卡片**：四分頁（Demo/Code/Explain/Prompt）即看即懂
- [x] **AI 提示詞**：分類整理的提示詞模板，一鍵複製
- [x] **設計語彙**：設計術語對應技術實作的快速查詢表

### 技術實現
- [x] **客戶端渲染**：Chart.js、Mermaid、GSAP 僅在客戶端載入
- [x] **靜態輸出**：支援 GitHub Pages 部署
- [x] **響應式設計**：手機體驗良好
- [x] **深色模式**：沿用既有邏輯
- [x] **TypeScript**：完整型別定義

## 📁 專案結構

```
app/
├── page.tsx                 # 首頁三入口
├── frontend/               # 前端技術
│   ├── html5/
│   ├── css/
│   ├── tailwind/
│   ├── typescript/
│   ├── react/
│   ├── nextjs/
│   ├── charts/
│   └── icons/
├── motion/                 # 視覺動效
│   ├── framer/
│   └── gsap/
├── content/                # 內容格式
│   ├── markdown/
│   ├── mermaid/
│   ├── mdx/
│   └── frontmatter/
├── prompts/                # AI 提示詞
└── lexicon/                # 設計語彙

components/
├── ExampleCard.tsx         # 核心展示卡片
├── ChartRenderer.tsx       # 圖表動態載入
├── MermaidRenderer.tsx     # Mermaid 客戶端渲染
├── GsapBox.tsx            # GSAP 動畫元件
├── FramerDemo.tsx         # Framer Motion 展示
└── CopyButton.tsx         # 複製按鈕

content/
├── frontend/              # 前端範例資料
├── motion/                # 動效範例資料
└── content/               # 內容格式範例
```

## 🚀 快速開始

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置專案
npm run build

# 靜態輸出
npm run export
```

## 📊 完成度統計

- **前端技術**：8 個主題，共 44+ 個範例
- **視覺動效**：2 個主題，共 6+ 個範例  
- **內容格式**：4 個主題，共 7+ 個範例
- **AI 提示詞**：7 個分類模板
- **設計語彙**：20+ 條映射關係

## 🎨 特色功能

1. **四分頁展示**：Demo 即時預覽、Code 完整程式碼、Explain 詳細說明、Prompt AI 提示詞
2. **客戶端渲染**：大型庫（Chart.js、Mermaid、GSAP）僅在需要時載入
3. **一鍵複製**：程式碼和提示詞都可快速複製使用
4. **響應式設計**：完美支援手機、平板、桌面裝置

## 📝 注意事項

- 所有第三方渲染庫採用客戶端動態載入，避免 SSR 問題
- 專案可完全靜態輸出，適合部署到 GitHub Pages
- 深色模式自動跟隨系統設定

## 🔧 技術棧

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Chart.js + react-chartjs-2
- Framer Motion
- GSAP + ScrollTrigger
- Mermaid
- react-icons

---

**完成度：約 70%**
核心功能已完整實現，可正常運行和靜態輸出。