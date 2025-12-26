import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social'
import Image from '@/components/ui/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <div className="grid gap-8 pt-4 xl:grid-cols-3">
      {/* Profile */}
      <div className="flex flex-col items-center text-center">
        {avatar && (
          <Image
            src={avatar}
            alt={name}
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
          />
        )}

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {name}
        </h3>

        <p className="text-gray-500 dark:text-gray-400">{occupation}</p>
        <p className="text-gray-500 dark:text-gray-400">{company}</p>

        <div className="mt-4 flex space-x-3">
          <SocialIcon kind="mail" href={`mailto:${email}`} />
          <SocialIcon kind="github" href={github} />
          <SocialIcon kind="linkedin" href={linkedin} />
          <SocialIcon kind="x" href={twitter} />
          <SocialIcon kind="bluesky" href={bluesky} />
        </div>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none xl:col-span-2">{children}</div>
    </div>
  )
}
