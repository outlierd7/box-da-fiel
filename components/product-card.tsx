"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { ProductData } from "./product-section"

interface ProductCardProps {
  product: ProductData
  onDetailsClick: () => void
}

export function ProductCard({ product, onDetailsClick }: ProductCardProps) {
  const handleCheckoutClick = () => {
    // Abrir popup do checkout
    const popup = window.open(
      product.checkoutLink,
      '_blank',
      'width=800,height=600,scrollbars=yes,resizable=yes,status=yes,location=yes,toolbar=no,menubar=no'
    );
    
    // Focar no popup se foi aberto com sucesso
    if (popup) {
      popup.focus();
    }
  };

  return (
    <div className="bg-brand-cardBg border border-brand-borderMuted/20 rounded-lg p-3 sm:p-4 flex flex-col items-center text-center shadow-lg hover:shadow-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 relative group h-full">
      {/* Botão Ver Itens da Caixa - no canto superior direito */}
      <button 
        className="box-basic absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/70 hover:bg-black/90 text-white border border-brand-primary/30 hover:border-brand-primary rounded px-1.5 py-1 sm:px-2 sm:py-1.5 transition-all duration-300 flex flex-col items-center gap-0.5 z-10"
        onClick={onDetailsClick}
      >
        <i className="ri-eye-fill icon-itens text-brand-primary text-xs sm:text-sm"></i>
        <span className="text-[8px] sm:text-[10px] font-medium leading-[8px] sm:leading-[10px] text-center">
          VER ITENS <br />
          DA CAIXA
        </span>
      </button>

      <div className="relative w-full h-32 sm:h-40 mb-3">
        <Image
          src={product.imageSrc || "/placeholder.svg?height=200&width=200&query=caixa+produto"}
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
  )
}
