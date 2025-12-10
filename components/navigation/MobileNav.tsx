'use client'

import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Menu as MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'

export default function MobileNav() {
  return (
    <div className="relative sm:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton
          aria-label="Toggle menu"
          className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {({ open }) => (open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />)}
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800">
            {headerNavLinks.map((link) => (
              <MenuItem key={link.title}>
                {({ active }) => (
                  <Link
                    href={link.href}
                    className={`block rounded px-3 py-2 text-sm ${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}
