import ShaderBackground from '@/components/ShaderBackground'
import VideoPlayer from '@/components/VideoPlayer'

const videos = [
  {
    id: 1,
    title: 'Featured Video 1',
    src: encodeURI('/gallery/placeholder1.mp4'),
  },
  {
    id: 2,
    title: 'Featured Video 2',
    src: encodeURI('/gallery/placeholder2.mp4'),
  },
  {
    id: 3,
    title: 'Featured Video 3',
    src: encodeURI('/gallery/placeholder3.mp4'),
  },
  {
    id: 4,
    title: 'Featured Video 4',
    src: encodeURI('/vide/WhatsApp Video 2026-06-25 at 9.52.44 AM.mp4'),
  },
  {
    id: 5,
    title: 'Featured Video 5',
    src: encodeURI('/videosWhatsApp Video 2026-06-25 at 9.52.46 AM.mp4'),
  },
  {
    id: 6,
    title: 'Featured Video 6',
    src: encodeURI('/videos/WhatsApp Video 2026-06-25 at 9.44 AM.mp4'),
  },
  {
    id: 7,
    title: 'Featured Video 7',
    src: encodeURI('/gallery/placeholde.mp4'),
  },
]

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <ShaderBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,45,85,0.20),transparent_24%),radial-gradient(circle_at_top_right,_rgba(255,126,185,0.16),transparent_32%),linear-gradient(to bottom,rgba(18,20,22,0.9),rgba(18,20,22,0.98))] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-16">
        <div className="mb-12 max-w-4xl text-center mx-auto">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ffb597]">Gallery</p>
          <h1 className="mb-6 text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">Video Showcase</h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#d5d5d9] sm:text-lg">
            Explore our curated video collection with the same premium visual experience as the rest of the site.
          </p>
        </div>

        <section className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <div className="grid gap-8 sm:grid-cols-2">
            {videos.map((video) => (
              <article key={video.id} className="reveal-up active">
                <div className="rounded-[26px] bg-gradient-to-r from-[#ff2d55] via-[#ff7eb9] to-[#f24874] p-[2px] shadow-[0_20px_70px_rgba(242,100,25,0.25)] transition-all duration-500 hover:shadow-[0_20px_90px_rgba(242,100,25,0.45)]">
                  <div className="rounded-[24px] overflow-hidden bg-[#121416]">
                    <VideoPlayer src={video.src} ariaLabel={video.title} className="w-full h-[320px]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
