"use client"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCallback, useEffect, useState } from "react"

interface FeedItem {
  id: string
  productImage: string
  productName?: string
  boxImage: string
  timeAgo: string
  bgColorClass: string
}

interface LiveFeedCarouselProps {
  compact?: boolean
  showTitle?: boolean
  modalMode?: boolean
  isRefreshing?: boolean
}

const feedItemsData: FeedItem[] = [
  {
    id: "1",
    productImage: "https://images.boxdasorte.com/Upload/3/CaixaItem/1734915085974_8.png",
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676388283_2.png", // Fiel Drink's
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-amber-500/25", // rgba(255, 165, 0, 0.25)
  },
  {
    id: "2",
    productImage: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655315021_03 (3).png", // Copo Yuri
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676388283_2.png", // Fiel Drink's
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-gray-500/25", // rgba(128, 128, 128, 0.25)
  },
  {
    id: "3",
    productImage: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655359464_06 (3).png", // Testeira Branca
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676388283_2.png", // Fiel Drink's
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-blue-600/25", // rgba(0, 0, 255, 0.25)
  },
  {
    id: "4",
    productImage: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655371430_07 (3).png", // Top Fitness Detalhes
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676388283_2.png", // Fiel Drink's
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-purple-600/25", // rgba(128, 0, 128, 0.25)
  },
  {
    id: "5",
    productImage: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655333448_04 (2).png", // Testeira Preta
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676388283_2.png", // Fiel Drink's
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-gray-500/25", // rgba(128, 128, 128, 0.25) - repeated gray
  },
  {
    id: "6",
    productImage: "https://images.boxdasorte.com/Upload/3/Produto/1734914635626_7.png", // Some product
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676388283_2.png", // Fiel Drink's
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-amber-500/25", // rgba(255, 165, 0, 0.25) - repeated orange
  },
  // Add more items if needed, cycling through the colors or using new ones
  {
    id: "7",
    productImage: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745559716237_2.png", // Carteira Preta
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676417443_3.png", // Fiel Sortudo
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-gray-500/25",
  },
  {
    id: "8",
    productImage: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745457335622_Prancheta 1.png", // Camarote Brahma (Fiel Drinks)
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676388283_2.png", // Fiel Drink's
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-blue-600/25",
  },
  {
    id: "9",
    productImage: "https://images.boxdasorte.com/Upload/3/Produto/1745448495769_Prancheta 2.png", // Caixa Som BT Prova D'agua
    boxImage: "https://images.boxdasorte.com/Upload/3/Caixa/1744676367871_1.png", // Bando de Loucos
    timeAgo: "há 1 minuto",
    bgColorClass: "bg-amber-500/25",
  },
]

export function LiveFeedCarousel({ compact = false, showTitle = true, modalMode = false, isRefreshing = false }: LiveFeedCarouselProps) {
  const [currentFeedItems, setCurrentFeedItems] = useState(feedItemsData)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Função para embaralhar e "recarregar" os itens
  const shuffleFeedItems = useCallback(() => {
    const shuffled = [...feedItemsData].sort(() => Math.random() - 0.5)
    // Criar tempos variados para simular atividade recente
    const timeOptions = [
      "há 1 minuto", "há 1 minuto", "há 2 minutos", 
      "há 3 minutos", "há 4 minutos", "há 5 minutos",
      "há poucos segundos", "há 30 segundos", "há 1 minuto"
    ]
    
    // Atualizar o tempo para simular novas compras
    const updatedItems = shuffled.map((item, index) => ({
      ...item,
      timeAgo: timeOptions[index % timeOptions.length],
      // Pequena variação no id para forçar re-render
      id: `${item.id}-${Date.now()}-${index}`
    }))
    setCurrentFeedItems(updatedItems)
  }, [])

  useEffect(() => {
    if (emblaApi) {
      // Inicializar o carousel
    }
  }, [emblaApi])

  // Recarregar itens quando estiver atualizando
  useEffect(() => {
    if (isRefreshing) {
             // Aguardar um pouco para dar tempo da animação iniciar
       const timer = setTimeout(() => {
         shuffleFeedItems()
       }, 600) // Metade do tempo da animação

      return () => clearTimeout(timer)
    }
  }, [isRefreshing, shuffleFeedItems])

  // Versão Modal - Container popup-like
  if (modalMode) {
    return (
      <div className="bg-black/90 border border-brand-borderMuted/30 rounded-lg p-4 mb-4 backdrop-blur-sm shadow-lg mx-auto max-w-full">
        {showTitle && (
          <div className="flex justify-center items-center mb-3">
            <span className="text-xs font-bold border border-brand-borderMuted text-brand-textMuted px-2 py-1 rounded-sm flex items-center bg-black/30">
              <svg viewBox="0 0 8 8" fill="currentColor" className="w-1.5 h-1.5 mr-1.5 text-red-500 animate-pulse">
                <circle cx="4" cy="4" r="4" />
              </svg>
              ÚLTIMAS COMPRAS
            </span>
          </div>
        )}
        
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {currentFeedItems.map((item) => (
                <div
                  key={item.id}
                  className={`embla__slide flex-[0_0_auto] min-w-[90px] p-2 rounded-md mx-1 ${item.bgColorClass} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="conteudo-slider w-full">
                    <div className="conteudo-imagens flex flex-col items-center justify-center h-full">
                      <div className="text-center">
                        <Image
                          src={item.productImage || "/placeholder.svg?height=35&width=35&query=item+pequeno"}
                          alt={item.productName || "Produto aberto"}
                          width={35}
                          height={35}
                          className="imgProduto object-contain max-w-[50px] h-auto mx-auto"
                        />
                        <h6 className="mt-1 text-[9px] text-brand-textMuted">
                          {item.timeAgo}
                        </h6>
                      </div>
                      <div className="text-center mt-0.5">
                        <Image
                          src={item.boxImage || "/placeholder.svg?height=30&width=30&query=caixa+pequena"}
                          alt="Caixa do produto"
                          width={30}
                          height={30}
                          className="imgCaixa object-contain max-w-[40px] h-auto mx-auto mt-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Botões de Navegação */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-black/50 hover:bg-black/70 text-white p-1 h-8 w-8 rounded-full"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-black/50 hover:bg-black/70 text-white p-1 h-8 w-8 rounded-full"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  // Versão Normal/Compact - Layout original
  return (
    <div className="ultimasAberturas bg-gradient-to-r from-black via-gray-900 to-black py-6 shadow-lg border-b border-brand-borderMuted/30 w-full relative min-h-[120px]">
      <div className="w-full px-4">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex items-center">
            {currentFeedItems.map((item) => (
              <div
                key={item.id}
                className={`embla__slide flex-[0_0_auto] min-w-[110px] sm:min-w-[120px] md:min-w-[130px] p-2 rounded-lg mx-1.5 ${item.bgColorClass} transition-all duration-300 hover:shadow-xl hover:scale-105 border border-transparent hover:border-brand-primary/30 ${
                  isRefreshing ? 'animate-pulse opacity-70' : ''
                }`}
              >
                <div className="conteudo-slider w-full h-[70px] flex items-center justify-center">
                  <div className="conteudo-imagens flex items-center space-x-2">
                    <div className="text-center">
                      <Image
                        src={item.productImage || "/placeholder.svg?height=45&width=45&query=item+pequeno"}
                        alt={item.productName || "Produto aberto"}
                        width={45}
                        height={45}
                        className="imgProduto object-contain max-w-[50px] h-auto mx-auto"
                      />
                    </div>
                    <div className="text-center">
                      <Image
                        src={item.boxImage || "/placeholder.svg?height=40&width=40&query=caixa+pequena"}
                        alt="Caixa do produto"
                        width={40}
                        height={40}
                        className="imgCaixa object-contain max-w-[45px] h-auto mx-auto"
                      />
                      <h6 className="mt-1 text-[9px] text-brand-textMuted">
                        {item.timeAgo}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showTitle && (
          <div className="absolute -bottom-1 left-6">
            <span className={`tituloAberturas text-xs font-bold border border-brand-primary/50 text-brand-primary px-2 py-0.5 rounded flex items-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${
              isRefreshing ? 'animate-pulse bg-brand-primary/20 border-brand-primary' : ''
            }`}>
              <svg viewBox="0 0 8 8" fill="currentColor" className={`w-1.5 h-1.5 mr-1.5 text-red-500 ${
                isRefreshing ? 'animate-spin' : 'animate-pulse'
              }`}>
                <circle cx="4" cy="4" r="4" />
              </svg>
              {isRefreshing ? 'ATUALIZANDO...' : 'ÚLTIMAS COMPRAS'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
