import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  id?: string
}

export default function SectionContainer({ children, id }: Props) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-16 px-4 py-4 sm:px-6 sm:py-12 xl:px-0">
      {children}
    </section>
  )
}
