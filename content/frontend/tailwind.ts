import { ExampleItem } from '@/components/ExampleCard';

export const tailwindExamples: ExampleItem[] = [
  {
    id: 'shadow-hierarchy',
    title: '陰影階層系統',
    description: '使用 Tailwind 的陰影類別建立視覺層級',
    badges: ['Tailwind', '陰影', '層級'],
    demo: `
      <div class="space-y-4">
        <div class="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
          <p class="font-medium">shadow-sm - 微小陰影</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">適用於輕微強調的元素</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow">
          <p class="font-medium">shadow - 預設陰影</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">標準卡片陰影</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
          <p class="font-medium">shadow-md - 中等陰影</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">懸浮或聚焦狀態</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <p class="font-medium">shadow-lg - 大陰影</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">彈出視窗或下拉選單</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-xl">
          <p class="font-medium">shadow-xl - 特大陰影</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">模態框或重要提示</p>
        </div>
        <div class="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-2xl">
          <p class="font-medium">shadow-2xl - 超大陰影</p>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">最高層級的視覺元素</p>
        </div>
      </div>
    `,
    code: `<!-- Tailwind 陰影階層 -->
<div class="shadow-sm">微小陰影</div>
<div class="shadow">預設陰影</div>
<div class="shadow-md">中等陰影</div>
<div class="shadow-lg">大陰影</div>
<div class="shadow-xl">特大陰影</div>
<div class="shadow-2xl">超大陰影</div>
<div class="shadow-none">無陰影</div>

<!-- 彩色陰影 -->
<div class="shadow-lg shadow-blue-500/50">藍色陰影</div>
<div class="shadow-lg shadow-red-500/50">紅色陰影</div>

<!-- 內陰影 -->
<div class="shadow-inner">內陰影效果</div>

<!-- 響應式陰影 -->
<div class="shadow-sm md:shadow-md lg:shadow-lg">
  響應式陰影
</div>

<!-- Hover 陰影變化 -->
<div class="shadow-md hover:shadow-xl transition-shadow">
  懸停時增強陰影
</div>

<!-- 自訂陰影 -->
<div class="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
  自訂陰影值
</div>`,
    explain: `
      <h4>陰影使用原則</h4>
      <ul>
        <li><strong>層級關係</strong>：陰影大小代表元素的層級高度</li>
        <li><strong>互動回饋</strong>：hover 時增加陰影表示可互動</li>
        <li><strong>視覺焦點</strong>：重要元素使用較大陰影</li>
        <li><strong>一致性</strong>：同類元素使用相同陰影</li>
      </ul>
      <h4>應用場景</h4>
      <ul>
        <li>shadow-sm：按鈕、輸入框</li>
        <li>shadow-md：卡片、面板</li>
        <li>shadow-lg：下拉選單、工具提示</li>
        <li>shadow-xl/2xl：模態框、通知</li>
      </ul>
    `,
    prompt: `請使用 Tailwind CSS 建立陰影階層系統，包含：
1. 展示所有陰影尺寸（sm 到 2xl）
2. 彩色陰影效果
3. 內陰影應用
4. hover 陰影變化
5. 響應式陰影
提供實際應用場景說明`,
  },
  {
    id: 'card-design',
    title: '卡片元件設計',
    description: '使用 Tailwind 建立美觀的卡片元件',
    badges: ['Tailwind', '卡片', '元件'],
    demo: `
      <div class="space-y-6">
        <div class="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">基礎卡片</h3>
          <p class="text-neutral-600 dark:text-neutral-400">這是一個基礎卡片設計，包含圓角、邊框和懸停效果。</p>
        </div>
        
        <div class="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white shadow-xl">
          <h3 class="text-xl font-bold mb-2">漸變卡片</h3>
          <p class="opacity-90">使用漸變背景的醒目卡片設計。</p>
        </div>
        
        <div class="group rounded-2xl border-2 border-transparent bg-white dark:bg-neutral-800 p-6 hover:border-primary-500 hover:shadow-xl transition-all">
          <div class="flex items-center justify-between mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              新功能
            </span>
            <svg class="w-5 h-5 text-neutral-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">互動卡片</h3>
          <p class="text-neutral-600 dark:text-neutral-400">懸停時顯示邊框和圖示變色效果。</p>
        </div>
        
        <div class="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-lg">
          <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-transparent rounded-full -mr-20 -mt-20"></div>
          <div class="relative p-6">
            <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">裝飾卡片</h3>
            <p class="text-neutral-600 dark:text-neutral-400">包含裝飾性元素的卡片設計。</p>
          </div>
        </div>
      </div>
    `,
    code: `<!-- 基礎卡片 -->
<div class="rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-lg transition-shadow">
  <h3 class="text-xl font-bold mb-2">卡片標題</h3>
  <p class="text-neutral-600">卡片內容</p>
</div>

<!-- 漸變卡片 -->
<div class="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white shadow-xl">
  <h3 class="text-xl font-bold mb-2">漸變標題</h3>
  <p class="opacity-90">漸變內容</p>
</div>

<!-- 玻璃擬態卡片 -->
<div class="rounded-2xl bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md border border-white/20 p-6 shadow-xl">
  <h3 class="text-xl font-bold mb-2">玻璃效果</h3>
  <p>半透明背景配合模糊效果</p>
</div>

<!-- 互動式卡片 -->
<div class="group rounded-2xl border-2 border-transparent bg-white p-6 hover:border-primary-500 hover:shadow-xl transition-all cursor-pointer">
  <div class="flex items-center justify-between mb-4">
    <span class="badge">標籤</span>
    <svg class="w-5 h-5 text-neutral-400 group-hover:text-primary-500 transition-colors">
      <!-- 圖示 -->
    </svg>
  </div>
  <h3 class="text-xl font-bold mb-2">互動標題</h3>
  <p class="text-neutral-600">懸停查看效果</p>
</div>

<!-- 圖片卡片 -->
<div class="rounded-2xl overflow-hidden shadow-lg">
  <img src="image.jpg" alt="圖片" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">圖片卡片</h3>
    <p class="text-neutral-600">包含圖片的卡片</p>
  </div>
</div>

<!-- 狀態卡片 -->
<div class="relative rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
  <div class="flex items-start">
    <div class="flex-shrink-0">
      <svg class="w-6 h-6 text-green-500">
        <!-- 成功圖示 -->
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-lg font-medium text-green-800">成功訊息</h3>
      <p class="mt-1 text-green-700">操作成功完成</p>
    </div>
  </div>
</div>`,
    explain: `
      <h4>卡片設計要素</h4>
      <ul>
        <li><strong>圓角</strong>：rounded-xl 或 rounded-2xl 營造柔和感</li>
        <li><strong>陰影</strong>：shadow-lg 創造層次感</li>
        <li><strong>邊框</strong>：border 定義邊界</li>
        <li><strong>內距</strong>：p-6 提供舒適閱讀空間</li>
        <li><strong>懸停效果</strong>：hover: 增加互動性</li>
      </ul>
      <h4>進階技巧</h4>
      <ul>
        <li>使用 group 實現子元素聯動</li>
        <li>backdrop-blur 創造玻璃效果</li>
        <li>漸變背景增加視覺吸引力</li>
        <li>overflow-hidden 處理圓角裁切</li>
      </ul>
    `,
    prompt: `請使用 Tailwind CSS 設計卡片元件，包含：
1. 基礎卡片（圓角、邊框、陰影）
2. 漸變背景卡片
3. 玻璃擬態效果
4. 互動式卡片（hover 效果）
5. 包含圖片的卡片
使用 rounded-2xl 和適當的間距`,
  },
  {
    id: 'dark-mode',
    title: '深色模式切換',
    description: '使用 dark: 前綴實現深色模式',
    badges: ['Tailwind', '深色模式', '主題'],
    demo: `
      <div class="space-y-4">
        <div class="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h3 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            自適應顏色
          </h3>
          <p class="text-neutral-600 dark:text-neutral-400">
            這段文字會根據主題自動調整顏色
          </p>
          <button class="mt-4 px-4 py-2 bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg transition-colors">
            主題感知按鈕
          </button>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
            <p class="text-sm font-medium text-neutral-700 dark:text-neutral-300">淺色背景</p>
          </div>
          <div class="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
            <p class="text-sm font-medium text-neutral-700 dark:text-neutral-300">深色背景</p>
          </div>
        </div>
        
        <div class="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p class="text-blue-900 dark:text-blue-100">漸變背景也支援深色模式</p>
        </div>
      </div>
    `,
    code: `<!-- 文字顏色 -->
<h1 class="text-neutral-900 dark:text-neutral-100">
  標題文字
</h1>
<p class="text-neutral-600 dark:text-neutral-400">
  正文內容
</p>

<!-- 背景顏色 -->
<div class="bg-white dark:bg-neutral-800">
  淺色/深色背景
</div>

<!-- 邊框 -->
<div class="border border-neutral-200 dark:border-neutral-700">
  自適應邊框
</div>

<!-- 按鈕 -->
<button class="
  bg-primary-500 hover:bg-primary-600
  dark:bg-primary-600 dark:hover:bg-primary-700
  text-white
">
  深色模式按鈕
</button>

<!-- 陰影 -->
<div class="shadow-lg dark:shadow-none dark:ring-1 dark:ring-neutral-700">
  深色模式使用 ring 替代陰影
</div>

<!-- 漸變 -->
<div class="bg-gradient-to-r 
  from-blue-50 to-purple-50
  dark:from-blue-900/20 dark:to-purple-900/20
">
  漸變背景
</div>

<!-- 狀態顏色 -->
<div class="
  bg-green-50 text-green-900
  dark:bg-green-900/20 dark:text-green-100
">
  成功訊息
</div>

<!-- 透明度調整 -->
<div class="bg-black/5 dark:bg-white/5">
  微透明背景
</div>

<!-- JavaScript 切換 -->
<script>
// 切換深色模式
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  
  // 儲存偏好
  localStorage.theme = document.documentElement.classList.contains('dark') 
    ? 'dark' : 'light';
}

// 初始化
if (localStorage.theme === 'dark' || 
    (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}
</script>`,
    explain: `
      <h4>深色模式實現</h4>
      <ul>
        <li><strong>dark: 前綴</strong>：為深色模式指定樣式</li>
        <li><strong>顏色對比</strong>：確保文字可讀性</li>
        <li><strong>背景層次</strong>：使用不同灰度區分層級</li>
        <li><strong>陰影替代</strong>：深色模式用 ring 替代 shadow</li>
      </ul>
      <h4>最佳實踐</h4>
      <ul>
        <li>使用中性色（neutral）系統</li>
        <li>避免純黑背景，使用 neutral-800/900</li>
        <li>調整顏色透明度而非更換顏色</li>
        <li>測試所有互動狀態</li>
      </ul>
    `,
    prompt: `請使用 Tailwind CSS 實現深色模式，包含：
1. 文字顏色自適應
2. 背景顏色切換
3. 邊框和陰影調整
4. 狀態顏色（成功、警告、錯誤）
5. JavaScript 切換邏輯
使用 dark: 前綴處理所有樣式`,
  },
  {
    id: 'responsive-design',
    title: '響應式設計',
    description: '使用斷點前綴實現響應式布局',
    badges: ['Tailwind', '響應式', 'RWD'],
    demo: `
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
            <p class="font-medium">響應式網格 1</p>
          </div>
          <div class="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
            <p class="font-medium">響應式網格 2</p>
          </div>
          <div class="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
            <p class="font-medium">響應式網格 3</p>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <p class="text-sm sm:text-base md:text-lg">響應式文字大小</p>
          </div>
          <div class="w-full sm:w-48 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <p>固定寬度側邊欄</p>
          </div>
        </div>
        
        <div class="p-4 sm:p-6 md:p-8 lg:p-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <p>響應式內距：手機 p-4 → 平板 p-6 → 桌面 p-8 → 大螢幕 p-10</p>
        </div>
        
        <div class="block sm:hidden p-4 bg-red-100 rounded-lg">
          <p>只在手機顯示</p>
        </div>
        <div class="hidden sm:block md:hidden p-4 bg-yellow-100 rounded-lg">
          <p>只在平板顯示</p>
        </div>
        <div class="hidden md:block p-4 bg-blue-100 rounded-lg">
          <p>只在桌面顯示</p>
        </div>
      </div>
    `,
    code: `<!-- Tailwind 斷點 -->
<!-- 
sm: 640px   // 手機橫向
md: 768px   // 平板
lg: 1024px  // 桌面
xl: 1280px  // 大桌面
2xl: 1536px // 超大螢幕
-->

<!-- 響應式網格 -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div>項目 1</div>
  <div>項目 2</div>
  <div>項目 3</div>
  <div>項目 4</div>
</div>

<!-- 響應式 Flexbox -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">主要內容</div>
  <div class="w-full md:w-64">側邊欄</div>
</div>

<!-- 響應式文字 -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  響應式標題
</h1>
<p class="text-sm sm:text-base md:text-lg">
  響應式段落
</p>

<!-- 響應式間距 -->
<div class="p-4 sm:p-6 md:p-8 lg:p-10">
  響應式內距
</div>
<div class="mt-4 sm:mt-6 md:mt-8">
  響應式外距
</div>

<!-- 響應式顯示/隱藏 -->
<div class="block sm:hidden">只在手機顯示</div>
<div class="hidden sm:block md:hidden">只在平板顯示</div>
<div class="hidden md:block">桌面以上顯示</div>

<!-- 響應式寬度 -->
<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
  響應式寬度
</div>

<!-- 容器響應式 -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  響應式容器
</div>

<!-- 響應式定位 -->
<div class="relative">
  <div class="absolute top-0 left-0 sm:top-4 sm:left-4 md:top-8 md:left-8">
    響應式定位
  </div>
</div>`,
    explain: `
      <h4>Tailwind 斷點系統</h4>
      <ul>
        <li><strong>Mobile First</strong>：從小螢幕開始設計</li>
        <li><strong>sm:</strong> 640px 以上（手機橫向）</li>
        <li><strong>md:</strong> 768px 以上（平板）</li>
        <li><strong>lg:</strong> 1024px 以上（桌面）</li>
        <li><strong>xl:</strong> 1280px 以上（大桌面）</li>
      </ul>
      <h4>常用模式</h4>
      <ul>
        <li>網格欄數隨螢幕增加</li>
        <li>文字大小逐步放大</li>
        <li>間距隨螢幕調整</li>
        <li>元素顯示/隱藏控制</li>
      </ul>
    `,
    prompt: `請使用 Tailwind CSS 建立響應式設計，包含：
1. 響應式網格（1→2→3→4 欄）
2. 響應式文字大小
3. 響應式間距（padding/margin）
4. 條件顯示/隱藏元素
5. 響應式 Flexbox 布局
展示所有斷點的應用`,
  },
  {
    id: 'form-styling',
    title: '表單樣式設計',
    description: '使用 Tailwind 美化表單元素',
    badges: ['Tailwind', '表單', 'UI'],
    demo: `
      <form class="space-y-4 max-w-md">
        <div>
          <label for="name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            姓名
          </label>
          <input
            type="text"
            id="name"
            class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100 transition-colors"
            placeholder="請輸入姓名"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            電子郵件
          </label>
          <div class="relative">
            <input
              type="email"
              id="email"
              class="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100"
              placeholder="email@example.com"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            訊息
          </label>
          <textarea
            id="message"
            rows="4"
            class="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-neutral-800 dark:text-neutral-100 resize-none"
            placeholder="請輸入訊息..."
          ></textarea>
        </div>
        
        <div class="flex items-center">
          <input
            type="checkbox"
            id="agree"
            class="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
          />
          <label for="agree" class="ml-2 text-sm text-neutral-700 dark:text-neutral-300">
            我同意服務條款
          </label>
        </div>
        
        <button
          type="submit"
          class="w-full px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          提交表單
        </button>
      </form>
    `,
    code: `<!-- 文字輸入框 -->
<input
  type="text"
  class="w-full px-4 py-2 
    border border-neutral-300 
    rounded-lg 
    focus:ring-2 focus:ring-primary-500 focus:border-transparent
    dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-100
    placeholder:text-neutral-400
    transition-colors"
  placeholder="請輸入文字"
/>

<!-- 帶圖示的輸入框 -->
<div class="relative">
  <input
    type="email"
    class="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2"
    placeholder="Email"
  />
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
    <svg class="h-5 w-5 text-neutral-400">
      <!-- 圖示 -->
    </svg>
  </div>
</div>

<!-- 選擇框 -->
<select class="w-full px-4 py-2 border rounded-lg focus:ring-2">
  <option>選項 1</option>
  <option>選項 2</option>
</select>

<!-- 文字區域 -->
<textarea
  class="w-full px-4 py-2 
    border rounded-lg 
    focus:ring-2 
    resize-none"
  rows="4"
  placeholder="請輸入訊息"
></textarea>

<!-- 核取方塊 -->
<div class="flex items-center">
  <input
    type="checkbox"
    class="w-4 h-4 
      text-primary-600 
      border-neutral-300 
      rounded 
      focus:ring-primary-500"
  />
  <label class="ml-2 text-sm">選項文字</label>
</div>

<!-- 單選按鈕 -->
<div class="flex items-center">
  <input
    type="radio"
    class="w-4 h-4 
      text-primary-600 
      border-neutral-300 
      focus:ring-primary-500"
  />
  <label class="ml-2 text-sm">選項文字</label>
</div>

<!-- 錯誤狀態 -->
<input
  type="text"
  class="border-red-500 
    focus:ring-red-500 
    focus:border-red-500"
/>
<p class="mt-1 text-sm text-red-600">錯誤訊息</p>

<!-- 禁用狀態 -->
<input
  type="text"
  disabled
  class="bg-neutral-100 
    cursor-not-allowed 
    opacity-50"
/>`,
    explain: `
      <h4>表單設計要點</h4>
      <ul>
        <li><strong>焦點狀態</strong>：使用 focus:ring 提供視覺回饋</li>
        <li><strong>標籤關聯</strong>：label 與 input 正確配對</li>
        <li><strong>圖示輔助</strong>：使用圖示增強理解</li>
        <li><strong>錯誤提示</strong>：清晰的錯誤狀態和訊息</li>
        <li><strong>深色模式</strong>：確保所有狀態都支援</li>
      </ul>
      <h4>無障礙考量</h4>
      <ul>
        <li>提供清晰的 placeholder</li>
        <li>確保足夠的顏色對比</li>
        <li>鍵盤導航支援</li>
        <li>適當的觸控目標大小</li>
      </ul>
    `,
    prompt: `請使用 Tailwind CSS 設計表單元素，包含：
1. 文字輸入框（含焦點狀態）
2. 帶圖示的輸入框
3. 下拉選單
4. 文字區域
5. 核取方塊和單選按鈕
6. 錯誤和禁用狀態
確保支援深色模式`,
  },
  {
    id: 'utility-patterns',
    title: '實用工具類別',
    description: 'Tailwind 常用工具類別組合',
    badges: ['Tailwind', '工具', '模式'],
    demo: `
      <div class="space-y-6">
        <div>
          <h4 class="font-semibold mb-3">文字截斷</h4>
          <div class="w-64 p-3 bg-neutral-100 dark:bg-neutral-800 rounded">
            <p class="truncate">這是一段很長的文字會被截斷顯示省略號的範例文字內容</p>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-3">長寬比容器</h4>
          <div class="grid grid-cols-3 gap-4">
            <div class="aspect-square bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
              <span>1:1</span>
            </div>
            <div class="aspect-video bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <span>16:9</span>
            </div>
            <div class="aspect-[4/3] bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <span>4:3</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-3">分割線</h4>
          <div class="divide-y divide-neutral-200 dark:divide-neutral-700">
            <div class="py-3">項目 1</div>
            <div class="py-3">項目 2</div>
            <div class="py-3">項目 3</div>
          </div>
        </div>
        
        <div>
          <h4 class="font-semibold mb-3">空間分配</h4>
          <div class="flex space-x-4">
            <div class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded">項目 1</div>
            <div class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded">項目 2</div>
            <div class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded">項目 3</div>
          </div>
        </div>
      </div>
    `,
    code: `<!-- 文字截斷 -->
<p class="truncate">單行文字截斷</p>
<p class="line-clamp-2">多行文字截斷（需要插件）</p>

<!-- 長寬比 -->
<div class="aspect-square">正方形 1:1</div>
<div class="aspect-video">視訊 16:9</div>
<div class="aspect-[4/3]">自訂比例 4:3</div>

<!-- 分割線 -->
<div class="divide-y divide-neutral-200">
  <div class="py-2">項目 1</div>
  <div class="py-2">項目 2</div>
</div>

<div class="divide-x divide-neutral-200 flex">
  <div class="px-2">項目 1</div>
  <div class="px-2">項目 2</div>
</div>

<!-- 空間分配 -->
<div class="space-y-4">
  <div>垂直間距</div>
  <div>垂直間距</div>
</div>

<div class="flex space-x-4">
  <div>水平間距</div>
  <div>水平間距</div>
</div>

<!-- 環狀樣式 -->
<button class="ring-2 ring-primary-500 ring-offset-2">
  環狀邊框
</button>

<!-- 漸變 -->
<div class="bg-gradient-to-r from-purple-400 to-pink-400">
  漸變背景
</div>

<!-- 背景模糊 -->
<div class="backdrop-blur-md bg-white/30">
  模糊背景
</div>

<!-- 濾鏡 -->
<img class="filter grayscale hover:grayscale-0" />
<div class="filter blur-sm">模糊效果</div>

<!-- 變形 -->
<div class="transform rotate-45 scale-110">
  旋轉縮放
</div>

<!-- 過渡 -->
<div class="transition-all duration-300 ease-in-out">
  平滑過渡
</div>

<!-- 捲動行為 -->
<div class="overflow-auto scrollbar-thin">
  可捲動區域
</div>

<!-- 選取樣式 -->
<p class="selection:bg-primary-200 selection:text-primary-900">
  選取文字查看效果
</p>`,
    explain: `
      <h4>實用工具類別</h4>
      <ul>
        <li><strong>truncate</strong>：單行文字截斷</li>
        <li><strong>aspect-*</strong>：維持長寬比</li>
        <li><strong>divide-*</strong>：子元素間分割線</li>
        <li><strong>space-*</strong>：子元素間距</li>
        <li><strong>ring-*</strong>：聚焦環樣式</li>
      </ul>
      <h4>進階效果</h4>
      <ul>
        <li>backdrop-blur：背景模糊</li>
        <li>filter：CSS 濾鏡效果</li>
        <li>transform：2D/3D 變形</li>
        <li>selection：文字選取樣式</li>
      </ul>
    `,
    prompt: `請展示 Tailwind CSS 實用工具類別，包含：
1. 文字截斷（truncate）
2. 長寬比容器（aspect-*）
3. 分割線（divide-*）
4. 空間分配（space-*）
5. 環狀樣式（ring-*）
6. 漸變和濾鏡效果
提供實際應用範例`,
  },
];