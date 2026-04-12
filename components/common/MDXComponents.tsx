import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from '../ui/Image'
import CustomLink from '../ui/Link'
import TableWrapper from './TableWrapper'

import YouTube from '../ui/YouTube'

export const components: MDXComponents = {
  Image,
  TOCInline,
  YouTube,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}
