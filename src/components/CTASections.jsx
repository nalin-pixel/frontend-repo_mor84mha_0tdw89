import React from 'react'

export default function CTASections() {
  return (
    <section id="catalogue" className="relative bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">
          <h3 className="text-2xl font-semibold">Download Catalogue</h3>
          <p className="text-white/70 mt-2">High-resolution lookbooks with specifications and finishes.</p>
          <a href="#" className="mt-4 inline-flex rounded-full bg-white text-black px-5 py-3 font-semibold">Get PDF</a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-amber-300/20 to-amber-200/10 p-8">
          <h3 className="text-2xl font-semibold">Exclusive Trade Program</h3>
          <p className="text-white/70 mt-2">Benefits for architects, interior designers and developers.</p>
          <a href="#contact" className="mt-4 inline-flex rounded-full bg-amber-400 text-black px-5 py-3 font-semibold">Join Now</a>
        </div>
      </div>
    </section>
  )
}
