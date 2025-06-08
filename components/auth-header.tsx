'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import Link from 'next/link'
import { useClientOnly } from '@/hooks/use-client-only'

export function AuthHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isClient = useClientOnly()

  useEffect(() => {
    if (!isClient) return

    // Verificar se o usuário está logado
    const checkAuthStatus = () => {
      const loggedIn = localStorage.getItem('boxdafiel_logged_in')
      
      if (loggedIn === 'true') {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    }

    checkAuthStatus()
    
    // Listener para mudanças no localStorage (para sincronizar entre abas)
    window.addEventListener('storage', checkAuthStatus)
    
    // Listener customizado para mudanças na mesma aba
    const handleAuthChange = () => {
      checkAuthStatus()
    }
    
    window.addEventListener('authStateChanged', handleAuthChange)
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus)
      window.removeEventListener('authStateChanged', handleAuthChange)
    }
  }, [isClient])

  // Durante a hidratação inicial, renderizar estado neutro
  if (!isClient) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
          <User className="w-4 h-4 mr-2" />
          Entrar
        </Button>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center space-x-2">
        <Link href="/login">
          <Button variant="outline" size="sm" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
            <User className="w-4 h-4 mr-2" />
            Entrar
          </Button>
        </Link>
      </div>
    )
  }

  // Quando logado, mostrar botão "Minha Conta"
  return (
    <div className="flex items-center space-x-4">
      <Link href="/minha-conta">
        <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
          <User className="w-4 h-4 mr-2" />
          Minha Conta
        </Button>
      </Link>
    </div>
  )
} 