import Link from '../ui/Link'
import Image from '../ui/Image'

interface ProjectCardProps {
  title: string
  summary: string
  slug: string
  coverImage: string
  href?: string
  demoUrl?: string
  githubUrl?: string
  tech?: string[]
  status?: string
}

export default function ProjectCard({
  title,
  summary,
  slug,
  coverImage,
  href,
  demoUrl,
  githubUrl,
  tech = [],
  status,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-950">
      {/* Image */}
      <div className="px-4 pt-4">
        <div className="relative h-48 w-full overflow-hidden rounded-xl">
          <Image
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={544}
            height={306}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="line-clamp-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
        <p className="line-clamp-3 text-gray-500 dark:text-gray-400">{summary}</p>

        {/* Tech tags */}
        {tech.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-4">
          {status && (
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{status}</span>
          )}

          <div className="flex gap-2">
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                className="rounded-full border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Demo
              </Link>
            )}

            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                className="rounded-full border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
