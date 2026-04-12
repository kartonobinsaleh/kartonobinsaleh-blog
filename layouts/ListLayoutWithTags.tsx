'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/ui/Link'
import tagData from 'app/tag-data.json'
import { useEffect, useRef, useState } from 'react'
import Pagination, { PaginationProps } from '@/components/navigation/Pagination'
import ArticleCard from '@/components/common/ArticleCard'

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>

  const activeTag = pathname.startsWith('/tags/') ? decodeURI(pathname.split('/tags/')[1]) : null
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])

  const scrollRef = useRef<HTMLDivElement>(null)
  const tagRefs = useRef<Record<string, HTMLSpanElement | HTMLAnchorElement | null>>({})
  const [showLeftFade, setShowLeftFade] = useState(false)

  const handleScroll = () => {
    if (!scrollRef.current) return
    setShowLeftFade(scrollRef.current.scrollLeft > 0)
  }

  useEffect(() => {
    if (!activeTag) return

    const el = tagRefs.current[activeTag]
    const container = scrollRef.current

    if (el && container) {
      el.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
        block: 'nearest',
      })

      requestAnimationFrame(() => {
        setShowLeftFade(container.scrollLeft > 0)
      })
    }
  }, [activeTag])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="pt-6">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
        {title}
      </h1>

      <div className="relative mb-8">
        <div ref={scrollRef} onScroll={handleScroll} className="no-scrollbar overflow-x-auto">
          <div className="flex flex-nowrap items-center gap-2 py-1">
            {pathname.startsWith('/blog') ? (
              <span
                ref={(el) => {
                  tagRefs.current['all'] = el
                }}
                className="bg-primary-500 rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap text-white"
              >
                All Posts
              </span>
            ) : (
              <Link
                href="/blog"
                ref={(el) => {
                  tagRefs.current['all'] = el
                }}
                className="rounded-full border px-4 py-1.5 text-sm font-medium whitespace-nowrap text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                All Posts
              </Link>
            )}

            {sortedTags.map((t) => {
              const tagSlug = slug(t)
              const isActive = activeTag === tagSlug
              const baseClass =
                'rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition'

              return isActive ? (
                <span
                  key={t}
                  ref={(el) => {
                    tagRefs.current[tagSlug] = el
                  }}
                  className={`${baseClass} bg-primary-500 font-semibold text-white`}
                >
                  {`${t} (${tagCounts[t]})`}
                </span>
              ) : (
                <Link
                  key={t}
                  href={`/tags/${tagSlug}`}
                  ref={(el) => {
                    tagRefs.current[tagSlug] = el
                  }}
                  className={`${baseClass} border text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800`}
                >
                  {`${t} (${tagCounts[t]})`}
                </Link>
              )
            })}
          </div>
        </div>

        {showLeftFade && (
          <div className="pointer-events-none absolute top-0 -left-1 h-full w-8 bg-gradient-to-r from-white to-transparent dark:from-[#0b0b0b]" />
        )}

        <div className="pointer-events-none absolute top-0 -right-1 h-full w-8 bg-gradient-to-l from-white to-transparent dark:from-[#0b0b0b]" />
      </div>

      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post) => {
          const { slug, title, summary, images } = post

          return (
            <li key={slug}>
              <ArticleCard
                title={title}
                summary={summary}
                slug={slug}
                imageUrl={images ? images[0] : undefined}
              />
            </li>
          )
        })}
      </ul>

      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
