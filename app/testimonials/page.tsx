import ShaderBackground from '@/components/ShaderBackground'

const accent = 'from-[#ff2d55] via-[#ff7eb9] to-[#f24874]'
const accentOpaque = 'from-[#ff2d55]/10 via-[#ff7eb9]/10 to-[#f24874]/10'
const accentText = `bg-gradient-to-r ${accent} text-transparent bg-clip-text`

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
]

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <ShaderBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,45,85,0.20),transparent_24%),radial-gradient(circle_at_top_right,_rgba(255,126,185,0.16),transparent_32%),linear-gradient(to bottom,rgba(18,20,22,0.9),rgba(18,20,22,0.98))] pointer-events-none" />

      <div style={{ top: 'calc(6rem + 80px)', left: '88px' }} className="absolute z-0 pointer-events-none flex items-center justify-center">
        <div className="relative flex h-[210px] w-[210px] flex-col items-center justify-center rounded-full bg-[#121416]/95 p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
          <span className={`text-xs uppercase tracking-[0.4em] bg-gradient-to-r ${accent} text-transparent bg-clip-text`}>Review score</span>
          <span className="mt-4 text-5xl font-black text-white">4.9</span>
          <span className={`mt-2 bg-gradient-to-r ${accent} text-transparent bg-clip-text text-2xl`}>★★★★★</span>
        </div>
      </div>

      <div style={{ top: 'calc(6rem + 80px)', right: '88px' }} className="absolute z-0 pointer-events-none flex items-center justify-center">
        <div className="relative flex h-[210px] w-[210px] flex-col items-center justify-center rounded-full bg-[#121416]/95 p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
          <span className={`text-xs uppercase tracking-[0.4em] bg-gradient-to-r ${accent} text-transparent bg-clip-text`}>Repeat business</span>
          <span className="mt-4 text-5xl font-black text-white">92%</span>
          <span className={`mt-2 bg-gradient-to-r ${accent} text-transparent bg-clip-text text-2xl`}>★★★★★</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-16">
        <div className="mb-12 max-w-4xl text-center mx-auto">
          <p className={`mb-4 text-sm uppercase tracking-[0.35em] bg-gradient-to-r ${accent} text-transparent bg-clip-text`}>Testimonials</p>
          <h1 className="text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">Trusted by clients across Lahore and beyond</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#d5d5d9] sm:text-lg">
            Hear from customers who rely on MM Printing for premium print quality, fast service, and standout brand execution.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="grid gap-6 w-full lg:absolute lg:right-0 lg:top-8 lg:w-[340px]">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1b1220] via-[#161419] to-[#171c26] p-8 shadow-[0_20px_80px_rgba(255,45,85,0.18)]">
              <div className={`absolute inset-x-8 top-6 h-1 rounded-full bg-gradient-to-r ${accent} opacity-90`} />
              <div className="relative space-y-6 pt-6 text-center">
                <p className={`text-xs uppercase tracking-[0.4em] bg-gradient-to-r ${accent} text-transparent bg-clip-text`}>Review score</p>
                <p className="text-6xl font-extrabold tracking-[-0.06em] text-white">4.9</p>
                <div className={`flex items-center justify-center gap-1 bg-gradient-to-r ${accent} text-transparent bg-clip-text text-2xl`}>★★★★★</div>
                <p className="mx-auto max-w-sm text-sm leading-7 text-[#c7c3d2]">Trusted for accuracy, finishes, and delivery speed.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[36px] border border-[rgba(255,45,85,0.15)] bg-gradient-to-br from-[#1a1320] via-[#141519] to-[#16171f] p-8 shadow-[0_20px_80px_rgba(255,45,85,0.18)]">
              <div className={`absolute inset-x-8 top-6 h-1 rounded-full bg-gradient-to-r ${accent} opacity-95`} />
              <div className="relative space-y-6 text-center">
                <p className={`text-xs uppercase tracking-[0.4em] bg-gradient-to-r ${accent} text-transparent bg-clip-text`}>Repeat business</p>
                <p className="text-6xl font-extrabold tracking-[-0.06em] text-white">92%</p>
                <div className={`mx-auto flex max-w-max items-center gap-2 rounded-full bg-gradient-to-r ${accentOpaque} px-4 py-2 text-transparent text-2xl shadow-[0_10px_40px_rgba(255,45,85,0.14)]`}>★★★★★</div>
                <p className="mx-auto max-w-sm text-sm leading-7 text-[#c7c3d2]">Returning clients choose MM Printing again for their key campaigns.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="h-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0f1215]/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,45,85,0.4)]">
                <div className="relative flex h-full flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className={`rounded-full bg-gradient-to-r ${accentOpaque} px-3 py-1 text-[11px] uppercase tracking-[0.35em]`}>Testimonial</span>
                      <div className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent text-sm`}>★★★★★</div>
                    </div>
                    <p className="text-base leading-8 text-[#d5d5d9]">“{item.quote}”</p>
                  </div>
                  <div className="flex items-center gap-4">
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
