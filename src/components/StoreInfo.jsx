import React from 'react'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function StoreInfo() {
  return (
    <section id="contact" className="relative bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Visit Our Showroom</h2>
          <p className="text-white/70 mt-2">Experience materials in person</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-300" />
                <div>
                  <p className="font-semibold">Flagship Showroom</p>
                  <p className="text-white/70">123 Luxury Avenue, Design District, City 400001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-amber-300" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-white/70">Mon–Sat: 10:00 AM – 8:00 PM • Sun: 11:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-amber-300" />
                <div>
                  <p className="font-semibold">Contact</p>
                  <p className="text-white/70">+91 98765 43210 • info@marblelux.example</p>
                </div>
              </div>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-semibold text-black w-max">
                <MessageCircle /> WhatsApp Us
              </a>
              <div className="pt-4 text-white/70 text-sm">Contactless payment and doorstep delivery available.</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798907896!2d-74.25986568794845!3d40.69767006355286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMDYuMCJX!5e0!3m2!1sen!2sus!4v1616580254593!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Bubble */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-black shadow-xl">
        <MessageCircle />
      </a>
    </section>
  )
}
