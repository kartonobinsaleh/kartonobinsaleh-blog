import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Home from '../../components/layout/Home'
import Hero from '@/components/common/Hero'
import SectionContainer from '@/components/layout/SectionContainer'

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
        <Home posts={posts} />
      </SectionContainer>
    </>
  )
}
