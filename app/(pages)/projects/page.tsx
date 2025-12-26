import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/common/ProjectCard'
import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/layout/SectionContainer'
import { Metadata } from 'next'

export const metadata: Metadata = genPageMetadata({ title: 'Projects' })

export default function ProjectsPage() {
  return (
    <SectionContainer>
      <div className="pt-6">
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          Projects
        </h1>

        <p className="mb-8 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Showcase your projects with a hero image (16 x 9)
        </p>

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <li key={project.slug}>
              <ProjectCard
                title={project.title}
                summary={project.summary}
                slug={project.slug}
                coverImage={project.coverImage}
                href={project.href}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
                tech={project.tech}
                status={project.status}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}
