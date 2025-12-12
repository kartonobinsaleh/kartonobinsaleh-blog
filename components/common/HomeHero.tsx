'use client'

import Link from '@/components/ui/Link'
import Scene from '../three/Scene'

export default function HomeHero() {
  return (
    <section className="w-full bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 lg:flex-row lg:items-start">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 md:text-6xl dark:text-gray-100">
            Welcome to My Blog
          </h1>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Sharing ideas, projects, and stories about web development and more.
          </p>
          <div className="mt-6">
            <Link
              href="/projects"
              className="bg-primary-500 hover:bg-primary-600 rounded-lg px-6 py-3 text-white"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="h-80 w-full flex-1 lg:h-[70vh]">
          <Scene />
        </div>
      </div>
      <div className="absolute bottom-4 flex w-full items-center justify-center">
        <a href="#latest-posts" className="group">
          <div className="flex h-12 w-6 items-center justify-center rounded-3xl border-2 border-gray-500 p-1 group-hover:border-gray-700 dark:border-gray-300 dark:group-hover:border-gray-500">
            <div className="animate-bounce-up-down h-3 w-1 rounded-full bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-300 dark:group-hover:bg-gray-500"></div>
          </div>
        </a>
      </div>
    </section>
  )
}
