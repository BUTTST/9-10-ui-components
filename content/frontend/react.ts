import { ExampleItem } from '@/components/ExampleCard';
import React from 'react';

export const reactExamples: ExampleItem[] = [
  {
    id: 'useState-counter',
    title: 'useState 計數器',
    description: '使用 useState Hook 管理元件狀態',
    badges: ['React', 'Hooks', 'useState'],
    demo: `
      <div class="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
        <div class="text-center">
          <div class="text-4xl font-bold text-primary-600 mb-4">0</div>
          <div class="flex gap-3 justify-center">
            <button class="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
              +1
            </button>
            <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              -1
            </button>
            <button class="px-4 py-2 bg-neutral-500 text-white rounded-lg hover:bg-neutral-600">
              重置
            </button>
          </div>
        </div>
      </div>
    `,
    code: `import React, { useState } from 'react';

function Counter() {
  // 宣告狀態變數
  const [count, setCount] = useState(0);
  
  // 事件處理函式
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  // 使用函式更新（建議用於依賴前一個狀態）
  const incrementByFive = () => {
    setCount(prevCount => prevCount + 5);
  };
  
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">計數器</h2>
      <div className="text-4xl font-bold text-primary-600 mb-4">
        {count}
      </div>
      
      <div className="flex gap-3 justify-center">
        <button 
          onClick={increment}
          className="px-4 py-2 bg-primary-500 text-white rounded"
        >
          +1
        </button>
        
        <button 
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -1
        </button>
        
        <button 
          onClick={reset}
          className="px-4 py-2 bg-neutral-500 text-white rounded"
        >
          重置
        </button>
        
        <button 
          onClick={incrementByFive}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +5
        </button>
      </div>
    </div>
  );
}

// 多個狀態管理
function MultipleStates() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // 物件狀態
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  
  // 更新物件狀態
  const updateUser = (field: string, value: string) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };
  
  // 陣列狀態
  const [items, setItems] = useState<string[]>([]);
  
  const addItem = (item: string) => {
    setItems([...items, item]);
  };
  
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      {/* 元件內容 */}
    </div>
  );
}

export default Counter;`,
    explain: `
      <h4>useState 重點</h4>
      <ul>
        <li><strong>基本語法</strong>：const [state, setState] = useState(initialValue)</li>
        <li><strong>更新狀態</strong>：setState(newValue) 或 setState(prev => newValue)</li>
        <li><strong>不可變性</strong>：永遠返回新的物件/陣列，不要直接修改</li>
        <li><strong>批次更新</strong>：React 18 自動批次處理狀態更新</li>
      </ul>
      <h4>最佳實踐</h4>
      <ul>
        <li>使用函式更新避免閉包問題</li>
        <li>將相關狀態組合成物件</li>
        <li>避免過度使用狀態</li>
        <li>考慮使用 useReducer 處理複雜狀態</li>
      </ul>
    `,
    prompt: `請建立一個 React useState 計數器元件，包含：
1. 基本的加減和重置功能
2. 使用函式更新狀態
3. 展示多個狀態的管理
4. 物件和陣列狀態的更新
5. TypeScript 型別定義
使用繁體中文註解說明`,
  },
  {
    id: 'controlled-form',
    title: '受控表單',
    description: '實現受控元件的表單處理',
    badges: ['React', '表單', '受控元件'],
    demo: `
      <div class="max-w-md mx-auto p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-4">註冊表單</h3>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">姓名</label>
            <input type="text" class="w-full px-3 py-2 border rounded-lg" placeholder="請輸入姓名" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">電子郵件</label>
            <input type="email" class="w-full px-3 py-2 border rounded-lg" placeholder="email@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">國家</label>
            <select class="w-full px-3 py-2 border rounded-lg">
              <option>請選擇</option>
              <option>台灣</option>
              <option>日本</option>
              <option>美國</option>
            </select>
          </div>
          <div class="flex items-center">
            <input type="checkbox" class="mr-2" />
            <label class="text-sm">我同意服務條款</label>
          </div>
          <button type="submit" class="w-full py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
            提交
          </button>
        </form>
      </div>
    `,
    code: `import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  country: string;
  gender: string;
  interests: string[];
  agree: boolean;
}

function ControlledForm() {
  // 表單狀態
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    country: '',
    gender: '',
    interests: [],
    agree: false
  });
  
  // 錯誤狀態
  const [errors, setErrors] = useState<Partial<FormData>>({});
  
  // 通用輸入處理
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // 清除該欄位的錯誤
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // 多選框處理
  const handleCheckboxGroup = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(item => item !== value)
        : [...prev.interests, value]
    }));
  };
  
  // 表單驗證
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '姓名為必填';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '電子郵件為必填';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '電子郵件格式不正確';
    }
    
    if (formData.password.length < 6) {
      newErrors.password = '密碼至少需要 6 個字元';
    }
    
    if (!formData.agree) {
      newErrors.agree = '請同意服務條款';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // 表單提交
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('表單資料:', formData);
      // 送出表單資料到 API
      alert('表單提交成功！');
      
      // 重置表單
      setFormData({
        name: '',
        email: '',
        password: '',
        country: '',
        gender: '',
        interests: [],
        agree: false
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      {/* 文字輸入 */}
      <div>
        <label className="block text-sm font-medium mb-1">
          姓名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={\`w-full px-3 py-2 border rounded-lg \${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }\`}
          placeholder="請輸入姓名"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>
      
      {/* 電子郵件 */}
      <div>
        <label className="block text-sm font-medium mb-1">
          電子郵件 <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>
      
      {/* 下拉選單 */}
      <div>
        <label className="block text-sm font-medium mb-1">
          國家
        </label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">請選擇</option>
          <option value="tw">台灣</option>
          <option value="jp">日本</option>
          <option value="us">美國</option>
        </select>
      </div>
      
      {/* 單選按鈕 */}
      <div>
        <label className="block text-sm font-medium mb-1">性別</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
              className="mr-2"
            />
            男性
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
              className="mr-2"
            />
            女性
          </label>
        </div>
      </div>
      
      {/* 多選框 */}
      <div>
        <label className="block text-sm font-medium mb-1">興趣</label>
        <div className="space-y-2">
          {['運動', '閱讀', '旅遊', '音樂'].map(interest => (
            <label key={interest} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleCheckboxGroup(interest)}
                className="mr-2"
              />
              {interest}
            </label>
          ))}
        </div>
      </div>
      
      {/* 同意條款 */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleInputChange}
          className="mr-2"
        />
        <label className="text-sm">
          我同意服務條款 <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.agree && (
        <p className="text-sm text-red-500">{errors.agree}</p>
      )}
      
      {/* 提交按鈕 */}
      <button
        type="submit"
        className="w-full py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
      >
        提交表單
      </button>
    </form>
  );
}

export default ControlledForm;`,
    explain: `
      <h4>受控元件特點</h4>
      <ul>
        <li><strong>單一資料來源</strong>：React state 是唯一的資料來源</li>
        <li><strong>即時驗證</strong>：可在輸入時立即驗證</li>
        <li><strong>條件渲染</strong>：根據狀態控制顯示</li>
        <li><strong>資料同步</strong>：UI 和狀態始終同步</li>
      </ul>
      <h4>表單處理要點</h4>
      <ul>
        <li>使用 onChange 處理輸入變化</li>
        <li>preventDefault 阻止預設提交</li>
        <li>實施客戶端驗證</li>
        <li>提供清晰的錯誤訊息</li>
      </ul>
    `,
    prompt: `請建立一個 React 受控表單元件，包含：
1. 文字輸入、電子郵件、密碼欄位
2. 下拉選單和單選按鈕
3. 多選框群組
4. 表單驗證和錯誤顯示
5. 提交處理和重置功能
使用 TypeScript 並加上繁體中文註解`,
  },
  {
    id: 'useEffect-cleanup',
    title: 'useEffect 與清理',
    description: '使用 useEffect 處理副作用和清理函式',
    badges: ['React', 'Hooks', 'useEffect'],
    demo: `
      <div class="space-y-4">
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">IntersectionObserver 範例</h4>
          <div class="h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center text-white">
            <p>捲動頁面查看元素是否在視窗中</p>
          </div>
          <p class="mt-2 text-sm">狀態：<span class="font-medium">可見</span></p>
        </div>
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">計時器範例</h4>
          <p class="text-2xl font-bold">00:00:05</p>
        </div>
      </div>
    `,
    code: `import React, { useState, useEffect, useRef } from 'react';

// IntersectionObserver 範例
function IntersectionObserverDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // 建立觀察器
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 元素 50% 可見時觸發
        rootMargin: '0px'
      }
    );
    
    // 開始觀察
    observer.observe(element);
    
    // 清理函式
    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, []); // 空依賴陣列，只在掛載時執行
  
  return (
    <div>
      <div 
        ref={elementRef}
        className={\`p-8 rounded-lg transition-all duration-500 \${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }\`}
      >
        <h3>動畫元素</h3>
        <p>當元素進入視窗時會有動畫效果</p>
      </div>
      <p>元素狀態：{isVisible ? '可見' : '不可見'}</p>
    </div>
  );
}

// 計時器範例
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    
    // 清理計時器
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // 依賴 isRunning
  
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    return \`\${hours.toString().padStart(2, '0')}:\${
      minutes.toString().padStart(2, '0')
    }:\${secs.toString().padStart(2, '0')}\`;
  };
  
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">計時器</h2>
      <div className="text-4xl font-mono mb-4">
        {formatTime(seconds)}
      </div>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={\`px-4 py-2 rounded text-white \${
            isRunning ? 'bg-red-500' : 'bg-green-500'
          }\`}
        >
          {isRunning ? '暫停' : '開始'}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          重置
        </button>
      </div>
    </div>
  );
}

// 事件監聽器範例
function WindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // 加入事件監聽器
    window.addEventListener('resize', handleResize);
    
    // 清理事件監聽器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="p-4 bg-blue-50 rounded">
      <h3>視窗大小</h3>
      <p>寬度：{windowSize.width}px</p>
      <p>高度：{windowSize.height}px</p>
    </div>
  );
}

// 資料獲取範例
function DataFetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/data');
        
        if (!cancelled) {
          const result = await response.json();
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    // 清理：取消請求
    return () => {
      cancelled = true;
    };
  }, []);
  
  if (loading) return <div>載入中...</div>;
  if (error) return <div>錯誤：{error}</div>;
  
  return <div>{/* 顯示資料 */}</div>;
}

// 訂閱範例
function WebSocketConnection() {
  const [messages, setMessages] = useState<string[]>([]);
  const [connected, setConnected] = useState(false);
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    
    ws.onopen = () => {
      setConnected(true);
      console.log('WebSocket 連接已建立');
    };
    
    ws.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };
    
    ws.onerror = (error) => {
      console.error('WebSocket 錯誤:', error);
    };
    
    ws.onclose = () => {
      setConnected(false);
      console.log('WebSocket 連接已關閉');
    };
    
    // 清理：關閉連接
    return () => {
      ws.close();
    };
  }, []);
  
  return (
    <div>
      <p>連接狀態：{connected ? '已連接' : '未連接'}</p>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export { IntersectionObserverDemo, Timer, WindowResize, DataFetching };`,
    explain: `
      <h4>useEffect 要點</h4>
      <ul>
        <li><strong>執行時機</strong>：在渲染後執行副作用</li>
        <li><strong>依賴陣列</strong>：控制 effect 重新執行</li>
        <li><strong>清理函式</strong>：返回函式用於清理</li>
        <li><strong>空依賴</strong>：[]表示只在掛載/卸載時執行</li>
      </ul>
      <h4>常見用途</h4>
      <ul>
        <li>資料獲取</li>
        <li>訂閱事件</li>
        <li>手動 DOM 操作</li>
        <li>計時器設定</li>
        <li>第三方庫整合</li>
      </ul>
    `,
    prompt: `請建立 React useEffect 範例，展示：
1. IntersectionObserver 觀察元素
2. 計時器的設定和清理
3. 視窗大小監聽
4. 資料獲取和取消
5. WebSocket 連接管理
包含完整的清理邏輯和 TypeScript 型別`,
  },
  {
    id: 'custom-hooks',
    title: '自訂 Hooks',
    description: '建立可重用的自訂 Hooks',
    badges: ['React', 'Hooks', '自訂'],
    demo: `
      <div class="space-y-4">
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">useLocalStorage Hook</h4>
          <input type="text" class="w-full px-3 py-2 border rounded" placeholder="輸入要儲存的值" />
          <p class="mt-2 text-sm">儲存的值會保留在瀏覽器中</p>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">useDebounce Hook</h4>
          <input type="text" class="w-full px-3 py-2 border rounded" placeholder="輸入搜尋關鍵字" />
          <p class="mt-2 text-sm">延遲 500ms 後才會觸發搜尋</p>
        </div>
      </div>
    `,
    code: `import { useState, useEffect, useRef, useCallback } from 'react';

// useLocalStorage - 本地儲存 Hook
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // 初始化狀態
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error loading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });
  
  // 更新值的函式
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        setStoredValue(prevValue => {
          const valueToStore = value instanceof Function 
            ? value(prevValue) 
            : value;
          
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
          return valueToStore;
        });
      } catch (error) {
        console.error(\`Error saving to localStorage key "\${key}":\`, error);
      }
    },
    [key]
  );
  
  return [storedValue, setValue];
}

// useDebounce - 防抖 Hook
function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// useFetch - 資料獲取 Hook
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T = any>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });
  
  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });
      
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        
        if (!cancelled) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (!cancelled) {
          setState({ 
            data: null, 
            loading: false, 
            error: error as Error 
          });
        }
      }
    };
    
    fetchData();
    
    return () => {
      cancelled = true;
    };
  }, [url]);
  
  return state;
}

// useToggle - 切換狀態 Hook
function useToggle(
  initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);
  
  const setToggle = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);
  
  return [value, toggle, setToggle];
}

// useOnClickOutside - 點擊外部 Hook
function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// usePrevious - 前一個值 Hook
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

// useInterval - 間隔執行 Hook
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  
  useEffect(() => {
    if (delay === null) return;
    
    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);
    
    return () => clearInterval(id);
  }, [delay]);
}

// 使用範例
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, loading, error } = useFetch(
    \`/api/search?q=\${debouncedSearchTerm}\`
  );
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="搜尋..."
      />
      
      {loading && <p>搜尋中...</p>}
      {error && <p>錯誤：{error.message}</p>}
      {data && <div>{/* 顯示搜尋結果 */}</div>}
    </div>
  );
}

// 下拉選單範例
function DropdownMenu() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useOnClickOutside(dropdownRef, () => setIsOpen(false));
  
  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={toggle}>
        選單
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2">
          {/* 選單內容 */}
        </div>
      )}
    </div>
  );
}

export {
  useLocalStorage,
  useDebounce,
  useFetch,
  useToggle,
  useOnClickOutside,
  usePrevious,
  useInterval
};`,
    explain: `
      <h4>自訂 Hook 規則</h4>
      <ul>
        <li><strong>命名規範</strong>：必須以 use 開頭</li>
        <li><strong>組合原則</strong>：可使用其他 Hooks</li>
        <li><strong>純函式</strong>：相同輸入產生相同輸出</li>
        <li><strong>可重用性</strong>：抽取共用邏輯</li>
      </ul>
      <h4>常見模式</h4>
      <ul>
        <li>狀態管理（useLocalStorage）</li>
        <li>效能優化（useDebounce）</li>
        <li>資料獲取（useFetch）</li>
        <li>事件處理（useOnClickOutside）</li>
        <li>動畫計時（useInterval）</li>
      </ul>
    `,
    prompt: `請建立實用的自訂 React Hooks，包含：
1. useLocalStorage - 本地儲存
2. useDebounce - 防抖處理
3. useFetch - 資料獲取
4. useToggle - 布林切換
5. useOnClickOutside - 點擊外部偵測
6. usePrevious - 前一個值
提供 TypeScript 型別和使用範例`,
  },
  {
    id: 'context-provider',
    title: 'Context 與全局狀態',
    description: '使用 Context API 管理全局狀態',
    badges: ['React', 'Context', '狀態管理'],
    demo: `
      <div class="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
        <div class="mb-4">
          <h4 class="font-semibold mb-2">主題切換</h4>
          <button class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            切換深色模式
          </button>
        </div>
        <div>
          <h4 class="font-semibold mb-2">使用者資訊</h4>
          <p>使用者：Admin</p>
          <p>角色：管理員</p>
          <button class="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            登出
          </button>
        </div>
      </div>
    `,
    code: `import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 主題 Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // 從 localStorage 讀取主題
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });
  
  useEffect(() => {
    // 儲存主題到 localStorage
    localStorage.setItem('theme', theme);
    
    // 更新 HTML 類別
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// 認證 Context
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 檢查是否已登入
    checkAuth();
  }, []);
  
  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      
      const response = await fetch('/api/auth/me', {
        headers: {
          Authorization: \`Bearer \${token}\`
        }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
      throw new Error('登入失敗');
    }
    
    const { user, token } = await response.json();
    localStorage.setItem('token', token);
    setUser(user);
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  
  const register = async (data: RegisterData) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('註冊失敗');
    }
    
    const { user, token } = await response.json();
    localStorage.setItem('token', token);
    setUser(user);
  };
  
  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// 購物車 Context
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === newItem.id);
      
      if (existing) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };
  
  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setItems([]);
  };
  
  return (
    <CartContext.Provider
      value={{
        items,
        totalAmount,
        addItem,
        removeItem,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// 組合多個 Provider
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// 使用範例
function App() {
  return (
    <AppProviders>
      <Header />
      <MainContent />
    </AppProviders>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { items } = useCart();
  
  return (
    <header>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      
      {user ? (
        <div>
          <span>歡迎, {user.name}</span>
          <button onClick={logout}>登出</button>
        </div>
      ) : (
        <button>登入</button>
      )}
      
      <div>
        購物車 ({items.length})
      </div>
    </header>
  );
}`,
    explain: `
      <h4>Context API 優點</h4>
      <ul>
        <li><strong>避免 Props Drilling</strong>：不需層層傳遞</li>
        <li><strong>全局狀態</strong>：跨元件共享資料</li>
        <li><strong>關注點分離</strong>：邏輯集中管理</li>
        <li><strong>TypeScript 支援</strong>：完整型別安全</li>
      </ul>
      <h4>最佳實踐</h4>
      <ul>
        <li>為每個功能建立獨立 Context</li>
        <li>提供自訂 Hook 簡化使用</li>
        <li>處理載入和錯誤狀態</li>
        <li>避免過度使用，考慮效能</li>
      </ul>
    `,
    prompt: `請建立 React Context 範例，包含：
1. 主題切換 Context
2. 使用者認證 Context
3. 購物車 Context
4. 組合多個 Provider
5. 自訂 Hook 封裝
6. TypeScript 完整型別
提供實際使用場景和最佳實踐`,
  },
  {
    id: 'performance-optimization',
    title: '效能優化技巧',
    description: '使用 memo、useMemo 和 useCallback 優化效能',
    badges: ['React', '效能', '優化'],
    demo: `
      <div class="space-y-4">
        <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">React.memo 範例</h4>
          <p class="text-sm">只在 props 改變時重新渲染</p>
        </div>
        <div class="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">useMemo 範例</h4>
          <p class="text-sm">快取計算結果，避免重複計算</p>
        </div>
      </div>
    `,
    code: `import React, { useState, useMemo, useCallback, memo } from 'react';

// React.memo - 元件記憶化
interface ExpensiveComponentProps {
  data: string[];
  onItemClick: (item: string) => void;
}

const ExpensiveComponent = memo<ExpensiveComponentProps>(
  ({ data, onItemClick }) => {
    console.log('ExpensiveComponent 渲染');
    
    return (
      <div>
        <h3>昂貴的元件</h3>
        <ul>
          {data.map(item => (
            <li key={item} onClick={() => onItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  },
  // 自訂比較函式（可選）
  (prevProps, nextProps) => {
    return (
      prevProps.data.length === nextProps.data.length &&
      prevProps.data.every((item, index) => item === nextProps.data[index])
    );
  }
);

// useMemo - 記憶化計算結果
function SearchResults({ items, searchTerm }: {
  items: string[];
  searchTerm: string;
}) {
  // 只在 items 或 searchTerm 改變時重新計算
  const filteredItems = useMemo(() => {
    console.log('過濾項目中...');
    return items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);
  
  // 昂貴的計算
  const statistics = useMemo(() => {
    console.log('計算統計資料...');
    return {
      total: filteredItems.length,
      averageLength: filteredItems.reduce(
        (sum, item) => sum + item.length,
        0
      ) / filteredItems.length || 0
    };
  }, [filteredItems]);
  
  return (
    <div>
      <p>找到 {statistics.total} 個結果</p>
      <p>平均長度：{statistics.averageLength.toFixed(2)}</p>
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// useCallback - 記憶化函式
function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>(['項目1', '項目2']);
  
  // 沒有使用 useCallback - 每次渲染都會建立新函式
  const handleClickBad = (item: string) => {
    console.log(\`點擊: \${item}\`);
  };
  
  // 使用 useCallback - 只在依賴改變時建立新函式
  const handleClick = useCallback((item: string) => {
    console.log(\`點擊: \${item}\`);
    // 可以安全地使用 items
    setItems(prev => [...prev, item]);
  }, []); // 空依賴，函式永不改變
  
  const handleRemove = useCallback((index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  }, []);
  
  const addItem = useCallback(() => {
    setItems(prev => [...prev, \`項目\${prev.length + 1}\`]);
  }, []);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        計數: {count}
      </button>
      
      <ExpensiveComponent 
        data={items} 
        onItemClick={handleClick}
      />
      
      <button onClick={addItem}>新增項目</button>
    </div>
  );
}

// 虛擬列表 - 大量資料優化
function VirtualList({ items, itemHeight = 50 }: {
  items: any[];
  itemHeight?: number;
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(600);
  
  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.ceil((scrollTop + containerHeight) / itemHeight);
    
    return items.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      index: startIndex + index,
      top: (startIndex + index) * itemHeight
    }));
  }, [items, scrollTop, containerHeight, itemHeight]);
  
  const totalHeight = items.length * itemHeight;
  
  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map(item => (
          <div
            key={item.index}
            style={{
              position: 'absolute',
              top: item.top,
              height: itemHeight
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

// 延遲載入元件
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function LazyLoadExample() {
  const [showComponent, setShowComponent] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowComponent(true)}>
        載入元件
      </button>
      
      {showComponent && (
        <React.Suspense fallback={<div>載入中...</div>}>
          <LazyComponent />
        </React.Suspense>
      )}
    </div>
  );
}

// 防止不必要的重新渲染
function OptimizedForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // 分離不相關的狀態
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  // 使用 useCallback 避免子元件重新渲染
  const updateField = useCallback((field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);
  
  // 記憶化驗證函式
  const validate = useCallback(() => {
    const newErrors: any = {};
    
    if (!formData.name) {
      newErrors.name = '姓名為必填';
    }
    
    if (!formData.email) {
      newErrors.email = '電子郵件為必填';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);
  
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      // 提交表單
      await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validate]);
  
  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="姓名"
        value={formData.name}
        onChange={(value) => updateField('name', value)}
        error={errors.name}
      />
      {/* 其他欄位 */}
    </form>
  );
}

// 記憶化的表單欄位元件
const FormField = memo(({ label, value, onChange, error }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) => {
  console.log(\`FormField "\${label}" 渲染\`);
  
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span>{error}</span>}
    </div>
  );
});

export { ExpensiveComponent, SearchResults, ParentComponent, VirtualList };`,
    explain: `
      <h4>優化技巧</h4>
      <ul>
        <li><strong>React.memo</strong>：避免不必要的元件重新渲染</li>
        <li><strong>useMemo</strong>：快取昂貴的計算結果</li>
        <li><strong>useCallback</strong>：快取函式參考</li>
        <li><strong>虛擬列表</strong>：只渲染可見項目</li>
        <li><strong>延遲載入</strong>：按需載入元件</li>
      </ul>
      <h4>何時優化</h4>
      <ul>
        <li>確實有效能問題時</li>
        <li>處理大量資料</li>
        <li>頻繁更新的元件</li>
        <li>複雜的計算邏輯</li>
      </ul>
    `,
    prompt: `請展示 React 效能優化技巧，包含：
1. React.memo 避免重新渲染
2. useMemo 快取計算結果
3. useCallback 快取函式
4. 虛擬列表處理大量資料
5. 延遲載入元件
6. 表單優化範例
提供實際場景和效能比較`,
  },
];