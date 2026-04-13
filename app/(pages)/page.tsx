import Link from '@/components/ui/Link'
import siteMetadata from '@/data/siteMetadata'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import SectionContainer from '@/components/layout/SectionContainer'
import Newsletter from '@/components/common/NewsLetter'
import ArticleCard from '@/components/common/ArticleCard'
import HomeHero from '@/components/common/HomeHero'

const MAX_DISPLAY = 6

export default async function HomePage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return (
    <>
      <HomeHero />

      <SectionContainer id="latest-posts">
        <div className="space-y-2 py-6 md:space-y-5">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            Apa yang baru?
          </h1>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
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

        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end pt-8 pb-4">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 group relative inline-block font-medium transition-colors duration-300"
              aria-label="All posts"
            >
              <span>All posts</span>
              <span className="bg-primary-500 absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        )}
      </SectionContainer>
      <Newsletter />
    </>
  )
}
