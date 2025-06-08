"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MenuIcon, XIcon } from "lucide-react" // Usando Lucide para ícones de menu
import { AuthHeader } from "./auth-header"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Verificar se o usuário está logado
    const checkAuthStatus = () => {
      const loggedIn = localStorage.getItem('boxdafiel_logged_in')
      setIsLoggedIn(loggedIn === 'true')
    }

    checkAuthStatus()
    
    // Listener para mudanças no localStorage
    window.addEventListener('storage', checkAuthStatus)
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus)
    }
  }, [])

  const baseNavLinks = [
    { href: "/", label: "Início" },
    { href: "/#como-funciona", label: "Como Funciona" },
    { href: "/#faq", label: "FAQ" },
  ]

  // Adicionar link de cadastro apenas se não estiver logado
  const navLinks = isLoggedIn 
    ? baseNavLinks 
    : [...baseNavLinks.slice(0, 1), { href: "/login", label: "Cadastre-se" }, ...baseNavLinks.slice(1)]

  return (
    <nav className="bg-brand-background text-brand-text py-3 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <div className="navbar-left">
          <Link href="/" className="navbar-brand">
            <Image
              src="https://www.boxdafiel.com/img/logohor.9085d7a9.webp"
              alt="Box da Fiel Logo"
              width={120}
              height={30}
              priority
              className="h-auto"
              style={{ maxWidth: "120px" }}
            />
          </Link>
        </div>

        <div className="navbar-center hidden md:block">
          <ul className="navbar-nav flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <Link
                  href={link.href}
                  className="text-sm hover:text-brand-primary transition-colors uppercase font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right flex items-center">
          <div className="user-options flex items-center">
            {/* Desktop Auth Component */}
            <div className="hidden md:block">
              <AuthHeader />
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-brand-text hover:text-brand-primary ml-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-cardBg absolute w-full left-0 top-full shadow-lg py-2">
          <ul className="flex flex-col items-center">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item w-full text-center">
                <Link
                  href={link.href}
                  className="block py-3 text-sm hover:bg-brand-primary hover:text-brand-textDark transition-colors uppercase font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-item w-full text-center mt-2 px-4 pb-2">
              {/* Mobile Auth Component */}
              <div className="w-full">
                <AuthHeader />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
