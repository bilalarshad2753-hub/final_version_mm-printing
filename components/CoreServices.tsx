export default function CoreServices() {
  const services = [
    {
      title: 'Black & White Print',
      image: '/core services/main 1.jpg',
      delay: '0ms',
      alt: 'Black and white printed document sample',
    },
    {
      title: 'Color Print',
      image: '/core services/main 2.png',
      delay: '100ms',
      alt: 'Vibrant color printed document sample',
    },
    {
      title: 'Summer Vacation Print',
      image: '/core services/main 3.png',
      delay: '200ms',
      alt: 'Summer vacation workbook printing sample',
    },
  ]

  return (
    <section className="py-20 px-5 md:px-16 bg-[#0c0e10] relative industrial-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items mb-20 reveal-up">
          <div className="max-md:ml-19">
            <h2 className="max-md:-ml-6 uppercase mb-2 text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-[40px]">
              Core Services
            </h2>
            <div className="max-md:-ml-4 h-1 w-full max-w-[22rem] bg-[#f26419]" />
          </div>
          <p className="text-[#e1bfb2] mt-6 md:mt-0 max-w-xs" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            {/* SYSTEM_NODE: SERVICES.MOD */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-panel p-6 group glow-orange-hover transition-all reveal-up"
              style={{ transitionDelay: service.delay }}
            >
              <div className="mb-8 aspect-square overflow-hidden rounded-[20px] border border-[#f26419]/20 bg-[#16181c]/70">
                <img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <h3 className="uppercase" style={{ fontSize: '24px', fontWeight: 600, lineHeight: '1.4' }}>
                <span className="text-[#f26419]">'</span>{service.title}<span className="text-[#f26419]">'</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
