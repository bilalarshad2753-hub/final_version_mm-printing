"use client"
import React from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export default function PricingImage({ src, alt, className }: Props) {
  // Support loading by base name (e.g. 'bw-single') or full path (e.g. '/pricing/bw-single.jpg').
  const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg']
  const hasExtension = (s: string) => /\.[a-zA-Z0-9]+$/.test(s)

  const buildPath = (base: string, ext: string) => {
    if (base.startsWith('/')) return `${base}${ext}` // user may pass '/pricing/name'
    return `/pricing/${base}${ext}`
  }

  const [attempt, setAttempt] = React.useState(0)
  const [currentSrc, setCurrentSrc] = React.useState(() => {
    if (hasExtension(src)) return src.startsWith('/') ? src : `/pricing/${src}`
    return buildPath(src, extensions[0])
  })

  const handleError = () => {
    // try next extension
    const next = attempt + 1
    if (hasExtension(src)) {
      // already had extension and failed — show placeholder
      setCurrentSrc('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="100%" height="100%" fill="%232b2b2b" rx="6"/><text x="50%" y="54%" font-size="10" fill="%23ffb597" text-anchor="middle" font-family="Arial">IMG</text></svg>')
      return
    }
    if (next < extensions.length) {
      setAttempt(next)
      setCurrentSrc(buildPath(src, extensions[next]))
    } else {
      setCurrentSrc('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="100%" height="100%" fill="%232b2b2b" rx="6"/><text x="50%" y="54%" font-size="10" fill="%23ffb597" text-anchor="middle" font-family="Arial">IMG</text></svg>')
    }
  }

  return <img src={currentSrc} alt={alt} className={className} onError={handleError} />
}
