'use client'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M13.5 8H11V6c0-.8.2-1.2 1.2-1.2h1.7V2.1c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2.2H5v3.2h2.6V19h3.2v-7.6H13l.4-3.2Z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M17.5 3A8.5 8.5 0 0 0 3 11.5c0 1.5.4 3 1.1 4.3L2 22l6.4-1.7a8.5 8.5 0 0 0 4.1 1.1h.1A8.5 8.5 0 0 0 22 11.5 8.5 8.5 0 0 0 17.5 3Zm.2 13.3c-.2.6-.8 1.1-1.3 1.2-.3.1-.7.1-1.1.1-.2 0-.4 0-.6-.1-.4-.1-.8-.3-1.2-.5-.4-.2-.8-.5-1.2-.8-.4-.3-.7-.7-1-.9-.2-.2-.4-.5-.6-.8-.2-.3-.4-.6-.5-.9-.1-.4-.2-.7-.2-1.1 0-.3.1-.6.2-.8.1-.2.3-.4.5-.6l.4-.3c.2-.1.4-.1.6 0l.5.2c.2.1.3.3.4.5l.3.7c.1.2.2.5.2.8 0 .2-.1.5-.2.6-.1.2-.2.3-.4.5-.1.1-.2.3-.2.4 0 .1.1.2.2.3l.3.3c.2.2.4.4.6.6.2.2.4.4.6.5.2.1.3.2.5.2.2 0 .4 0 .6-.1.2-.1.4-.3.6-.5l.4-.4c.2-.1.4-.2.6-.2.2 0 .4.1.6.2l.4.3c.1.2.2.4.2.7.1.4 0 .7-.1 1.1Z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M14.5 3c.3 1.4.9 2.5 2 3.3.8.6 1.7 1 2.7 1.2v2.8a7 7 0 0 1-3.7-1.2v6.3a4.7 4.7 0 1 1-4.3-4.7c.2 0 .4 0 .7.1v2.8a2 2 0 1 0 2.8 2V3h1.8Z" />
  </svg>
)

export default function Footer() {
  const pushWhatsAppEvent = (location: string) => {
    if (typeof window === 'undefined') return

    const targetWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> }
    if (targetWindow.dataLayer) {
      targetWindow.dataLayer.push({
        event: 'whatsapp_click',
        click_location: location,
      })
    }
  }

  return (
    <footer className="relative w-full overflow-hidden border-t-[0.5px] border-[#594138] bg-[#0c0e10]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-12 xl:grid-cols-12">
          <div className="md:col-span-3 xl:col-span-3">
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/mm-logo.png"
                alt="MM Printing Logo"
                className="h-10 w-10"
              />
              <div className="text-[#ffb4a9]" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
                MM Printing
              </div>
            </div>
            <p className="max-w-xs text-[#e1bfb2]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
              Leading the printing industry,  crafting premium print experiences with speed, color, and personality.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:pl-14 md:col-span-2 xl:col-span-2">
            <div className="mb-1 text-[#ffb597]" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              NAV_LINKS
            </div>
            <a className="text-[#e1bfb2] transition-all hover:text-[#950c09]" href="/" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
              Home
            </a>
            <a className="text-[#e1bfb2] transition-all hover:text-[#950c09]" href="/about" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
              About
            </a>
            <a className="text-[#e1bfb2] transition-all hover:text-[#950c09]" href="/services" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
              Services
            </a>
            <a className="text-[#e1bfb2] transition-all hover:text-[#950c09]" href="/gallery" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
              Gallery
            </a>
            <a className="text-[#e1bfb2] transition-all hover:text-[#950c09]" href="/testimonials" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
              Testimonials
            </a>
            <a className="text-[#e1bfb2] transition-all hover:text-[#950c09]" href="/contact" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-4 md:pl-8 md:col-span-3 xl:col-span-2">
            <div className="text-[#ffb597]" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              ADDRESSES
            </div>
            <div className="space-y-5 text-[#e1bfb2]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.7' }}>
              <div>
                <strong className="mb-2 block text-[#ffb597]">Warehouse Address</strong>
                House # 6, Street # 6, Shawala Chowk,
                <br /> Near Bhogiwal Eid Gah Ufone Tower, Lahore
              </div>
              <div>
                <strong className="mb-2 block text-[#ffb597]">Shop Address</strong>
                Begumpura Stop, Near UET, Shalamar Town, Lahore.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:pl-13 md:col-span-2 xl:col-span-2">
            <div className="text-[#ffb597]" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              CONTACT
            </div>
            <div className="space-y-4 text-[#e1bfb2]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.7' }}>
              <div>
                <strong className="mb-2 block text-[#ffb597]">Phone</strong>
                <a className="hover:text-[#ffb597]" href="tel:+923099018555">0309-9018555</a>
              </div>
              <div>
                <strong className="mb-2 block text-[#ffb597]">Email</strong>
                <a className="hover:text-[#ffb597]" href="mailto:mmprinting555@gmail.com">mmprinting555@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:pl-29 md:col-span-2 xl:col-span-2">
            <div className="text-[#ffb597]" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
              SOCIALS
            </div>
            <div className="space-y-3 text-[#e1bfb2]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.7' }}>
              <a href="https://www.facebook.com/share/1EZqGWyHmN/" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-all hover:text-[#ffb597]">
                <FacebookIcon />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/mm_printing555?igsh=MWdmYTdsc3U5eTlkcA==" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-all hover:text-[#ffb597]">
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/923099018555" target="_blank" rel="noreferrer" onClick={() => pushWhatsAppEvent('footer')} className="flex items-center gap-2 transition-all hover:text-[#ffb597]">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
              <a href="https://www.tiktok.com/@mmprinting555?_r=1&_t=ZS-97niKF4xo7I" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-all hover:text-[#ffb597]">
                <TikTokIcon />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-12 border-t border-[#594138]/30 pt-8">
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <div className="text-[#e1bfb2] opacity-60" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '1.5' }}>
              © 2026 MM Printing. ALL RIGHTS RESERVED. BA
            </div>
            <div className="flex gap-6 text-xs" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '1.5', color: '#e1bfb2' }}>
              {/* <span>BUILD: v4.2.0-STABLE</span>
              <span>ENCRYPTION: AES-256</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
