import React from 'react'
import logo from '../assets/placeholder-logo.png'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-lg">NoarCloud</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-indigo-600">Recursos</a>
          <a href="#pricing" className="hover:text-indigo-600">Preços</a>
          <a href="#contact" className="hover:text-indigo-600">Contato</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="px-4 py-2 text-sm border rounded hover:bg-indigo-50" href="#">Entrar</a>
          <a className="px-4 py-2 text-sm bg-indigo-600 text-white rounded" href="#">Teste grátis</a>
        </div>
      </div>
    </header>
  )
}