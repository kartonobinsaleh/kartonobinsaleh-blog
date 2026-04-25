import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/common/Comments'
import Link from '@/components/ui/Link'
import PageTitle from '@/components/common/PageTitle'
import SectionContainer from '@/components/layout/SectionContainer'
import Image from '@/components/ui/Image'
import Tag from '@/components/common/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/common/ScrollTopAndComment'
import SeriesTableOfContents from '@/components/blog/SeriesTableOfContents'
import { ChevronLeft } from 'lucide-react'
const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags, series } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="mx-auto max-w-7xl">
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-2 lg:pt-6 xl:pb-6 text-center">
            <div className="pb-4 text-left lg:hidden">
              <Link
                href={`/${basePath}`}
                className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400"
                aria-label="Back"
              >
                <ChevronLeft className="w-4 h-4 mr-1" strokeWidth={3} />
                Back
              </Link>
            </div>
            <PageTitle>{title}</PageTitle>
            <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 pt-6">
              <dl className="flex flex-wrap justify-center gap-4">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center gap-4">
                    {authorDetails.map((author) => (
                      <li className="flex items-center space-x-2" key={author.name}>
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width={24}
                            height={24}
                            alt="avatar"
                            className="h-6 w-6 rounded-full"
                          />
                        )}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {author.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
              <dl className="flex items-center">
                <dt className="sr-only">Published on</dt>
                <dd className="text-sm leading-6 font-medium text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </dl>
            </div>
          </header>
          <div className="flex flex-col divide-y divide-gray-200 pb-8 lg:grid lg:grid-cols-4 lg:grid-rows-[auto_1fr] lg:gap-x-8 lg:divide-y-0 dark:divide-gray-700">
            <aside className="order-last lg:order-first sticky top-24 lg:self-start divide-y divide-gray-200 dark:divide-gray-700">
              {series && <SeriesTableOfContents series={series} currentSlug={slug} />}
            <div className="text-sm leading-5 font-medium">
              {tags && (
                <div className="py-4 lg:py-8">
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400 mb-4">
                    Tags
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="hidden lg:block pt-4 lg:pt-8 mt-4">
              <Link
                href={`/${basePath}`}
                className="group flex items-center text-primary-500 transition-colors hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
                aria-label="Back to the blog"
              >
                <span className="mr-1 transition-transform duration-300 group-hover:-translate-x-1">
                  <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                </span>
                <span className="font-medium">Back</span>
              </Link>
            </div>
            </aside>
            <div className="divide-y divide-gray-200 lg:col-span-3 lg:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
                {children}
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(filePath)}>View on GitHub</Link>
              </div>
              {siteMetadata.comments && (
                <div
                  className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
              {(next || prev) && (
                <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2">
                  {prev && prev.path ? (
                    <div className="group relative rounded-xl border border-gray-200 p-4 transition-colors hover:border-primary-500 dark:border-gray-800">
                      <dt className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                        Previous Article
                      </dt>
                      <dd className="mt-1 text-primary-500 transition-colors dark:text-primary-400">
                        <Link href={`/${prev.path}`} className="before:absolute before:inset-0">
                          {prev.title}
                        </Link>
                      </dd>
                    </div>
                  ) : (
                    <div />
                  )}
                  {next && next.path && (
                    <div className="group relative rounded-xl border border-gray-200 p-4 text-right transition-colors hover:border-primary-500 dark:border-gray-800">
                      <dt className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                        Next Article
                      </dt>
                      <dd className="mt-1 text-primary-500 transition-colors dark:text-primary-400">
                        <Link href={`/${next.path}`} className="before:absolute before:inset-0">
                          {next.title}
                        </Link>
                      </dd>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
