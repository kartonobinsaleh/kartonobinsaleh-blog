'use client'

import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import Link from '../ui/Link'
import MobileNav from '../navigation/MobileNav'
import ThemeSwitch from '../navigation/ThemeSwitch'
import SearchButton from '../navigation/SearchButton'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isTop
}

function useToggleMenu() {
  const [menuShow, setMenuShow] = useState(false)
  const onMenuToggle = () => {
    setMenuShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }
  return [menuShow, onMenuToggle] as const
}

const Header = () => {
  const isTop = useIsScrollTop()

  const headerClass =
    `sticky top-0 z-50 w-full flex items-center justify-between px-16 py-6 transition-all duration-300 ` +
    (isTop
      ? 'bg-white/60 dark:bg-gray-950/60 backdrop-blur-md backdrop-saturate-150'
      : 'bg-white shadow dark:bg-gray-950')

  return (
    <header className={headerClass}>
      <div className='className="flex flex-1 items-center'>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex justify-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={Logo}
                alt="Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-xl font-bold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>

      <nav className="hidden flex-1 justify-center space-x-6 sm:flex">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
      </nav>
      <div className="flex flex-1 items-center justify-end space-x-4 sm:space-x-6">
        <SearchButton />
        <ThemeSwitch />
        <Link
          href="https://kartonobinsaleh.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-500 hover:bg-primary-600 hidden rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors sm:block"
        >
          Join Newsletter
        </Link>

        <MobileNav />
      </div>
    </header>
  )
}

export default Header
