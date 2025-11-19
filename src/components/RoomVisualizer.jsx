import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const rooms = [
  { key: 'living', label: 'Living Room', base: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d92?q=80&w=1600&auto=format&fit=crop' },
  { key: 'kitchen', label: 'Kitchen', base: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop' },
  { key: 'bath', label: 'Bathroom', base: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop' },
]

const surfaces = [
  { key: 'calacatta', label: 'Calacatta Marble', overlay: 'linear-gradient( to bottom right, rgba(255,255,255,0.25), rgba(255,255,255,0.05) ), url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)' },
  { key: 'nero', label: 'Nero Marquina', overlay: 'linear-gradient( to bottom right, rgba(0,0,0,0.45), rgba(255,255,255,0.1) ), url(https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1600&auto=format&fit=crop)' },
  { key: 'quartz', label: 'White Quartz', overlay: 'linear-gradient( to bottom right, rgba(255,255,255,0.35), rgba(255,255,255,0.1) ), url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)' },
  { key: 'granite', label: 'Grey Granite', overlay: 'linear-gradient( to bottom right, rgba(30,30,30,0.35), rgba(0,0,0,0.15) ), url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)' },
]

export default function RoomVisualizer() {
  const [room, setRoom] = useState('living')
  const [surface, setSurface] = useState('calacatta')
  const [intensity, setIntensity] = useState(0.55)

  const roomImg = useMemo(() => rooms.find(r => r.key === room)?.base, [room])
  const overlay = useMemo(() => surfaces.find(s => s.key === surface)?.overlay, [surface])

  return (
    <section id="visualizer" className="relative bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Room Visualizer</h2>
          <p className="text-white/70 mt-2">Preview surfaces in real spaces</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-[420px] md:h-[520px]">
                <img src={roomImg} alt="room" className="absolute inset-0 h-full w-full object-cover" />
                <div
                  className="absolute inset-0 transition-all"
                  style={{ backgroundImage: overlay, backgroundSize: 'cover', backgroundPosition: 'center', opacity: intensity }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/60 mb-2">Select Room</p>
              <div className="grid grid-cols-3 gap-3">
                {rooms.map(r => (
                  <button key={r.key} onClick={() => setRoom(r.key)} className={`rounded-xl border px-3 py-2 text-sm transition ${room===r.key? 'bg-amber-400 text-black border-amber-400' : 'border-white/10 hover:bg-white/5'}`}>{r.label}</button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-white/60 mb-2">Surface</p>
              <div className="grid grid-cols-2 gap-3">
                {surfaces.map(s => (
                  <button key={s.key} onClick={() => setSurface(s.key)} className={`rounded-xl border px-3 py-2 text-sm transition ${surface===s.key? 'bg-white text-black border-white' : 'border-white/10 hover:bg-white/5'}`}>{s.label}</button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-white/60 mb-2">Intensity</p>
              <input type="range" min={0} max={1} step={0.05} value={intensity} onChange={e=>setIntensity(parseFloat(e.target.value))} className="w-full" />
              <p className="text-xs text-white/50 mt-1">Drag to blend the surface into the room</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
