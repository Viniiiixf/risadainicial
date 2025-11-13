import React from 'react'

const plans = [
  { name: 'Starter', price: 'R$0', perks: ['1 site', 'SSL grátis', 'Suporte básico'] },
  { name: 'Pro', price: 'R$29/mês', perks: ['Sites ilimitados', 'Backups diários', 'Suporte 24/7'] },
  { name: 'Enterprise', price: 'Sob consulta', perks: ['SLA', 'Suporte dedicado', 'Consultoria'] }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Planos</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-3xl font-bold mb-4">{p.price}</p>
              <ul className="mb-6 space-y-2 text-gray-600">
                {p.perks.map((perk) => <li key={perk}>• {perk}</li>)}
              </ul>
              <button className="w-full py-2 rounded bg-indigo-600 text-white">Escolher</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}