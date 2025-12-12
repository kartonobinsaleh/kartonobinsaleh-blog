import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  id?: string
}

export default function SectionContainer({ children, id }: Props) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 xl:px-0">
      {children}
    </section>
  )
}
