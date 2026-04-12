export interface Project {
  slug: string
  title: string
  summary: string
  description?: string

  coverImage: string

  href?: string
  demoUrl?: string
  githubUrl?: string

  tech: string[]
  category?: 'Web App' | 'Landing Page' | 'Open Source' | 'Tool'

  year?: number
  status?: 'Live' | 'In Progress' | 'Archived'
}

const projectsData: Project[] = []

export default projectsData
