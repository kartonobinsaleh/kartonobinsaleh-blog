'use client'

interface YouTubeProps {
  id: string
  title?: string
}

const YouTube = ({ id, title = 'YouTube video player' }: YouTubeProps) => {
  return (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-xl shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      ></iframe>
    </div>
  )
}

export default YouTube
