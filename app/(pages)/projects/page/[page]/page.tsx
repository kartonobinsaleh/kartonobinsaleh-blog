import projectsData from '@/data/projectsData'
import SectionContainer from '@/components/layout/SectionContainer'
import ProjectCard from '@/components/common/ProjectCard'
import Pagination from '@/components/navigation/Pagination'
import { notFound } from 'next/navigation'

const PROJECTS_PER_PAGE = 6

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }))
}

export default async function Page({ params }: { params: { page: string } }) {
  const pageNumber = parseInt(params.page)
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)

  if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    return notFound()
  }

  const start = PROJECTS_PER_PAGE * (pageNumber - 1)
  const end = PROJECTS_PER_PAGE * pageNumber
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

        <Pagination currentPage={pageNumber} totalPages={totalPages} />
      </div>
    </SectionContainer>
  )
}
