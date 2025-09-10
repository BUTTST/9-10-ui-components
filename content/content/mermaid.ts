import { ExampleItem } from '@/components/ExampleCard';

export const mermaidExamples: ExampleItem[] = [
  {
    id: 'flowchart',
    title: '流程圖',
    description: '使用 Mermaid 繪製流程圖',
    badges: ['Mermaid', '流程圖', '圖表'],
    deps: '需要客戶端載入 MermaidRenderer',
    demo: `<MermaidRenderer code="graph TD\n  A[開始] --> B{判斷}\n  B -->|是| C[執行]\n  B -->|否| D[結束]" />`,
    code: `graph TD
  A[開始] --> B{判斷條件}
  B -->|條件成立| C[執行動作]
  B -->|條件不成立| D[其他處理]
  C --> E[結束]
  D --> E`,
    explain: `<h4>流程圖語法</h4>
      <ul>
        <li>graph TD：從上到下</li>
        <li>graph LR：從左到右</li>
        <li>[]：矩形節點</li>
        <li>{}：菱形判斷</li>
        <li>()：圓角矩形</li>
      </ul>`,
    prompt: '請用 Mermaid 語法建立流程圖，包含判斷節點和多個分支',
  },
  {
    id: 'sequence',
    title: '序列圖',
    description: '互動時序圖',
    badges: ['Mermaid', '序列圖', 'UML'],
    deps: '需要客戶端載入 MermaidRenderer',
    demo: `<MermaidRenderer code="sequenceDiagram\n  User->>API: 請求\n  API-->>User: 回應" />`,
    code: `sequenceDiagram
  participant U as 使用者
  participant F as 前端
  participant B as 後端
  participant D as 資料庫
  
  U->>F: 點擊按鈕
  F->>B: 發送 API 請求
  B->>D: 查詢資料
  D-->>B: 返回結果
  B-->>F: JSON 回應
  F-->>U: 顯示結果`,
    explain: `<h4>序列圖元素</h4>
      <ul>
        <li>participant：參與者</li>
        <li>->>：實線箭頭</li>
        <li>-->>：虛線箭頭</li>
        <li>Note：註解</li>
      </ul>`,
    prompt: '請建立 Mermaid 序列圖，展示使用者、前端、後端的互動流程',
  },
];