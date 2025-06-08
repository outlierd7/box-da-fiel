"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { UserIcon, EditIcon, LogOutIcon, ShieldIcon, CreditCardIcon, HistoryIcon } from "lucide-react"
import { logout, isAuthenticated, getUserData, setAuthenticationState } from "@/lib/auth-utils"
import { useClientOnly } from "@/hooks/use-client-only"

interface UserData {
  name: string
  email: string
  cpf: string
  phone: string
}

export default function MinhaContaPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<UserData>({
    name: "",
    email: "",
    cpf: "",
    phone: ""
  })
  const router = useRouter()
  const isClient = useClientOnly()

  useEffect(() => {
    if (!isClient) return

    const checkAuth = () => {
      if (!isAuthenticated()) {
        router.push('/login')
        return
      }
      
      setIsLoggedIn(true)
      
      // Recuperar dados do usuário usando função utilitária
      const storedUserData = getUserData()
      if (storedUserData) {
        setUserData(storedUserData)
        setEditData(storedUserData)
      }
    }

    checkAuth()
    
    // Listener para mudanças de estado de autenticação
    const handleAuthChange = () => {
      checkAuth()
    }
    
    window.addEventListener('authStateChanged', handleAuthChange)
    
    return () => {
      window.removeEventListener('authStateChanged', handleAuthChange)
    }
  }, [router, isClient])

  const handleLogout = () => {
    logout() // Usar função utilitária
    router.push('/')
  }

  const handleEditToggle = () => {
    if (isEditing && userData) {
      setEditData(userData)
    }
    setIsEditing(!isEditing)
  }

  const handleSave = () => {
    // Atualizar os dados usando função utilitária
    setAuthenticationState(true, editData)
    setUserData(editData)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setEditData(prev => ({ ...prev, [field]: value }))
  }

  // Mostrar loading durante hidratação inicial
  if (!isClient || (!isLoggedIn && isClient) || !userData) {
    return (
      <div className="min-h-screen bg-brand-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-brand-text">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-background pt-[180px] pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-text mb-2">Minha Conta</h1>
          <p className="text-brand-text/70">Gerencie suas informações pessoais e configurações</p>
        </div>

        {/* Cards de configuração */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Informações Pessoais */}
          <Card className="bg-brand-cardBg border-brand-borderMuted/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-brand-text flex items-center gap-2">
                <UserIcon className="w-5 h-5" />
                Informações Pessoais
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEditToggle}
                className="text-brand-primary hover:text-brand-primary/80"
              >
                <EditIcon className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-brand-text/70">Nome</Label>
                {isEditing ? (
                  <Input
                    value={editData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-brand-background border-brand-borderMuted/30 text-brand-text"
                  />
                ) : (
                  <p className="text-brand-text font-medium">{userData.name}</p>
                )}
              </div>
              
              <div>
                <Label className="text-brand-text/70">Email</Label>
                {isEditing ? (
                  <Input
                    value={editData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-brand-background border-brand-borderMuted/30 text-brand-text"
                  />
                ) : (
                  <p className="text-brand-text font-medium">{userData.email}</p>
                )}
              </div>
              
              <div>
                <Label className="text-brand-text/70">CPF</Label>
                {isEditing ? (
                  <Input
                    value={editData.cpf}
                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                    className="bg-brand-background border-brand-borderMuted/30 text-brand-text"
                  />
                ) : (
                  <p className="text-brand-text font-medium">{userData.cpf}</p>
                )}
              </div>
              
              <div>
                <Label className="text-brand-text/70">Telefone</Label>
                {isEditing ? (
                  <Input
                    value={editData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-brand-background border-brand-borderMuted/30 text-brand-text"
                  />
                ) : (
                  <p className="text-brand-text font-medium">{userData.phone}</p>
                )}
              </div>

              {isEditing && (
                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={handleSave}
                    className="bg-brand-primary text-brand-background hover:bg-brand-primary/90"
                  >
                    Salvar
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleEditToggle}
                    className="border-brand-borderMuted/30 text-brand-text hover:bg-brand-borderMuted/10"
                  >
                    Cancelar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Menu de Opções */}
          <div className="space-y-4">
            {/* Segurança */}
            <Card className="bg-brand-cardBg border-brand-borderMuted/20">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-brand-text hover:text-brand-primary hover:bg-brand-borderMuted/10"
                >
                  <ShieldIcon className="w-5 h-5 mr-3" />
                  Segurança
                </Button>
              </CardContent>
            </Card>

            {/* Métodos de Pagamento */}
            <Card className="bg-brand-cardBg border-brand-borderMuted/20">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-brand-text hover:text-brand-primary hover:bg-brand-borderMuted/10"
                >
                  <CreditCardIcon className="w-5 h-5 mr-3" />
                  Métodos de Pagamento
                </Button>
              </CardContent>
            </Card>

            {/* Histórico de Compras */}
            <Card className="bg-brand-cardBg border-brand-borderMuted/20">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-brand-text hover:text-brand-primary hover:bg-brand-borderMuted/10"
                  onClick={() => router.push('/meus-produtos')}
                >
                  <HistoryIcon className="w-5 h-5 mr-3" />
                  Histórico de Compras
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="bg-brand-borderMuted/20 mb-8" />

        {/* Logout */}
        <div className="text-center">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-500/50 text-red-500 hover:bg-red-500/10 hover:border-red-500"
          >
            <LogOutIcon className="w-4 h-4 mr-2" />
            Sair da Conta
          </Button>
        </div>
      </div>
    </div>
  )
} 