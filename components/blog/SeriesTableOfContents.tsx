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
    <div className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
      <h3 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Seri: {series}
      </h3>
      <nav>
        <ul className="space-y-3">
          {seriesPosts.map((post) => (
            <li key={post.slug} className="flex items-start gap-3">
              <span
                className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  post.slug === currentSlug
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                }`}
              >
                {post.order || '?'}
              </span>
              {post.slug === currentSlug ? (
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {post.title} (Sedang dibaca)
                </span>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {post.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
