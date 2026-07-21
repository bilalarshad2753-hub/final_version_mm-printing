import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-16 pt-[22px] md:pt-10 pb-20 max-md:px-4 max-md:pb-16">

      <div className="reveal-up active relative">
        {/* Decorative left accent — sent behind text */}
        <img
          src="/hero/right.png"
          alt="Decorative left"
          className="absolute left-[-20rem] top-52 hidden md:block h-[26rem] w-[26rem] -translate-y-1/2 object-cover opacity-50 transition-opacity duration-300 rounded-[76px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] hover:opacity-100 md:left-[-22rem] md:top-54 md:opacity-60"
          style={{ zIndex: 0 }}
        />

        {/* Decorative right accent — sent behind text */}
        <img
          src="/hero/left.png"
          alt="Decorative right"
          className="absolute right-[-20rem] top-52 hidden md:block h-[26rem] w-[26rem] -translate-y-1/2 object-cover opacity-50 transition-opacity duration-300 rounded-[76px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] hover:opacity-100 md:right-[-22rem] md:top-54 md:opacity-60"
          style={{ zIndex: 0 }}
        />

        <p className="relative z-10 text-[#ffb597] mb-8 tracking-[0.35em] uppercase text-base font-medium leading-6 sm:text-lg">
          Status: 24/7 | Accuracy 99.9%
        </p>
        <h1 className="relative z-10 text-5xl uppercase leading-tight mb-8 tracking-[-0.02em] font-black md:text-[90px] md:leading-[0.95]">
          Your <span className="text-gradient">Trusted</span><br />
          Quality Printing
        </h1>
        <p className="relative z-10 max-w-3xl mx-auto text-[#e1bfb2] mb-16 text-base leading-7 sm:text-xl sm:leading-8 max-md:px-2 md:text-[24px] md:leading-[1.5]">
          We provide high quality printing services. Workbooks, Color & Black and White printing, certificates, ID cards, brochures or reports. Fast delivery, competitive rates & customer satisfaction are our identity.
        </p>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-center max-md:gap-4">
          <Link href="/contact" className="bg-[#f26419] text-[#4e1900] px-16 py-8 hover:shadow-[0_0_30px_rgba(242,100,25,0.5)] transition-all max-md:px-8 max-md:py-4 max-md:text-sm max-md:min-w-[10rem] font-bold uppercase tracking-[0.1em]">
            CONTACT US
          </Link>
          <Link href="/services" className="border-2 border-[#ffb597] text-[#ffb597] px-16 py-8 hover:bg-[#ffb597]/10 transition-all max-md:px-8 max-md:py-4 max-md:text-sm max-md:min-w-[10rem] font-black uppercase tracking-[0.1em]">
            VIEW SERVICES
          </Link>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="mt-20 w-full max-w-5xl reveal-up active" style={{ transitionDelay: '200ms' }}>
        <div className="relative h-96 w-full glass-panel overflow-hidden max-md:h-[280px]">

          <video
            className="relative z-10 w-full h-full object-cover"
            src="/hero/placeholder.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero/placeholder.jpg"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#121416] to-transparent z-0" />

        </div>
      </div>
    </section>
  )
}
