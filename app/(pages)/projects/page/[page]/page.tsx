import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/common/ProjectCard'
import Pagination from '@/components/navigation/Pagination'
import SectionContainer from '@/components/layout/SectionContainer'
import { notFound } from 'next/navigation'

const PROJECTS_PER_PAGE = 6

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)

  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }))
}

export default function ProjectsPage({ params }: { params: { page: string } }) {
  const currentPage = Number(params.page)
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)

  if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
    return notFound()
  }

  const start = (currentPage - 1) * PROJECTS_PER_PAGE
  const end = start + PROJECTS_PER_PAGE
  const displayProjects = projectsData.slice(start, end)

  return (
    <SectionContainer>
      <div className="pt-6">
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          Projects
        </h1>

        <p className="mb-8 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Kumpulan proyek yang pernah saya kerjakan
        </p>

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </SectionContainer>
  )
}
