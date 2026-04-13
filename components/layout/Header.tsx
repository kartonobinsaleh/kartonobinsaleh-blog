'use client'

import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.webp'
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
    const onScroll = () => setIsTop(window.scrollY <= 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return isTop
}

export default function Header() {
  const isTop = useIsScrollTop()
  const [openMenu, setOpenMenu] = useState<'mobile' | null>(null)

  const headerClass =
    `sticky top-0 z-50 w-full py-4 sm:py-6 transition-all duration-300 border-b border-transparent ` +
    (isTop
      ? 'bg-white/60 backdrop-blur-md backdrop-saturate-150 dark:bg-dark-bg/60'
      : 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-dark-bg dark:border-dark-border')

  return (
    <header className={headerClass}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 xl:px-0">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="h-7 w-7 rounded-full object-cover sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <span className="font-heading hidden text-base font-bold sm:inline md:text-xl">
                {siteMetadata.headerTitle}
              </span>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

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

        <div className="flex items-center gap-2 md:gap-4">
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

          <MobileNav openMenu={openMenu} setOpenMenuAction={setOpenMenu} />
        </div>
      </div>
    </header>
  )
}
