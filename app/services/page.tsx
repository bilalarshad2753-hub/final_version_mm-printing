import type { Metadata } from 'next'
import ShaderBackground from '@/components/ShaderBackground'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore MM Printing services in Lahore including black & white and color printing, PVC cards, visiting cards, letterheads, and school workbook packages.',
  alternates: {
    canonical: '/services',
  },
}
import PricingImage from '@/components/PricingImage'
import VideoPlayer from '@/components/VideoPlayer'
import { BookOpen, CreditCard, FileText, Image, Layers, Printer, Repeat, Truck } from 'lucide-react'

const quickServices = [
  {
    icon: Printer,
    title: 'Single Side Black & White',
    price: 'Rs 3.5 / side',
    image: 'bw-single.png',
    note: '70g paper ',
    alt: 'Single side black and white printed page sample',
  },
  {
    icon: Repeat,
    title: 'Double Side Black & White',
    price: 'Rs 4.5 / side',
    image: 'bw-double.png',
    note: '70g paper',
    alt: 'Double side black and white printed page sample',
  },
  {
    icon: Image,
    title: 'Single Side Colour',
    price: 'Rs 7 / side',
    image: 'color-single.png',
    note: '70g paper ',
    alt: 'Single side colour printed page sample',
  },
  {
    icon: FileText,
    title: 'Double Side Colour',
    price: 'Rs 10 / side',
    image: 'color-double.png',
    note: '70g paper',
    alt: 'Double side colour printed page sample',
  },
]

const cardServices = [
  {
    icon: CreditCard,
    title: 'PVC Student Card',
    price: 'Rs 90',
    detail: 'Single side | clean student ID design',
  },
  {
    icon: CreditCard,
    title: 'Double Side PVC Card',
    price: 'Rs 120',
    detail: 'Double side colour printing',
  },
  {
    icon: Layers,
    title: 'Visiting Cards',
    price: 'Rs 2500 / 1000 pcs',
    detail: '4 colour print | premium stock',
  },
  {
    icon: BookOpen,
    title: 'Letterhead Box',
    price: 'Rs 8500 / 100 pcs',
    detail: '4 colour branded stationery',
  },
  {
    icon: Truck,
    title: 'Free Lahore Delivery',
    price: 'On orders of 1000+ Print',
    detail: 'Fast local delivery for large print runs',
  },
]

const summerPackages = [
  { className: 'PG', sheets: '91', price: 'Rs 350', subjects: 'Eng, Math, Urdu, GK, Isl' },
  { className: 'Nursery', sheets: '117', price: 'Rs 400', subjects: 'Eng, Math, Urdu, GK, Isl' },
  { className: 'Prep', sheets: '80', price: 'Rs 300', subjects: 'Eng, Math, Urdu, Sci, GK, Isl' },
  { className: 'One', sheets: '78', price: 'Rs 300', subjects: 'Eng, Math, Urdu, Sci, GK, Isl' },
  { className: 'Two', sheets: '78', price: 'Rs 300', subjects: 'Eng, Math, Urdu, Sci, GK, Isl' },
  { className: 'Three', sheets: '70', price: 'Rs 300', subjects: 'Eng, Math, Urdu, Sci, GK, Isl, Comp' },
  { className: 'Four', sheets: '73', price: 'Rs 300', subjects: 'Eng, Math, Urdu, Sci, Sst, Isl, Comp' },
  { className: 'Five', sheets: '73', price: 'Rs 300', subjects: 'Eng, Math, Urdu, Sci, Sst, Isl, Comp' },
  { className: 'Six', sheets: '101', price: 'Rs 350', subjects: 'Eng, Math, Urdu, Sci, Sst, Isl, Geo, His' },
  { className: 'Seven', sheets: '127', price: 'Rs 400', subjects: 'Eng, Math, Urdu, Sci, Sst, Isl, Comp, Geo, His' },
  { className: 'Eight', sheets: '100', price: 'Rs 350', subjects: 'Eng, Math, Urdu, Sci, Sst, Isl, Comp, Geo, His' },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <ShaderBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,100,25,0.24),transparent_24%),radial-gradient(circle_at_top_right,_rgba(242,100,25,0.18),transparent_32%),linear-gradient(to bottom,rgba(18,20,22,0.9),rgba(18,20,22,0.98))] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 md:px-16 md:pb-24">
        <div className="relative mb-12 max-w-4xl mx-auto text-center">
          <div className="pointer-events-none absolute left-[-15rem] top-1/2 hidden md:block h-36 w-36 -translate-y-1/2 overflow-hidden rounded-full border border-[#ffb597]/30 bg-[#16181c]/80 shadow-[0_0_50px_rgba(242,100,25,0.18)] md:h-48 md:w-48 lg:h-56 lg:w-56 z-0">
          {/* <div className="pointer-events-none absolute left -[ 8rem] top-1/2 hidden md:block h-36 w-36 -translate-y-1/2 overflow-hidden rounded-full border border-[#ffb597]/30 bg-[#16181c]/80 shadow-[0_0_50px_rgba(242,100,25,0.18)] md:h-48 md:w-48 lg:h-56 lg:w-56 z-0"> */}
            <video
              src={encodeURI('/top services page/one.mp4')}
              poster="/placeholder.jpg"
              aria-hidden="true"
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover pointer-events-none"
            />
          </div>
          {/* <div className="pointer-events-none absolute left-[- 18rem] top-1/2 hidden md:block h-36 w-36 -translate-y-1/2 overflow-hidden rounded-full border border-[#ffb597]/30 bg-[#16181c]/80 shadow-[0_0_50px_rgba(242,100,25,0.18)] md:h-48 md:w-48 lg:h-56 lg:w-56 z-0"></div> */}
          <div className="pointer-events-none absolute right-[-15rem] top-1/2 hidden md:block h-36 w-36 -translate-y-1/2 overflow-hidden rounded-full border border-[#ffb597]/30 bg-[#16181c]/80 shadow-[0_0_50px_rgba(242,100,25,0.18)] md:h-48 md:w-48 lg:h-56 lg:w-56 z-0">
            <video
              src={encodeURI('/top services page/two.mp4')}
              poster="/placeholder.jpg"
              aria-hidden="true"
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover pointer-events-none"
            />
          </div>
          <p className="relative z-10 mb-4 text-sm uppercase tracking-[0.35em] text-[#ffb597]">Our Services</p>
          <h1 className="relative z-10 mb-6 text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Premium Printing & Copy
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#d5d5d9] sm:text-lg">
            A complete suite of printing, copy, card, and school pack services with transparent pricing and reliable delivery across Pakistan.
          </p>
        </div>
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] mb-12">
          <div className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Print Essentials</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Core Copy & Print Pricing</h2>
              </div>
              <div className="rounded-full border border-[#f26419] bg-[#26150f]/60 px-4 py-2 text-sm font-semibold text-[#ffb597]">
                Ready for same-day processing
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickServices.map((service) => {
                return (
                  <div key={service.title} className="overflow-hidden rounded-[24px] border border-white/10 bg-[#16181c]/90">
                    <div className="relative h-40 w-full sm:h-44">
                      <PricingImage
                        src={`/pricing/${service.image}`}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#16181c] to-transparent" />
                    </div>
                    <div className="p-6 pt-4">
                      <span className="mb-3 block font-semibold text-[#ffb597]">{service.title}</span>
                      <div className="mb-2 text-3xl font-semibold text-white">{service.price}</div>
                      <p className="text-sm leading-7 text-[#d5d5d9]">{service.note}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Card & Specialty Print</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Products with fixed pricing</h2>
            </div>
            <div className="space-y-4">
              {cardServices.map((service) => {
                const Icon = service.icon
                const isFeaturedDelivery = service.title === 'Free Lahore Delivery'

                return (
                  <div
                    key={service.title}
                    className={`rounded-[24px] border p-6 transition-all ${
                      isFeaturedDelivery
                        ? 'border-[#ffb597]/70 bg-gradient-to-br from-[#2f180f] via-[#16181c] to-[#1c140e] shadow-[0_0_0_1px_rgba(255,181,151,0.22),0_24px_80px_rgba(0,0,0,0.45)]'
                        : 'border-white/10 bg-[#16181c]/90'
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 text-[#ffb597]">
                        <Icon className="h-6 w-6" />
                        <div className="flex flex-col">
                          <span className={`font-semibold ${isFeaturedDelivery ? 'text-lg uppercase tracking-[0.2em] text-white' : ''}`}>
                            {service.title}
                          </span>
                          {isFeaturedDelivery && (
                            <span className="mt-1 text-[10px] font-black uppercase tracking-[0.35em] text-[#ffb597]">
                              Featured Offer
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={`text-lg font-black ${isFeaturedDelivery ? 'text-[#ffb597] text-xl' : 'text-white'}`}>
                        {service.price}
                      </div>
                    </div>
                    <p className={`text-sm leading-7 ${isFeaturedDelivery ? 'font-semibold text-white' : 'text-[#d5d5d9]'}`}>
                      {service.detail}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-8 flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#ffb597]">School Packages</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">Summer Pack Printing</h2>
            </div>
            <div className="self-center rounded-full border border-[#ffb597] bg-[#ffb597]/10 px-2.5 py-1 text-[11px] font-semibold text-[#ffb597] sm:px-3 sm:py-1.5 sm:text-xs md:self-auto md:px-4 md:py-2 md:text-sm">
              Pack pricing for classes PG through 8
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.45fr]">
            <div className="hidden md:block overflow-hidden rounded-[32px] border border-white/10 bg-[#16181c]/90 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <table className="w-full border-collapse text-left">
                <thead className="bg-[#111318] text-[#ffb597]">
                  <tr>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.2em]">Class</th>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.2em]">Sheets</th>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.2em]">Price</th>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.2em]">Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  {summerPackages.map((entry) => (
                    <tr key={entry.className} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-lg font-semibold text-white">{entry.className}</td>
                      <td className="px-6 py-5 text-[#d5d5d9]">{entry.sheets}</td>
                      <td className="px-6 py-5 text-[#ffb597] font-semibold">{entry.price}</td>
                      <td className="px-6 py-5 text-[#d5d5d9]">{entry.subjects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4 md:hidden">
              {summerPackages.map((entry) => (
                <div key={entry.className} className="overflow-hidden rounded-[24px] border border-white/10 bg-[#16181c]/90 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-lg font-semibold text-white">{entry.className}</span>
                    <span className="text-sm uppercase tracking-[0.2em] text-[#ffb597]">{entry.price}</span>
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-[#d5d5d9]">
                    <div>
                      <span className="font-semibold text-white">Sheets:</span> {entry.sheets}
                    </div>
                    <div>
                      <span className="font-semibold text-white">Subjects:</span> {entry.subjects}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#16181c]/90 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] max-md:rounded-[24px] max-md:border-white/20 max-md:p-2">
                <div className="aspect-[3/4] overflow-hidden rounded-[24px] bg-[#0f1215] max-md:rounded-[20px]">
                  <VideoPlayer
                    src={encodeURI('/summer vacation/sa 1.mp4')}
                    // poster="/placeholder.jpg"
                    ariaLabel="Summer pack printing preview"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#16181c]/90 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] max-md:rounded-[24px] max-md:border-white/20 max-md:p-2">
                <div className="aspect-[3/4] overflow-hidden rounded-[24px] bg-[#0f1215] max-md:rounded-[20px]">
                  <VideoPlayer
                    src={encodeURI('/summer vacation/sa 2.mp4')}
                    // poster="/placeholder.jpg"
                    ariaLabel="Summer workbook preview"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

