import ShaderBackground from '@/components/ShaderBackground'
import { Globe, Link, Mail, MapPin, MessageCircle, Music, Phone, Send, Smartphone } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121416] text-[#e2e2e5]">
      <ShaderBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(242,100,25,0.24),transparent_24%),radial-gradient(circle_at_top_right,_rgba(242,100,25,0.18),transparent_32%),linear-gradient(to bottom,rgba(18,20,22,0.9),rgba(18,20,22,0.98))] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-16">
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <p className="mb-4 text-base sm:text-lg uppercase tracking-[0.35em] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-500 to-[#f26419]">
            CONTACT
          </p>
          <h1 className="mb-6 text-5xl font-black tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
            Talk to the MM Printing Team
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#d5d5d9] sm:text-lg">
            Reach out for printing, mobile service, or support. We are here to help with fast quotes, location details, and direct contact by phone, email, or social media.
          </p>
        </div>

        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <section className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">GET IN TOUCH</p>
                  {/* <h2 className="mt-3 text-3xl font-semibold text-white">Address, phone, email and maps</h2> */}
                </div>
                <div className="rounded-full border border-[#f26419] bg-[#26150f]/60 px-4 py-2 text-sm font-semibold text-[#ffb597]">
                  Open 7 days a week
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                  <div className="mb-4 flex items-center gap-3 text-[#ffb597]">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">Warehouse Address</span>
                  </div>
                  <p className="text-sm leading-7 text-[#d5d5d9]">
                    House # 6, Street # 6, Shawala Chowk, Near Bhogiwal Eid Gah Ufone Tower Wali
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                  <div className="mb-4 flex items-center gap-3 text-[#ffb597]">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">Shop Address</span>
                  </div>
                  <p className="text-sm leading-7 text-[#d5d5d9]">
                    Begumpura Stop, Near UET, Shalamar Town, Lahore.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                  <div className="mb-4 flex items-center gap-3 text-[#ffb597]">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Phone Numbers</span>
                  </div>
                  <div className="space-y-2 text-sm leading-7 text-[#d5d5d9]">
                    <a href="tel:+923099018555" className="block hover:text-[#ffb597]">0309-9018555</a>
                    <a href="tel:+923249018555" className="block hover:text-[#ffb597]">0324-9018555</a>
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                  <div className="mb-4 flex items-center gap-3 text-[#ffb597]">
                    <Mail className="h-5 w-5" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <a href="mailto:mmprinting555@gmail.com" className="text-sm leading-7 text-[#d5d5d9] hover:text-[#ffb597]">
                    mmprinting555@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Socials</p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-2 rounded-[24px] border border-white/10 bg-[#16181c]/90 px-4 py-5 text-center transition hover:border-[#f26419] hover:text-[#ffb597]"
                  >
                    <Globe className="h-6 w-6" />
                    <span className="text-xs uppercase tracking-[0.18em]">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-2 rounded-[24px] border border-white/10 bg-[#16181c]/90 px-4 py-5 text-center transition hover:border-[#f26419] hover:text-[#ffb597]"
                  >
                    <Link className="h-6 w-6" />
                    <span className="text-xs uppercase tracking-[0.18em]">Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/923099018555"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-2 rounded-[24px] border border-white/10 bg-[#16181c]/90 px-4 py-5 text-center transition hover:border-[#f26419] hover:text-[#ffb597]"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <span className="text-xs uppercase tracking-[0.18em]">WhatsApp</span>
                  </a>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center gap-2 rounded-[24px] border border-white/10 bg-[#16181c]/90 px-4 py-5 text-center transition hover:border-[#f26419] hover:text-[#ffb597]"
                  >
                    <Smartphone className="h-6 w-6" />
                    <span className="text-xs uppercase tracking-[0.18em]">TikTok</span>
                  </a>
                </div>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <div className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <div className="mb-4 flex items-center gap-3 text-[#ffb597]">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Warehouse </span>
                </div>
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#101214]">
                  <iframe
                    title="Warehouse Address Map"
                    src="https://maps.google.com/maps?q=House%20%23%206%20Street%20%236%20Shawala%20Chowk%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="h-64 w-full border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <div className="mb-4 flex items-center gap-3 text-[#ffb597]">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Shop </span>
                </div>
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#101214]">
                  <iframe
                    title="Shop Address Map"
                    src="https://maps.google.com/maps?q=Begumpura%20Stop%20Near%20UET%20Shalamar%20Town%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="h-64 w-full border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </div>

          <section className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Write to us</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Fill The form</h2>
              <p className="mt-3 text-sm leading-7 text-[#c2c2c7]">
                Send your requirements and we will reply quickly with a tailored quote and next steps.
              </p>
            </div>
            <form className="space-y-5" action="#" method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block rounded-3xl border border-white/10 bg-[#121416]/90 p-4 text-sm text-[#d5d5d9]">
                  <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ffb597]">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="First and last name"
                    className="mt-2 w-full bg-transparent text-[#e2e2e5] outline-none placeholder:text-[#7b7f86]"
                  />
                </label>
                <label className="block rounded-3xl border border-white/10 bg-[#121416]/90 p-4 text-sm text-[#d5d5d9]">
                  <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ffb597]">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    className="mt-2 w-full bg-transparent text-[#e2e2e5] outline-none placeholder:text-[#7b7f86]"
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block rounded-3xl border border-white/10 bg-[#121416]/90 p-4 text-sm text-[#d5d5d9]">
                  <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ffb597]">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0309-9018555"
                    className="mt-2 w-full bg-transparent text-[#e2e2e5] outline-none placeholder:text-[#7b7f86]"
                  />
                </label>
                <label className="block rounded-3xl border border-white/10 bg-[#121416]/90 p-4 text-sm text-[#d5d5d9]">
                  <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ffb597]">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Service request or question"
                    className="mt-2 w-full bg-transparent text-[#e2e2e5] outline-none placeholder:text-[#7b7f86]"
                  />
                </label>
              </div>
              <label className="block rounded-3xl border border-white/10 bg-[#121416]/90 p-4 text-sm text-[#d5d5d9]">
                <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ffb597]">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project or question"
                  className="mt-2 w-full resize-none bg-transparent text-[#e2e2e5] outline-none placeholder:text-[#7b7f86]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-[24px] bg-[#f26419] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#4e1900] transition hover:bg-[#ffb597]"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
