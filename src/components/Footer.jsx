import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} NoarCloud — Clone. Todos os direitos reservados.</p>
        <p className="mt-2">Substitua este texto por seus links: Política de privacidade | Termos</p>
      </div>
    </footer>
  )
}