import type { Metadata } from 'next'
import ShaderBackground from '@/components/ShaderBackground'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse the MM Printing gallery to see recent printing, card, and packaging work delivered across Lahore.',
  alternates: {
    canonical: '/gallery',
  },
}
import VideoPlayer from '@/components/VideoPlayer'

const videos = [
  { id: 1, title: 'Video 1', type: 'small', src: encodeURI('/gallery/placeholder1.mp4') },
  { id: 2, title: 'Video 2', type: 'small', src: encodeURI('/gallery/placeholder2.mp4') },
  { id: 3, title: 'Video 3', type: 'small', src: encodeURI('/gallery/placeholder3.mp4') },
  { id: 4, title: 'Video 4', type: 'small', src: encodeURI('/gallery/placeholder4.mp4') },
  { id: 5, title: 'Video 5', type: 'tall', src: encodeURI('/gallery/placeholder5.mp4') },
  { id: 6, title: 'Video 6', type: 'small', src: encodeURI('/gallery/placeholder6.mp4') },
  { id: 7, title: 'Video 7', type: 'small', src: encodeURI('/gallery/placeholder7.mp4') },
  // { id: 8, title: 'Video 8', type: 'small', src: encodeURI('/gallery/placeholde.mp4') },
  // { id: 10, title: 'Video 10', type: 'small', src: encodeURI('/gallery/laceholder9.mp4') },
  { id: 9, title: 'Video 9', type: 'tall', src: encodeURI('/gallery/placeholder10.mp4') },
]

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <ShaderBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,45,85,0.20),transparent_24%),radial-gradient(circle_at_top_right,_rgba(255,126,185,0.16),transparent_32%),linear-gradient(to bottom,rgba(18,20,22,0.9),rgba(18,20,22,0.98))] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-3 pt-20 pb-12 sm:px-6 md:px-16 md:pt-32 md:pb-24">
        <div className="mx-auto mb-6 max-w-4xl text-center sm:mb-8 md:mb-12">
          <p className="mx-auto max-md:mt-11 mb-2 max-md:text-xs text-[11px] uppercase tracking-[0.35em] text-[#ffb597] md:mb-4 md:text-sm">Gallery</p>
          <h1 className="mb-0 max-md:text-3xl text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">Video Showcase</h1>
          <p className="mx-auto mt-2 max-md:text-sm max-w-2xl text-sm leading-6 text-[#d5d5d9] sm:text-base sm:leading-8 md:text-lg">
            Explore our curated video collection with the same premium visual experience as the rest of the site.
          </p>
        </div>

        <section className="rounded-lg border border-transparent p-1 sm:p-6 md:p-1">
          <div
            className="grid max-md:grid-cols-1 md:grid-cols-3 max-md:gap-4 md:gap-6 max-md:auto-rows-auto md:auto-rows-[220px] max-md:overflow-x-hidden"
            style={{
              gridAutoFlow: 'dense',
            }}
          >
            {(() => {
              let smallCount = 0
              let tallCount = 0

              return videos.map((video) => {
                let gridPosition = {}

                if (video.type === 'small') {
                  const col = (smallCount % 2) + 1
                  const row = Math.floor(smallCount / 2) + 1
                  gridPosition = { gridColumn: col, gridRow: row }
                  smallCount++
                } else {
                  // tall box
                  const row = tallCount * 2 + 1
                  gridPosition = { gridColumn: 3, gridRow: `${row} / span 2` }
                  tallCount++
                }

                return (
                  <article
                    key={video.id}
                    className={`overflow-hidden rounded-[24px] border border-white/10 bg-[#16181c]/90 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)] max-md:!col-auto max-md:!row-auto sm:p-3 md:rounded-[32px] ${
                      video.type === 'tall' ? 'max-md:aspect-[9/16]' : 'max-md:aspect-video'
                    }`}
                    style={gridPosition}
                  >
                    <div className="h-full w-full overflow-hidden rounded-[20px] bg-[#0f1215] md:rounded-[24px]">
                      <VideoPlayer
                        src={video.src}
                        ariaLabel={video.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </article>
                )
              })
            })()}
          </div>
        </section>
      </div>
    </main>
  )
}
