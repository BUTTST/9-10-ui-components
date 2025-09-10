import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | 設計意圖速查站',
    default: '設計意圖速查站 - 從構想到程式碼的一站式指南'
  },
  description: '將設計構想快速轉換為可執行的 React + TypeScript + Tailwind 程式碼，並提供 AI 命令模板',
  keywords: [
    'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'UI Components',
    'Design System', 'Frontend', 'Web Development', 'AI Prompts',
    'Chart.js', 'Framer Motion', 'GSAP', 'Font Awesome'
  ],
  authors: [{ name: '前端架構師' }],
  creator: '前端架構師',
  publisher: '設計意圖速查站',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://design-to-code.dev',
    siteName: '設計意圖速查站',
    title: '設計意圖速查站 - 從構想到程式碼的一站式指南',
    description: '將設計構想快速轉換為可執行的 React + TypeScript + Tailwind 程式碼',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '設計意圖速查站',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '設計意圖速查站 - 從構想到程式碼的一站式指南',
    description: '將設計構想快速轉換為可執行的 React + TypeScript + Tailwind 程式碼',
    images: ['/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
          {children}
        </div>
        
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--toast-bg)',
              color: 'var(--toast-color)',
              borderRadius: '0.5rem',
              padding: '16px',
              fontSize: '14px',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
        
      </body>
    </html>
  )
}