import projectsData from '@/data/projectsData'
import SectionContainer from '@/components/layout/SectionContainer'
import ProjectCard from '@/components/common/ProjectCard'
import Pagination from '@/components/navigation/Pagination'
import { notFound } from 'next/navigation'

const PROJECTS_PER_PAGE = 6

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }))
}

export default async function ProjectsPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params
  const currentPage = Number(page)

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)

  if (Number.isNaN(currentPage) || currentPage < 2 || currentPage > totalPages) {
    notFound()
  }

  const start = (currentPage - 1) * PROJECTS_PER_PAGE
  const end = start + PROJECTS_PER_PAGE
  const displayProjects = projectsData.slice(start, end)

  return (
    <SectionContainer>
      <div className="pt-6">
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight">Projects</h1>

        <p className="mb-8 text-lg text-gray-500">Kumpulan proyek yang pernah saya kerjakan</p>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
