"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, CreditCard, Banknote, User, Mail, Phone, MapPin } from "lucide-react"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    price: string
    imageSrc: string
  }
}

export function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  })

  if (!isOpen) return null

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular processamento do pagamento
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert(`Pedido realizado com sucesso!\nProduto: ${product.name}\nValor: R$ ${product.price}\nMétodo: ${paymentMethod === 'pix' ? 'PIX' : 'Cartão'}`)
    setIsLoading(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-brand-background border border-brand-borderMuted/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-brand-background/95 backdrop-blur-sm border-b border-brand-borderMuted/20 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-brand-primary">Finalizar Compra</h2>
          <button
            onClick={onClose}
            className="text-brand-textMuted hover:text-brand-primary transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Produto */}
            <div className="space-y-6">
              <div className="bg-white/5 border border-brand-borderMuted/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-primary mb-4">Resumo do Pedido</h3>
                <div className="flex items-center gap-4">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-20 h-20 object-contain rounded border border-brand-borderMuted/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-brand-text">{product.name}</h4>
                    <p className="text-2xl font-bold text-brand-primary">R$ {product.price}</p>
                  </div>
                </div>
              </div>

              {/* Método de Pagamento */}
              <div className="bg-white/5 border border-brand-borderMuted/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-brand-primary mb-4">Método de Pagamento</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={paymentMethod === 'pix'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'pix')}
                      className="text-brand-primary"
                    />
                    <Banknote className="text-brand-primary" size={20} />
                    <span className="text-brand-text">PIX (Desconto de 5%)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                      className="text-brand-primary"
                    />
                    <CreditCard className="text-brand-primary" size={20} />
                    <span className="text-brand-text">Cartão de Crédito</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit}>
                {/* Dados Pessoais */}
                <div className="bg-white/5 border border-brand-borderMuted/20 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-brand-primary mb-4 flex items-center gap-2">
                    <User size={20} />
                    Dados Pessoais
                  </h3>
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Nome completo"
                      required
                      className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="E-mail"
                        required
                        className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      <input
                        type="tel"
                        placeholder="Telefone"
                        required
                        className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="CPF"
                      required
                      className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                      value={formData.cpf}
                      onChange={(e) => handleInputChange('cpf', e.target.value)}
                    />
                  </div>
                </div>

                {/* Endereço */}
                <div className="bg-white/5 border border-brand-borderMuted/20 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-brand-primary mb-4 flex items-center gap-2">
                    <MapPin size={20} />
                    Endereço de Entrega
                  </h3>
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Endereço completo"
                      required
                      className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                    <div className="grid sm:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Cidade"
                        required
                        className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Estado"
                        required
                        className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="CEP"
                        required
                        className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Dados do Cartão (se cartão selecionado) */}
                {paymentMethod === 'card' && (
                  <div className="bg-white/5 border border-brand-borderMuted/20 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-brand-primary mb-4 flex items-center gap-2">
                      <CreditCard size={20} />
                      Dados do Cartão
                    </h3>
                    <div className="grid gap-4">
                      <input
                        type="text"
                        placeholder="Número do cartão"
                        required
                        className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Nome no cartão"
                        required
                        className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                      />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM/AA"
                          required
                          className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                          value={formData.cardExpiry}
                          onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          required
                          className="w-full px-3 py-2 bg-brand-cardBg border border-brand-borderMuted/20 rounded text-brand-text placeholder-brand-textMuted focus:border-brand-primary focus:outline-none"
                          value={formData.cardCvv}
                          onChange={(e) => handleInputChange('cardCvv', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Botões */}
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                    disabled={isLoading}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-brand-primary text-brand-textDark hover:bg-brand-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processando...' : `Finalizar Compra - R$ ${product.price}`}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 