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

const projectsData: Project[] = [
  {
    slug: 'school-dashboard',
    title: 'School Management Dashboard',
    summary: 'Web dashboard for managing students, classes, and academic reports.',
    description:
      'A full-featured school management system built to simplify academic administration.',
    coverImage: '/static/images/time-machine.jpg',

    href: '/projects/school-dashboard',
    demoUrl: 'https://school-dashboard.demo',
    githubUrl: 'https://github.com/username/school-dashboard',

    tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
    category: 'Web App',
    year: 2024,
    status: 'Live',
  },
  {
    slug: 'personal-blog',
    title: 'Personal Tech Blog',
    summary: 'A fast, SEO-friendly personal blog built with Next.js and MDX.',
    coverImage: '/static/images/google.png',

    href: '/projects/personal-blog',
    githubUrl: 'https://github.com/username/blog',

    tech: ['Next.js', 'Contentlayer', 'Tailwind CSS'],
    category: 'Open Source',
    year: 2023,
    status: 'Archived',
  },
]

export default projectsData
