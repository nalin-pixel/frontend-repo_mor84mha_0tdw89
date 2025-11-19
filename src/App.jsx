import React, { useState } from 'react'
import Hero from './components/Hero'
import FeaturedCollections from './components/FeaturedCollections'
import RoomVisualizer from './components/RoomVisualizer'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTASections from './components/CTASections'
import StoreInfo from './components/StoreInfo'
import QuoteDialog from './components/QuoteDialog'

function Navbar({ onOpenQuote }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <a href="#" className="font-bold tracking-wider text-white">MARBLE•LUX</a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#collections" className="hover:text-white">Collections</a>
              <a href="#visualizer" className="hover:text-white">Visualizer</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <button onClick={onOpenQuote} className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm hover:bg-white/20">Request a Quote</button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">About Marble•Lux</h4>
          <p className="text-white/70 text-sm mt-2">A premium destination for Italian marble, quartz, granite and designer tiles. We help craft spaces that tell timeless stories.</p>
        </div>
        <div>
          <h4 className="font-semibold">Information</h4>
          <ul className="text-white/70 text-sm mt-2 space-y-1">
            <li>Contactless payments & doorstep delivery</li>
            <li>ISO-grade quality checks</li>
            <li>Sustainable sourcing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow</h4>
          <p className="text-white/70 text-sm mt-2">Instagram • Pinterest • LinkedIn</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-white/50 text-sm">© {new Date().getFullYear()} Marble•Lux. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar onOpenQuote={() => setOpen(true)} />
      <Hero onOpenQuote={() => setOpen(true)} />
      <FeaturedCollections />
      <RoomVisualizer />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTASections />
      <StoreInfo />
      <Footer />
      <QuoteDialog open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
