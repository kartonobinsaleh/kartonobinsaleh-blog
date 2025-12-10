'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const iconClass = 'h-5 w-5'

  return (
    <div className="relative">
      <button
        className={`rounded-full border border-transparent p-2 transition ${
          open ? 'bg-gray-100 dark:bg-gray-700' : ''
        } hover:bg-gray-100 dark:hover:bg-gray-700`}
        onClick={() => setOpen(!open)}
      >
        {resolvedTheme === 'dark' ? <Moon className={iconClass} /> : <Sun className={iconClass} />}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-36 rounded bg-white shadow-lg dark:bg-gray-800">
          <button
            className={`flex w-full items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              resolvedTheme === 'light' ? 'text-primary-500' : 'text-gray-900 dark:text-gray-100'
            }`}
            onClick={() => {
              setTheme('light')
              setOpen(false)
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
              setOpen(false)
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
              setOpen(false)
            }}
          >
            <Monitor className="mr-2 h-4 w-4" /> System
          </button>
        </div>
      )}
    </div>
  )
}
