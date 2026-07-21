import { FileText, MessageCircle, Printer, Truck } from 'lucide-react'

export default function ProductionWorkflow() {
  const steps = [
    {
      icon: MessageCircle,
      label: 'CONTACT US',
      description: "Have questions? We're one message away,  Reach out anytime.",
      delay: '0ms',
    },
    {
      icon: FileText,
      label: 'CONFIRM ORDER',
      description: "Almost done. Review your details and confirm your order to get started.",
      delay: '150ms',
    },
    {
      icon: Printer,
      label: 'EXECUTE PRINTING',
      description: "We've received your order and your files are now being printed.",
      delay: '300ms',
    },
    {
      icon: Truck,
      label: 'DELIVERY',
      description: "Your order is all packed up and on its way. sit back, it'll be with you soon.",
      delay: '450ms',
    },
  ]

  return (
    <section className="py-20 px-5 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal-up">
          <h2 className="uppercase mb-3 text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-[40px]">
            how we work ?
          </h2>
          <p className="text-[#ffb4a9]" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.4' }}>
            SEQUENTIAL LOGIC FLOW
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Connector Lines (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 pointer-events-none z-0">
            <svg className="w-full h-full" overflow="visible">
              <line className="animate-flow" stroke="#f26419" strokeWidth="2" x1="12.5%" x2="87.5%" y1="0" y2="0" />
            </svg>
          </div>

          {/* Workflow Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center group reveal-up"
                style={{ transitionDelay: step.delay }}
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-none border-2 border-[#f26419] bg-[#1e2022] transition-all duration-300 group-hover:bg-[#f26419]">
                  <Icon className="h-8 w-8 text-[#ffb597] group-hover:text-[#4e1900]" />
                </div>
                <h4 className="mb-3 text-[#ffb597]" style={{ fontSize: '12px', fontWeight: 700, lineHeight: '1', letterSpacing: '0.1em' }}>
                  {step.label}
                </h4>
                <p className="px-6 text-[#e1bfb2]" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '1.4' }}>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
