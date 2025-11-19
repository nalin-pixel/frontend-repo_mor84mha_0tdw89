import React, { useEffect, useState } from 'react'

const data = [
  { name: 'Aria M.', role: 'Homeowner', text: 'Stunning selection and impeccable service. Our living room looks like a boutique hotel.' },
  { name: 'Studio Forma', role: 'Interior Designers', text: 'Reliable partner for luxury projects. Their Italian marble range is exceptional.' },
  { name: 'Rohan Builders', role: 'Developer', text: 'On-time deliveries and consistent quality across large orders.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % data.length), 4000)
    return () => clearInterval(id)
  }, [])

  const t = data[index]

  return (
    <section className="relative bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Testimonials</h2>
        <p className="text-white/70 mt-2 mb-8">Trusted by homeowners, architects and developers</p>

        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-xl md:text-2xl leading-relaxed text-white/90">“{t.text}”</p>
          <div className="mt-6 text-white/70">— {t.name}, {t.role}</div>
          <div className="mt-4 flex justify-center gap-2">
            {data.map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i===index? 'bg-amber-400' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
