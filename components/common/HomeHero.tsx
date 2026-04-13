'use client'

import Link from '@/components/ui/Link'
import Scene from '../three/Scene'

export default function HomeHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50/50 py-12 sm:py-12 md:py-20 dark:from-dark-bg dark:to-dark-bg/80">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:min-h-0 lg:flex-row lg:items-center xl:px-0">
        <div className="flex flex-1 flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="font-heading text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-7xl dark:text-white">
            Start from Zero, Learn by Building
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-400">
            Belajar dari nol lewat tutorials, tips, dan real projects di dunia software development.
          </p>
          <div className="mt-6">
            <Link
              href="/blog"
              className="border-primary-500 text-primary-500 hover:bg-primary-500 rounded-lg border-2 px-6 py-3 font-semibold transition-colors hover:text-white"
            >
              Mulai Belajar
            </Link>
          </div>
        </div>

        <div className="w-full flex-1 lg:w-1/2">
          <div className="aspect-[4/3] h-full sm:aspect-[16/9] lg:aspect-auto lg:h-[70vh]">
            <Scene />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 flex w-full justify-center">
        <a href="#latest-posts" className="group">
          <div className="flex h-12 w-6 items-center justify-center rounded-3xl border-2 border-gray-500 p-1 group-hover:border-gray-700 dark:border-gray-300 dark:group-hover:border-gray-500">
            <div className="animate-bounce-up-down h-3 w-1 rounded-full bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-300 dark:group-hover:bg-gray-500"></div>
          </div>
        </a>
      </div>
    </section>
  )
}
