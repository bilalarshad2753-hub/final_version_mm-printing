import type { Metadata } from 'next'
import ShaderBackground from '@/components/ShaderBackground'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read client testimonials for MM Printing and see why Lahore businesses trust us for fast, premium print services.',
  alternates: {
    canonical: '/testimonials',
  },
}

const accent = 'text-[#ffb597]'
const accentOpaque = 'bg-[#ffb597]/20'
const accentText = 'text-[#ffb597]'

const testimonials = [
  {
    name: 'Sara Malik',
    role: 'Brand Manager',
    quote: 'MM Printing delivered crisp, vibrant banners on a tight timeline. Their customer service and quality made the project feel effortless.',
  },
  {
    name: 'Ahsan Raza',
    role: 'Event Coordinator',
    quote: 'The brochure prints had perfect color consistency and sharp text. Every detail was handled with professional care.',
  },
  {
    name: 'Mariam Khan',
    role: 'Retail Owner',
    quote: 'From logo stickers to signage, the finished pieces exceeded expectations. The finish was premium and the delivery was fast.',
  },
  {
    name: 'Usman Qureshi',
    role: 'Creative Director',
    quote: 'The team’s attention to print accuracy and material quality is impressive. The final output looked polished and bold.',
  },
  {
    name: 'Hina Javed',
    role: 'Marketing Lead',
    quote: 'Great printing workflow and responsive support. Their design advice helped the campaign stand out with strong visuals.',
  },
  {
    name: 'Kamran Ali',
    role: 'Production Manager',
    quote: 'High-quality prints, sturdy stock, and excellent color depth. We will use MM Printing again for every key project.',
  },
  {
    name: 'Kamran Ali',
    role: 'Production Manager',
    quote: 'High-quality prints, sturdy stock, and excellent color depth. We will use MM Printing again for every key project.',
  },
  {
    name: 'Kamran Ali',
    role: 'Production Manager',
    quote: 'High-quality prints, sturdy stock, and excellent color depth. We will use MM Printing again for every key project.',
  },
]

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MM Printing',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '6',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sara Malik' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'MM Printing delivered crisp, vibrant banners on a tight timeline. Their customer service and quality made the project feel effortless.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ahsan Raza' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'The brochure prints had perfect color consistency and sharp text. Every detail was handled with professional care.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mariam Khan' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'From logo stickers to signage, the finished pieces exceeded expectations. The finish was premium and the delivery was fast.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Usman Qureshi' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'The team’s attention to print accuracy and material quality is impressive. The final output looked polished and bold.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Hina Javed' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Great printing workflow and responsive support. Their design advice helped the campaign stand out with strong visuals.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Kamran Ali' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'High-quality prints, sturdy stock, and excellent color depth. We will use MM Printing again for every key project.',
    },
  ],
}

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <ShaderBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,100,25,0.20),transparent_24%),radial-gradient(circle_at_top_right,_rgba(255,181,151,0.16),transparent_32%),linear-gradient(to bottom,rgba(18,20,22,0.9),rgba(18,20,22,0.98))] pointer-events-none" />

      <div style={{ top: 'calc(6rem + 80px)', left: '88px' }} className="hidden md:absolute md:z-0 md:pointer-events-none md:flex md:items-center md:justify-center">
        <div className="relative flex h-[210px] w-[210px] flex-col items-center justify-center rounded-full bg-[#121416]/95 p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
          <span className={`text-xs uppercase tracking-[0.4em] ${accent}`}>Review score</span>
          <span className="mt-4 text-5xl font-black text-white">4.9</span>
          <span className={`mt-2 ${accent} text-2xl`}>★★★★★</span>
        </div>
      </div>

      <div style={{ top: 'calc(6rem + 80px)', right: '88px' }} className="hidden md:absolute md:z-0 md:pointer-events-none md:flex md:items-center md:justify-center">
        <div className="relative flex h-[210px] w-[210px] flex-col items-center justify-center rounded-full bg-[#121416]/95 p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
          <span className={`text-xs uppercase tracking-[0.4em] ${accent}`}>Repeat business</span>
          <span className="mt-4 text-5xl font-black text-white">92%</span>
          <span className={`mt-2 ${accent} text-2xl`}>★★★★★</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 md:px-16 md:pt-32 md:pb-24">
        <div className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
          <p className={`mb-2 text-xs uppercase tracking-[0.35em] md:mb-4 md:text-sm ${accent}`}>Testimonials</p>
          <h1 className="mb-0 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl md:mb-0 md:text-5xl lg:text-6xl xl:text-7xl">
            Trusted by clients across Lahore and beyond
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-[#d5d5d9] sm:text-base sm:leading-8 md:mt-6 md:text-lg">
            Hear from customers who rely on MM Printing for premium print quality, fast service, and standout brand execution.
          </p>
        </div>

        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#21160f] via-[#161419] to-[#171c26] p-6 shadow-[0_20px_80px_rgba(242,100,25,0.16)] md:rounded-[36px] md:p-8 md:hidden">
              <div className={`absolute inset-x-8 top-6 h-1 rounded-full ${accentOpaque} opacity-90`} />
              <div className="relative space-y-4 pt-6 text-center md:space-y-6">
                <p className={`text-[11px] uppercase tracking-[0.4em] md:text-xs ${accent}`}>Review score</p>
                <p className="text-5xl font-extrabold tracking-[-0.06em] text-white md:text-6xl">4.9</p>
                <div className={`flex items-center justify-center gap-1 ${accent} text-xl md:text-2xl`}>★★★★★</div>
                <p className="mx-auto max-w-sm text-sm leading-7 text-[#c7c3d2]">Trusted for accuracy, finishes, and delivery speed.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[rgba(242,100,25,0.15)] bg-gradient-to-br from-[#22170f] via-[#141519] to-[#16171f] p-6 shadow-[0_20px_80px_rgba(242,100,25,0.16)] md:rounded-[36px] md:p-8 md:hidden">
              <div className={`absolute inset-x-8 top-6 h-1 rounded-full ${accentOpaque} opacity-95`} />
              <div className="relative space-y-4 pt-6 text-center md:space-y-6">
                <p className={`text-[11px] uppercase tracking-[0.4em] md:text-xs ${accent}`}>Repeat business</p>
                <p className="text-5xl font-extrabold tracking-[-0.06em] text-white md:text-6xl">92%</p>
                <div className={`mx-auto flex max-w-max items-center gap-2 rounded-full ${accentOpaque} px-4 py-2 ${accent} text-xl shadow-[0_10px_40px_rgba(242,100,25,0.14)] md:text-2xl`}>★★★★★</div>
                <p className="mx-auto max-w-sm text-sm leading-7 text-[#c7c3d2]">Returning clients choose MM Printing again for their key campaigns.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="rounded-[28px] border border-white/10 bg-white/5 p-4 max-md:mt-1 shadow-[0_20px_80px_rgba(0,0,0,0.4)] md:rounded-[32px] md:p-6 -mt-8 md:-mt-12">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item, index) => (
              <article key={`${item.name}-${item.role}-${index}`} className="flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1215]/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(242,100,25,0.4)] md:h-[360px] md:p-8">
                <div className="relative flex h-full flex-col justify-between">
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className={`rounded-full ${accentOpaque} px-3 py-1 text-[11px] uppercase tracking-[0.35em] ${accent}`}>Testimonial</span>
                      <div className={`${accent} text-sm`}>★★★★★</div>
                    </div>
                    <p className="text-sm leading-7 text-[#d5d5d9] md:text-base md:leading-8">“{item.quote}”</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4 md:mt-0">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1d22] text-sm font-semibold uppercase ${accentText} shadow-[0_10px_30px_rgba(242,100,25,0.12)]`}>
                      {item.name.split(' ').map((part) => part[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className={`text-sm uppercase tracking-[0.18em] ${accentText}`}>{item.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
