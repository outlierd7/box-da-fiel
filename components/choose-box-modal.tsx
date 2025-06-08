"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import type { ProductData } from "./product-section" // Importar tipos de product-section
import { useState } from "react"
import { ProductDetailModal } from "./product-detail-modal" // Importar o modal de detalhes
import { CheckoutModal } from "@/components/checkout-modal"

interface ChooseBoxModalProps {
  isOpen: boolean
  onClose: () => void
  products: ProductData[]
  onBoxSelectedForAnimation: (product: ProductData) => void // Nova prop
}

interface ModalProductCardProps {
  product: ProductData
  onDetailsClick: (product: ProductData) => void
  onBoxSelectedForAnimation: (product: ProductData) => void
}

// Cartão de produto simplificado para este modal
function ModalProductCard({ product, onDetailsClick, onBoxSelectedForAnimation }: ModalProductCardProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const handleCheckoutClick = () => {
    setIsCheckoutOpen(true)
  };

  return (
    <>
      <div className="bg-brand-cardBg border border-brand-borderMuted/20 rounded-lg p-3 sm:p-4 flex flex-col items-center text-center shadow-lg hover:shadow-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 relative group h-full">
        {/* Botão Ver Itens da Caixa - no canto superior direito */}
        <button 
          className="box-basic absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/70 hover:bg-black/90 text-white border border-brand-primary/30 hover:border-brand-primary rounded px-1.5 py-1 sm:px-2 sm:py-1.5 transition-all duration-300 flex flex-col items-center gap-0.5 z-10"
          onClick={() => onDetailsClick(product)}
        >
          <i className="ri-eye-fill icon-itens text-brand-primary text-xs sm:text-sm"></i>
          <span className="text-[8px] sm:text-[10px] font-medium leading-[8px] sm:leading-[10px] text-center">
            VER ITENS <br />
            DA CAIXA
          </span>
        </button>

        <div className="relative w-full h-32 sm:h-40 mb-3">
          <Image
            src={product.imageSrc || "/placeholder.svg?height=160&width=160&query=caixa+produto"}
            alt={product.name}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <h4
          className="nomeCaixa name-box text-sm sm:text-base font-semibold text-brand-text mb-2 truncate w-full"
          title={product.name}
        >
          {product.name}
        </h4>

        <div className="mt-auto w-full">
          <Button
            variant="default"
            onClick={handleCheckoutClick}
            className="btn-box badge-valor w-full bg-brand-primary text-brand-textDark hover:bg-opacity-80 font-bold py-2 px-3 sm:py-2.5 sm:px-4 rounded text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            R$ {product.price}
          </Button>
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        checkoutUrl={product.checkoutLink}
        productName={product.name}
      />
    </>
  )
}

export function ChooseBoxModal({ isOpen, onClose, products, onBoxSelectedForAnimation }: ChooseBoxModalProps) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<ProductData | null>(null)

  const handleOpenDetailModal = (product: ProductData) => {
    setSelectedProductForDetail(product)
    setIsDetailModalOpen(true)
  }

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false)
    setSelectedProductForDetail(null)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-black border-brand-borderMuted/30 text-brand-text sm:max-w-md md:max-w-lg lg:max-w-2xl p-0 max-h-[90vh] flex flex-col">
          <DialogHeader className="p-4 border-b border-brand-borderMuted/20 flex-row justify-between items-center">
            <DialogTitle className="text-lg sm:text-xl font-bold text-brand-text">ESCOLHA SUA CAIXA</DialogTitle>
            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-ring disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              {/* O ícone X é renderizado por DialogClose por padrão */}
              <span className="sr-only">Fechar</span>
            </DialogClose>
          </DialogHeader>

          <div className="p-4 sm:p-6 flex-grow overflow-y-auto bg-[#0a0b0b]">
            {products && products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {products.map((product) => (
                  <ModalProductCard
                    key={product.name}
                    product={product}
                    onDetailsClick={handleOpenDetailModal}
                    onBoxSelectedForAnimation={onBoxSelectedForAnimation}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-brand-textMuted py-10">Nenhuma caixa disponível no momento.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Detalhes do Produto (reutilizado) */}
      <ProductDetailModal
        product={selectedProductForDetail}
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
      />
    </>
  )
}
