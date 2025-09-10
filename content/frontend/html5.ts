import { ExampleItem } from '@/components/ExampleCard';

export const html5Examples: ExampleItem[] = [
  {
    id: 'semantic-tags',
    title: '語義化標籤結構',
    description: '使用 HTML5 語義標籤建構頁面結構',
    badges: ['HTML5', '語義化', '無障礙'],
    demo: `
      <header class="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
        <h1 class="text-xl font-bold">網站標題</h1>
        <nav>
          <ul class="flex gap-4 mt-2">
            <li><a href="#" class="text-primary-600 hover:underline">首頁</a></li>
            <li><a href="#" class="text-primary-600 hover:underline">關於</a></li>
            <li><a href="#" class="text-primary-600 hover:underline">聯絡</a></li>
          </ul>
        </nav>
      </header>
      <main class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg mb-4">
        <article>
          <h2 class="text-lg font-semibold mb-2">文章標題</h2>
          <section>
            <p>這是文章內容區塊，使用 article 和 section 標籤組織內容。</p>
          </section>
        </article>
        <aside class="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded">
          <p class="text-sm">側邊欄內容</p>
        </aside>
      </main>
      <footer class="p-4 bg-neutral-200 dark:bg-neutral-700 rounded-lg text-center text-sm">
        <p>&copy; 2024 版權所有</p>
      </footer>
    `,
    code: `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>語義化 HTML5 結構</title>
</head>
<body>
  <header>
    <h1>網站標題</h1>
    <nav>
      <ul>
        <li><a href="#home">首頁</a></li>
        <li><a href="#about">關於</a></li>
        <li><a href="#contact">聯絡</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>文章標題</h2>
      <section>
        <p>文章內容...</p>
      </section>
    </article>
    
    <aside>
      <h3>相關連結</h3>
      <ul>
        <li><a href="#">連結 1</a></li>
        <li><a href="#">連結 2</a></li>
      </ul>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2024 版權所有</p>
  </footer>
</body>
</html>`,
    explain: `
      <h4>語義化標籤的重要性</h4>
      <ul>
        <li><strong>&lt;header&gt;</strong>：定義頁面或區塊的頁首</li>
        <li><strong>&lt;nav&gt;</strong>：導航連結區域</li>
        <li><strong>&lt;main&gt;</strong>：頁面主要內容（每頁只能有一個）</li>
        <li><strong>&lt;article&gt;</strong>：獨立的內容區塊</li>
        <li><strong>&lt;section&gt;</strong>：文檔中的區段</li>
        <li><strong>&lt;aside&gt;</strong>：側邊欄或補充內容</li>
        <li><strong>&lt;footer&gt;</strong>：頁面或區塊的頁尾</li>
      </ul>
      <p>使用語義化標籤能提升 SEO、無障礙性和程式碼可讀性。</p>
    `,
    prompt: `請幫我建立一個使用 HTML5 語義化標籤的網頁結構，包含：
1. header 區域（含網站標題和導航選單）
2. main 區域（含文章 article 和側邊欄 aside）
3. footer 區域（版權資訊）
請確保結構清晰、語義正確，並加上繁體中文註解說明每個區塊的用途。`,
  },
  {
    id: 'figure-image',
    title: '圖像與說明文字',
    description: '使用 figure、figcaption 和 img 的 alt 屬性',
    badges: ['HTML5', '圖像', '無障礙'],
    demo: `
      <figure class="max-w-md mx-auto">
        <img 
          src="https://via.placeholder.com/400x300/3b82f6/ffffff?text=範例圖片" 
          alt="藍色背景的範例圖片，顯示 400x300 尺寸"
          class="w-full rounded-lg shadow-md"
        />
        <figcaption class="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-400">
          圖 1：這是使用 figure 和 figcaption 的範例圖片
        </figcaption>
      </figure>
      <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p class="text-sm"><strong>提示：</strong>alt 屬性提供圖片的文字描述，對視障使用者和 SEO 都很重要。</p>
      </div>
    `,
    code: `<figure>
  <img 
    src="path/to/image.jpg" 
    alt="詳細的圖片描述，說明圖片內容"
    width="400"
    height="300"
    loading="lazy"
  />
  <figcaption>
    圖 1：圖片的說明文字
  </figcaption>
</figure>

<!-- 響應式圖片 -->
<picture>
  <source 
    media="(min-width: 768px)" 
    srcset="large-image.jpg"
  />
  <source 
    media="(min-width: 480px)" 
    srcset="medium-image.jpg"
  />
  <img 
    src="small-image.jpg" 
    alt="響應式圖片描述"
  />
</picture>`,
    explain: `
      <h4>圖像最佳實踐</h4>
      <ul>
        <li><strong>alt 屬性</strong>：提供圖片的文字替代，必須描述圖片內容</li>
        <li><strong>figure 元素</strong>：包裝圖片和其說明文字</li>
        <li><strong>figcaption</strong>：提供圖片的標題或說明</li>
        <li><strong>loading="lazy"</strong>：延遲載入非關鍵圖片</li>
        <li><strong>width/height</strong>：預設尺寸避免版面跳動</li>
      </ul>
      <p>使用 picture 元素可實現響應式圖片，根據裝置提供不同圖片。</p>
    `,
    prompt: `請建立一個包含圖片的 HTML 結構，要求：
1. 使用 figure 和 figcaption 包裝圖片
2. img 標籤包含完整的 alt 描述
3. 加入 loading="lazy" 屬性
4. 提供一個 picture 元素的響應式圖片範例
5. 所有描述使用繁體中文`,
  },
  {
    id: 'accessible-form',
    title: '無障礙表單設計',
    description: '使用 label、fieldset 和 ARIA 屬性',
    badges: ['HTML5', '表單', '無障礙'],
    demo: `
      <form class="max-w-md mx-auto space-y-4">
        <fieldset class="border border-neutral-300 dark:border-neutral-600 rounded-lg p-4">
          <legend class="px-2 font-semibold">個人資料</legend>
          
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium mb-1">
              姓名 <span class="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              aria-required="true"
              aria-describedby="name-help"
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="請輸入您的姓名"
            />
            <small id="name-help" class="text-neutral-500">請輸入真實姓名</small>
          </div>
          
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium mb-1">
              電子郵件 <span class="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              aria-required="true"
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="example@email.com"
            />
          </div>
          
          <div class="mb-4">
            <label for="country" class="block text-sm font-medium mb-1">
              國家/地區
            </label>
            <select 
              id="country" 
              name="country"
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="">請選擇</option>
              <option value="tw">台灣</option>
              <option value="jp">日本</option>
              <option value="us">美國</option>
            </select>
          </div>
        </fieldset>
        
        <button 
          type="submit"
          class="w-full py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          提交表單
        </button>
      </form>
    `,
    code: `<form>
  <fieldset>
    <legend>個人資料</legend>
    
    <!-- 文字輸入 -->
    <div>
      <label for="name">
        姓名 <span aria-label="必填">*</span>
      </label>
      <input 
        type="text" 
        id="name" 
        name="name"
        required
        aria-required="true"
        aria-describedby="name-help"
        placeholder="請輸入您的姓名"
      />
      <small id="name-help">請輸入真實姓名</small>
    </div>
    
    <!-- 電子郵件 -->
    <div>
      <label for="email">
        電子郵件 <span aria-label="必填">*</span>
      </label>
      <input 
        type="email" 
        id="email" 
        name="email"
        required
        aria-required="true"
        aria-invalid="false"
        placeholder="example@email.com"
      />
    </div>
    
    <!-- 下拉選單 -->
    <div>
      <label for="country">國家/地區</label>
      <select id="country" name="country">
        <option value="">請選擇</option>
        <option value="tw">台灣</option>
        <option value="jp">日本</option>
      </select>
    </div>
    
    <!-- 核取方塊 -->
    <div>
      <input 
        type="checkbox" 
        id="agree" 
        name="agree"
        aria-describedby="agree-desc"
      />
      <label for="agree">我同意服務條款</label>
      <small id="agree-desc">請詳閱條款內容</small>
    </div>
  </fieldset>
  
  <button type="submit">提交表單</button>
</form>`,
    explain: `
      <h4>無障礙表單要點</h4>
      <ul>
        <li><strong>label 與 input 關聯</strong>：使用 for 和 id 屬性配對</li>
        <li><strong>fieldset/legend</strong>：群組相關表單元素</li>
        <li><strong>required 屬性</strong>：標記必填欄位</li>
        <li><strong>aria-required</strong>：輔助技術識別必填</li>
        <li><strong>aria-describedby</strong>：關聯說明文字</li>
        <li><strong>aria-invalid</strong>：標記驗證狀態</li>
        <li><strong>placeholder</strong>：提供輸入提示（不能取代 label）</li>
      </ul>
      <p>良好的表單設計能大幅提升使用者體驗和轉換率。</p>
    `,
    prompt: `請建立一個無障礙的 HTML 表單，包含：
1. 使用 fieldset 和 legend 組織表單
2. 每個輸入欄位都有對應的 label
3. 必填欄位使用 required 和 aria-required
4. 包含文字輸入、電子郵件、下拉選單和核取方塊
5. 加入適當的 ARIA 屬性
6. 使用繁體中文標籤和說明`,
  },
  {
    id: 'media-elements',
    title: '多媒體元素',
    description: '音訊和視訊的正確使用方式',
    badges: ['HTML5', '多媒體', '控制項'],
    demo: `
      <div class="space-y-6">
        <div>
          <h4 class="font-semibold mb-2">視訊播放器</h4>
          <video 
            controls 
            poster="https://via.placeholder.com/640x360/1e40af/ffffff?text=視訊封面"
            class="w-full max-w-lg rounded-lg shadow-md"
          >
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.webm" type="video/webm">
            <track kind="captions" src="captions_zh.vtt" srclang="zh" label="中文字幕">
            <p>您的瀏覽器不支援 HTML5 視訊。</p>
          </video>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2">音訊播放器</h4>
          <audio controls class="w-full max-w-lg">
            <source src="audio.mp3" type="audio/mpeg">
            <source src="audio.ogg" type="audio/ogg">
            <p>您的瀏覽器不支援 HTML5 音訊。</p>
          </audio>
        </div>
      </div>
    `,
    code: `<!-- 視訊元素 -->
<video 
  controls
  poster="poster.jpg"
  preload="metadata"
  width="640"
  height="360"
>
  <!-- 多種格式確保相容性 -->
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  
  <!-- 字幕軌道 -->
  <track 
    kind="captions" 
    src="captions_zh.vtt" 
    srclang="zh" 
    label="中文字幕"
    default
  >
  <track 
    kind="captions" 
    src="captions_en.vtt" 
    srclang="en" 
    label="English"
  >
  
  <!-- 降級內容 -->
  <p>您的瀏覽器不支援 HTML5 視訊。
    <a href="video.mp4">下載視訊</a>
  </p>
</video>

<!-- 音訊元素 -->
<audio 
  controls
  preload="auto"
  loop
>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.wav" type="audio/wav">
  
  <p>您的瀏覽器不支援 HTML5 音訊。
    <a href="audio.mp3">下載音訊</a>
  </p>
</audio>`,
    explain: `
      <h4>多媒體元素屬性</h4>
      <ul>
        <li><strong>controls</strong>：顯示播放控制項</li>
        <li><strong>autoplay</strong>：自動播放（需謹慎使用）</li>
        <li><strong>loop</strong>：循環播放</li>
        <li><strong>muted</strong>：靜音</li>
        <li><strong>poster</strong>：視訊封面圖片</li>
        <li><strong>preload</strong>：預載策略（none/metadata/auto）</li>
      </ul>
      <h4>最佳實踐</h4>
      <ul>
        <li>提供多種格式確保跨瀏覽器相容</li>
        <li>加入字幕提升無障礙性</li>
        <li>提供降級方案和下載連結</li>
        <li>避免自動播放影響使用者體驗</li>
      </ul>
    `,
    prompt: `請建立 HTML5 多媒體元素範例，包含：
1. 視訊播放器（含多種格式、字幕、封面圖）
2. 音訊播放器（含多種格式）
3. 適當的控制屬性設定
4. 降級處理方案
5. 繁體中文的字幕和說明`,
  },
  {
    id: 'data-attributes',
    title: '自訂資料屬性',
    description: '使用 data-* 屬性儲存自訂資料',
    badges: ['HTML5', '資料屬性', 'JavaScript'],
    demo: `
      <div class="space-y-4">
        <div 
          class="product-card p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
          data-product-id="12345"
          data-category="electronics"
          data-price="29900"
          data-discount="10"
          onclick="alert('產品 ID: ' + this.dataset.productId + '\\n價格: $' + this.dataset.price)"
        >
          <h4 class="font-semibold">智慧手機</h4>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">分類：電子產品</p>
          <p class="text-lg font-bold text-primary-600">$29,900</p>
          <span class="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs rounded">-10%</span>
        </div>
        
        <div 
          class="user-profile p-4 border rounded-lg"
          data-user-id="user-001"
          data-role="admin"
          data-joined="2024-01-15"
          data-status="active"
        >
          <h4 class="font-semibold">使用者資料</h4>
          <p class="text-sm">ID: user-001</p>
          <p class="text-sm">角色: 管理員</p>
          <p class="text-sm">狀態: <span class="text-green-600">啟用中</span></p>
        </div>
      </div>
    `,
    code: `<!-- 產品卡片 -->
<div 
  class="product-card"
  data-product-id="12345"
  data-category="electronics"
  data-price="29900"
  data-discount="10"
  data-in-stock="true"
>
  <h3>產品名稱</h3>
  <p>產品描述</p>
</div>

<!-- 使用者資料 -->
<div 
  class="user-profile"
  data-user-id="user-001"
  data-role="admin"
  data-joined="2024-01-15"
  data-last-login="2024-03-20"
  data-status="active"
>
  <span>使用者名稱</span>
</div>

<!-- JavaScript 存取 -->
<script>
// 取得元素
const product = document.querySelector('.product-card');

// 存取 data 屬性
console.log(product.dataset.productId);  // "12345"
console.log(product.dataset.category);   // "electronics"
console.log(product.dataset.inStock);    // "true"

// 設定 data 屬性
product.dataset.featured = "true";
product.dataset.lastViewed = new Date().toISOString();

// 使用 getAttribute
const price = product.getAttribute('data-price');

// 查詢特定 data 屬性
const electronics = document.querySelectorAll('[data-category="electronics"]');
</script>`,
    explain: `
      <h4>Data 屬性用途</h4>
      <ul>
        <li><strong>儲存資料</strong>：在 HTML 元素中儲存自訂資料</li>
        <li><strong>JavaScript 互動</strong>：透過 dataset API 存取</li>
        <li><strong>CSS 選擇器</strong>：可用屬性選擇器定位元素</li>
        <li><strong>框架整合</strong>：許多 JS 框架使用 data 屬性</li>
      </ul>
      <h4>命名規則</h4>
      <ul>
        <li>必須以 data- 開頭</li>
        <li>只能包含小寫字母、數字、連字號、點、冒號、底線</li>
        <li>JavaScript 中使用駝峰式命名（data-product-id → dataset.productId）</li>
      </ul>
    `,
    prompt: `請建立使用 HTML5 data-* 屬性的範例，包含：
1. 產品卡片（含 ID、分類、價格等資料）
2. 使用者資料卡（含角色、狀態等）
3. JavaScript 存取 data 屬性的範例
4. 展示 dataset API 的使用
5. 加入繁體中文註解說明`,
  },
  {
    id: 'web-components',
    title: 'Web Components 基礎',
    description: '使用 template 和 slot 元素',
    badges: ['HTML5', 'Web Components', 'Shadow DOM'],
    demo: `
      <div class="space-y-4">
        <div class="p-4 border rounded-lg">
          <h4 class="font-semibold mb-2">Template 元素（隱藏內容）</h4>
          <template id="card-template">
            <div class="card">
              <h3 class="title"></h3>
              <p class="content"></p>
            </div>
          </template>
          <p class="text-sm text-neutral-600">Template 內容不會顯示在頁面上</p>
        </div>
        
        <div class="p-4 border rounded-lg">
          <h4 class="font-semibold mb-2">Slot 範例（概念展示）</h4>
          <div class="custom-card p-4 bg-primary-50 dark:bg-primary-900/20 rounded">
            <div class="slot-header font-bold">卡片標題</div>
            <div class="slot-content mt-2">這是卡片內容</div>
            <div class="slot-footer mt-2 text-sm text-neutral-500">卡片頁尾</div>
          </div>
        </div>
      </div>
    `,
    code: `<!-- Template 元素 -->
<template id="user-card-template">
  <style>
    .user-card {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .user-name {
      font-weight: bold;
      color: #333;
    }
  </style>
  <div class="user-card">
    <h3 class="user-name"></h3>
    <p class="user-email"></p>
    <p class="user-role"></p>
  </div>
</template>

<!-- 自訂元素 -->
<script>
class UserCard extends HTMLElement {
  constructor() {
    super();
    
    // 建立 Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });
    
    // 取得 template
    const template = document.getElementById('user-card-template');
    const templateContent = template.content;
    
    // 複製 template 內容
    shadow.appendChild(templateContent.cloneNode(true));
    
    // 設定內容
    shadow.querySelector('.user-name').textContent = 
      this.getAttribute('name');
    shadow.querySelector('.user-email').textContent = 
      this.getAttribute('email');
    shadow.querySelector('.user-role').textContent = 
      this.getAttribute('role');
  }
}

// 註冊自訂元素
customElements.define('user-card', UserCard);
</script>

<!-- 使用自訂元素 -->
<user-card 
  name="張小明" 
  email="ming@example.com" 
  role="管理員"
></user-card>

<!-- Slot 範例 -->
<template id="card-with-slots">
  <style>
    .card { 
      border: 1px solid #ccc; 
      padding: 1rem; 
    }
    ::slotted(h3) { 
      color: blue; 
    }
  </style>
  <div class="card">
    <slot name="header">預設標題</slot>
    <slot name="content">預設內容</slot>
    <slot name="footer">預設頁尾</slot>
  </div>
</template>`,
    explain: `
      <h4>Web Components 核心概念</h4>
      <ul>
        <li><strong>Template</strong>：定義可重複使用的 HTML 結構</li>
        <li><strong>Shadow DOM</strong>：封裝樣式和結構</li>
        <li><strong>Custom Elements</strong>：建立自訂 HTML 元素</li>
        <li><strong>Slots</strong>：定義內容插入點</li>
      </ul>
      <h4>優點</h4>
      <ul>
        <li>封裝性：樣式和邏輯不會影響外部</li>
        <li>可重用性：一次定義，多處使用</li>
        <li>標準化：原生瀏覽器支援</li>
      </ul>
    `,
    prompt: `請建立 Web Components 範例，包含：
1. 使用 template 元素定義結構
2. 建立自訂元素類別
3. 使用 Shadow DOM 封裝樣式
4. 展示 slot 的使用方式
5. 提供完整的註冊和使用範例
6. 加入繁體中文註解`,
  },
];