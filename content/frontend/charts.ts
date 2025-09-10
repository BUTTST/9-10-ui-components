import { ExampleItem } from '@/components/ExampleCard';

export const chartsExamples: ExampleItem[] = [
  {
    id: 'line-chart',
    title: '折線圖',
    description: '使用 Chart.js 建立線性資料視覺化',
    badges: ['Chart.js', 'react-chartjs-2', '折線圖'],
    deps: '需要客戶端載入 ChartRenderer',
    demo: `<ChartRenderer type="line" data={lineData} options={lineOptions} />`,
    code: `import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
  datasets: [
    {
      label: '銷售額',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      tension: 0.1,
    },
    {
      label: '成本',
      data: [8, 12, 5, 6, 4, 7],
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '月度銷售與成本分析',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function LineChart() {
  return <Line data={lineData} options={options} />;
}`,
    explain: `
      <h4>折線圖特點</h4>
      <ul>
        <li><strong>趨勢展示</strong>：適合顯示時間序列資料</li>
        <li><strong>多資料集</strong>：可同時比較多組資料</li>
        <li><strong>平滑曲線</strong>：使用 tension 控制曲線平滑度</li>
        <li><strong>互動性</strong>：支援 hover 和點擊事件</li>
      </ul>
    `,
    prompt: `請使用 react-chartjs-2 建立折線圖，包含：
1. 多條資料線
2. 自訂顏色和樣式
3. 圖例和標題
4. 響應式設計
5. 繁體中文標籤`,
  },
  {
    id: 'bar-chart',
    title: '長條圖',
    description: '分類資料的視覺化呈現',
    badges: ['Chart.js', 'react-chartjs-2', '長條圖'],
    deps: '需要客戶端載入 ChartRenderer',
    demo: `<ChartRenderer type="bar" data={barData} options={barOptions} />`,
    code: `const barData = {
  labels: ['產品A', '產品B', '產品C', '產品D', '產品E'],
  datasets: [
    {
      label: 'Q1 銷量',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
    },
    {
      label: 'Q2 銷量',
      data: [78, 68, 90, 79, 64],
      backgroundColor: 'rgba(16, 185, 129, 0.8)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '產品季度銷量比較',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value: any) {
          return value + ' 件';
        },
      },
    },
  },
};`,
    explain: `
      <h4>長條圖應用</h4>
      <ul>
        <li><strong>分類比較</strong>：適合比較不同類別的數值</li>
        <li><strong>堆疊顯示</strong>：可設定 stacked 顯示累積值</li>
        <li><strong>水平/垂直</strong>：支援橫向和縱向顯示</li>
      </ul>
    `,
    prompt: `請建立長條圖展示分類資料，包含多資料集比較和自訂樣式`,
  },
  {
    id: 'pie-chart',
    title: '圓餅圖',
    description: '展示百分比和比例關係',
    badges: ['Chart.js', 'react-chartjs-2', '圓餅圖'],
    deps: '需要客戶端載入 ChartRenderer',
    demo: `<ChartRenderer type="pie" data={pieData} options={pieOptions} />`,
    code: `const pieData = {
  labels: ['桌面', '手機', '平板', '其他'],
  datasets: [
    {
      label: '裝置使用比例',
      data: [45, 35, 15, 5],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(251, 146, 60, 0.8)',
        'rgba(163, 163, 163, 0.8)',
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(251, 146, 60, 1)',
        'rgba(163, 163, 163, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: '使用者裝置分布',
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          return context.label + ': ' + context.parsed + '%';
        },
      },
    },
  },
};`,
    explain: `
      <h4>圓餅圖特點</h4>
      <ul>
        <li><strong>比例展示</strong>：直觀顯示各部分佔比</li>
        <li><strong>顏色區分</strong>：使用不同顏色區分類別</li>
        <li><strong>標籤顯示</strong>：可顯示百分比或數值</li>
      </ul>
    `,
    prompt: `請建立圓餅圖展示百分比資料，包含自訂顏色和標籤格式`,
  },
];

// 提供假資料用於 ChartRenderer
export const chartData = {
  line: {
    labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
    datasets: [
      {
        label: '銷售額',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  },
  bar: {
    labels: ['產品A', '產品B', '產品C', '產品D', '產品E'],
    datasets: [
      {
        label: '銷量',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
    ],
  },
  pie: {
    labels: ['桌面', '手機', '平板', '其他'],
    datasets: [
      {
        data: [45, 35, 15, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(251, 146, 60, 0.8)',
          'rgba(163, 163, 163, 0.8)',
        ],
      },
    ],
  },
};