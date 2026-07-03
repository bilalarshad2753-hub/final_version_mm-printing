import ShaderBackground from '@/components/ShaderBackground'
import { BookOpen, CreditCard, FileText, Image, Layers, Printer, Repeat, Truck } from 'lucide-react'

const quickServices = [
  {
    icon: Printer,
    title: 'Single Side Photocopy',
    price: 'Rs 3.5 / side',
    note: '70g paper | clear black print',
  },
  {
    icon: Repeat,
    title: 'Double Side Photocopy',
    price: 'Rs 5 / side',
    note: '70g paper | fast turnaround',
  },
  {
    icon: Image,
    title: 'A4 Colour Print',
    price: 'Rs 15 / side',
    note: '70g paper | vivid colour output',
  },
  {
    icon: FileText,
    title: 'A4 Photo Print',
    price: 'Rs 80 / side',
    note: 'Premium photo paper finish',
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
    price: 'On orders of 1000+',
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
  { className: 'Six', sheets: '101', price: 'Rs 350', subjects: 'Eng, Math, Urdu, Sci, Sst, Isl, Geo, His' },
  { className: 'Seven', sheets: '127', price: 'Rs 400', subjects: 'Eng, Math, Urdu, Sci, Sst, Isl, Comp, Geo, His' },
  { className: 'Eight', sheets: '100', price: 'Rs 350', subjects: 'Eng, Math, Urdu, Sci, Sst, Isl, Comp, Geo, His' },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <ShaderBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,100,25,0.24),transparent_24%),radial-gradient(circle_at_top_right,_rgba(242,100,25,0.18),transparent_32%),linear-gradient(to bottom,rgba(18,20,22,0.9),rgba(18,20,22,0.98))] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-16">
        <div className="mb-12 max-w-4xl text-center mx-auto">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ffb597]">Our Services</p>
          <h1 className="mb-6 text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Premium Printing & Copy
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#d5d5d9] sm:text-lg">
            A complete suite of printing, copy, card, and school pack services with transparent pricing and reliable delivery across Lahore.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] mb-12">
          <div className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
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
                const Icon = service.icon
                return (
                  <div key={service.title} className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                    <div className="mb-4 flex items-center gap-3 text-[#ffb597]">
                      <Icon className="h-6 w-6" />
                      <span className="font-semibold">{service.title}</span>
                    </div>
                    <div className="mb-2 text-3xl font-semibold text-white">{service.price}</div>
                    <p className="text-sm leading-7 text-[#d5d5d9]">{service.note}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Card & Specialty Print</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Products with fixed pricing</h2>
            </div>
            <div className="space-y-4">
              {cardServices.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 text-[#ffb597]">
                        <Icon className="h-6 w-6" />
                        <span className="font-semibold">{service.title}</span>
                      </div>
                      <div className="text-lg font-semibold text-white">{service.price}</div>
                    </div>
                    <p className="text-sm leading-7 text-[#d5d5d9]">{service.detail}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">School Packages</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Summer Pack Printing</h2>
            </div>
            <div className="rounded-full border border-[#ffb597] bg-[#ffb597]/10 px-4 py-2 text-sm font-semibold text-[#ffb597]">
              Pack pricing for classes PG through 8
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#16181c]/90 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
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
        </section>

      </div>
    </main>
  )
}
