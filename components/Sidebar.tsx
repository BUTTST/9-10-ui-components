'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronDown, 
  faChevronRight, 
  faFile, 
  faFolder, 
  faFolderOpen,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { SidebarProps } from '@/types/components'
import { ContentItem, Domain } from '@/types/content'

interface SidebarNode {
  name: string
  path?: string
  children: SidebarNode[]
  item?: ContentItem
  isExpanded?: boolean
}

export default function Sidebar({
  items,
  currentPath,
  isOpen = true,
  onToggle,
  className = ''
}: SidebarProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())

  // 將扁平的內容項目轉換為樹狀結構
  const buildTree = (items: ContentItem[]): SidebarNode[] => {
    const tree: SidebarNode[] = []
    const nodeMap = new Map<string, SidebarNode>()

    // 按領域分組
    const domainGroups = items.reduce((acc, item) => {
      if (!acc[item.domain]) acc[item.domain] = []
      acc[item.domain].push(item)
      return acc
    }, {} as Record<Domain, ContentItem[]>)

    Object.entries(domainGroups).forEach(([domain, domainItems]) => {
      const domainNode: SidebarNode = {
        name: domain === 'frontend' ? '前端實作' : '筆記與參考',
        path: `/${domain}`,
        children: [],
        isExpanded: expandedNodes.has(domain)
      }

      // 按分類分組
      const categoryGroups = domainItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = []
        acc[item.category].push(item)
        return acc
      }, {} as Record<string, ContentItem[]>)

      Object.entries(categoryGroups).forEach(([category, categoryItems]) => {
        const categoryNode: SidebarNode = {
          name: category,
          path: `/${domain}/${category}`,
          children: [],
          isExpanded: expandedNodes.has(`${domain}/${category}`)
        }

        // 添加項目
        categoryItems.forEach(item => {
          categoryNode.children.push({
            name: item.title,
            path: item.path,
            children: [],
            item
          })
        })

        domainNode.children.push(categoryNode)
      })

      tree.push(domainNode)
    })

    return tree
  }

  const toggleNode = (path: string) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedNodes(newExpanded)
  }

  const renderNode = (node: SidebarNode, level: number = 0) => {
    const hasChildren = node.children.length > 0
    const isExpanded = expandedNodes.has(node.path || node.name)
    const isActive = currentPath === node.path
    const paddingLeft = `${level * 1 + 0.5}rem`

    return (
      <div key={node.path || node.name}>
        <div
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
            isActive ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'
          }`}
          style={{ paddingLeft }}
        >
          {hasChildren ? (
            <button
              onClick={() => toggleNode(node.path || node.name)}
              className="flex items-center gap-2 flex-1 text-left"
            >
              <FontAwesomeIcon
                icon={isExpanded ? faChevronDown : faChevronRight}
                className="text-xs text-gray-400"
              />
              <FontAwesomeIcon
                icon={isExpanded ? faFolderOpen : faFolder}
                className="text-gray-500"
              />
              <span className="font-medium">{node.name}</span>
            </button>
          ) : node.path ? (
            <Link href={node.path} className="flex items-center gap-2 flex-1">
              <div className="w-4" /> {/* Spacer */}
              <FontAwesomeIcon icon={faFile} className="text-gray-400" />
              <span>{node.name}</span>
              {node.item && (
                <div className="ml-auto flex gap-1">
                  {node.item.tech.slice(0, 2).map(tech => (
                    <span
                      key={tech}
                      className="rounded px-1 py-0.5 text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ) : (
            <div className="flex items-center gap-2 flex-1">
              <FontAwesomeIcon icon={faFolder} className="text-gray-500" />
              <span className="font-medium">{node.name}</span>
            </div>
          )}
        </div>

        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {node.children.map(child => renderNode(child, level + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  const tree = buildTree(items)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed left-0 top-0 z-40 h-full w-80 border-r border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900 lg:relative lg:shadow-none ${className}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">
              內容目錄
            </h2>
            {onToggle && (
              <button
                onClick={onToggle}
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 lg:hidden"
                aria-label="關閉側邊欄"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto p-4 pb-20">
            <nav className="space-y-1">
              {tree.map(node => renderNode(node))}
            </nav>

            {/* Stats */}
            <div className="mt-8 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                內容統計
              </h3>
              <div className="mt-2 space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>總條目數</span>
                  <span>{items.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>前端實作</span>
                  <span>{items.filter(item => item.domain === 'frontend').length}</span>
                </div>
                <div className="flex justify-between">
                  <span>筆記參考</span>
                  <span>{items.filter(item => item.domain === 'notes').length}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}