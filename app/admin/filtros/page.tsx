"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Bot, Globe, Link, Eye, Settings } from 'lucide-react'

export default function FiltrosAdmin() {
  const [stats, setStats] = useState({
    totalAcessos: 0,
    bloqueios: 0,
    botsDetectados: 0,
    acessosValidos: 0
  })

  const [filtros, setFiltros] = useState({
    referrers: ['facebook.com', 'google.com', 'instagram.com'],
    utmSources: ['facebook-ads', 'google-ads', 'instagram-ads'],
    blockedBots: ['adspy', 'bigspy', 'poweradspy'],
    allowedCountries: ['BR', 'US', 'PT', 'ES']
  })

  const [novoItem, setNovoItem] = useState('')
  const [chaveBypass, setChaveBypass] = useState('VIP-BOXTIMAO-2025')

  // Simulação de dados (substitua por API real)
  useEffect(() => {
    setStats({
      totalAcessos: 1247,
      bloqueios: 89,
      botsDetectados: 23,
      acessosValidos: 1135
    })
  }, [])

  const adicionarItem = (tipo: string) => {
    if (!novoItem) return
    
    setFiltros(prev => ({
      ...prev,
      [tipo]: [...prev[tipo], novoItem]
    }))
    setNovoItem('')
  }

  const removerItem = (tipo: string, item: string) => {
    setFiltros(prev => ({
      ...prev,
      [tipo]: prev[tipo].filter(i => i !== item)
    }))
  }

  const gerarLinkAnuncio = (utmSource: string) => {
    return `https://boxtimao.store?utm_source=${utmSource}&utm_campaign=box-fiel-2025`
  }

  const gerarLinkBypass = () => {
    return `https://boxtimao.store?key=${chaveBypass}`
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Shield className="text-blue-600" />
            Painel de Filtros - Box da Fiel
          </h1>
          <p className="text-gray-600 mt-2">
            Gerencie o acesso ao seu site e bloqueie tráfego indesejado
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total de Acessos</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalAcessos}</p>
                </div>
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Acessos Válidos</p>
                  <p className="text-2xl font-bold text-green-600">{stats.acessosValidos}</p>
                </div>
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Bloqueios</p>
                  <p className="text-2xl font-bold text-red-600">{stats.bloqueios}</p>
                </div>
                <Bot className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Bots Detectados</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.botsDetectados}</p>
                </div>
                <Bot className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs de Configuração */}
        <Tabs defaultValue="referrers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="referrers">Referências</TabsTrigger>
            <TabsTrigger value="utm">Parâmetros UTM</TabsTrigger>
            <TabsTrigger value="bots">Bots Bloqueados</TabsTrigger>
            <TabsTrigger value="geo">Geolocalização</TabsTrigger>
            <TabsTrigger value="links">Links Anúncios</TabsTrigger>
          </TabsList>

          {/* Referências Permitidas */}
          <TabsContent value="referrers">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Sites de Referência Permitidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ex: facebook.com"
                      value={novoItem}
                      onChange={(e) => setNovoItem(e.target.value)}
                    />
                    <Button onClick={() => adicionarItem('referrers')}>
                      Adicionar
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {filtros.referrers.map(item => (
                      <Badge key={item} variant="secondary" className="flex items-center gap-1">
                        {item}
                        <button
                          onClick={() => removerItem('referrers', item)}
                          className="ml-1 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Parâmetros UTM */}
          <TabsContent value="utm">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Parâmetros UTM Válidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ex: facebook-ads"
                      value={novoItem}
                      onChange={(e) => setNovoItem(e.target.value)}
                    />
                    <Button onClick={() => adicionarItem('utmSources')}>
                      Adicionar
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {filtros.utmSources.map(item => (
                      <Badge key={item} variant="secondary" className="flex items-center gap-1">
                        {item}
                        <button
                          onClick={() => removerItem('utmSources', item)}
                          className="ml-1 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bots Bloqueados */}
          <TabsContent value="bots">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  User Agents de Bots Bloqueados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ex: adspy"
                      value={novoItem}
                      onChange={(e) => setNovoItem(e.target.value)}
                    />
                    <Button onClick={() => adicionarItem('blockedBots')}>
                      Adicionar
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {filtros.blockedBots.map(item => (
                      <Badge key={item} variant="destructive" className="flex items-center gap-1">
                        {item}
                        <button
                          onClick={() => removerItem('blockedBots', item)}
                          className="ml-1 text-white hover:text-gray-200"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Geolocalização */}
          <TabsContent value="geo">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Países Permitidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ex: BR (código do país)"
                      value={novoItem}
                      onChange={(e) => setNovoItem(e.target.value.toUpperCase())}
                    />
                    <Button onClick={() => adicionarItem('allowedCountries')}>
                      Adicionar
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {filtros.allowedCountries.map(item => (
                      <Badge key={item} variant="outline" className="flex items-center gap-1">
                        {item}
                        <button
                          onClick={() => removerItem('allowedCountries', item)}
                          className="ml-1 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Links de Anúncios */}
          <TabsContent value="links">
            <Card>
              <CardHeader>
                <CardTitle>Links para Anúncios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Links Gerados Automaticamente:</h3>
                    <div className="space-y-3">
                      {filtros.utmSources.map(source => (
                        <div key={source} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{source}:</span>
                            <Button 
                              size="sm" 
                              onClick={() => navigator.clipboard.writeText(gerarLinkAnuncio(source))}
                            >
                              Copiar
                            </Button>
                          </div>
                          <code className="text-sm text-gray-600 break-all">
                            {gerarLinkAnuncio(source)}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Link de Bypass (Administração):</h3>
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Chave Bypass:</span>
                        <Button 
                          size="sm" 
                          onClick={() => navigator.clipboard.writeText(gerarLinkBypass())}
                        >
                          Copiar
                        </Button>
                      </div>
                      <code className="text-sm text-gray-600 break-all">
                        {gerarLinkBypass()}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 