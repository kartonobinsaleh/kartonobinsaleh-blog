import { allBlogs } from 'contentlayer/generated'
import Link from '@/components/ui/Link'

interface SeriesTableOfContentsProps {
  series: string
  currentSlug: string
}

export default function SeriesTableOfContents({ series, currentSlug }: SeriesTableOfContentsProps) {
  const seriesPosts = allBlogs
    .filter((post) => post.series === series)
    .sort((a, b) => (a.order || 0) - (b.order || 0))

  if (seriesPosts.length <= 1) return null

  return (
    <div className="py-4 xl:py-8">
      <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400 mb-4">
        Series: {series}
      </h2>
      <nav className="relative max-h-[450px] overflow-y-auto no-scrollbar py-1">
        {/* Vertical line connecting the steps */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        <ul className="space-y-4 relative">
          {seriesPosts.map((post) => {
            const isCurrent = post.slug === currentSlug
            return (
              <li key={post.slug} className="flex items-center gap-4 group">
                <div
                  className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all ${isCurrent
                      ? 'bg-primary-500 text-white ring-4 ring-primary-500/20'
                      : 'bg-white border-2 border-gray-200 text-gray-400 group-hover:border-primary-500 group-hover:text-primary-500 dark:bg-dark-bg dark:border-gray-800'
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
                    className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
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
