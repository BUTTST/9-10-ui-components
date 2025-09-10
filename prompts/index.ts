export interface PromptTemplate {
  group: string;
  title: string;
  body: string;
}

export const prompts: PromptTemplate[] = [
  // 前端通用
  {
    group: '前端通用',
    title: 'React + TypeScript + Tailwind 元件',
    body: `請建立一個 React 元件，使用 TypeScript 和 Tailwind CSS，要求：
1. 完整的 TypeScript 型別定義
2. 使用 Tailwind 類別進行樣式設計
3. 支援深色模式（dark:）
4. 包含互動狀態（hover、focus）
5. 提供繁體中文註解
6. 遵循 React 最佳實踐`,
  },
  {
    group: '前端通用',
    title: '響應式布局',
    body: `請使用 Tailwind CSS 建立響應式布局，要求：
1. 手機優先設計（mobile-first）
2. 包含 sm、md、lg、xl 斷點
3. Grid 或 Flexbox 布局
4. 適當的間距和內距
5. 深色模式支援`,
  },
  
  // Chart.js
  {
    group: 'Chart.js',
    title: '互動式圖表',
    body: `使用 react-chartjs-2 建立互動式圖表，要求：
1. 包含完整的資料集
2. 自訂顏色和樣式
3. 響應式設計
4. 包含圖例和工具提示
5. 支援動態更新
6. TypeScript 型別定義`,
  },
  
  // Framer Motion
  {
    group: 'Framer Motion',
    title: '進場動畫序列',
    body: `使用 Framer Motion 建立進場動畫，要求：
1. stagger 子元素動畫
2. 使用 variants 定義動畫
3. whileHover 和 whileTap 互動
4. 適當的 transition 設定
5. 在 Next.js App Router 中使用（'use client'）`,
  },
  
  // GSAP
  {
    group: 'GSAP',
    title: 'ScrollTrigger 動畫',
    body: `使用 GSAP 和 ScrollTrigger 建立捲動動畫，要求：
1. 進入視窗時觸發動畫
2. scrub 選項與捲動同步
3. 包含多個動畫元素
4. 適當的 cleanup 函式
5. React useEffect 整合`,
  },
  
  // Markdown
  {
    group: 'Markdown',
    title: '技術文件模板',
    body: `請生成 Markdown 格式的技術文件，包含：
1. 多層級標題（H1-H3）
2. 程式碼區塊（含語法高亮）
3. 表格（含對齊設定）
4. 清單（有序、無序、任務清單）
5. 連結和圖片
6. 引用區塊`,
  },
  
  // TypeScript
  {
    group: 'TypeScript',
    title: '型別定義完整元件',
    body: `建立 TypeScript React 元件，要求：
1. 完整的 Props 介面定義
2. 泛型元件支援
3. 事件處理器型別
4. 自訂 Hook 與型別
5. Discriminated Union 狀態管理
6. 嚴格模式相容`,
  },
];

export const getPromptsByGroup = () => {
  const grouped: Record<string, PromptTemplate[]> = {};
  
  prompts.forEach(prompt => {
    if (!grouped[prompt.group]) {
      grouped[prompt.group] = [];
    }
    grouped[prompt.group].push(prompt);
  });
  
  return grouped;
};