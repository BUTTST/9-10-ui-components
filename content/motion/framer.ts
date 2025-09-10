import { ExampleItem } from '@/components/ExampleCard';

export const framerExamples: ExampleItem[] = [
  {
    id: 'basic-animations',
    title: '基本動效',
    description: '淡入、滑動等基礎動畫效果',
    badges: ['Framer Motion', '動畫', '基礎'],
    deps: '需要客戶端載入 FramerDemo',
    demo: `<FramerDemo variant="fade" />`,
    code: `import { motion } from 'framer-motion';

// 淡入動畫
function FadeIn() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      淡入內容
    </motion.div>
  );
}

// 滑入動畫
function SlideIn() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      從左滑入
    </motion.div>
  );
}

// 縮放動畫
function ScaleIn() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', bounce: 0.5 }}
    >
      縮放進入
    </motion.div>
  );
}

// 旋轉動畫
function RotateIn() {
  return (
    <motion.div
      initial={{ rotate: -180, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      旋轉進入
    </motion.div>
  );
}`,
    explain: `
      <h4>Framer Motion 基礎</h4>
      <ul>
        <li><strong>initial</strong>：初始狀態</li>
        <li><strong>animate</strong>：動畫結束狀態</li>
        <li><strong>transition</strong>：過渡設定</li>
        <li><strong>exit</strong>：退出動畫</li>
      </ul>
    `,
    prompt: `請使用 Framer Motion 建立基本動畫效果，包含淡入、滑動、縮放和旋轉`,
  },
  {
    id: 'hover-tap',
    title: 'whileHover 與 whileTap',
    description: '滑鼠互動動畫效果',
    badges: ['Framer Motion', '互動', 'Hover'],
    deps: '需要客戶端載入 FramerDemo',
    demo: `<FramerDemo variant="scale" />`,
    code: `import { motion } from 'framer-motion';

// Hover 效果
function HoverCard() {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-md cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3>互動卡片</h3>
      <p>滑鼠懸停或點擊查看效果</p>
    </motion.div>
  );
}

// 按鈕動畫
function AnimatedButton() {
  return (
    <motion.button
      className="px-6 py-3 bg-blue-500 text-white rounded-lg"
      whileHover={{ 
        scale: 1.1,
        backgroundColor: '#2563eb'
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      點擊我
    </motion.button>
  );
}

// 複雜互動
function ComplexInteraction() {
  return (
    <motion.div
      className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"
      whileHover={{
        scale: 1.2,
        rotate: 90,
        borderRadius: '50%'
      }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: '0%'
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    />
  );
}`,
    explain: `
      <h4>互動動畫屬性</h4>
      <ul>
        <li><strong>whileHover</strong>：滑鼠懸停時的狀態</li>
        <li><strong>whileTap</strong>：點擊時的狀態</li>
        <li><strong>whileDrag</strong>：拖曳時的狀態</li>
        <li><strong>whileFocus</strong>：聚焦時的狀態</li>
      </ul>
    `,
    prompt: `請建立 Framer Motion 互動動畫，包含 hover 放大、tap 縮小等效果`,
  },
  {
    id: 'stagger-animation',
    title: '進場動畫與延遲',
    description: '列表項目的錯開動畫效果',
    badges: ['Framer Motion', 'Stagger', '列表'],
    deps: '需要客戶端載入 FramerDemo',
    demo: `<FramerDemo variant="spring" />`,
    code: `import { motion } from 'framer-motion';

// 容器和項目變體
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Stagger 列表
function StaggerList() {
  const items = ['項目 1', '項目 2', '項目 3', '項目 4'];
  
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-2"
    >
      {items.map((text, index) => (
        <motion.li
          key={index}
          variants={item}
          className="p-3 bg-white rounded shadow"
        >
          {text}
        </motion.li>
      ))}
    </motion.ul>
  );
}

// 卡片網格動畫
function CardGrid() {
  const cards = Array.from({ length: 6 }, (_, i) => i + 1);
  
  return (
    <motion.div
      className="grid grid-cols-3 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {cards.map(card => (
        <motion.div
          key={card}
          className="p-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg text-white"
          variants={{
            hidden: { 
              opacity: 0, 
              scale: 0.8,
              rotate: -10
            },
            visible: { 
              opacity: 1, 
              scale: 1,
              rotate: 0,
              transition: {
                type: 'spring',
                bounce: 0.4
              }
            }
          }}
        >
          卡片 {card}
        </motion.div>
      ))}
    </motion.div>
  );
}

// 文字動畫
function AnimatedText() {
  const text = "Hello World";
  
  return (
    <motion.h1 className="text-4xl font-bold">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            type: 'spring',
            damping: 12,
            stiffness: 200
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}`,
    explain: `
      <h4>Stagger 動畫技巧</h4>
      <ul>
        <li><strong>staggerChildren</strong>：子元素延遲間隔</li>
        <li><strong>delayChildren</strong>：首個子元素延遲</li>
        <li><strong>variants</strong>：定義動畫變體</li>
        <li><strong>orchestration</strong>：協調多個動畫</li>
      </ul>
    `,
    prompt: `請建立 Framer Motion stagger 動畫，展示列表項目的錯開進場效果`,
  },
];