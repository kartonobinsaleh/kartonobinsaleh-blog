import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="bg-primary-500/5 text-primary-500 hover:bg-primary-500/10 dark:bg-primary-400/10 dark:text-primary-400 dark:hover:bg-primary-400/20 mb-2 mr-2 rounded px-2 py-1 text-sm font-medium lowercase transition-colors"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
