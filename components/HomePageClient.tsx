'use client'

import ShaderBackground from '@/components/ShaderBackground'
import HeroSection from '@/components/HeroSection'
import CoreServices from '@/components/CoreServices'
import ProductionWorkflow from '@/components/ProductionWorkflow'
import CTASection from '@/components/CTASection'
import { useEffect } from 'react'

export default function HomePageClient() {
  useEffect(() => {
    // Reveal animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el))

    // Parallax effect for cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glass-panel')
      const mouseX = e.clientX
      const mouseY = e.clientY

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const cardX = rect.left + rect.width / 2
        const cardY = rect.top + rect.height / 2

        const angleX = (mouseY - cardY) / 50
        const angleY = (mouseX - cardX) / -50

        if (Math.abs(mouseX - cardX) < 400 && Math.abs(mouseY - cardY) < 400) {
          ;(card as HTMLElement).style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`
        } else {
          ;(card as HTMLElement).style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <ShaderBackground />
      <main className="relative z-10 pt-20">
        <div className="ticker-container">
          <div className="ticker-track">
            <span className="ticker-item">
              ---Professional Digital 
              <span className="ticker-divider">Printing Solutions </span>
              For Schools,
              <span className="ticker-divider">Colleges, offices</span>
              & All 
              <span className="ticker-divider">Government</span>
              and Private
              <span className="ticker-divider">Sectors---</span>
            </span>
             <span className="ticker-item">
              ---Professional Digital 
              <span className="ticker-divider">Printing Solutions </span>
              For Schools,
              <span className="ticker-divider">Colleges, offices</span>
              & All 
              <span className="ticker-divider">Government</span>
              and Private
              <span className="ticker-divider">Sectors---</span>
            </span>
             <span className="ticker-item">
              ---Professional Digital 
              <span className="ticker-divider">Printing Solutions </span>
              For Schools,
              <span className="ticker-divider">Colleges, offices</span>
              & All 
              <span className="ticker-divider">Government</span>
              and Private
              <span className="ticker-divider">Sectors---</span>
            </span>
             <span className="ticker-item">
              ---Professional Digital 
              <span className="ticker-divider">Printing Solutions </span>
              For Schools,
              <span className="ticker-divider">Colleges, offices</span>
              & All 
              <span className="ticker-divider">Government</span>
              and Private
              <span className="ticker-divider">Sectors---</span>
            </span>
             <span className="ticker-item">
              ---Professional Digital 
              <span className="ticker-divider">Printing Solutions </span>
              For Schools,
              <span className="ticker-divider">Colleges, offices</span>
              & All 
              <span className="ticker-divider">Government</span>
              and Private
              <span className="ticker-divider">Sectors---</span>
            </span>
          </div>
        </div>
        <HeroSection />
        <CoreServices />
        <ProductionWorkflow />
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
          <div className="glass-panel rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#ffb597]">Why choose MM Printing</p>
                <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                  TAKE THE FIRST STEP, WE'LL TAKE CARE OF THE REST.
                </h2>
                <div className="mt-8 grid gap-4">
                  <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-[#121418]/80 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffb597]/15 text-2xl font-black text-[#ffb597]">01</div>
                    <div>
                      <p className="font-semibold text-white">Trusted Print Quality</p>
                      <p className="text-sm leading-6 text-[#d5d5d9]">High-accuracy print with consistent colour and sharp text.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-[#121418]/80 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffb597]/15 text-2xl font-black text-[#ffb597]">02</div>
                    <div>
                      <p className="font-semibold text-white">Fast Local Delivery</p>
                      <p className="text-sm leading-6 text-[#d5d5d9]">Serving Customers across Pakistan with doorstep delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-[#121418]/80 p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffb597]/15 text-2xl font-black text-[#ffb597]">03</div>
                    <div>
                      <p className="font-semibold text-white">Modern Materials</p>
                      <p className="text-sm leading-6 text-[#d5d5d9]">Latest Machines, Premium Imported Paper and Rest is Quality.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-[#0f1215]/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="grid gap-4">
                  <div className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                    <p className="text-4xl font-black text-[#ffb597]">1,999+</p>
                    <p className="mt-2 text-sm text-[#d5d5d9]">Happy Clients served with fast, friendly service.</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                    <p className="text-4xl font-black text-[#ffb597]">09 yrs</p>
                    <p className="mt-2 text-sm text-[#d5d5d9]">Printing experience supporting schools, businesses, and events.</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-[#16181c]/90 p-6">
                    <p className="text-4xl font-black text-[#ffb597]">18k+</p>
                    <p className="mt-2 text-sm text-[#d5d5d9]">Print jobs completed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </>
  )
}
