import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GlobalLiveFeed } from "@/components/global-live-feed"
import { GlobalMobileMenu } from "@/components/global-mobile-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Box da Fiel - Produtos Oficiais do Corinthians",
  description: "Os melhores produtos oficiais do Sport Club Corinthians Paulista. Camisas, acessórios e muito mais para o torcedor fiel.",
  keywords: "Corinthians, produtos oficiais, camisas, acessórios, torcedor",
  authors: [{ name: "Box da Fiel" }],
  openGraph: {
    title: "Box da Fiel - Produtos Oficiais do Corinthians",
    description: "Os melhores produtos oficiais do Sport Club Corinthians Paulista",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Box da Fiel - Produtos Oficiais do Corinthians",
    description: "Os melhores produtos oficiais do Sport Club Corinthians Paulista",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning={true}>
      <head>
        <meta httpEquiv="content-language" content="pt-br" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          content="width=device-width,initial-scale=1,maximum-scale=1,,minimum-scale=1,user-scalable=no,shrink-to-fit=no"
          name="viewport"
        />
        {/* Remix Icon CDN */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        {/* Font Awesome (se for usar diretamente, senão remover e usar lucide-react) */}
        {/* <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" /> */}
        
        {/* UTM Pixel Tracking */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        />


        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "68557c2c930cd7fc23b0e28c";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `
          }}
        />
      </head>
      {/* As variáveis CSS do body original serão aplicadas via Tailwind e globals.css */}
      <body className={`font-sans bg-brand-background text-brand-text antialiased pt-[180px] pb-[70px] md:pb-0`}>
        {children}
        <GlobalLiveFeed />
        <GlobalMobileMenu />
      </body>
    </html>
  )
}
