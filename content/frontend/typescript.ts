import { ExampleItem } from '@/components/ExampleCard';

export const typescriptExamples: ExampleItem[] = [
  {
    id: 'type-alias-interface',
    title: '型別別名與介面',
    description: '定義型別別名（Type Alias）和介面（Interface）',
    badges: ['TypeScript', '型別', '介面'],
    demo: `
      <div class="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
        <h4 class="font-semibold mb-2">型別系統範例</h4>
        <pre class="text-sm bg-white dark:bg-neutral-900 p-3 rounded overflow-x-auto">
<code>// 使用者資料已定義型別
const user: User = {
  id: 1,
  name: "張小明",
  email: "ming@example.com",
  age: 28,
  isActive: true
};

// 產品資料符合介面定義
const product: Product = {
  id: "P001",
  name: "筆記型電腦",
  price: 35000,
  category: "electronics",
  inStock: true
};</code>
        </pre>
      </div>
    `,
    code: `// 型別別名 (Type Alias)
type UserID = number | string;

type User = {
  id: UserID;
  name: string;
  email: string;
  age?: number;  // 可選屬性
  readonly createdAt: Date;  // 唯讀屬性
};

// 介面 (Interface)
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

// 介面擴展
interface DigitalProduct extends Product {
  downloadUrl: string;
  fileSize: number;
}

// 介面合併
interface Product {
  category: string;  // 會合併到上面的 Product
}

// 聯合型別
type Status = "pending" | "active" | "inactive";

// 交集型別
type Employee = User & {
  employeeId: string;
  department: string;
};

// 索引簽名
interface StringDictionary {
  [key: string]: string;
}

// 函式型別
type ClickHandler = (event: MouseEvent) => void;

interface Calculable {
  calculate(x: number, y: number): number;
}

// 泛型型別
type Container<T> = {
  value: T;
  setValue: (newValue: T) => void;
};

// 條件型別
type IsString<T> = T extends string ? true : false;

// 映射型別
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};`,
    explain: `
      <h4>Type vs Interface</h4>
      <ul>
        <li><strong>Type Alias</strong>：可定義原始型別、聯合、交集、元組</li>
        <li><strong>Interface</strong>：主要用於物件形狀，支援擴展和合併</li>
        <li><strong>擴展性</strong>：Interface 可被 extends，Type 使用交集</li>
        <li><strong>宣告合併</strong>：只有 Interface 支援</li>
      </ul>
      <h4>使用建議</h4>
      <ul>
        <li>物件形狀優先使用 Interface</li>
        <li>聯合型別、元組使用 Type</li>
        <li>保持團隊一致性</li>
        <li>善用工具型別（Partial、Readonly 等）</li>
      </ul>
    `,
    prompt: `請建立 TypeScript 型別系統範例，包含：
1. 型別別名（基本型別、聯合、交集）
2. 介面定義和擴展
3. 可選和唯讀屬性
4. 索引簽名
5. 泛型和條件型別
6. 映射型別
加上繁體中文註解說明差異`,
  },
  {
    id: 'generic-functions',
    title: '泛型函式',
    description: '使用泛型建立可重用的函式',
    badges: ['TypeScript', '泛型', '函式'],
    demo: `
      <div class="space-y-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">泛型函式應用</h4>
          <pre class="text-sm bg-white dark:bg-neutral-900 p-3 rounded overflow-x-auto">
<code>// 陣列操作
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirst(numbers); // 1

const names = ["Alice", "Bob", "Charlie"];
const firstName = getFirst(names); // "Alice"

// 交換元組
const [b, a] = swap(["hello", 42]); // [42, "hello"]

// 過濾陣列
const adults = filterArray(users, user => user.age >= 18);</code>
          </pre>
        </div>
      </div>
    `,
    code: `// 基礎泛型函式
function identity<T>(value: T): T {
  return value;
}

// 使用
const num = identity<number>(42);
const str = identity<string>("hello");
const auto = identity(true); // 型別推論

// 多個泛型參數
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result = swap<string, number>(["hello", 42]);
// result: [number, string]

// 泛型約束
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log(item.length);
  return item;
}

logLength("hello");     // OK
logLength([1, 2, 3]);   // OK
logLength({ length: 10 }); // OK
// logLength(123);      // Error: number 沒有 length

// 泛型陣列操作
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

function getLast<T>(arr: readonly T[]): T | undefined {
  return arr[arr.length - 1];
}

function filterArray<T>(
  arr: T[],
  predicate: (item: T) => boolean
): T[] {
  return arr.filter(predicate);
}

// 泛型 Promise
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json() as Promise<T>;
}

// 使用
interface User {
  id: number;
  name: string;
}

const user = await fetchData<User>("/api/user/1");

// 泛型類別
class Container<T> {
  private value: T;
  
  constructor(value: T) {
    this.value = value;
  }
  
  getValue(): T {
    return this.value;
  }
  
  setValue(value: T): void {
    this.value = value;
  }
}

const numberContainer = new Container<number>(42);
const stringContainer = new Container<string>("hello");

// 泛型工廠函式
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// 條件型別與泛型
type ExtractArrayType<T> = T extends (infer U)[] ? U : T;

type StringArray = ExtractArrayType<string[]>;  // string
type NumberType = ExtractArrayType<number>;     // number`,
    explain: `
      <h4>泛型優勢</h4>
      <ul>
        <li><strong>型別安全</strong>：保持型別資訊不丟失</li>
        <li><strong>可重用性</strong>：一個函式適用多種型別</li>
        <li><strong>型別推論</strong>：自動推導型別參數</li>
        <li><strong>約束條件</strong>：限制可接受的型別</li>
      </ul>
      <h4>使用場景</h4>
      <ul>
        <li>容器類別（Array、Promise、Map）</li>
        <li>工具函式（identity、swap、pick）</li>
        <li>API 請求封裝</li>
        <li>狀態管理</li>
      </ul>
    `,
    prompt: `請建立 TypeScript 泛型函式範例，包含：
1. 基礎泛型函式
2. 多個泛型參數
3. 泛型約束（extends）
4. 泛型陣列操作
5. 泛型 Promise 和 async 函式
6. 泛型類別
加上實際應用場景`,
  },
  {
    id: 'discriminated-union',
    title: 'Discriminated Union 與窮盡檢查',
    description: '使用判別聯合實現型別安全的狀態管理',
    badges: ['TypeScript', 'Union', '型別守衛'],
    demo: `
      <div class="space-y-4">
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h4 class="font-semibold mb-2">狀態機範例</h4>
          <pre class="text-sm bg-white dark:bg-neutral-900 p-3 rounded overflow-x-auto">
<code>// API 請求狀態
type RequestState = 
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: string }

// 根據狀態渲染不同 UI
function renderState(state: RequestState) {
  switch (state.status) {
    case "idle":
      return "準備就緒";
    case "loading":
      return "載入中...";
    case "success":
      return \`載入 \${state.data.length} 筆資料\`;
    case "error":
      return \`錯誤: \${state.error}\`;
  }
}</code>
          </pre>
        </div>
      </div>
    `,
    code: `// Discriminated Union（判別聯合）
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

// 型別守衛與窮盡檢查
function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    
    case "rectangle":
      return shape.width * shape.height;
    
    case "triangle":
      return (shape.base * shape.height) / 2;
    
    default:
      // 窮盡檢查：確保處理所有情況
      const _exhaustive: never = shape;
      throw new Error(\`未處理的形狀: \${_exhaustive}\`);
  }
}

// API 請求狀態
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

function handleRequest<T>(state: RequestState<T>): string {
  switch (state.status) {
    case "idle":
      return "準備就緒";
    
    case "loading":
      return "載入中...";
    
    case "success":
      return \`成功: \${JSON.stringify(state.data)}\`;
    
    case "error":
      return \`錯誤: \${state.error.message}\`;
    
    default:
      const _exhaustive: never = state;
      return _exhaustive;
  }
}

// Redux Action 模式
type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" }
  | { type: "SET"; payload: number };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    
    case "DECREMENT":
      return state - action.payload;
    
    case "RESET":
      return 0;
    
    case "SET":
      return action.payload;
    
    default:
      const _exhaustive: never = action;
      throw new Error(\`未知的 action: \${_exhaustive}\`);
  }
}

// 表單驗證狀態
type ValidationState =
  | { status: "valid"; value: string }
  | { status: "invalid"; value: string; errors: string[] }
  | { status: "validating"; value: string };

class FormField {
  private state: ValidationState = { status: "valid", value: "" };
  
  validate(value: string): void {
    this.state = { status: "validating", value };
    
    // 模擬非同步驗證
    setTimeout(() => {
      const errors: string[] = [];
      
      if (value.length < 3) {
        errors.push("最少需要 3 個字元");
      }
      
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        errors.push("只能包含字母和數字");
      }
      
      if (errors.length > 0) {
        this.state = { status: "invalid", value, errors };
      } else {
        this.state = { status: "valid", value };
      }
    }, 500);
  }
  
  getErrorMessage(): string | null {
    if (this.state.status === "invalid") {
      return this.state.errors.join(", ");
    }
    return null;
  }
}

// 輔助函式：assertNever
function assertNever(value: never): never {
  throw new Error(\`未預期的值: \${value}\`);
}

// 使用 assertNever 進行窮盡檢查
function processShape(shape: Shape): void {
  switch (shape.kind) {
    case "circle":
      console.log(\`圓形，半徑: \${shape.radius}\`);
      break;
    case "rectangle":
      console.log(\`矩形，寬: \${shape.width}，高: \${shape.height}\`);
      break;
    case "triangle":
      console.log(\`三角形，底: \${shape.base}，高: \${shape.height}\`);
      break;
    default:
      assertNever(shape);
  }
}`,
    explain: `
      <h4>Discriminated Union 特點</h4>
      <ul>
        <li><strong>判別屬性</strong>：共同的字面值屬性（如 kind、type、status）</li>
        <li><strong>型別收窄</strong>：透過判別屬性自動推導具體型別</li>
        <li><strong>窮盡檢查</strong>：使用 never 確保處理所有情況</li>
        <li><strong>型別安全</strong>：編譯時期捕捉遺漏的分支</li>
      </ul>
      <h4>應用場景</h4>
      <ul>
        <li>狀態機（loading、success、error）</li>
        <li>Redux actions</li>
        <li>訊息處理</li>
        <li>多態資料結構</li>
      </ul>
    `,
    prompt: `請建立 TypeScript Discriminated Union 範例，包含：
1. 基本判別聯合（Shape 範例）
2. API 請求狀態管理
3. Redux action 模式
4. 窮盡檢查（exhaustive check）
5. assertNever 輔助函式
加上實際應用場景和繁體中文註解`,
  },
  {
    id: 'utility-types',
    title: '工具型別應用',
    description: 'TypeScript 內建工具型別的實際應用',
    badges: ['TypeScript', '工具型別', 'Utility'],
    demo: `
      <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <h4 class="font-semibold mb-2">工具型別範例</h4>
        <pre class="text-sm bg-white dark:bg-neutral-900 p-3 rounded overflow-x-auto">
<code>interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Partial：所有屬性變為可選
type UpdateUser = Partial<User>;

// Pick：選取特定屬性
type UserPreview = Pick<User, "id" | "name">;

// Omit：排除特定屬性
type PublicUser = Omit<User, "password">;

// Readonly：所有屬性變為唯讀
type FrozenUser = Readonly<User>;</code>
        </pre>
      </div>
    `,
    code: `// Partial<T> - 所有屬性變為可選
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PartialUser = Partial<User>;
// 等同於:
// {
//   id?: number;
//   name?: string;
//   email?: string;
//   age?: number;
// }

function updateUser(id: number, updates: Partial<User>): void {
  // 只更新提供的欄位
  console.log(\`更新用戶 \${id}:\`, updates);
}

// Required<T> - 所有屬性變為必填
interface Config {
  apiUrl?: string;
  timeout?: number;
  retries?: number;
}

type RequiredConfig = Required<Config>;

// Readonly<T> - 所有屬性變為唯讀
type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30
};
// user.name = "Bob"; // Error: 唯讀屬性

// Pick<T, K> - 選取指定屬性
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string; }

// Omit<T, K> - 排除指定屬性
type PublicUser = Omit<User, "email" | "age">;
// { id: number; name: string; }

// Record<K, T> - 建立索引型別
type UserRoles = "admin" | "user" | "guest";
type RolePermissions = Record<UserRoles, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};

// Exclude<T, U> - 從聯合型別中排除
type AllColors = "red" | "green" | "blue" | "yellow";
type PrimaryColors = Exclude<AllColors, "yellow">;
// "red" | "green" | "blue"

// Extract<T, U> - 從聯合型別中提取
type WarmColors = Extract<AllColors, "red" | "yellow" | "orange">;
// "red" | "yellow"

// NonNullable<T> - 移除 null 和 undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;
// string

// ReturnType<T> - 取得函式回傳型別
function getUser() {
  return { id: 1, name: "Alice" };
}

type UserReturn = ReturnType<typeof getUser>;
// { id: number; name: string; }

// Parameters<T> - 取得函式參數型別
function createUser(name: string, age: number) {
  return { name, age };
}

type CreateUserParams = Parameters<typeof createUser>;
// [string, number]

// Awaited<T> - 取得 Promise 解析後的型別
type PromiseString = Promise<string>;
type StringType = Awaited<PromiseString>;
// string

// 組合使用
type UserUpdate = Partial<Pick<User, "name" | "email">>;
type ReadonlyPartialUser = Readonly<Partial<User>>;

// 自訂工具型別
type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type Nullish<T> = T | null | undefined;

// DeepPartial - 深層 Partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// DeepReadonly - 深層 Readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};`,
    explain: `
      <h4>常用工具型別</h4>
      <ul>
        <li><strong>Partial</strong>：所有屬性可選</li>
        <li><strong>Required</strong>：所有屬性必填</li>
        <li><strong>Readonly</strong>：所有屬性唯讀</li>
        <li><strong>Pick/Omit</strong>：選取/排除屬性</li>
        <li><strong>Record</strong>：建立索引型別</li>
      </ul>
      <h4>進階應用</h4>
      <ul>
        <li>組合多個工具型別</li>
        <li>自訂工具型別</li>
        <li>深層變換（DeepPartial）</li>
        <li>條件型別組合</li>
      </ul>
    `,
    prompt: `請展示 TypeScript 工具型別的應用，包含：
1. Partial、Required、Readonly
2. Pick、Omit
3. Record、Exclude、Extract
4. ReturnType、Parameters
5. 組合使用範例
6. 自訂工具型別
提供實際使用場景`,
  },
  {
    id: 'type-guards',
    title: '型別守衛',
    description: '使用型別守衛進行型別收窄',
    badges: ['TypeScript', '型別守衛', '型別收窄'],
    demo: `
      <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
        <h4 class="font-semibold mb-2">型別守衛範例</h4>
        <pre class="text-sm bg-white dark:bg-neutral-900 p-3 rounded overflow-x-auto">
<code>// 型別守衛函式
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// 使用型別守衛
function processValue(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // value 是 string
  } else {
    console.log(value.toFixed(2)); // value 是 number
  }
}</code>
        </pre>
      </div>
    `,
    code: `// typeof 型別守衛
function processValue(value: string | number | boolean) {
  if (typeof value === "string") {
    // value 是 string
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    // value 是 number
    console.log(value.toFixed(2));
  } else {
    // value 是 boolean
    console.log(value ? "真" : "假");
  }
}

// instanceof 型別守衛
class Cat {
  meow() {
    console.log("喵");
  }
}

class Dog {
  bark() {
    console.log("汪");
  }
}

function petSound(pet: Cat | Dog) {
  if (pet instanceof Cat) {
    pet.meow();
  } else {
    pet.bark();
  }
}

// in 運算子型別守衛
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly(); // animal 是 Bird
  } else {
    animal.swim(); // animal 是 Fish
  }
}

// 自訂型別守衛（型別述詞）
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

// 複雜型別守衛
interface User {
  type: "user";
  name: string;
  email: string;
}

interface Admin {
  type: "admin";
  name: string;
  permissions: string[];
}

function isAdmin(account: User | Admin): account is Admin {
  return account.type === "admin";
}

function isUser(account: User | Admin): account is User {
  return account.type === "user";
}

// 使用型別守衛
function handleAccount(account: User | Admin) {
  if (isAdmin(account)) {
    console.log("權限:", account.permissions);
  } else {
    console.log("郵件:", account.email);
  }
}

// 空值檢查型別守衛
function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}

function isNotNullish<T>(value: T | null | undefined): value is T {
  return value != null; // 同時檢查 null 和 undefined
}

// 陣列型別守衛
function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(item => typeof item === "string");
}

// 物件型別守衛
function hasProperty<T extends object, K extends PropertyKey>(
  obj: T,
  key: K
): obj is T & Record<K, unknown> {
  return key in obj;
}

// 使用範例
function processData(data: unknown) {
  if (isStringArray(data)) {
    data.forEach(str => console.log(str.toUpperCase()));
  } else if (isArray(data)) {
    console.log("陣列長度:", data.length);
  } else if (isString(data)) {
    console.log("字串長度:", data.length);
  } else if (isNumber(data)) {
    console.log("數字:", data.toFixed(2));
  }
}

// 組合型別守衛
function isUserOrAdmin(value: unknown): value is User | Admin {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    "name" in value &&
    (value.type === "user" || value.type === "admin")
  );
}`,
    explain: `
      <h4>型別守衛種類</h4>
      <ul>
        <li><strong>typeof</strong>：檢查原始型別</li>
        <li><strong>instanceof</strong>：檢查類別實例</li>
        <li><strong>in</strong>：檢查屬性存在</li>
        <li><strong>型別述詞</strong>：自訂守衛函式</li>
      </ul>
      <h4>使用場景</h4>
      <ul>
        <li>處理聯合型別</li>
        <li>驗證未知資料</li>
        <li>API 回應處理</li>
        <li>執行時期型別檢查</li>
      </ul>
    `,
    prompt: `請建立 TypeScript 型別守衛範例，包含：
1. typeof 型別守衛
2. instanceof 型別守衛
3. in 運算子守衛
4. 自訂型別守衛（is 述詞）
5. 空值檢查
6. 複雜型別驗證
加上實際應用場景`,
  },
  {
    id: 'advanced-types',
    title: '進階型別技巧',
    description: '條件型別、映射型別和模板字面值型別',
    badges: ['TypeScript', '進階', '型別程式設計'],
    demo: `
      <div class="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
        <h4 class="font-semibold mb-2">進階型別應用</h4>
        <pre class="text-sm bg-white dark:bg-neutral-900 p-3 rounded overflow-x-auto">
<code>// 模板字面值型別
type EventName = \`on\${Capitalize<"click" | "change" | "focus">}\`;
// "onClick" | "onChange" | "onFocus"

// 條件型別
type IsArray<T> = T extends any[] ? true : false;
type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<number>;   // false

// 映射型別
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
};</code>
        </pre>
      </div>
    `,
    code: `// 條件型別
type IsString<T> = T extends string ? true : false;
type Test1 = IsString<"hello">; // true
type Test2 = IsString<42>;      // false

// 條件型別與推斷
type ElementType<T> = T extends (infer E)[] ? E : T;
type StringElement = ElementType<string[]>;  // string
type NumberElement = ElementType<number>;    // number

// 分散式條件型別
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>; // string[] | number[]

// 映射型別
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
};

type Setters<T> = {
  [K in keyof T as \`set\${Capitalize<string & K>}\`]: (value: T[K]) => void
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// 模板字面值型別
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = "/users" | "/posts" | "/comments";
type APIRoute = \`\${HTTPMethod} \${Endpoint}\`;
// "GET /users" | "GET /posts" | ... | "DELETE /comments"

// 字串操作型別
type Uppercase<S extends string> = intrinsic;
type Lowercase<S extends string> = intrinsic;
type Capitalize<S extends string> = intrinsic;
type Uncapitalize<S extends string> = intrinsic;

type EventHandlers<T extends string> = {
  [K in T as \`on\${Capitalize<K>}\`]: (event: Event) => void
};

type ButtonEvents = EventHandlers<"click" | "focus" | "blur">;
// {
//   onClick: (event: Event) => void;
//   onFocus: (event: Event) => void;
//   onBlur: (event: Event) => void;
// }

// 遞迴型別
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Function
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P];
};

// 型別體操：取得物件所有路徑
type Paths<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? K | \`\${K}.\${Paths<T[K]>}\`
          : K
        : never;
    }[keyof T]
  : never;

interface NestedObject {
  user: {
    name: string;
    address: {
      city: string;
      country: string;
    };
  };
  settings: {
    theme: string;
  };
}

type ObjectPaths = Paths<NestedObject>;
// "user" | "user.name" | "user.address" | "user.address.city" | ...

// 型別過濾
type FilterOut<T, U> = T extends U ? never : T;
type NonString = FilterOut<string | number | boolean, string>;
// number | boolean

// 函式重載型別
type Overloaded = {
  (x: string): number;
  (x: number): string;
  (x: boolean): boolean;
};

// 取得函式參數
type FirstParameter<T> = T extends (first: infer F, ...args: any[]) => any
  ? F
  : never;

type LastParameter<T> = T extends (...args: [...any[], infer L]) => any
  ? L
  : never;

// 元組操作
type Head<T extends readonly any[]> = T extends readonly [infer H, ...any[]]
  ? H
  : never;

type Tail<T extends readonly any[]> = T extends readonly [any, ...infer R]
  ? R
  : [];

type Length<T extends readonly any[]> = T["length"];

// 使用範例
type FirstElement = Head<[1, 2, 3]>; // 1
type RestElements = Tail<[1, 2, 3]>; // [2, 3]
type ArrayLength = Length<[1, 2, 3, 4, 5]>; // 5`,
    explain: `
      <h4>進階型別特性</h4>
      <ul>
        <li><strong>條件型別</strong>：根據條件選擇型別</li>
        <li><strong>推斷型別</strong>：使用 infer 提取型別</li>
        <li><strong>映射型別</strong>：轉換物件型別</li>
        <li><strong>模板字面值</strong>：組合字串型別</li>
        <li><strong>遞迴型別</strong>：型別自我參照</li>
      </ul>
      <h4>應用場景</h4>
      <ul>
        <li>API 路由型別安全</li>
        <li>事件處理器生成</li>
        <li>深層物件操作</li>
        <li>型別轉換工具</li>
      </ul>
    `,
    prompt: `請展示 TypeScript 進階型別技巧，包含：
1. 條件型別和 infer
2. 映射型別和 key remapping
3. 模板字面值型別
4. 遞迴型別
5. 型別體操範例
6. 實用的型別工具
加上詳細註解說明`,
  },
];