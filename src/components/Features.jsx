import React from 'react'

const features = [
  { title: 'Deploy em 1 clique', desc: 'Integração com GitHub, CI automático e rollback fácil.' },
  { title: 'Painel intuitivo', desc: 'Gerencie domínios, backups e logs em um só lugar.' },
  { title: 'Escalabilidade', desc: 'Autoscaling e plans que crescem com você.' }
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Recursos</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-lg bg-white">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}