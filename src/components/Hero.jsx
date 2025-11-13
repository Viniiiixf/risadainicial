import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hospedagem em nuvem simples e rápida</h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">Deploy automático, painéis intuitivos e preço justo — tudo pensado para você escalar.</p>
        <div className="flex justify-center gap-4">
          <a className="px-6 py-3 rounded bg-indigo-600 text-white" href="#pricing">Comece grátis</a>
          <a className="px-6 py-3 rounded border" href="#features">Ver recursos</a>
        </div>
      </div>
    </section>
  )
}