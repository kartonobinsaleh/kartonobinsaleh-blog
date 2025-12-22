import Link from '@/components/ui/Link'
import Image from 'next/image'

export const unsplashImages = [
  'photo-1498050108023-c5249f4df085',
  'photo-1518770660439-4636190af475',
  'photo-1517433456452-f9633a875f6f',
  'photo-1555066931-4365d14bab8c',
  'photo-1519389950473-47ba0277781c',
]

export const getUnsplashImage = (seed: string) => {
  const index =
    Math.abs(seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % unsplashImages.length

  return `https://images.unsplash.com/${unsplashImages[index]}?w=800&auto=format&fit=crop&q=80`
}

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
  imageUrl = 'https://source.unsplash.com/400x200/?technology',
  minHeight = '380px',
}: CardProps) {
  const imageSrc = getUnsplashImage(slug)

  return (
    <Link href={`/blog/${slug}`} className="block">
      <article
        className={`flex flex-col justify-between rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-950`}
        style={{ minHeight }}
      >
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={200}
            className="h-48 w-full rounded-t-xl object-cover"
          />
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
