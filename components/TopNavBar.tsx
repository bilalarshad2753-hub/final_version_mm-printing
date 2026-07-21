'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function TopNavBar() {
  const pathname = usePathname()
  const [activeIndex, setActiveIndex] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, x: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([])

  useEffect(() => {
    const path = pathname || '/'
    let nextIndex = 0
    if (path.startsWith('/about')) nextIndex = 1
    else if (path.startsWith('/services')) nextIndex = 2
    else if (path.startsWith('/gallery')) nextIndex = 3
    else if (path.startsWith('/testimonials')) nextIndex = 4
    else if (path.startsWith('/contact')) nextIndex = 5
    else nextIndex = 0

    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex))
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useLayoutEffect(() => {
    const activeLink = linkRefs.current[activeIndex]
    if (!activeLink) return

    const updateIndicator = () => {
      setIndicatorStyle({
        width: activeLink.offsetWidth,
        x: activeLink.offsetLeft,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeIndex])

  const navItems = [
    { label: 'Home', href: '/', isRouteLink: true },
    { label: 'About', href: '/about', isRouteLink: true },
    { label: 'Services', href: '/services', isRouteLink: true },
    { label: 'Gallery', href: '/gallery', isRouteLink: true },
    { label: 'Testimonials', href: '/testimonials', isRouteLink: true },
    { label: 'Contact', href: '/contact', isRouteLink: true },
  ]
  const whatsappNumber = '923099018555'

  const pushWhatsAppEvent = (location: string) => {
    if (typeof window === 'undefined') return

    const targetWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>
      fbq?: (...args: unknown[]) => void
    }

    if (targetWindow.dataLayer) {
      targetWindow.dataLayer.push({
        event: 'whatsapp_click',
        click_location: location,
      })
    }

    if (typeof targetWindow.fbq === 'function') {
      targetWindow.fbq('track', 'Contact')
    }
  }

  const handleLinkClick = (index: number) => {
    setActiveIndex(index)
    setIsMenuOpen(false)
  }

  const navLinkClass = (active: boolean) =>
    `relative z-10 px-1 pb-3 tracking-tight font-medium transition duration-300 ${
      active
        ? 'text-transparent bg-gradient-to-r from-[#ff2d55] via-[#ff7eb9] to-[#f24874] bg-clip-text'
        : 'text-[#e1bfb2] hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff2d55] hover:via-[#ff7eb9] hover:to-[#f24874] hover:bg-clip-text'
    }`

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b-[0.5px] border-[#594138] bg-[#121416]/80 shadow-[0_0_15px_rgba(242,100,25,0.2)] backdrop-blur-xl">
        <nav className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-16">
          <div className="flex min-w-0 items-center">
            <Link href="/" className="relative md:-top-1.5 md:right-21  flex items-center transition-transform duration-300 hover:scale-105  ">
              <img
                src="/mm-logo.png"
                alt="MM Printing Logo"
                className="h-14 w-auto object-contain sm:h-16 md:h-20 lg:h-24 "
              />
            </Link>
          </div>

          <div className="relative mx-auto hidden items-end justify-center gap-3 md:flex lg:gap-4 xl:gap-5 2xl:gap-6">
            <div
              className="pointer-events-none absolute bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#ff2d55] via-[#ff7eb9] to-[#f24874] shadow-[0_0_15px_rgba(242,100,25,0.35)] transition-[transform,width] duration-500 ease-out"
              style={{ width: indicatorStyle.width, transform: `translateX(${indicatorStyle.x}px)` }}
            />
            {navItems.map((item, index) => {
              const active = index === activeIndex
              const sharedProps = {
                ref: (node: HTMLAnchorElement | null) => {
                  linkRefs.current[index] = node
                },
                onClick: () => handleLinkClick(index),
                className: navLinkClass(active),
                'aria-current': active ? ('page' as const) : undefined,
              }

              if (item.isRouteLink) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    {...sharedProps}
                    className={`${navLinkClass(active)} text-sm md:text-[15px] lg:text-base xl:text-lg 2xl:text-[22px]`}
                    style={{ fontWeight: index === 0 ? 600 : 500, lineHeight: '1.4' }}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  {...sharedProps}
                  className={`${navLinkClass(active)} text-sm md:text-[15px] lg:text-base xl:text-lg 2xl:text-[22px]`}
                  style={{ fontWeight: index === 0 ? 600 : 500, lineHeight: '1.4' }}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushWhatsAppEvent('header_mobile')}
                className="flex h-full items-center gap-2 rounded-full border border-[#f26419]/40 bg-[#16191d]/95 px-2.5 py-1.5 shadow-[0_0_20px_rgba(242,100,25,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffb597]/60 hover:bg-[#1e232a] md:hidden"
              >
                <img
                  src="/pngtree-whatsapp-icon-png-image_3584845.png"
                  alt="WhatsApp"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-[11px] font-bold tracking-[0.08em] text-[#ffb597] sm:text-xs">
                  +92 309 9018555
                </span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => pushWhatsAppEvent('header_desktop')}
                className="hidden items-center justify-center gap-3 rounded-full border border-[#f26419]/40 bg-[#16191d]/95 px-3 py-2 shadow-[0_0_20px_rgba(242,100,25,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffb597]/60 hover:bg-[#1e232a] md:flex md:self-center lg:px-4 md:-mt-3 -mr-18"
              >
                <img
                  src="/pngtree-whatsapp-icon-png-image_3584845.png"
                  alt="WhatsApp"
                  className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
                />
                <span className="text-sm font-bold tracking-[0.08em] text-[#ffb597] sm:text-base">
                  +92 309 9018555
                </span>
              </a>

              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb597]/30 bg-[#16191d]/90 text-[#ffb597] transition hover:bg-[#1e232a] md:hidden"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
              >
                <span className="text-xl leading-none">{isMenuOpen ? '×' : '☰'}</span>
              </button>
            </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[70] md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          type="button"
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
        />
        <div className={`absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col border-l border-[#f26419]/30 bg-[#121416]/95 p-6 pt-24 shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Navigate</p>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb597]/30 bg-[#16191d]/90 text-xl text-[#ffb597]"
              aria-label="Close navigation menu"
            >
              ×
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            {navItems.map((item, index) => {
              const active = index === activeIndex
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleLinkClick(index)}
                  className={`rounded-2xl border px-4 py-3 text-left text-lg font-semibold transition ${
                    active
                      ? 'border-[#ffb597]/40 bg-[#ffb597]/10 text-[#ffb597]'
                      : 'border-white/10 bg-[#171b20]/95 text-[#f3e7df] hover:border-[#f26419]/40 hover:bg-[#1e232a]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
