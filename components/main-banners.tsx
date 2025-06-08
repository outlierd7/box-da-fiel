"use client"
import Link from "next/link"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react" // Para setas de navegação
import { useCallback, useEffect, useState } from "react"

interface BannerItem {
  id: string
  desktopImage: string
  mobileImage: string
  alt: string
  link?: string
}

const bannerItemsData: BannerItem[] = [
  {
    id: "1",
    desktopImage: "https://images.boxdasorte.com/Upload/3/Banner/1748267272007_BANNER FRETE YURI D.jpg",
    mobileImage: "https://images.boxdasorte.com/Upload/3/Banner/1748267274396_BANNER FRETE YURI M.jpg",
    alt: "Banner Frete Grátis",
    link: "#",
  },
  {
    id: "2",
    desktopImage: "https://images.boxdasorte.com/Upload/3/Banner/1732587178732_BANNER 3 D.jpg",
    mobileImage: "https://images.boxdasorte.com/Upload/3/Banner/1732587184274_BANNER 3 M.jpg",
    alt: "Banner Promocional 3",
    link: "#",
  },
  {
    id: "3",
    desktopImage: "https://images.boxdasorte.com/Upload/3/Banner/1732743357567_BANNER 2 D.jpg",
    mobileImage: "https://images.boxdasorte.com/Upload/3/Banner/1732743372410_BANNER 2 M.jpg",
    alt: "Banner Promocional 2",
    link: "#",
  },
]

export function MainBanners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on("select", onSelect)
    onSelect() // Set initial selected index
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="banner-section bg-brand-background relative">
      <div className="container mx-auto px-0 sm:px-4">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {bannerItemsData.map((banner) => (
              <div key={banner.id} className="embla__slide flex-[0_0_100%] relative">
                {banner.link ? (
                  <Link href={banner.link} aria-label={banner.alt}>
                    <Image
                      src={banner.desktopImage || "/placeholder.svg?height=400&width=1200&query=banner+desktop"}
                      alt={banner.alt}
                      width={1200}
                      height={400}
                      className="hidden md:block w-full h-auto object-cover"
                      priority={banner.id === "1"}
                    />
                    <Image
                      src={banner.mobileImage || "/placeholder.svg?height=300&width=600&query=banner+mobile"}
                      alt={banner.alt}
                      width={600}
                      height={300}
                      className="block md:hidden w-full h-auto object-cover"
                      priority={banner.id === "1"}
                    />
                  </Link>
                ) : (
                  <>
                    <Image
                      src={banner.desktopImage || "/placeholder.svg?height=400&width=1200&query=banner+desktop"}
                      alt={banner.alt}
                      width={1200}
                      height={400}
                      className="hidden md:block w-full h-auto object-cover"
                      priority={banner.id === "1"}
                    />
                    <Image
                      src={banner.mobileImage || "/placeholder.svg?height=300&width=600&query=banner+mobile"}
                      alt={banner.alt}
                      width={600}
                      height={300}
                      className="block md:hidden w-full h-auto object-cover"
                      priority={banner.id === "1"}
                    />
                  </>
                )}
                {/* Placeholder para conteúdo sobreposto:
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 p-4">
                  <h2 className="text-2xl font-bold">Título do Banner</h2>
                  <p>Texto descritivo do banner.</p>
                  <Button className="mt-4">Ver Mais</Button>
                </div>
                */}
              </div>
            ))}
          </div>
        </div>

        {/* Setas de Navegação (Exemplo) */}
        {emblaApi && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
              aria-label="Banner anterior"
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
              aria-label="Próximo banner"
            >
              <ChevronRightIcon size={24} />
            </button>
          </>
        )}

        {/* Indicadores de Página (Exemplo) */}
        {emblaApi && scrollSnaps.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === selectedIndex ? "bg-white" : "bg-white/40"
                } hover:bg-white/70 transition-colors`}
                aria-label={`Ir para o banner ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
