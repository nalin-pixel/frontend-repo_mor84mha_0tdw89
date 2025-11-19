import React from 'react'
import { Shield, Truck, Users2, Award } from 'lucide-react'

const perks = [
  { icon: Truck, title: 'Fast, Safe Delivery', desc: 'Insured logistics with careful handling of slabs and boxes.' },
  { icon: Users2, title: 'Expert Guidance', desc: 'Design advisors who work with architects & homeowners.' },
  { icon: Shield, title: 'Trusted Supplier', desc: 'Preferred partner for premium builders & luxury projects.' },
  { icon: Award, title: '20+ Years Experience', desc: 'Legacy of craftsmanship and quality assurance.' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose Us</h2>
          <p className="text-white/70 mt-2">Confidence built on quality and service</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
