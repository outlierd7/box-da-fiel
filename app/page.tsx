"use client"

import { Header } from "@/components/header"
import { MainBanners } from "@/components/main-banners"
import { ProductSection } from "@/components/product-section"
import { Footer } from "@/components/footer"
import { NetworkUrlPopup } from "@/components/network-url-popup"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-backgroundLight">
      <Header />
      <div className="flex-grow flex flex-col pt-[56px]">
        <main className="flex-grow">
          <MainBanners />
          <ProductSection />
        </main>
      </div>
      <Footer />
      <NetworkUrlPopup />
    </div>
  )
}
