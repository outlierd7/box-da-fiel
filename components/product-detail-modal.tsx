"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import type { ProductData, BoxPossibleItem } from "./product-section"

interface ProductDetailModalProps {
  product: ProductData | null
  isOpen: boolean
  onClose: () => void
  onCheckout?: (product: ProductData) => void
}

// Subcomponente para renderizar cada item dentro do modal
function ModalBoxItemCard({ item }: { item: BoxPossibleItem }) {
  return (
    <div className="bg-brand-cardBg border border-brand-borderMuted/20 rounded-md p-3 flex flex-col items-center text-center shadow-md h-full">
      <div className="w-full mb-2 text-left">
        <span className="text-xs font-bold text-brand-primary bg-black/30 px-1.5 py-0.5 rounded-sm">{item.odd}</span>
      </div>
      <div className="relative w-full h-24 sm:h-28 mb-2">
        <Image
          src={item.imageUrl || "/placeholder.svg?height=100&width=100&query=item+caixa"}
          alt={item.name}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h5 className="text-xs sm:text-sm font-semibold text-brand-text mb-1 truncate w-full" title={item.name}>
        {item.name}
      </h5>
      <p className={`text-xs ${item.value === "Impagável" ? "text-yellow-400 font-bold" : "text-brand-textMuted"}`}>
        {item.value}
      </p>
    </div>
  )
}

export function ProductDetailModal({ product, isOpen, onClose, onCheckout }: ProductDetailModalProps) {
  const handleCheckoutClick = () => {
    console.log('🎯 Botão QUERO MINHA BOX! clicado!')
    console.log('🔍 product:', product)
    console.log('🔍 onCheckout function:', onCheckout)
    
    if (!product) {
      console.log('❌ Produto não encontrado!')
      return;
    }
    
    if (!onCheckout) {
      console.log('❌ onCheckout function não encontrada!')
      return;
    }
    
    console.log('✅ Chamando onCheckout com produto:', product.name)
    console.log('🔐 Fechando ProductDetailModal...')
    onClose() // Fechar o modal de detalhes
    onCheckout(product)
  };

  if (!product) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-brand-borderMuted/30 text-brand-text sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-0 max-h-[90vh] flex flex-col">
        <DialogHeader className="p-4 border-b border-brand-borderMuted/20">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-lg sm:text-xl font-bold text-brand-text">
              Itens da Caixa: <span className="text-brand-primary">{product.name}</span>
            </DialogTitle>
            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-ring disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <span className="sr-only">Fechar</span>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-[#0a0b0b]">
          {product.possibleItems && product.possibleItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {product.possibleItems.map((item: BoxPossibleItem) => (
                <ModalBoxItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-brand-textMuted py-10">
              Nenhum item detalhado disponível para esta caixa no momento.
            </p>
          )}
        </div>

        <DialogFooter className="p-4 border-t border-brand-borderMuted/20 bg-black">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-left">
              <p className="text-sm text-brand-textMuted">Valor da Caixa:</p>
              <p className="text-2xl font-bold text-brand-primary">R$ {product.price}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={onClose}
                className="text-brand-text border-brand-borderMuted hover:bg-brand-borderMuted/20 hover:text-brand-text w-full sm:w-auto"
              >
                Fechar
              </Button>
              
              <Button 
                onClick={handleCheckoutClick}
                className="w-full sm:w-auto bg-brand-primary text-brand-textDark hover:bg-opacity-80 font-bold uppercase tracking-wider cursor-pointer"
              >
                Quero Minha Box!
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
