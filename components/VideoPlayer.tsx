"use client"
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  poster?: string
  ariaLabel?: string
  className?: string
}

export default function VideoPlayer({ src, poster, ariaLabel, className }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onError = () => {
      const err = el.error
      let msg = 'Unknown video error'
      if (err) {
        // MediaError codes: 1-4
        msg = `MediaError code=${err.code}`
        if ((err as any).message) msg += ` message=${(err as any).message}`
      }
      console.error('VideoPlayer error', msg, { src })
      setErrorMsg(msg)
    }

    const onPlay = () => setErrorMsg(null)

    // Prevent right-click context menu on video
    const onContextMenu = (e: Event) => {
      e.preventDefault()
    }

    el.addEventListener('error', onError)
    el.addEventListener('play', onPlay)
    el.addEventListener('contextmenu', onContextMenu)

    return () => {
      el.removeEventListener('error', onError)
      el.removeEventListener('play', onPlay)
      el.removeEventListener('contextmenu', onContextMenu)
    }
  }, [src])

  return (
    <div className={className ?? ''}>
      <video 
        ref={ref} 
        controls 
        poster={poster} 
        className="h-full w-full object-cover" 
        aria-label={ariaLabel} 
        preload="metadata" 
        playsInline
        controlsList="nodownload"
      >
        <source src={src} type="video/mp4" />
      </video>
      {errorMsg && (
        <div className="mt-3 rounded-md bg-red-900/80 p-3 text-sm text-white">
          <div>Video failed to play: {errorMsg}</div>
          <div className="mt-2">
            <a href={src} target="_blank" rel="noreferrer" className="underline">Open in new tab</a>
          </div>
        </div>
      )}
    </div>
  )
}
