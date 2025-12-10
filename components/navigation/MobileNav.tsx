'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Tutup menu jika klik di luar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative sm:hidden" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block rounded px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
