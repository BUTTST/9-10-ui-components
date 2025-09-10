import { ExampleItem } from '@/components/ExampleCard';

export const nextjsExamples: ExampleItem[] = [
  {
    id: 'app-router-structure',
    title: 'App Router 檔案結構',
    description: 'Next.js 13+ App Router 的檔案組織方式',
    badges: ['Next.js', 'App Router', '路由'],
    demo: `
      <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
        <h4 class="font-semibold mb-3">App Router 結構</h4>
        <pre class="text-sm font-mono">
app/
├── layout.tsx       # 根布局
├── page.tsx         # 首頁
├── globals.css      # 全局樣式
├── about/
│   └── page.tsx     # /about 頁面
├── blog/
│   ├── layout.tsx   # Blog 布局
│   ├── page.tsx     # /blog 頁面
│   └── [slug]/
│       └── page.tsx # 動態路由
└── api/
    └── hello/
        └── route.ts # API 路由
        </pre>
      </div>
    `,
    code: `// app/layout.tsx - 根布局
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Next.js App',
  description: 'Built with Next.js App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <nav>導航列</nav>
        {children}
        <footer>頁尾</footer>
      </body>
    </html>
  );
}

// app/page.tsx - 首頁
export default function HomePage() {
  return (
    <main>
      <h1>歡迎來到 Next.js</h1>
    </main>
  );
}

// app/blog/[slug]/page.tsx - 動態路由
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BlogPost({ params, searchParams }: PageProps) {
  const { slug } = params;
  
  // 獲取文章資料
  const post = await getPost(slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}

// 生成靜態參數
export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// app/api/hello/route.ts - API 路由
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello from API' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}`,
    explain: `
      <h4>App Router 特點</h4>
      <ul>
        <li><strong>檔案系統路由</strong>：資料夾結構即路由</li>
        <li><strong>Server Components</strong>：預設為伺服器元件</li>
        <li><strong>布局系統</strong>：巢狀布局支援</li>
        <li><strong>載入狀態</strong>：loading.tsx 自動處理</li>
        <li><strong>錯誤處理</strong>：error.tsx 錯誤邊界</li>
      </ul>
      <h4>特殊檔案</h4>
      <ul>
        <li>page.tsx：頁面元件</li>
        <li>layout.tsx：共用布局</li>
        <li>loading.tsx：載入 UI</li>
        <li>error.tsx：錯誤 UI</li>
        <li>not-found.tsx：404 頁面</li>
      </ul>
    `,
    prompt: `請說明 Next.js App Router 的檔案結構，包含：
1. 基本路由設定（page.tsx）
2. 巢狀布局（layout.tsx）
3. 動態路由（[slug]）
4. API 路由（route.ts）
5. 特殊檔案用途
提供完整的檔案結構範例`,
  },
  {
    id: 'client-server-components',
    title: 'Client 與 Server Components',
    description: '了解何時使用客戶端或伺服器元件',
    badges: ['Next.js', 'RSC', '元件'],
    demo: `
      <div class="space-y-4">
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">Server Component</h4>
          <ul class="text-sm space-y-1">
            <li>✓ 資料獲取</li>
            <li>✓ 存取後端資源</li>
            <li>✓ 保護敏感資訊</li>
            <li>✓ 減少客戶端 JS</li>
          </ul>
        </div>
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">Client Component</h4>
          <ul class="text-sm space-y-1">
            <li>✓ 互動性（onClick, onChange）</li>
            <li>✓ 使用 Hooks（useState, useEffect）</li>
            <li>✓ 瀏覽器 API</li>
            <li>✓ 第三方客戶端庫</li>
          </ul>
        </div>
      </div>
    `,
    code: `// Server Component (預設)
// app/products/page.tsx
import { db } from '@/lib/db';

async function getProducts() {
  // 直接存取資料庫
  const products = await db.product.findMany();
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <div>
      <h1>產品列表</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Server Component - 產品卡片
function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {/* AddToCart 是 Client Component */}
      <AddToCart productId={product.id} />
    </div>
  );
}

// Client Component
// app/components/AddToCart.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddToCart({ productId }: { productId: string }) {
  const [isAdding, setIsAdding] = useState(false);
  const router = useRouter();
  
  const handleAddToCart = async () => {
    setIsAdding(true);
    
    try {
      await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ productId }),
      });
      
      // 重新整理 Server Component
      router.refresh();
    } finally {
      setIsAdding(false);
    }
  };
  
  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {isAdding ? '加入中...' : '加入購物車'}
    </button>
  );
}

// 混合使用範例
// app/dashboard/page.tsx
import { auth } from '@/lib/auth';
import ClientSidebar from './ClientSidebar';
import ServerStats from './ServerStats';

export default async function DashboardPage() {
  const user = await auth.getUser();
  
  return (
    <div className="flex">
      {/* Client Component - 需要互動 */}
      <ClientSidebar user={user} />
      
      <main className="flex-1">
        {/* Server Component - 獲取資料 */}
        <ServerStats userId={user.id} />
        
        {/* Client Component - 使用 hooks */}
        <InteractiveChart />
      </main>
    </div>
  );
}

// 何時使用 Server Component
async function ServerComponent() {
  // ✅ 獲取資料
  const data = await fetch('https://api.example.com/data');
  
  // ✅ 存取後端資源
  const secrets = process.env.SECRET_API_KEY;
  
  // ✅ 大型依賴
  const heavyLib = await import('heavy-library');
  
  return <div>{/* 渲染內容 */}</div>;
}

// 何時使用 Client Component
'use client';

function ClientComponent() {
  // ✅ 事件處理
  const handleClick = () => {};
  
  // ✅ 使用 Hooks
  const [state, setState] = useState();
  useEffect(() => {}, []);
  
  // ✅ 瀏覽器 API
  const width = window.innerWidth;
  localStorage.setItem('key', 'value');
  
  // ✅ 第三方客戶端庫
  // import { motion } from 'framer-motion';
  
  return <div onClick={handleClick}>{/* 互動內容 */}</div>;
}`,
    explain: `
      <h4>Server Components 優勢</h4>
      <ul>
        <li><strong>效能</strong>：減少客戶端 JavaScript</li>
        <li><strong>資料獲取</strong>：直接存取資料庫</li>
        <li><strong>安全性</strong>：敏感邏輯在伺服器</li>
        <li><strong>SEO</strong>：內容在伺服器渲染</li>
      </ul>
      <h4>使用原則</h4>
      <ul>
        <li>預設使用 Server Component</li>
        <li>需要互動時才用 Client Component</li>
        <li>盡量將 Client Component 推到葉節點</li>
        <li>透過 props 傳遞資料</li>
      </ul>
    `,
    prompt: `請說明 Next.js 中 Server 和 Client Components 的差異，包含：
1. Server Component 的使用場景
2. Client Component 的使用場景
3. 混合使用的最佳實踐
4. 資料傳遞方式
5. 效能考量
提供具體的程式碼範例`,
  },
  {
    id: 'dynamic-import',
    title: '動態載入最佳實踐',
    description: '使用 dynamic import 優化載入效能',
    badges: ['Next.js', '動態載入', '效能'],
    deps: '需要客戶端渲染',
    demo: `
      <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <h4 class="font-semibold mb-2">動態載入範例</h4>
        <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          點擊載入圖表
        </button>
        <div class="mt-4 p-4 bg-white dark:bg-neutral-800 rounded">
          <p class="text-neutral-500">圖表將在點擊後載入...</p>
        </div>
      </div>
    `,
    code: `// 動態載入元件
import dynamic from 'next/dynamic';
import { useState } from 'react';

// 基本動態載入
const DynamicChart = dynamic(() => import('./Chart'), {
  loading: () => <p>載入圖表中...</p>,
});

// 禁用 SSR
const NoSSRComponent = dynamic(
  () => import('./ClientOnlyComponent'),
  { ssr: false }
);

// 具名導出
const DynamicModal = dynamic(
  () => import('./Modal').then(mod => mod.Modal),
  { loading: () => <div>載入中...</div> }
);

// 條件載入
function ConditionalLoad() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        顯示圖表
      </button>
      
      {showChart && <DynamicChart />}
    </div>
  );
}

// 動態載入外部庫
function MermaidDiagram({ code }: { code: string }) {
  const [diagram, setDiagram] = useState<string>('');
  
  useEffect(() => {
    const renderDiagram = async () => {
      const mermaid = (await import('mermaid')).default;
      
      mermaid.initialize({ startOnLoad: false });
      const { svg } = await mermaid.render('diagram', code);
      setDiagram(svg);
    };
    
    renderDiagram();
  }, [code]);
  
  return <div dangerouslySetInnerHTML={{ __html: diagram }} />;
}

// 載入多個元件
const Components = dynamic(
  async () => {
    const [Component1, Component2] = await Promise.all([
      import('./Component1'),
      import('./Component2'),
    ]);
    
    return function CombinedComponents() {
      return (
        <>
          <Component1.default />
          <Component2.default />
        </>
      );
    };
  }
);

// 錯誤處理
const SafeComponent = dynamic(
  () => import('./RiskyComponent').catch(err => {
    console.error('載入失敗:', err);
    return import('./Fallback');
  })
);

// 預載入
function PreloadExample() {
  // 滑鼠懸停時預載入
  const handleMouseEnter = () => {
    import('./HeavyComponent');
  };
  
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onClick={() => setShow(true)}
    >
      懸停預載入
    </button>
  );
}

// 路由層級的程式碼分割
// app/dashboard/page.tsx
import dynamic from 'next/dynamic';

const DashboardContent = dynamic(
  () => import('./DashboardContent'),
  {
    loading: () => <DashboardSkeleton />,
  }
);

export default function DashboardPage() {
  return <DashboardContent />;
}

// 最佳實踐範例
'use client';

import { useState, Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';

// 圖表元件 - 客戶端專用
const ChartComponent = dynamic(
  () => import('@/components/ChartComponent'),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 bg-gray-100 animate-pulse rounded" />
    ),
  }
);

// 編輯器元件 - 大型依賴
const Editor = dynamic(
  () => import('@/components/Editor'),
  {
    ssr: false,
    loading: () => <div>載入編輯器...</div>,
  }
);

export default function AnalyticsPage() {
  const [showChart, setShowChart] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  
  return (
    <div className="p-6">
      <h1>分析頁面</h1>
      
      {/* 按需載入圖表 */}
      <section>
        <button
          onClick={() => setShowChart(!showChart)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {showChart ? '隱藏' : '顯示'}圖表
        </button>
        
        {showChart && (
          <ChartComponent
            data={chartData}
            options={chartOptions}
          />
        )}
      </section>
      
      {/* 按需載入編輯器 */}
      <section>
        <button
          onClick={() => setShowEditor(!showEditor)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          {showEditor ? '隱藏' : '顯示'}編輯器
        </button>
        
        {showEditor && <Editor />}
      </section>
    </div>
  );
}`,
    explain: `
      <h4>動態載入優勢</h4>
      <ul>
        <li><strong>減少初始載入</strong>：按需載入元件</li>
        <li><strong>程式碼分割</strong>：自動分割 bundle</li>
        <li><strong>改善 LCP</strong>：優先載入關鍵內容</li>
        <li><strong>條件載入</strong>：根據條件載入不同元件</li>
      </ul>
      <h4>使用場景</h4>
      <ul>
        <li>大型第三方庫（圖表、編輯器）</li>
        <li>模態框、工具提示等非關鍵 UI</li>
        <li>條件顯示的元件</li>
        <li>客戶端專用元件</li>
      </ul>
    `,
    prompt: `請展示 Next.js dynamic import 的最佳實踐，包含：
1. 基本動態載入
2. 禁用 SSR 的客戶端元件
3. 載入狀態處理
4. 錯誤處理
5. 預載入策略
6. 實際應用場景（圖表、編輯器）
提供完整的程式碼範例`,
  },
];