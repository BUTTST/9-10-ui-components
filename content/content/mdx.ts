import { ExampleItem } from '@/components/ExampleCard';

export const mdxExamples: ExampleItem[] = [
  {
    id: 'component-in-markdown',
    title: 'MDX 元件整合',
    description: '在 Markdown 中使用 React 元件',
    badges: ['MDX', 'React', 'Markdown'],
    demo: `
      <div class="prose dark:prose-invert">
        <h3>MDX 範例</h3>
        <p>這是一般的 Markdown 文字。</p>
        <div class="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <p>這是嵌入的 React 元件</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded">互動按鈕</button>
        </div>
      </div>
    `,
    code: `---
title: MDX 文件
author: 作者名稱
---

# MDX 範例

這是一般的 Markdown 內容。

<Button onClick={() => alert('點擊!')}>
  點擊我
</Button>

## 使用變數

export const name = 'MDX';

歡迎使用 {name}！

<Card>
  <CardHeader>卡片標題</CardHeader>
  <CardContent>
    這是卡片內容，可以包含任何 React 元件。
  </CardContent>
</Card>`,
    explain: `<h4>MDX 特點</h4>
      <ul>
        <li>Markdown + JSX 混合</li>
        <li>導入和使用元件</li>
        <li>支援 JavaScript 表達式</li>
        <li>Frontmatter 元資料</li>
      </ul>`,
    prompt: '請建立 MDX 文件，包含 React 元件、變數和 Frontmatter',
  },
];