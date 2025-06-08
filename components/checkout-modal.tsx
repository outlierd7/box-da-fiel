"use client"

import { useState, useEffect } from "react"
import { X, CreditCard, Shield, ArrowLeft } from "lucide-react"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  checkoutUrl: string
  productName: string
}

export function CheckoutModal({ isOpen, onClose, checkoutUrl, productName }: CheckoutModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      // Simular carregamento
      const timer = setTimeout(() => setIsLoading(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-brand-cardBg border border-brand-primary/30 rounded-none w-full h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-brand-borderMuted/20 bg-brand-background/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-brand-primary" />
            <div>
              <h3 className="text-lg font-bold text-brand-textPrimary">
                Finalizar Compra
              </h3>
              <p className="text-sm text-brand-textSecondary">
                {productName}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 hover:bg-brand-primary/20 rounded-lg transition-colors"
              title="Voltar"
            >
              <ArrowLeft className="w-5 h-5 text-brand-textSecondary" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-brand-primary/20 rounded-lg transition-colors"
              title="Fechar"
            >
              <X className="w-5 h-5 text-brand-textSecondary" />
            </button>
          </div>
        </div>

        {/* Security Badge */}
        <div className="px-4 py-2 bg-green-500/10 border-b border-brand-borderMuted/20">
          <div className="flex items-center gap-2 text-sm text-green-400">
            <Shield className="w-4 h-4" />
            <span>Pagamento 100% seguro</span>
          </div>
        </div>

        {/* Content - Ocupando toda a tela disponível */}
        <div className="flex-1 relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-brand-cardBg flex items-center justify-center z-10">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-brand-textSecondary">Carregando checkout...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={checkoutUrl}
            className={`w-full h-full border-0 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            title="Checkout"
            onLoad={() => setIsLoading(false)}
            sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation allow-popups"
          />
        </div>
      </div>
    </div>
  )
} 