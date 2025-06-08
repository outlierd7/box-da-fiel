"use client"

import { useState, useEffect } from "react"
import { X, Smartphone, Wifi, Copy, Check } from "lucide-react"

export function NetworkUrlPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [networkUrl, setNetworkUrl] = useState("")

  useEffect(() => {
    // Detectar a URL de rede automaticamente
    const host = window.location.hostname
    const port = window.location.port
    
    if (host !== "localhost" && host !== "127.0.0.1") {
      setNetworkUrl(`http://${host}:${port}`)
    } else {
      // URL padrão baseada nos logs
      setNetworkUrl("http://192.168.1.102:3017")
    }

    // Mostrar o popup automaticamente após 2 segundos
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(networkUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Falha ao copiar:", err)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-brand-cardBg border border-brand-primary/30 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-brand-primary" />
            <h3 className="text-lg font-bold text-brand-textPrimary">
              Acesso Mobile
            </h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-brand-textSecondary hover:text-brand-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Wifi className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-brand-textSecondary text-sm mb-2">
                Para testar no seu celular, conecte-se na mesma rede Wi-Fi e acesse:
              </p>
              
              <div className="bg-brand-background/50 border border-brand-borderMuted/30 rounded-lg p-3 flex items-center justify-between">
                <code className="text-brand-primary font-mono text-sm break-all">
                  {networkUrl}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="ml-2 p-1.5 hover:bg-brand-primary/20 rounded transition-colors flex-shrink-0"
                  title="Copiar URL"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-brand-primary" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-lg p-3">
            <p className="text-xs text-brand-textSecondary">
              💡 <strong>Dica:</strong> Certifique-se de que o celular e o computador estão na mesma rede Wi-Fi
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-brand-primary/20 hover:bg-brand-primary/30 text-brand-primary py-2 px-4 rounded-lg transition-colors text-sm font-medium"
          >
            Entendi
          </button>
          <button
            onClick={() => {
              window.open(networkUrl, '_blank')
              setIsOpen(false)
            }}
            className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
          >
            Abrir URL
          </button>
        </div>
      </div>
    </div>
  )
} 