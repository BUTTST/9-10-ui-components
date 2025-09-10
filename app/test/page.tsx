import CodeBlock from '@/components/CodeBlock'
import AIPromptCard from '@/components/AIPromptCard'
import IntentMapping from '@/components/IntentMapping'

export default function TestPage() {
  const sampleCode = `function greet(name: string): string {
  return \`Hello, \${name}!\`
}

const message = greet("World")
console.log(message)`

  const samplePrompt = `請幫我建立一個現代化的 React 卡片元件，要求如下：

技術規格：
- 使用 TypeScript 嚴格型別
- Tailwind CSS 樣式（支援深淺色主題）
- Framer Motion 動畫效果
- 完整的無障礙支援

功能需求：
1. 基礎卡片結構（header, body, footer 可選）
2. 支援多種尺寸：sm, md, lg
3. 支援點擊、hover、focus 狀態
4. 可選的圖片/圖示區域
5. 支援 loading 和 error 狀態

請提供完整的型別定義、元件實作和使用範例。`

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          元件測試頁面
        </h1>

        {/* CodeBlock 測試 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            程式碼區塊元件
          </h2>
          <CodeBlock
            code={sampleCode}
            language="typescript"
            title="TypeScript 範例"
            showCopy={true}
            showLineNumbers={true}
          />
        </section>

        {/* AIPromptCard 測試 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            AI 命令模板卡片
          </h2>
          <AIPromptCard
            prompt={samplePrompt}
            title="React 卡片元件"
            description="建立可重用的卡片元件"
          />
        </section>

        {/* IntentMapping 測試 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            設計意圖對照表
          </h2>
          <IntentMapping />
        </section>
      </div>
    </div>
  )
}