import { ExampleItem } from '@/components/ExampleCard';

export const frontmatterExamples: ExampleItem[] = [
  {
    id: 'yaml-metadata',
    title: 'Frontmatter YAML',
    description: '文件元資料定義',
    badges: ['YAML', 'Frontmatter', 'Metadata'],
    demo: `
      <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
        <h3 class="font-bold mb-2">文章資訊</h3>
        <dl class="space-y-1 text-sm">
          <dt class="inline font-medium">標題：</dt>
          <dd class="inline">Next.js 教學</dd><br/>
          <dt class="inline font-medium">作者：</dt>
          <dd class="inline">John Doe</dd><br/>
          <dt class="inline font-medium">日期：</dt>
          <dd class="inline">2024-01-15</dd><br/>
          <dt class="inline font-medium">標籤：</dt>
          <dd class="inline">React, Next.js, Web</dd>
        </dl>
      </div>
    `,
    code: `---
title: Next.js 完整教學
author: John Doe
date: 2024-01-15
tags:
  - React
  - Next.js
  - Web Development
categories:
  - Tutorial
  - Frontend
description: 從零開始學習 Next.js
image: /images/nextjs-cover.jpg
published: true
featured: true
---

# Next.js 完整教學

文章內容開始...`,
    explain: `<h4>Frontmatter 用途</h4>
      <ul>
        <li>定義文章元資料</li>
        <li>SEO 優化資訊</li>
        <li>分類和標籤</li>
        <li>控制顯示邏輯</li>
      </ul>`,
    prompt: '請建立包含完整 Frontmatter 的 Markdown 文件，包含標題、作者、日期、標籤等',
  },
];