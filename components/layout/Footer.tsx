import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social'

export default function Footer() {
  return (
    <footer className="mt-16 w-full bg-gray-50 py-16 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">Ikuti saya:</div>
        <div className="flex space-x-4">
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
          {/* <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} /> */}
          {/* <SocialIcon kind="x" href={siteMetadata.x} size={6} /> */}
          {/* <SocialIcon kind="threads" href={siteMetadata.threads} size={6} /> */}
          {/* <SocialIcon kind="medium" href={siteMetadata.medium} size={6} /> */}
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-sm text-gray-500 sm:flex-row sm:space-x-2 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</div>
          <div className="hidden sm:block">{` • `}</div>
          <div>Made with ❤️ using Next.js</div>
        </div>
      </div>
    </footer>
  )
}
