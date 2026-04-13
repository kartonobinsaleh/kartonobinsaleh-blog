import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social'
import Link from '@/components/ui/Link'
import headerNavLinks from '@/data/headerNavLinks'

export default function Footer() {
  return (
    <footer className="dark:border-dark-border dark:bg-dark-bg/50 mt-16 w-full border-t border-gray-100 bg-gray-50/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8 lg:gap-16">
          {/* Column 1: Branding & Description - Spans 2 columns to fill space */}
          <div className="flex flex-col items-center gap-4 md:col-span-2 md:items-start">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
            >
              {siteMetadata.headerTitle}
            </Link>
            <p className="max-w-md text-center text-sm leading-relaxed text-gray-500 md:text-left dark:text-gray-400">
              Berbagi pemikiran seputar pengembangan software, Linux, dan produktivitas untuk
              membantu Anda membangun karya yang lebih baik melalui panduan praktis dan project
              dunia nyata.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              Explore
            </h3>
            <nav className="flex flex-col items-center gap-2 md:items-start">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-primary-500 dark:hover:text-primary-400 text-sm text-gray-500 transition-colors dark:text-gray-400"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials & Connect */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              Connect
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={5} />
              <SocialIcon kind="github" href={siteMetadata.github} size={5} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={5} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {`© ${new Date().getFullYear()} ${siteMetadata.author}. All rights reserved.`}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>using Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
