import Link from '@/components/ui/Link'
import Image from 'next/image'

interface CardProps {
  title: string
  summary?: string
  slug: string
  imageUrl?: string
  minHeight?: string
}

export default function Card({
  title,
  summary,
  slug,
  imageUrl = 'https://picsum.photos/400/200',
  minHeight = '380px',
}: CardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <article
        className={`flex flex-col justify-between rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-950`}
        style={{ minHeight }}
      >
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <Image src={`${imageUrl}?random=${slug}`} alt={title} fill className="object-cover" />
        </div>

        <div className="flex flex-1 flex-col justify-start gap-2 p-6">
          <h2 className="line-clamp-2 text-xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="line-clamp-3 text-gray-500 dark:text-gray-400">{summary}</p>
        </div>
      </article>
    </Link>
  )
}
