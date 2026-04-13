'use client'

import Link from 'next/link'
import { Menu as MenuIcon, X } from 'lucide-react'
import headerNavLinks from '@/data/headerNavLinks'

export default function MobileNav({
  openMenu,
  setOpenMenuAction,
}: {
  openMenu: 'mobile' | null
  setOpenMenuAction: (menu: 'mobile' | null) => void
}) {
  const isOpen = openMenu === 'mobile'

  return (
    <div className="relative sm:hidden">
      <button
        aria-label="Toggle menu"
        className={`rounded-full border border-transparent p-2 transition ${isOpen ? 'bg-gray-100 dark:bg-gray-700' : ''
          } hover:bg-gray-100 dark:hover:bg-gray-700`}
        onClick={() => setOpenMenuAction(isOpen ? null : 'mobile')}
      >
        {isOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-40 rounded bg-white shadow-lg dark:bg-gray-800">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex w-full items-center rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
              onClick={() => setOpenMenuAction(null)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
