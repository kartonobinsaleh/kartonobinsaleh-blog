'use client'

import { useEffect, useRef } from 'react'
import { allBlogs } from 'contentlayer/generated'
import Link from '@/components/ui/Link'

interface SeriesTableOfContentsProps {
  series: string
  currentSlug: string
}

export default function SeriesTableOfContents({ series, currentSlug }: SeriesTableOfContentsProps) {
  const scrollContainerRef = useRef<HTMLElement>(null)
  const activeItemRef = useRef<HTMLLIElement>(null)

  const seriesPosts = allBlogs
    .filter((post) => post.series === series)
    .sort((a, b) => (a.order || 0) - (b.order || 0))

  useEffect(() => {
    if (activeItemRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const activeItem = activeItemRef.current

      // Hitung posisi scroll secara manual agar tidak memicu window jump
      const scrollPos = activeItem.offsetTop - container.offsetTop - container.clientHeight / 2 + activeItem.clientHeight / 2
      
      container.scrollTo({
        top: scrollPos,
        behavior: 'smooth',
      })
    }
  }, [currentSlug])

  if (seriesPosts.length <= 1) return null

  return (
    <div className="py-4 xl:py-8">
      <h2 className="mb-4 text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
        Series: {series}
      </h2>
      <nav
        ref={scrollContainerRef}
        className="no-scrollbar relative max-h-[280px] overflow-y-auto py-1"
      >
        {/* Vertical line connecting the steps */}
        <div className="absolute top-0 bottom-0 left-3 w-px bg-gray-200 dark:bg-gray-800" />

        <ul className="relative space-y-4">
          {seriesPosts.map((post) => {
            const isCurrent = post.slug === currentSlug
            return (
              <li
                key={post.slug}
                ref={isCurrent ? activeItemRef : null}
                className="group flex items-center gap-4"
              >
                <div
                  className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all ${
                    isCurrent
                      ? 'bg-primary-500 ring-primary-500/20 text-white ring-4'
                      : 'group-hover:border-primary-500 group-hover:text-primary-500 dark:bg-dark-bg border-2 border-gray-200 bg-white text-gray-400 dark:border-gray-800'
                  }`}
                >
                  {post.order || '?'}
                </div>
                {isCurrent ? (
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {post.title}
                  </span>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-500 dark:hover:text-primary-400 text-sm text-gray-500 transition-colors dark:text-gray-400"
                  >
                    {post.title}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
