'use client'

export default function CTASection() {
  const whatsappNumber = '923099018555'

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
    <section className="py-20 mb-20">
      <div className="max-w-4xl mx-auto px-5 text-center max-md:px-4">
        <div className="glass-panel p-20 max-md:p-8 border-[#f26419]/30 relative overflow-hidden reveal-up">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#f26419]/10 rounded-full blur-3xl" />
          <img
            src="/mm-logo.png"
            alt="MM Printing Logo"
            className="absolute bottom-6 right-6 h-12 w-12 opacity-20 pointer-events-none"
          />
          <h2 className="uppercase mb-6 relative z-10 text-4xl font-bold leading-tight tracking-[-0.01em] sm:text-[40px]">
            System Ready for Deployment
          </h2>
          <p className="text-[#e1bfb2] mb-12 relative z-10 text-base leading-7 sm:text-lg sm:leading-8 max-md:px-4">
            Focus on growing. Leave the printing to us.
          </p>
          <div className="relative z-10 flex justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushWhatsAppEvent('cta_section')}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#d9c2aa] bg-[#d9c2aa] px-4 py-2 shadow-[0_0_20px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-0.5 hover:bg-[#dedede] sm:px-5 sm:py-2 lg:px-6 max-md:px-3 max-md:py-2 max-md:gap-2"
            >
              <img src="/pngtree-whatsapp-icon-png-image_3584845.png" alt="WhatsApp" className="h-10 w-10 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14 max-md:h-8 max-md:w-8" />
              <span className="text-sm font-black uppercase tracking-[0.15em] text-[#6b4226] sm:text-base lg:text-lg max-md:text-xs">
                Connect
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
