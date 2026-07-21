import type { Metadata } from 'next'
import ShaderBackground from '@/components/ShaderBackground'

export const metadata: Metadata = {
  title: 'About ',
  description:
    'Learn about MM Printing, a trusted Lahore print shop offering high-quality copying, cards, stationery, and school packs with fast delivery.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <ShaderBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-16 pt-32 pb-24 max-md:px-4">
        <section className="mb-12 rounded-[32px] border-0 bg-transparent pt-0 pb-10 px-10 text-center shadow-none max-md:px-4">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">About MM Printing</p>
          <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Professional Digital Printing Solutions For Schools, Colleges, Offices & All Government and Private Sectors
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#d5d5d9] sm:text-lg px-2">
            A complete suite of print, copy, branding, and packaging services designed to help businesses. We deliver work that feels premium, polished, and on-time across Pakistan.
          </p>
        </section>

        <section className="-mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="glass-panel aspect-square rounded-[32px] border border-white/10 bg-[#121418]/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between w-full min-w-0 max-md:w-full max-md:min-w-0 max-md:aspect-auto">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb597]/30 bg-[#ffb597]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ffb597]">
                Team spirit
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white max-md:text-xl max-md:leading-7">A Great Team with Big Print Energy.</h2>
              <p className="mt-4 text-base leading-7 text-[#d5d5d9] break-words whitespace-normal max-md:text-sm max-md:leading-6">
                Every order is handled with care, from your first enquiry to the finished product. Clear communication, careful coordination, and reliable on-time delivery are at the heart of every project we complete.
              </p>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-[#171b20]/95 p-5 w-full min-w-0">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb597]">Creative review</p>
                <p className="mt-2 text-sm leading-6 text-[#c7c3d2] break-words whitespace-normal max-md:text-sm max-md:leading-6">Every design goes through a professional pre-print review, where we verify colours, resolution, and file quality to deliver crisp, accurate results.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#171b20]/95 p-5 w-full min-w-0">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb597]">Material selection</p>
                <p className="mt-2 text-sm leading-6 text-[#c7c3d2] break-words whitespace-normal max-md:text-sm max-md:leading-6">We help you choose the ideal paper stock, lamination & finishing options to match your project, budget, and the impact you want to create.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel md:aspect-square rounded-[32px] border border-white/10 bg-[#0f1215]/95 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between w-full min-w-0 max-md:w-full max-md:min-w-0 max-md:aspect-auto">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb597]/30 bg-[#ffb597]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ffb597]">
                Our Values
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-white max-md:text-xl max-md:leading-7">Built on strong print standards</h2>
              <ul className="mt-6 space-y-4 text-[#d5d5d9] text-sm max-md:space-y-3">
                <li className="flex gap-3 break-words whitespace-normal"><span className="mt-1 text-[#ffb597]">•</span> Honest pricing.</li>
                <li className="flex gap-3 break-words whitespace-normal"><span className="mt-1 text-[#ffb597]">•</span> Fast local delivery.</li>
                <li className="flex gap-3 break-words whitespace-normal"><span className="mt-1 text-[#ffb597]">•</span> Creative support for every print format.</li>
              </ul>
            </div>
            <div className="space-y-5">
              <div className="rounded-[24px] border border-[#ffb597]/20 bg-[#131519]/95 p-5 w-full min-w-0">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Since 2021</p>
                <p className="mt-2 text-sm leading-6 text-[#d5d5d9] break-words whitespace-normal">Trusted local printing since 2021. From documents to full-color materials, we have served students, offices, and organizations with dependable print and photocopy services across the city.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 max-md:grid-cols-1 w-full min-w-0">
                <div className="rounded-[24px] border border-[#ffb597]/20 bg-[#131519]/95 p-5 w-full min-w-0">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Our promise</p>
                  <p className="mt-2 text-sm leading-6 text-[#d5d5d9] break-words whitespace-normal">Quality and reliable follow through.</p>
                </div>
                <div className="rounded-[24px] border border-[#ffb597]/20 bg-[#131519]/95 p-5 w-full min-w-0">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">What we love</p>
                  <p className="mt-2 text-sm leading-6 text-[#d5d5d9] break-words whitespace-normal">Bold colors, crisp edges, and print that feels premium.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel md:aspect-square rounded-[32px] border border-white/10 bg-[#121418]/95 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between w-full min-w-0 max-md:w-full max-md:min-w-0">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb597]/30 bg-[#ffb597]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ffb597]">
                Beyond print
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white max-md:text-xl max-md:leading-7">We think in texture, color, and experience.</h2>
              <p className="mt-4 text-base leading-7 text-[#d5d5d9] break-words whitespace-normal max-md:text-sm max-md:leading-6">
                Our ideal project is one that creates a lasting impression whether it's a brochure worth keeping, a display that captures attention, or premium labels that feel as exceptional as they look.
              </p>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-[#171b20]/95 p-5 w-full min-w-0">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb597]">Print intelligence</p>
                <p className="mt-2 text-sm leading-6 text-[#c7c3d2] break-words whitespace-normal max-md:text-sm max-md:leading-6">We recommend the most effective printing method based on your budget, timeline, and project requirements, ensuring the best balance of quality, speed, and value.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#171b20]/95 p-5 w-full min-w-0">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffb597]">Design support</p>
                <p className="mt-2 text-sm leading-6 text-[#c7c3d2] break-words whitespace-normal max-md:text-sm max-md:leading-6">Need a final check before printing? We help with layout adjustments, bleed setup, file preparation & material recommendations to ensure your artwork is ready for production.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel md:aspect-square rounded-[32px] border border-white/10 bg-[#0f1215]/95 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] flex flex-col justify-between w-full min-w-0 max-md:w-full max-md:min-w-0 max-md:aspect-auto">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb597]/30 bg-[#ffb597]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#ffb597]">
                File Support
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-white max-md:text-xl max-md:leading-7">Send files with confidence</h2>
              <p className="mt-4 text-base leading-7 text-[#d5d5d9] break-words whitespace-normal max-md:text-sm max-md:leading-6">
                You can send any file format PDF, Word, or Excel for printing and photocopying at affordable rates citywide.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-[24px] border border-[#ffb597]/20 bg-[#131519]/95 p-5 w-full min-w-0">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Premium quality</p>
                <p className="mt-2 text-sm leading-6 text-[#d5d5d9] break-words whitespace-normal max-md:text-sm max-md:leading-6">Every service is delivered with premium quality and doorstep convenience.</p>
              </div>
              <div className="rounded-[24px] border border-[#ffb597]/20 bg-[#131519]/95 p-5 w-full min-w-0">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Trusted delivery</p>
                <p className="mt-2 text-sm leading-6 text-[#d5d5d9] break-words whitespace-normal max-md:text-sm max-md:leading-6">We work with educational institutes and organizations to fulfill requests exactly.</p>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] border border-[#ffb597]/20 bg-[#131519]/95 p-5 text-[#d5d5d9] w-full min-w-0">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Need help?</p>
              <p className="mt-2 text-sm leading-6 break-words whitespace-normal max-md:text-sm max-md:leading-6">Contact us for feedback, suggestions, or more information.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
