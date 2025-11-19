import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle dark gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
              <span className="text-sm tracking-wide text-amber-200">Premium Tiles & Italian Marble</span>
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Crafting Spaces. Creating Stories.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
              Luxury surfaces for homes, hotels and architectural landmarks. Meticulously curated selections in marble, quartz, granite and designer tiles.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20 border border-white/20"
              >
                <span className="font-medium">Explore Collections</span>
                <span className="h-2 w-2 rounded-full bg-amber-400 group-hover:scale-125 transition" />
              </a>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition hover:shadow-[0_10px_40px_rgba(251,191,36,0.55)]"
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
