"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { LiveFeedCarousel } from "./live-feed-carousel"

export function GlobalLiveFeed() {
  const [isMounted, setIsMounted] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Detectar mudanças de rota e aplicar animação de refresh
  useEffect(() => {
    if (isMounted) {
             setIsRefreshing(true)
       const timer = setTimeout(() => {
         setIsRefreshing(false)
       }, 1200) // Duração da animação (aumentada para ser mais visível)

      return () => clearTimeout(timer)
    }
  }, [pathname, isMounted])

  // Não renderizar no servidor para evitar hydration issues
  if (!isMounted) return null

  return (
    <div className="fixed top-[56px] left-0 right-0 z-40 pointer-events-none w-full">
      <div className={`pointer-events-auto w-full transition-all duration-300 ${
        isRefreshing ? 'opacity-60 scale-[0.99]' : 'opacity-100 scale-100'
      }`}>
        <LiveFeedCarousel 
          modalMode={false} 
          showTitle={true} 
          compact={false}
          isRefreshing={isRefreshing}
        />
      </div>
    </div>
  )
} 