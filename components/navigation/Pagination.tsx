'use client'

import { usePathname } from 'next/navigation'
import Link from '@/components/ui/Link'

export interface PaginationProps {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()

  const basePath = pathname
    .replace(/^\//, '')
    .replace(/\/page\/\d+\/?$/, '')
    .replace(/\/$/, '')

  const prevPage = currentPage > 1
  const nextPage = currentPage < totalPages

  return (
    <div className="pt-6 pb-8">
      <nav className="flex items-center justify-between">
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        ) : (
          <span className="opacity-50">Previous</span>
        )}

        <span className="text-sm">
          {currentPage} of {totalPages}
        </span>

        {nextPage ? (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        ) : (
          <span className="opacity-50">Next</span>
        )}
      </nav>
    </div>
  )
}
