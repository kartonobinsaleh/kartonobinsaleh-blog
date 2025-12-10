import Link from '@/components/ui/Link'
import Tag from '@/components/common/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/common/Hero'
import SectionContainer from '@/components/layout/SectionContainer'
import Newsletter from '@/components/common/NewsLetter'
import Image from 'next/image'
import Card from '@/components/common/Card'

const MAX_DISPLAY = 6

export default async function HomePage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return (
    <>
      <Hero
        title="Welcome to My Blog"
        description="Sharing ideas, projects, and stories about web development and more."
        ctaText="View Projects"
        ctaHref="/projects"
      />

      <SectionContainer>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl leading-7 font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-100">
            Apa yang baru?
          </h1>
          <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, title, summary } = post
            return (
              <li key={slug}>
                <Card title={title} summary={summary} slug={slug} />
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base leading-6 font-medium">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </SectionContainer>
      <Newsletter />
    </>
  )
}
