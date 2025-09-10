import { ExampleItem } from '@/components/ExampleCard';

export const iconsExamples: ExampleItem[] = [
  {
    id: 'common-icons',
    title: '常用圖示集',
    description: '使用 react-icons/fa 的常用圖示',
    badges: ['React Icons', 'Font Awesome', '圖示'],
    demo: `
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold mb-2">基本圖示</h4>
          <div class="flex gap-4 text-2xl">
            <span title="搜尋">🔍</span>
            <span title="使用者">👤</span>
            <span title="設定">⚙️</span>
            <span title="首頁">🏠</span>
            <span title="愛心">❤️</span>
          </div>
        </div>
        <div>
          <h4 class="font-semibold mb-2">不同尺寸</h4>
          <div class="flex gap-4 items-center">
            <span class="text-xs">🔍</span>
            <span class="text-sm">🔍</span>
            <span class="text-base">🔍</span>
            <span class="text-lg">🔍</span>
            <span class="text-xl">🔍</span>
            <span class="text-2xl">🔍</span>
          </div>
        </div>
        <div>
          <h4 class="font-semibold mb-2">顏色變化</h4>
          <div class="flex gap-4 text-2xl">
            <span class="text-blue-500">💙</span>
            <span class="text-green-500">💚</span>
            <span class="text-red-500">❤️</span>
            <span class="text-purple-500">💜</span>
            <span class="text-yellow-500">💛</span>
          </div>
        </div>
      </div>
    `,
    code: `import {
  FaSearch,
  FaUser,
  FaCog,
  FaHome,
  FaHeart,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBell,
  FaEnvelope,
  FaShoppingCart,
  FaDownload,
  FaUpload,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaPlus,
  FaMinus,
  FaBars,
} from 'react-icons/fa';

// 基本使用
function IconExamples() {
  return (
    <div>
      {/* 預設大小 */}
      <FaSearch />
      
      {/* 自訂大小 - 使用 size prop */}
      <FaUser size={24} />
      
      {/* 使用 className 控制樣式 */}
      <FaCog className="text-2xl text-gray-500" />
      
      {/* 自訂顏色 */}
      <FaHeart color="#ef4444" size={20} />
      
      {/* 結合 Tailwind */}
      <FaGithub className="w-6 h-6 text-neutral-700 hover:text-neutral-900" />
    </div>
  );
}

// 圖示按鈕
function IconButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      <FaDownload />
      <span>下載</span>
    </button>
  );
}

// 輸入欄位圖示
function InputWithIcon() {
  return (
    <div className="relative">
      <input
        type="text"
        className="pl-10 pr-4 py-2 border rounded-lg w-full"
        placeholder="搜尋..."
      />
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

// 社群媒體圖示
function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
        <FaTwitter size={24} />
      </a>
      <a href="#" className="text-gray-600 hover:text-black transition-colors">
        <FaGithub size={24} />
      </a>
      <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}

// 通知圖示與徽章
function NotificationIcon() {
  const notificationCount = 5;
  
  return (
    <div className="relative">
      <FaBell className="text-2xl text-gray-600" />
      {notificationCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {notificationCount}
        </span>
      )}
    </div>
  );
}

// 動態圖示
function DynamicIcon({ type }: { type: 'success' | 'error' | 'warning' }) {
  const icons = {
    success: <FaCheck className="text-green-500" />,
    error: <FaTimes className="text-red-500" />,
    warning: <FaExclamationTriangle className="text-yellow-500" />,
  };
  
  return icons[type];
}

// 載入狀態圖示
function LoadingIcon() {
  return (
    <FaSpinner className="animate-spin text-blue-500" size={24} />
  );
}`,
    explain: `
      <h4>React Icons 優勢</h4>
      <ul>
        <li><strong>Tree Shaking</strong>：只打包使用的圖示</li>
        <li><strong>SVG 圖示</strong>：可縮放、清晰</li>
        <li><strong>多個圖示庫</strong>：FA、Material、Feather 等</li>
        <li><strong>React 元件</strong>：易於使用和客製化</li>
      </ul>
      <h4>使用技巧</h4>
      <ul>
        <li>使用 size prop 或 className 控制大小</li>
        <li>結合 Tailwind 類別設定樣式</li>
        <li>使用 color prop 或 text-color 類別</li>
        <li>加入 hover 和 transition 效果</li>
      </ul>
    `,
    prompt: `請展示 react-icons/fa 的使用方式，包含：
1. 常用圖示導入和使用
2. 大小和顏色控制
3. 搭配按鈕和輸入欄位
4. 通知徽章效果
5. 動態圖示選擇`,
  },
  {
    id: 'icon-buttons',
    title: '圖示按鈕設計',
    description: '結合圖示與按鈕的互動設計',
    badges: ['React Icons', '按鈕', 'UI'],
    demo: `
      <div class="space-y-4">
        <div class="flex gap-3">
          <button class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <span>💾</span>
          </button>
          <button class="p-2 bg-green-500 text-white rounded hover:bg-green-600">
            <span>✏️</span>
          </button>
          <button class="p-2 bg-red-500 text-white rounded hover:bg-red-600">
            <span>🗑️</span>
          </button>
        </div>
        <div class="flex gap-3">
          <button class="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
            <span>⬇️</span> 下載
          </button>
          <button class="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50">
            <span>🔄</span> 重新整理
          </button>
        </div>
      </div>
    `,
    code: `import { 
  FaSave, 
  FaEdit, 
  FaTrash, 
  FaPlus,
  FaDownload,
  FaUpload,
  FaShare,
  FaCopy,
  FaRedo,
  FaUndo
} from 'react-icons/fa';

// 純圖示按鈕
function IconOnlyButton() {
  return (
    <div className="flex gap-2">
      <button
        className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        aria-label="儲存"
      >
        <FaSave size={20} />
      </button>
      
      <button
        className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
        aria-label="編輯"
      >
        <FaEdit size={20} />
      </button>
      
      <button
        className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
        aria-label="刪除"
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
}

// 圖示 + 文字按鈕
function IconTextButton() {
  return (
    <div className="flex gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
        <FaDownload />
        <span>下載檔案</span>
      </button>
      
      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        <FaUpload />
        <span>上傳</span>
      </button>
      
      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
        <FaShare />
        <span>分享</span>
      </button>
    </div>
  );
}

// 浮動操作按鈕 (FAB)
function FloatingActionButton() {
  return (
    <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 hover:shadow-xl transition-all flex items-center justify-center">
      <FaPlus size={24} />
    </button>
  );
}

// 圖示按鈕群組
function IconButtonGroup() {
  return (
    <div className="inline-flex rounded-lg shadow-sm">
      <button className="px-3 py-2 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50">
        <FaUndo className="text-gray-600" />
      </button>
      <button className="px-3 py-2 bg-white border-t border-b border-gray-300 hover:bg-gray-50">
        <FaRedo className="text-gray-600" />
      </button>
      <button className="px-3 py-2 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-50">
        <FaCopy className="text-gray-600" />
      </button>
    </div>
  );
}

// 載入狀態按鈕
function LoadingButton({ isLoading }: { isLoading: boolean }) {
  return (
    <button
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin" />
          <span>處理中...</span>
        </>
      ) : (
        <>
          <FaSave />
          <span>儲存</span>
        </>
      )}
    </button>
  );
}`,
    explain: `
      <h4>圖示按鈕設計原則</h4>
      <ul>
        <li><strong>可達性</strong>：純圖示按鈕需要 aria-label</li>
        <li><strong>視覺回饋</strong>：hover、active 狀態</li>
        <li><strong>尺寸一致</strong>：保持圖示和按鈕比例協調</li>
        <li><strong>語意清晰</strong>：選擇直觀的圖示</li>
      </ul>
    `,
    prompt: `請設計各種圖示按鈕樣式，包含純圖示、圖示+文字、浮動按鈕、按鈕群組等`,
  },
  {
    id: 'icon-animations',
    title: '圖示動畫效果',
    description: '為圖示添加動畫和互動效果',
    badges: ['React Icons', '動畫', '互動'],
    demo: `
      <div class="space-y-4">
        <div class="flex gap-4 text-2xl">
          <span class="animate-spin">⚙️</span>
          <span class="animate-pulse">❤️</span>
          <span class="animate-bounce">⬇️</span>
        </div>
        <div class="flex gap-4">
          <button class="p-3 rounded-lg border hover:scale-110 transition-transform">
            <span class="text-2xl">👍</span>
          </button>
          <button class="p-3 rounded-lg border hover:rotate-12 transition-transform">
            <span class="text-2xl">🔔</span>
          </button>
        </div>
      </div>
    `,
    code: `import { useState } from 'react';
import {
  FaHeart,
  FaBell,
  FaStar,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';

// 旋轉動畫
function SpinningIcon() {
  return <FaSpinner className="animate-spin text-blue-500" size={24} />;
}

// 脈動效果
function PulsingIcon() {
  return <FaHeart className="animate-pulse text-red-500" size={24} />;
}

// 彈跳效果
function BouncingIcon() {
  return <FaBell className="animate-bounce text-yellow-500" size={24} />;
}

// Hover 縮放
function HoverScaleIcon() {
  return (
    <button className="p-3 rounded-lg border hover:scale-110 transition-transform duration-200">
      <FaStar className="text-yellow-500" size={24} />
    </button>
  );
}

// 點擊動畫
function ClickAnimationIcon() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };
  
  return (
    <button
      onClick={handleClick}
      className="p-3 rounded-lg border"
    >
      <FaHeart
        className={\`text-red-500 transition-all duration-300 \${
          isAnimating ? 'scale-125 text-pink-500' : 'scale-100'
        }\`}
        size={24}
      />
    </button>
  );
}

// 成功動畫
function SuccessAnimation({ show }: { show: boolean }) {
  return (
    <div className={\`transition-all duration-500 \${
      show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
    }\`}>
      <FaCheckCircle className="text-green-500" size={32} />
    </div>
  );
}

// 搖晃警告
function ShakeWarning() {
  return (
    <style>
      {
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .shake {
          animation: shake 0.5s ease-in-out;
        }
      }
    </style>
    <FaExclamationTriangle className="shake text-yellow-500" size={24} />
  );
}`,
    explain: `
      <h4>動畫效果類型</h4>
      <ul>
        <li><strong>持續動畫</strong>：spin、pulse、bounce</li>
        <li><strong>互動動畫</strong>：hover、click 觸發</li>
        <li><strong>狀態動畫</strong>：成功、錯誤、警告</li>
        <li><strong>過渡效果</strong>：scale、rotate、fade</li>
      </ul>
    `,
    prompt: `請展示圖示動畫效果，包含旋轉、脈動、彈跳、縮放等動畫`,
  },
];