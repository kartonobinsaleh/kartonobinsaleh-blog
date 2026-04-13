'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-9 w-9 p-2" /> // Placeholder to avoid layout shift

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      id="theme-switch"
      aria-label="Toggle Dark Mode"
      type="button"
      className="group flex items-center justify-center rounded-lg bg-transparent p-2 ring-zinc-900/5 transition hover:bg-gray-100 dark:ring-white/10 dark:hover:bg-gray-800"
      onClick={toggleTheme}
    >
      {resolvedTheme === 'dark' ? (
        <Moon className="group-hover:text-primary-400 h-5 w-5 text-gray-500 transition-colors" />
      ) : (
        <Sun className="group-hover:text-primary-500 h-5 w-5 text-gray-500 transition-colors" />
      )}
    </button>
  )
}
