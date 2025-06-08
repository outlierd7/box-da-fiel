'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { setAuthenticationState } from '@/lib/auth-utils'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulação de login fake
    setTimeout(() => {
      const userData = {
        name: 'Torcedor Fiel',
        email: loginData.email,
        cpf: '000.000.000-00',
        phone: '(11) 99999-9999'
      }
      
      // Usar função utilitária para definir estado de autenticação
      setAuthenticationState(true, userData)
      
      setIsLoading(false)
      alert('Login realizado com sucesso!')
      router.push('/') // Redirecionar para página inicial
    }, 1500)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Validação básica
    if (signUpData.password !== signUpData.confirmPassword) {
      alert('As senhas não coincidem!')
      setIsLoading(false)
      return
    }
    
    // Simulação de cadastro fake
    setTimeout(() => {
      const userData = {
        name: signUpData.name,
        email: signUpData.email,
        cpf: signUpData.cpf,
        phone: signUpData.phone
      }
      
      // Usar função utilitária para definir estado de autenticação
      setAuthenticationState(true, userData)
      
      setIsLoading(false)
      alert('Cadastro realizado com sucesso!')
      router.push('/') // Redirecionar para página inicial
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-brand-background flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-background via-brand-cardBg to-brand-background opacity-90" />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-brand-text hover:text-brand-primary transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a loja
          </Link>
          
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <Image
                src="https://www.boxdafiel.com/img/logohor.9085d7a9.webp"
                alt="Box da Fiel Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-brand-textMuted text-sm">
              Acesse sua conta e continue sua jornada corintiana
            </p>
          </div>
        </div>

        <Card className="bg-brand-cardBg/80 border-brand-border backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2 bg-brand-background">
                <TabsTrigger value="login" className="data-[state=active]:bg-brand-primary data-[state=active]:text-black">
                  Entrar
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-brand-primary data-[state=active]:text-black">
                  Cadastrar
                </TabsTrigger>
              </TabsList>
              
              {/* Login Tab */}
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-text">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="bg-brand-background border-brand-border text-brand-text placeholder:text-brand-textMuted focus:border-brand-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-brand-text">Senha</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="bg-brand-background border-brand-border text-brand-text placeholder:text-brand-textMuted focus:border-brand-primary pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-brand-textMuted" />
                        ) : (
                          <Eye className="h-4 w-4 text-brand-textMuted" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-primary/80 text-black font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-brand-primary hover:text-brand-primary/80 p-0">
                      Esqueci minha senha
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              {/* SignUp Tab */}
              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-brand-text">Nome completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={signUpData.name}
                      onChange={(e) => setSignUpData({...signUpData, name: e.target.value})}
                      className="bg-brand-background border-brand-border text-brand-text placeholder:text-brand-textMuted focus:border-brand-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-brand-text">E-mail</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}
                      className="bg-brand-background border-brand-border text-brand-text placeholder:text-brand-textMuted focus:border-brand-primary"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cpf" className="text-brand-text">CPF</Label>
                      <Input
                        id="cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        value={signUpData.cpf}
                        onChange={(e) => setSignUpData({...signUpData, cpf: e.target.value})}
                        className="bg-brand-background border-brand-border text-brand-text placeholder:text-brand-textMuted focus:border-brand-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-brand-text">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={signUpData.phone}
                        onChange={(e) => setSignUpData({...signUpData, phone: e.target.value})}
                        className="bg-brand-background border-brand-border text-brand-text placeholder:text-brand-textMuted focus:border-brand-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-brand-text">Senha</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Crie uma senha segura"
                      value={signUpData.password}
                      onChange={(e) => setSignUpData({...signUpData, password: e.target.value})}
                      className="bg-brand-background border-brand-border text-brand-text placeholder:text-brand-textMuted focus:border-brand-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-brand-text">Confirmar senha</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirme sua senha"
                      value={signUpData.confirmPassword}
                      onChange={(e) => setSignUpData({...signUpData, confirmPassword: e.target.value})}
                      className="bg-brand-background border-brand-border text-brand-text placeholder:text-brand-textMuted focus:border-brand-primary"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-primary/80 text-black font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Cadastrando...' : 'Criar conta'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center">
              <p className="text-brand-textMuted text-xs">
                Ao continuar, você concorda com nossos{' '}
                <Button variant="link" className="text-brand-primary hover:text-brand-primary/80 p-0 h-auto text-xs">
                  Termos de Uso
                </Button>{' '}
                e{' '}
                <Button variant="link" className="text-brand-primary hover:text-brand-primary/80 p-0 h-auto text-xs">
                  Política de Privacidade
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Footer */}
        <footer className="bg-brand-background text-brand-textMuted py-8 mt-8">
          <div className="container mx-auto text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {/* Coluna 1: Logo e Social */}
              <div className="col-xs-12 md:col-span-1 flex flex-col items-center md:items-start">
                <Link href="/" className="mb-3">
                  <Image
                    src="https://www.boxdafiel.com/img/logohor.9085d7a9.webp"
                    alt="Box da Fiel Logo"
                    width={120}
                    height={40}
                  />
                </Link>
                <div className="flex space-x-4">
                  <Link href="#" className="text-brand-textMuted hover:text-brand-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>  
                  </Link>
                  <Link href="#" className="text-brand-textMuted hover:text-brand-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.111.222.82.402-.085.402-.277 1.402-.314 1.603-.053.225-.172.271-.402.165-1.499-.69-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Coluna 2: Links Úteis */}
              <div className="col-xs-12 md:col-span-1">
                <h5 className="font-semibold text-brand-text mb-3">Links Úteis</h5>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:text-brand-primary transition-colors">Sobre Nós</Link></li>
                  <li><Link href="#" className="hover:text-brand-primary transition-colors">Como Funciona</Link></li>
                  <li><Link href="#" className="hover:text-brand-primary transition-colors">Contato</Link></li>
                  <li><Link href="#" className="hover:text-brand-primary transition-colors">Ajuda</Link></li>
                </ul>
              </div>

              {/* Coluna 3: Suporte */}
              <div className="col-xs-12 md:col-span-1">
                <h5 className="font-semibold text-brand-text mb-3">Suporte</h5>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:text-brand-primary transition-colors">Central de Ajuda</Link></li>
                  <li><Link href="#" className="hover:text-brand-primary transition-colors">Política de Privacidade</Link></li>
                  <li><Link href="#" className="hover:text-brand-primary transition-colors">Termos de Uso</Link></li>
                  <li><Link href="#" className="hover:text-brand-primary transition-colors">Devolução</Link></li>
                </ul>
              </div>

              {/* Coluna 4: Informações */}
              <div className="col-xs-12 md:col-span-1">
                <h5 className="font-semibold text-brand-text mb-3">Informações</h5>
                <div className="text-sm space-y-2">
                  <p>WhatsApp: (11) 99999-9999</p>
                  <p>E-mail: contato@boxdafiel.com</p>
                  <p>Seg-Sex: 9h às 18h</p>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-borderMuted mt-8 pt-6 text-center">
              <p className="text-sm">&copy; 2024 Box da Fiel. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
} 