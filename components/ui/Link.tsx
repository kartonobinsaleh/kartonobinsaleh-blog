/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, forwardRef } from 'react'

type CustomLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(({ href, ...rest }, ref) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link ref={ref} className="break-words" href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a ref={ref} className="break-words" href={href} {...rest} />
  }

  return (
    <a
      ref={ref}
      className="break-words"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
})

CustomLink.displayName = 'CustomLink'

export default CustomLink
