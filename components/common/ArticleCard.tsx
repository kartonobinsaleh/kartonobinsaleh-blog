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

export default function ArticleCard({
  title,
  summary,
  slug,
  imageUrl,
  minHeight = '380px',
}: CardProps) {
  const imageSrc = imageUrl || getUnsplashImage(slug)

  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className="dark:bg-dark-surface dark:border-dark-border flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:border">
        <div className="px-4 pt-4">
          <div className="relative h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={200}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <h2 className="font-heading line-clamp-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="line-clamp-3 text-base text-gray-500 dark:text-gray-400">{summary}</p>
        </div>
      </article>
    </Link>
  )
}
