'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function ThemeSwitch({
  openMenu,
  setOpenMenuAction,
}: {
  openMenu: 'theme' | 'mobile' | null
  setOpenMenuAction: (menu: 'theme' | 'mobile' | null) => void
}) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const iconClass = 'h-5 w-5'

  const isOpen = openMenu === 'theme'

  return (
    <div className="relative">
      <button
        className={`rounded-full border border-transparent p-2 transition ${
          isOpen ? 'bg-gray-100 dark:bg-gray-700' : ''
        } hover:bg-gray-100 dark:hover:bg-gray-700`}
        onClick={() => setOpenMenuAction(isOpen ? null : 'theme')}
      >
        {resolvedTheme === 'dark' ? <Moon className={iconClass} /> : <Sun className={iconClass} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-36 rounded bg-white shadow-lg dark:bg-gray-800">
          <button
            className={`flex w-full items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              resolvedTheme === 'light' ? 'text-primary-500' : 'text-gray-900 dark:text-gray-100'
            }`}
            onClick={() => {
              setTheme('light')
              setOpenMenuAction(null)
            }}
          >
            <Sun className="mr-2 h-4 w-4" /> Light
          </button>
          <button
            className={`flex w-full items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              resolvedTheme === 'dark' ? 'text-primary-500' : 'text-gray-900 dark:text-gray-100'
            }`}
            onClick={() => {
              setTheme('dark')
              setOpenMenuAction(null)
            }}
          >
            <Moon className="mr-2 h-4 w-4" /> Dark
          </button>
          <button
            className={`flex w-full items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              resolvedTheme === 'system' ? 'text-primary-500' : 'text-gray-900 dark:text-gray-100'
            }`}
            onClick={() => {
              setTheme('system')
              setOpenMenuAction(null)
            }}
          >
            <Monitor className="mr-2 h-4 w-4" /> System
          </button>
        </div>
      )}
    </div>
  )
}
