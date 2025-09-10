import { ExampleItem } from '@/components/ExampleCard';

export const cssExamples: ExampleItem[] = [
  {
    id: 'button-states',
    title: '按鈕尺寸與狀態',
    description: '不同尺寸、狀態和禁用樣式的按鈕設計',
    badges: ['CSS', '按鈕', '狀態'],
    demo: `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-3">
          <button class="btn-small">小按鈕</button>
          <button class="btn-medium">中按鈕</button>
          <button class="btn-large">大按鈕</button>
        </div>
        <div class="flex flex-wrap gap-3">
          <button class="btn-primary">主要按鈕</button>
          <button class="btn-secondary">次要按鈕</button>
          <button class="btn-success">成功按鈕</button>
          <button class="btn-danger">危險按鈕</button>
        </div>
        <div class="flex flex-wrap gap-3">
          <button class="btn-primary" disabled>禁用狀態</button>
          <button class="btn-loading">
            <span class="spinner"></span>
            載入中...
          </button>
        </div>
      </div>
      <style>
        button {
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .btn-small {
          padding: 6px 12px;
          font-size: 12px;
        }
        
        .btn-medium {
          padding: 10px 20px;
          font-size: 14px;
        }
        
        .btn-large {
          padding: 14px 28px;
          font-size: 16px;
        }
        
        .btn-primary {
          background: #3b82f6;
          color: white;
          padding: 10px 20px;
        }
        
        .btn-primary:hover:not(:disabled) {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }
        
        .btn-secondary {
          background: #6b7280;
          color: white;
          padding: 10px 20px;
        }
        
        .btn-success {
          background: #10b981;
          color: white;
          padding: 10px 20px;
        }
        
        .btn-danger {
          background: #ef4444;
          color: white;
          padding: 10px 20px;
        }
        
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-loading {
          background: #3b82f6;
          color: white;
          padding: 10px 20px;
          padding-left: 36px;
        }
        
        .spinner {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        
        @keyframes spin {
          to { transform: translateY(-50%) rotate(360deg); }
        }
      </style>
    `,
    code: `/* 按鈕基礎樣式 */
.btn {
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* 尺寸變化 */
.btn-sm {
  padding: 6px 12px;
  font-size: 12px;
}

.btn-md {
  padding: 10px 20px;
  font-size: 14px;
}

.btn-lg {
  padding: 14px 28px;
  font-size: 16px;
}

/* 顏色變化 */
.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.4);
}

/* 禁用狀態 */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

/* 載入狀態 */
.btn-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn-loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spinner 0.6s linear infinite;
}

@keyframes spinner {
  to { transform: rotate(360deg); }
}`,
    explain: `
      <h4>按鈕設計要點</h4>
      <ul>
        <li><strong>視覺層級</strong>：透過顏色、大小區分重要性</li>
        <li><strong>狀態回饋</strong>：hover、active、disabled、loading</li>
        <li><strong>過渡動畫</strong>：使用 transition 提供流暢體驗</li>
        <li><strong>無障礙性</strong>：確保對比度和焦點樣式</li>
      </ul>
      <h4>最佳實踐</h4>
      <ul>
        <li>最小點擊區域 44x44px（行動裝置）</li>
        <li>明確的視覺回饋</li>
        <li>一致的設計語言</li>
        <li>適當的內邊距和字體大小</li>
      </ul>
    `,
    prompt: `請建立一套完整的 CSS 按鈕樣式系統，包含：
1. 三種尺寸（小、中、大）
2. 四種顏色（主要、次要、成功、危險）
3. 狀態樣式（hover、active、disabled）
4. 載入動畫效果
5. 平滑的過渡動畫
使用純 CSS 實現，加上繁體中文註解`,
  },
  {
    id: 'grid-layouts',
    title: 'Grid 三欄與聖杯布局',
    description: '使用 CSS Grid 實現複雜版面配置',
    badges: ['CSS', 'Grid', '版面'],
    demo: `
      <div class="space-y-6">
        <div>
          <h4 class="font-semibold mb-2">三欄等寬布局</h4>
          <div class="grid-three-columns">
            <div class="grid-item">第一欄</div>
            <div class="grid-item">第二欄</div>
            <div class="grid-item">第三欄</div>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">聖杯布局</h4>
          <div class="holy-grail">
            <header class="grid-header">頁首</header>
            <nav class="grid-nav">側邊導航</nav>
            <main class="grid-main">主要內容區域</main>
            <aside class="grid-aside">側邊欄</aside>
            <footer class="grid-footer">頁尾</footer>
          </div>
        </div>
      </div>
      <style>
        .grid-three-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .grid-item {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 8px;
        }
        
        .holy-grail {
          display: grid;
          grid-template-areas:
            "header header header"
            "nav main aside"
            "footer footer footer";
          grid-template-columns: 200px 1fr 200px;
          grid-template-rows: 60px 1fr 60px;
          gap: 10px;
          min-height: 400px;
        }
        
        .grid-header {
          grid-area: header;
          background: #3b82f6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
        
        .grid-nav {
          grid-area: nav;
          background: #8b5cf6;
          color: white;
          padding: 20px;
          border-radius: 8px;
        }
        
        .grid-main {
          grid-area: main;
          background: #f3f4f6;
          padding: 20px;
          border-radius: 8px;
        }
        
        .grid-aside {
          grid-area: aside;
          background: #ec4899;
          color: white;
          padding: 20px;
          border-radius: 8px;
        }
        
        .grid-footer {
          grid-area: footer;
          background: #6b7280;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
        
        @media (max-width: 768px) {
          .grid-three-columns {
            grid-template-columns: 1fr;
          }
          
          .holy-grail {
            grid-template-areas:
              "header"
              "nav"
              "main"
              "aside"
              "footer";
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
        }
      </style>
    `,
    code: `/* 三欄等寬布局 */
.three-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* 自動響應式三欄 */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* 聖杯布局 */
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 10px;
}

.header { grid-area: header; }
.nav    { grid-area: nav; }
.main   { grid-area: main; }
.aside  { grid-area: aside; }
.footer { grid-area: footer; }

/* 響應式處理 */
@media (max-width: 768px) {
  .holy-grail {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}

/* 複雜網格布局 */
.complex-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}

.item-wide {
  grid-column: span 2;
}

.item-tall {
  grid-row: span 2;
}

.item-large {
  grid-column: span 2;
  grid-row: span 2;
}

/* 網格對齊 */
.grid-container {
  display: grid;
  justify-items: center;  /* 水平對齊 */
  align-items: center;    /* 垂直對齊 */
  justify-content: space-between;  /* 網格軌道分布 */
  align-content: center;  /* 垂直軌道分布 */
}`,
    explain: `
      <h4>CSS Grid 核心概念</h4>
      <ul>
        <li><strong>grid-template-columns</strong>：定義欄位</li>
        <li><strong>grid-template-rows</strong>：定義列</li>
        <li><strong>grid-template-areas</strong>：命名區域布局</li>
        <li><strong>gap</strong>：網格間距</li>
        <li><strong>fr 單位</strong>：彈性軌道尺寸</li>
      </ul>
      <h4>聖杯布局特點</h4>
      <ul>
        <li>頁首和頁尾橫跨整個寬度</li>
        <li>主內容區域彈性伸縮</li>
        <li>兩側固定寬度側邊欄</li>
        <li>響應式自動堆疊</li>
      </ul>
    `,
    prompt: `請使用 CSS Grid 建立以下布局：
1. 三欄等寬布局
2. 聖杯布局（header、nav、main、aside、footer）
3. 自動響應式網格
4. 包含 span 的複雜網格
5. 手機版自動堆疊
加上繁體中文註解說明每個屬性的作用`,
  },
  {
    id: 'text-truncation',
    title: '文字截斷技巧',
    description: '單行、多行文字截斷與 line-clamp',
    badges: ['CSS', '文字', '排版'],
    demo: `
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold mb-2">單行文字截斷</h4>
          <div class="single-line-truncate">
            這是一段很長很長的文字，會在超過容器寬度時自動截斷並顯示省略號，這是前端開發中常見的文字處理技巧。
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">多行文字截斷（2行）</h4>
          <div class="multi-line-truncate-2">
            這是一段測試多行文字截斷的內容。當文字內容超過指定的行數時，會自動在最後顯示省略號。這個技巧在卡片式設計中特別有用，可以保持版面的整齊一致。Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">多行文字截斷（3行）</h4>
          <div class="multi-line-truncate-3">
            使用 -webkit-line-clamp 屬性可以精確控制顯示的行數。這個屬性需要配合 display: -webkit-box 和 -webkit-box-orient: vertical 使用。雖然有 -webkit 前綴，但現代瀏覽器都支援這個屬性。這是目前實現多行文字截斷最簡單可靠的方法。在實際應用中，這個技巧經常用於新聞摘要、產品描述等場景。
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">漸變淡出效果</h4>
          <div class="fade-out-text">
            這段文字會在底部呈現漸變淡出的效果，而不是使用省略號。這種效果給人一種內容逐漸消失的視覺感受，適合用於預覽內容。透過線性漸變遮罩可以實現這個效果。
          </div>
        </div>
      </div>
      <style>
        .single-line-truncate {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 10px;
          background: #f3f4f6;
          border-radius: 6px;
        }
        
        .multi-line-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          padding: 10px;
          background: #fef3c7;
          border-radius: 6px;
          line-height: 1.5;
        }
        
        .multi-line-truncate-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          padding: 10px;
          background: #dbeafe;
          border-radius: 6px;
          line-height: 1.5;
        }
        
        .fade-out-text {
          position: relative;
          max-height: 4.5em;
          overflow: hidden;
          padding: 10px;
          background: #ede9fe;
          border-radius: 6px;
          line-height: 1.5;
        }
        
        .fade-out-text::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1.5em;
          background: linear-gradient(to bottom, transparent, #ede9fe);
        }
      </style>
    `,
    code: `/* 單行文字截斷 */
.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 多行文字截斷 - 標準方法 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 多行文字截斷 - 備用方法（固定高度） */
.text-truncate-fallback {
  overflow: hidden;
  display: block;
  max-height: 3em;  /* 行高 × 行數 */
  line-height: 1.5em;
  position: relative;
}

.text-truncate-fallback::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 20px;
  background: linear-gradient(to right, transparent, white 50%);
}

/* 漸變淡出效果 */
.text-fade-out {
  position: relative;
  max-height: 100px;
  overflow: hidden;
}

.text-fade-out::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 1)
  );
}

/* 展開/收合動畫 */
.text-expandable {
  max-height: 3em;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.text-expandable.expanded {
  max-height: none;
}

/* 響應式文字截斷 */
@media (max-width: 768px) {
  .responsive-clamp {
    -webkit-line-clamp: 2;
  }
}

@media (min-width: 769px) {
  .responsive-clamp {
    -webkit-line-clamp: 4;
  }
}`,
    explain: `
      <h4>文字截斷方法</h4>
      <ul>
        <li><strong>單行截斷</strong>：使用 text-overflow: ellipsis</li>
        <li><strong>多行截斷</strong>：使用 -webkit-line-clamp</li>
        <li><strong>漸變淡出</strong>：使用偽元素和漸變</li>
        <li><strong>固定高度</strong>：設定 max-height 配合 overflow</li>
      </ul>
      <h4>注意事項</h4>
      <ul>
        <li>line-clamp 需要配合 -webkit-box 顯示</li>
        <li>確保父容器有明確寬度</li>
        <li>考慮不同語言的顯示效果</li>
        <li>提供完整內容的查看方式</li>
      </ul>
    `,
    prompt: `請建立 CSS 文字截斷的完整範例，包含：
1. 單行文字截斷（ellipsis）
2. 多行文字截斷（2行、3行）
3. 漸變淡出效果
4. 展開/收合功能
5. 響應式截斷
使用純 CSS 實現，加上繁體中文註解`,
  },
  {
    id: 'flexbox-alignment',
    title: 'Flexbox 對齊技巧',
    description: '各種 Flexbox 對齊方式的實際應用',
    badges: ['CSS', 'Flexbox', '版面'],
    demo: `
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold mb-2">水平對齊</h4>
          <div class="flex-container justify-start">
            <div class="flex-item">Start</div>
            <div class="flex-item">Start</div>
          </div>
          <div class="flex-container justify-center mt-2">
            <div class="flex-item">Center</div>
            <div class="flex-item">Center</div>
          </div>
          <div class="flex-container justify-end mt-2">
            <div class="flex-item">End</div>
            <div class="flex-item">End</div>
          </div>
          <div class="flex-container justify-between mt-2">
            <div class="flex-item">Between</div>
            <div class="flex-item">Between</div>
            <div class="flex-item">Between</div>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">垂直置中</h4>
          <div class="flex-center-demo">
            <div class="center-content">完美置中</div>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">彈性成長</h4>
          <div class="flex-grow-demo">
            <div class="flex-item flex-grow-0">固定</div>
            <div class="flex-item flex-grow-1">彈性成長</div>
            <div class="flex-item flex-grow-0">固定</div>
          </div>
        </div>
      </div>
      <style>
        .flex-container {
          display: flex;
          background: #f3f4f6;
          padding: 10px;
          border-radius: 6px;
          gap: 10px;
        }
        
        .flex-item {
          padding: 8px 16px;
          background: #3b82f6;
          color: white;
          border-radius: 4px;
        }
        
        .justify-start { justify-content: flex-start; }
        .justify-center { justify-content: center; }
        .justify-end { justify-content: flex-end; }
        .justify-between { justify-content: space-between; }
        
        .flex-center-demo {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 150px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
        }
        
        .center-content {
          padding: 20px;
          background: white;
          border-radius: 8px;
          font-weight: bold;
        }
        
        .flex-grow-demo {
          display: flex;
          gap: 10px;
          background: #f3f4f6;
          padding: 10px;
          border-radius: 6px;
        }
        
        .flex-grow-0 { flex-grow: 0; }
        .flex-grow-1 { flex-grow: 1; }
      </style>
    `,
    code: `/* Flexbox 容器 */
.flex-container {
  display: flex;
  flex-direction: row;  /* row | column | row-reverse | column-reverse */
  flex-wrap: wrap;      /* nowrap | wrap | wrap-reverse */
  gap: 10px;           /* 項目間距 */
}

/* 主軸對齊 (justify-content) */
.justify-start    { justify-content: flex-start; }
.justify-center   { justify-content: center; }
.justify-end      { justify-content: flex-end; }
.justify-between  { justify-content: space-between; }
.justify-around   { justify-content: space-around; }
.justify-evenly   { justify-content: space-evenly; }

/* 交叉軸對齊 (align-items) */
.items-start    { align-items: flex-start; }
.items-center   { align-items: center; }
.items-end      { align-items: flex-end; }
.items-stretch  { align-items: stretch; }
.items-baseline { align-items: baseline; }

/* 多行對齊 (align-content) */
.content-start   { align-content: flex-start; }
.content-center  { align-content: center; }
.content-end     { align-content: flex-end; }
.content-between { align-content: space-between; }
.content-around  { align-content: space-around; }

/* 完美置中 */
.perfect-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Flex 項目屬性 */
.flex-item {
  flex-grow: 1;    /* 成長因子 */
  flex-shrink: 1;  /* 收縮因子 */
  flex-basis: auto; /* 基礎大小 */
  /* 簡寫: flex: 1 1 auto; */
}

/* 自動邊距技巧 */
.nav-bar {
  display: flex;
  align-items: center;
}

.nav-bar .logo {
  margin-right: auto;  /* 推其他元素到右邊 */
}

/* 等高欄位 */
.equal-height-columns {
  display: flex;
  align-items: stretch;  /* 預設值 */
}

.column {
  flex: 1;
  padding: 20px;
}

/* 響應式 Flexbox */
.responsive-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.responsive-item {
  flex: 1 1 300px;  /* 最小 300px，可成長和收縮 */
}`,
    explain: `
      <h4>Flexbox 核心概念</h4>
      <ul>
        <li><strong>主軸 (Main Axis)</strong>：flex-direction 決定的方向</li>
        <li><strong>交叉軸 (Cross Axis)</strong>：垂直於主軸的方向</li>
        <li><strong>justify-content</strong>：主軸對齊</li>
        <li><strong>align-items</strong>：交叉軸對齊</li>
        <li><strong>flex-grow/shrink/basis</strong>：項目彈性</li>
      </ul>
      <h4>常用技巧</h4>
      <ul>
        <li>完美置中：justify-content + align-items: center</li>
        <li>自動邊距：margin: auto 推開元素</li>
        <li>等高欄位：align-items: stretch（預設）</li>
        <li>響應式：flex-wrap + flex-basis</li>
      </ul>
    `,
    prompt: `請建立 Flexbox 布局範例，展示：
1. 各種 justify-content 對齊方式
2. 垂直置中技巧
3. flex-grow/shrink/basis 的使用
4. 自動邊距技巧
5. 響應式 Flexbox 布局
加上繁體中文註解說明每個屬性`,
  },
  {
    id: 'custom-properties',
    title: 'CSS 變數與主題',
    description: '使用 CSS 自訂屬性建立主題系統',
    badges: ['CSS', '變數', '主題'],
    demo: `
      <div class="theme-demo">
        <div class="theme-card">
          <h3 class="theme-title">主題卡片</h3>
          <p class="theme-text">這個卡片使用 CSS 變數控制顏色</p>
          <button class="theme-button">主要按鈕</button>
          <button class="theme-button-secondary">次要按鈕</button>
        </div>
        
        <div class="theme-switcher">
          <button onclick="document.querySelector('.theme-demo').dataset.theme='default'">預設主題</button>
          <button onclick="document.querySelector('.theme-demo').dataset.theme='dark'">深色主題</button>
          <button onclick="document.querySelector('.theme-demo').dataset.theme='blue'">藍色主題</button>
        </div>
      </div>
      <style>
        .theme-demo {
          --primary-color: #3b82f6;
          --secondary-color: #8b5cf6;
          --background: #ffffff;
          --text-color: #1f2937;
          --border-color: #e5e7eb;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
          background: var(--background);
          border-radius: 8px;
        }
        
        .theme-demo[data-theme="dark"] {
          --primary-color: #60a5fa;
          --secondary-color: #a78bfa;
          --background: #1f2937;
          --text-color: #f3f4f6;
          --border-color: #374151;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        
        .theme-demo[data-theme="blue"] {
          --primary-color: #0ea5e9;
          --secondary-color: #06b6d4;
          --background: #f0f9ff;
          --text-color: #0c4a6e;
          --border-color: #bae6fd;
          --shadow: 0 4px 6px rgba(14, 165, 233, 0.2);
        }
        
        .theme-card {
          background: var(--background);
          color: var(--text-color);
          border: 1px solid var(--border-color);
          padding: 20px;
          border-radius: 8px;
          box-shadow: var(--shadow);
          margin-bottom: 20px;
        }
        
        .theme-title {
          color: var(--primary-color);
          margin-bottom: 10px;
        }
        
        .theme-button {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          margin-right: 10px;
          cursor: pointer;
        }
        
        .theme-button-secondary {
          background: var(--secondary-color);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .theme-switcher {
          display: flex;
          gap: 10px;
        }
        
        .theme-switcher button {
          padding: 6px 12px;
          border: 1px solid var(--border-color);
          background: var(--background);
          color: var(--text-color);
          border-radius: 4px;
          cursor: pointer;
        }
      </style>
    `,
    code: `/* 定義 CSS 變數 */
:root {
  /* 顏色系統 */
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --success-color: #10b981;
  --danger-color: #ef4444;
  
  /* 中性色 */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-900: #111827;
  
  /* 間距系統 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* 字體大小 */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  
  /* 圓角 */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  
  /* 陰影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* 深色主題 */
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --secondary-color: #a78bfa;
  --background: #1f2937;
  --text-color: #f3f4f6;
  --border-color: #374151;
}

/* 使用變數 */
.button {
  background: var(--primary-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  box-shadow: var(--shadow-md);
}

/* 帶預設值的變數 */
.component {
  color: var(--custom-color, var(--primary-color));
  /* 如果 --custom-color 未定義，使用 --primary-color */
}

/* 動態計算 */
.responsive-padding {
  padding: calc(var(--spacing-md) * 2);
  margin-top: calc(var(--spacing-lg) + var(--spacing-sm));
}

/* 媒體查詢中修改變數 */
@media (max-width: 768px) {
  :root {
    --text-base: 0.875rem;
    --spacing-md: 12px;
  }
}

/* JavaScript 操作變數 */
/* 
// 讀取
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');

// 設定
document.documentElement.style.setProperty('--primary-color', '#ff6b6b');
*/`,
    explain: `
      <h4>CSS 變數優勢</h4>
      <ul>
        <li><strong>動態性</strong>：可在運行時修改</li>
        <li><strong>繼承性</strong>：遵循 CSS 級聯規則</li>
        <li><strong>作用域</strong>：可在任何選擇器中定義</li>
        <li><strong>預設值</strong>：支援 fallback 值</li>
        <li><strong>計算</strong>：可與 calc() 結合使用</li>
      </ul>
      <h4>主題系統建議</h4>
      <ul>
        <li>在 :root 定義全局變數</li>
        <li>使用 data 屬性切換主題</li>
        <li>提供合理的預設值</li>
        <li>保持命名一致性</li>
      </ul>
    `,
    prompt: `請建立一個使用 CSS 變數的主題系統，包含：
1. 定義顏色、間距、字體大小變數
2. 實現淺色和深色主題切換
3. 展示變數的繼承和覆蓋
4. 使用 calc() 進行動態計算
5. 提供 JavaScript 操作範例
加上繁體中文註解說明`,
  },
  {
    id: 'animations',
    title: 'CSS 動畫效果',
    description: '關鍵影格動畫與過渡效果',
    badges: ['CSS', '動畫', 'Keyframes'],
    demo: `
      <div class="animation-demo">
        <div class="bounce-ball"></div>
        <div class="pulse-box">脈動</div>
        <div class="slide-text">滑入文字</div>
        <div class="rotate-card">旋轉卡片</div>
        <button class="hover-grow">懸停放大</button>
      </div>
      <style>
        .animation-demo {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          align-items: center;
          padding: 20px;
        }
        
        .bounce-ball {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          animation: bounce 2s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        
        .pulse-box {
          padding: 15px 25px;
          background: #ef4444;
          color: white;
          border-radius: 8px;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .slide-text {
          animation: slideIn 1s ease-out;
          font-weight: bold;
          color: #3b82f6;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .rotate-card {
          padding: 15px 25px;
          background: #10b981;
          color: white;
          border-radius: 8px;
          animation: rotate 3s linear infinite;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .hover-grow {
          padding: 10px 20px;
          background: #8b5cf6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-grow:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
        }
      </style>
    `,
    code: `/* 基礎動畫 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* 應用動畫 */
.animated-element {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  
  /* 簡寫 */
  animation: fadeIn 1s ease-in-out 0.5s 1 normal forwards;
}

/* 無限循環動畫 */
.loading-spinner {
  animation: rotate 1s linear infinite;
}

/* 過渡效果 */
.transition-element {
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  
  /* 簡寫 */
  transition: all 0.3s ease-in-out;
}

/* Hover 動畫 */
.hover-effect {
  transition: transform 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.1) rotate(5deg);
}

/* 複雜動畫序列 */
@keyframes complexAnimation {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: scale(1.2) rotate(90deg);
    opacity: 0.8;
  }
  50% {
    transform: scale(0.8) rotate(180deg);
    opacity: 0.6;
  }
  75% {
    transform: scale(1.1) rotate(270deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
}

/* 性能優化 */
.optimized-animation {
  will-change: transform, opacity;
  transform: translateZ(0); /* 啟用硬體加速 */
}`,
    explain: `
      <h4>動畫屬性</h4>
      <ul>
        <li><strong>animation-name</strong>：關鍵影格名稱</li>
        <li><strong>animation-duration</strong>：動畫時長</li>
        <li><strong>animation-timing-function</strong>：緩動函數</li>
        <li><strong>animation-delay</strong>：延遲時間</li>
        <li><strong>animation-iteration-count</strong>：重複次數</li>
        <li><strong>animation-direction</strong>：播放方向</li>
        <li><strong>animation-fill-mode</strong>：動畫前後狀態</li>
      </ul>
      <h4>性能建議</h4>
      <ul>
        <li>優先使用 transform 和 opacity</li>
        <li>使用 will-change 提示瀏覽器</li>
        <li>避免同時動畫過多元素</li>
        <li>使用 translateZ(0) 啟用硬體加速</li>
      </ul>
    `,
    prompt: `請建立 CSS 動畫範例集，包含：
1. 基礎關鍵影格動畫（淡入、滑入、彈跳、旋轉）
2. 過渡效果（hover、focus）
3. 無限循環動畫
4. 複雜動畫序列
5. 性能優化技巧
加上繁體中文註解說明各屬性`,
  },
];