import React from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Gallery</h2>
          <p className="text-white/70 mt-2">Before/after, trends and textures</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={src} alt="gallery" className="h-64 w-full object-cover transition duration-700 hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
