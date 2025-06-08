'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PackageIcon, ShoppingBagIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MeusProdutosPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const loggedIn = localStorage.getItem('boxdafiel_logged_in') === 'true'
    const userData = localStorage.getItem('boxdafiel_user')
    
    if (!loggedIn) {
      router.push('/login')
      return
    }
    
    setIsLoggedIn(true)
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [router])

  if (!isLoggedIn) {
    return null // Ou um componente de loading
  }

  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header da página */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-brand-text mb-2">
              Meus Produtos
            </h1>
            <p className="text-brand-textMuted">
              Olá, {user?.name || 'Torcedor'}! Aqui estão seus produtos e histórico de compras.
            </p>
          </div>

          {/* Estado vazio - nenhum produto ainda */}
          <Card className="bg-brand-cardBg border-brand-border">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                <PackageIcon className="w-8 h-8 text-brand-primary" />
              </div>
              <CardTitle className="text-brand-text">Nenhum produto encontrado</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-brand-textMuted">
                Você ainda não possui nenhum produto. Que tal começar abrindo uma caixa surpresa?
              </p>
              
              <div className="space-y-3">
                <Link href="/#produtos">
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/80 text-black font-semibold">
                    <ShoppingBagIcon className="w-4 h-4 mr-2" />
                    Ver Todas as Boxes
                  </Button>
                </Link>
                
                <Link href="/">
                  <Button variant="outline" className="w-full border-brand-border text-brand-text hover:bg-brand-background">
                    Voltar para o Início
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Seção de histórico (placeholder para futuro) */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-brand-text mb-4">
              Histórico de Compras
            </h2>
            <Card className="bg-brand-cardBg border-brand-border">
              <CardContent className="text-center py-8">
                <p className="text-brand-textMuted">
                  Seu histórico de compras aparecerá aqui.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 