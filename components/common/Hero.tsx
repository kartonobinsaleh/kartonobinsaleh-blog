import Link from '@/components/ui/Link'

interface HeroProps {
  title: string
  description?: string
  ctaText?: string
  ctaHref?: string
  bgColor?: string
  textColor?: string
}

export default function Hero({
  title,
  description,
  ctaText,
  ctaHref,
  bgColor = 'bg-gray-50 dark:bg-gray-900',
  textColor = 'text-gray-900 dark:text-gray-100',
}: HeroProps) {
  return (
    <section className={`w-full py-20 ${bgColor}`}>
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h1 className={`text-5xl font-extrabold md:text-6xl ${textColor}`}>{title}</h1>
        {description && (
          <p className={`mt-4 text-xl ${textColor.replace('text-', 'text-gray-')}`}>
            {description}
          </p>
        )}
        {ctaText && ctaHref && (
          <div className="mt-6">
            <Link
              href={ctaHref}
              className="bg-primary-500 hover:bg-primary-600 rounded-lg px-6 py-3 text-white"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
