import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { name: 'Italian Marble', image: 'https://images.unsplash.com/photo-1659362549741-c32157cc71f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwTWFyYmxlfGVufDB8MHx8fDE3NjM1NDk4MzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', desc: 'Carrara, Statuario, Calacatta' },
  { name: 'Quartz', image: 'https://images.unsplash.com/photo-1659362549741-c32157cc71f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwTWFyYmxlfGVufDB8MHx8fDE3NjM1NDk4MzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', desc: 'Engineered brilliance' },
  { name: 'Granite', image: 'https://images.unsplash.com/photo-1659362549741-c32157cc71f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwTWFyYmxlfGVufDB8MHx8fDE3NjM1NDk4MzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', desc: 'Durable elegance' },
  { name: 'Vitrified Tiles', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop', desc: 'Seamless modernity' },
  { name: 'Floor & Wall Tiles', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop', desc: 'Textures & patterns' },
]

export default function FeaturedCollections() {
  return (
    <section id="collections" className="relative bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Collections</h2>
            <p className="text-white/70 mt-2">Curated surfaces for refined spaces</p>
          </div>
          <a href="#catalogue" className="text-amber-400 hover:text-amber-300">Download Catalogue →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.a
              key={item.name}
              href="#catalogue"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative h-64">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
