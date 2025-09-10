import { ExampleItem } from '@/components/ExampleCard';

export const markdownExamples: ExampleItem[] = [
  {
    id: 'basic-syntax',
    title: 'Markdown 基礎語法',
    description: '標題、文字樣式、清單等基本元素',
    badges: ['Markdown', '基礎', '語法'],
    demo: `
      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <h1>H1 標題</h1>
        <h2>H2 標題</h2>
        <h3>H3 標題</h3>
        <p>這是一段普通文字，包含<strong>粗體</strong>和<em>斜體</em>文字。</p>
        <blockquote>
          <p>這是引用區塊</p>
        </blockquote>
        <ul>
          <li>無序清單項目 1</li>
          <li>無序清單項目 2</li>
        </ul>
        <ol>
          <li>有序清單項目 1</li>
          <li>有序清單項目 2</li>
        </ol>
      </div>
    `,
    code: `# H1 標題
## H2 標題
### H3 標題
#### H4 標題
##### H5 標題
###### H6 標題

這是一段普通文字。

**粗體文字** 或 __粗體文字__
*斜體文字* 或 _斜體文字_
***粗斜體*** 或 ___粗斜體___
~~刪除線文字~~

> 這是引用區塊
> 可以有多行
>> 巢狀引用

---
分隔線（三個或更多）
***
___

## 清單

### 無序清單
- 項目 1
- 項目 2
  - 子項目 2.1
  - 子項目 2.2
- 項目 3

* 也可以用星號
+ 或加號

### 有序清單
1. 第一項
2. 第二項
   1. 子項目 2.1
   2. 子項目 2.2
3. 第三項

### 任務清單
- [x] 已完成任務
- [ ] 待辦任務
- [ ] 另一個待辦`,
    explain: `
      <h4>Markdown 優勢</h4>
      <ul>
        <li><strong>簡潔易讀</strong>：純文字格式，易於閱讀和編寫</li>
        <li><strong>跨平台</strong>：任何文字編輯器都能編輯</li>
        <li><strong>版本控制</strong>：適合 Git 追蹤變更</li>
        <li><strong>轉換靈活</strong>：可轉為 HTML、PDF 等格式</li>
      </ul>
    `,
    prompt: `請展示 Markdown 基礎語法，包含標題、文字樣式、清單、引用和分隔線`,
  },
  {
    id: 'code-blocks',
    title: '程式碼區塊',
    description: '行內程式碼和區塊程式碼的使用',
    badges: ['Markdown', '程式碼', '語法高亮'],
    demo: `
      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <p>行內程式碼：<code>const greeting = "Hello";</code></p>
        <pre><code class="language-javascript">// JavaScript 程式碼
function greet(name) {
  return \`Hello, \${name}!\`;
}

const result = greet("World");
console.log(result);</code></pre>
      </div>
    `,
    code: `## 行內程式碼
使用反引號包圍：\`const x = 42;\`

## 程式碼區塊

### 無語言指定
\`\`\`
純文字程式碼區塊
沒有語法高亮
\`\`\`

### JavaScript
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
\`\`\`

### TypeScript
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  return {
    id,
    name: "John Doe",
    email: "john@example.com"
  };
}
\`\`\`

### React JSX
\`\`\`jsx
function Button({ onClick, children }) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
\`\`\`

### CSS
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

### Shell
\`\`\`bash
# 安裝依賴
npm install

# 執行開發伺服器
npm run dev

# 建置專案
npm run build
\`\`\``,
    explain: `
      <h4>程式碼區塊特點</h4>
      <ul>
        <li><strong>語法高亮</strong>：指定語言獲得顏色標記</li>
        <li><strong>保留格式</strong>：維持縮排和空白</li>
        <li><strong>複製友好</strong>：易於複製貼上</li>
        <li><strong>多語言支援</strong>：支援各種程式語言</li>
      </ul>
    `,
    prompt: `請展示 Markdown 中的程式碼區塊用法，包含行內程式碼和多種語言的區塊程式碼`,
  },
  {
    id: 'links-images',
    title: '連結與圖片',
    description: '插入超連結和圖片的方式',
    badges: ['Markdown', '連結', '圖片'],
    demo: `
      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <p>這是一個<a href="#">連結</a>範例。</p>
        <p>這是<a href="#" title="提示文字">帶標題的連結</a>。</p>
        <img src="https://via.placeholder.com/300x200" alt="範例圖片" />
        <p>參考式連結：查看<a href="#">文件</a>和<a href="#">指南</a>。</p>
      </div>
    `,
    code: `## 連結

### 行內連結
[連結文字](https://example.com)
[帶標題的連結](https://example.com "游標提示")

### 參考式連結
[連結文字][ref1]
[另一個連結][ref2]

[ref1]: https://example.com "選擇性標題"
[ref2]: https://another-example.com

### 自動連結
<https://example.com>
<email@example.com>

## 圖片

### 行內圖片
![替代文字](image.jpg)
![帶標題的圖片](image.jpg "圖片標題")

### 參考式圖片
![Logo][logo]
![Banner][banner]

[logo]: /path/to/logo.png "公司 Logo"
[banner]: /path/to/banner.jpg

### 連結圖片
[![可點擊的圖片](thumbnail.jpg)](https://example.com)

### HTML 圖片（進階控制）
<img src="image.jpg" alt="圖片" width="300" height="200" />

<figure>
  <img src="image.jpg" alt="圖片說明" />
  <figcaption>圖片標題</figcaption>
</figure>`,
    explain: `
      <h4>連結與圖片要點</h4>
      <ul>
        <li><strong>替代文字</strong>：圖片必須有 alt 描述</li>
        <li><strong>相對路徑</strong>：使用相對路徑連結本地資源</li>
        <li><strong>參考式</strong>：重複使用的連結可用參考式</li>
        <li><strong>HTML 支援</strong>：需要更多控制時可用 HTML</li>
      </ul>
    `,
    prompt: `請展示 Markdown 中的連結和圖片語法，包含行內式、參考式和 HTML 方式`,
  },
  {
    id: 'tables',
    title: '表格',
    description: '建立和格式化表格',
    badges: ['Markdown', '表格', '對齊'],
    demo: `
      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <table>
          <thead>
            <tr>
              <th>功能</th>
              <th align="center">支援度</th>
              <th align="right">版本</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>基礎語法</td>
              <td align="center">✅</td>
              <td align="right">1.0</td>
            </tr>
            <tr>
              <td>擴展語法</td>
              <td align="center">✅</td>
              <td align="right">2.0</td>
            </tr>
            <tr>
              <td>自訂擴展</td>
              <td align="center">⚠️</td>
              <td align="right">3.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    code: `## 基本表格

| 標題 1 | 標題 2 | 標題 3 |
|--------|--------|--------|
| 內容 1 | 內容 2 | 內容 3 |
| 內容 4 | 內容 5 | 內容 6 |

## 對齊方式

| 左對齊 | 置中對齊 | 右對齊 |
|:-------|:--------:|-------:|
| 左     | 中       | 右     |
| Left   | Center   | Right  |
| 123    | 456      | 789    |

## 複雜表格

| 功能 | 說明 | 狀態 | 備註 |
|------|------|:----:|------|
| **Markdown** | 基礎文字格式 | ✅ | 支援 CommonMark |
| **MDX** | React 元件整合 | ✅ | 需要額外設定 |
| **Mermaid** | 圖表繪製 | ⚠️ | 客戶端渲染 |
| **LaTeX** | 數學公式 | ❌ | 計劃中 |

## 簡化表格（部分解析器支援）

功能 | 支援 | 版本
--- | :---: | ---:
基礎 | ✅ | 1.0
進階 | ✅ | 2.0
實驗 | ⚠️ | 3.0

## 表格中使用 Markdown

| 項目 | 描述 |
|------|------|
| **粗體** | 可以使用 **粗體** 文字 |
| *斜體* | 也支援 *斜體* |
| \`code\` | 行內 \`程式碼\` |
| [連結](url) | [可點擊連結](https://example.com) |`,
    explain: `
      <h4>表格對齊</h4>
      <ul>
        <li><strong>:---</strong>：左對齊（預設）</li>
        <li><strong>:---:</strong>：置中對齊</li>
        <li><strong>---:</strong>：右對齊</li>
        <li><strong>管線符號</strong>：使用 | 分隔欄位</li>
      </ul>
    `,
    prompt: `請建立 Markdown 表格範例，展示不同對齊方式和表格中的 Markdown 語法`,
  },
];