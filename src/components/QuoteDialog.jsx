import React, { useState } from 'react'

export default function QuoteDialog({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', requirements: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className={`fixed inset-0 z-50 ${open? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/60 transition ${open? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-6">
        <div className={`w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-2xl transition ${open? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Request a Quote</h3>
            <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
          </div>
          <p className="text-white/70 text-sm mt-1">Tell us about your project. We respond within 24 hours.</p>

          <form className="mt-4 grid gap-3">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone / WhatsApp" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
            <textarea rows={4} name="requirements" value={form.requirements} onChange={handleChange} placeholder="Materials, sizes, quantities, location..." className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
            <button type="button" onClick={onClose} className="mt-2 inline-flex justify-center rounded-full bg-amber-400 px-6 py-3 font-semibold text-black">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  )
}
