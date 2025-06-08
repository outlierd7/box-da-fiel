"use client"
import Link from "next/link"
import type React from "react"
import Image from "next/image"
import { HelpCircleIcon, ShoppingBagIcon, GiftIcon, UserIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChooseBoxModal } from "@/components/choose-box-modal"
import { productsData } from "./product-section"
import { isAuthenticated } from "@/lib/auth-utils"
import { useClientOnly } from "@/hooks/use-client-only"

interface MenuItem {
  label: string
  labelLine2?: string
  href: string
  icon?: React.ReactNode
  imageSrc?: string
  onClick?: () => void
  isCentralButton?: boolean
}

export function GlobalMobileMenu() {
  const [isChooseBoxModalOpen, setIsChooseBoxModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const isClient = useClientOnly()

  useEffect(() => {
    if (!isClient) return

    // Verificar se o usuário está logado
    const checkAuthStatus = () => {
      setIsLoggedIn(isAuthenticated())
    }

    checkAuthStatus()

    // Escutar mudanças no localStorage para sincronizar entre abas
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'boxdafiel_logged_in') {
        checkAuthStatus()
      }
    }

    // Escutar mudanças de estado na mesma aba
    const handleAuthChange = () => {
      checkAuthStatus()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('authStateChanged', handleAuthChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('authStateChanged', handleAuthChange)
    }
  }, [isClient])

  const handleOpenBoxModal = () => {
    setIsChooseBoxModalOpen(true)
  }

  const handleCloseBoxModal = () => {
    setIsChooseBoxModalOpen(false)
  }

  const handleAccountClick = () => {
    console.log('handleAccountClick chamado, isLoggedIn:', isLoggedIn)
    if (isLoggedIn) {
      console.log('Redirecionando para /minha-conta')
      router.push('/minha-conta')
    } else {
      console.log('Redirecionando para /login')
      router.push('/login')
    }
  }

  const handleMyProductsClick = () => {
    if (isLoggedIn) {
      router.push('/meus-produtos')
    } else {
      router.push('/login')
    }
  }

  const handleBoxAnimation = (product: any) => {
    // Simplesmente fechar o modal após seleção
    setIsChooseBoxModalOpen(false)
  }

  const menuItems: MenuItem[] = [
    {
      label: "Como",
      labelLine2: "funciona?",
      href: "/como-funciona",
      icon: <HelpCircleIcon size={22} />,
    },
    {
      label: "Todas",
      labelLine2: "Boxes",
      href: "/#produtos",
      icon: <ShoppingBagIcon size={22} />,
    },
    {
      label: "Abrir",
      labelLine2: "Caixa",
      href: "#",
      imageSrc: "/img/openbox-white.b09cf2e4.svg",
      onClick: handleOpenBoxModal,
      isCentralButton: true,
    },
    {
      label: "Meus",
      labelLine2: "Produtos",
      href: "#",
      icon: <GiftIcon size={22} />,
      onClick: handleMyProductsClick,
    },
    {
      label: "Minha",
      labelLine2: "Conta",
      href: "#",
      icon: <UserIcon size={22} />,
      onClick: handleAccountClick,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-cardBg text-brand-text shadow-[-2px_0px_10px_rgba(0,0,0,0.5)] md:hidden z-50">
      <div className="container mx-auto px-1">
        <div className="flex justify-around items-center h-[70px]">
          {menuItems.map((item) => {
            const content = (
              <>
                {item.imageSrc ? (
                  <div className={`relative ${item.isCentralButton ? "w-10 h-10" : "w-8 h-8"} mb-0.5`}>
                    <Image
                      src={item.imageSrc || "/placeholder.svg"}
                      alt={item.label}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ) : (
                  <span className="mb-0.5">{item.icon}</span>
                )}
                <span>{item.label}</span>
                {item.labelLine2 && <span>{item.labelLine2}</span>}
              </>
            )

            const commonClasses =
              "menu-button flex flex-col items-center justify-center text-center text-[10px] leading-tight px-1 hover:text-brand-primary transition-colors h-full"

            if (item.onClick) {
              return (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className={`${commonClasses} ${item.isCentralButton ? "flex-grow-0 w-16" : "flex-grow"}`}
                >
                  {content}
                </button>
              )
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${commonClasses} ${item.isCentralButton ? "flex-grow-0 w-16" : "flex-grow"}`}
              >
                {content}
              </Link>
            )
          })}
        </div>
      </div>
      <ChooseBoxModal
        isOpen={isChooseBoxModalOpen}
        onClose={handleCloseBoxModal}
        products={productsData}
        onBoxSelectedForAnimation={handleBoxAnimation}
      />
    </div>
  )
} 