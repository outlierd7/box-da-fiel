"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ShoppingCart, Search, CreditCard, Gift, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ComoFuncionaPage() {
  const steps = [
    {
      title: "Escolha um BOX!",
      description: "Navegue pelas nossas caixas especiais do Corinthians. Cada box contém produtos oficiais diferentes. Clique em 'Ver Itens' para descobrir todos os produtos possíveis.",
      icon: <Search className="w-16 h-16 text-brand-primary" />,
      number: "1"
    },
    {
      title: "Veja os Itens Possíveis", 
      description: "Antes de comprar, você pode ver exatamente quais produtos podem vir na sua caixa. Todos os itens são produtos oficiais do Corinthians de alta qualidade.",
      icon: <Gift className="w-16 h-16 text-brand-primary" />,
      number: "2"
    },
    {
      title: "Finalize sua Compra",
      description: "Escolheu o box perfeito? Clique em 'Comprar' e complete o pagamento de forma segura. Aceitamos várias formas de pagamento para sua comodidade.",
      icon: <CreditCard className="w-16 h-16 text-brand-primary" />,
      number: "3"
    },
    {
      title: "Receba em Casa!",
      description: "Após a compra, você receberá um dos incríveis produtos da caixa que escolheu. Todos os itens são enviados com segurança para o endereço cadastrado.",
      icon: <ShoppingCart className="w-16 h-16 text-brand-primary" />,
      number: "4"
    }
  ]

  const faqs = [
    {
      question: "O que é o Box da Fiel?",
      answer: "O Box da Fiel é uma loja online especializada em produtos oficiais do Corinthians. Oferecemos caixas surpresa com itens exclusivos e experiências únicas para os torcedores mais fiéis do Timão."
    },
    {
      question: "Como funciona a compra?",
      answer: "É simples! Escolha o box desejado, veja os possíveis itens inclusos, clique em 'Comprar' e finalize o pagamento. Você receberá um dos produtos da caixa escolhida em sua casa."
    },
    {
      question: "Posso ver quais produtos podem vir na caixa?",
      answer: "Sim! Cada caixa tem uma lista completa dos produtos possíveis. Clique em 'Ver Itens da Caixa' para conhecer todos os itens que podem ser enviados para você."
    },
    {
      question: "Posso escolher meu próprio tamanho de roupas e tênis?",
      answer: "Quando você comprar um item que possui tamanhos diferentes, nosso time entrará em contato para que você selecione o seu tamanho antes do envio."
    },
    {
      question: "Como acompanho minha entrega?",
      answer: "Assim que o produto for despachado, você receberá o código de rastreamento por e-mail para acompanhar sua entrega em tempo real."
    },
    {
      question: "Preciso pagar o frete?",
      answer: "Sim, o frete é calculado durante o checkout com base no seu CEP e será exibido antes da finalização da compra."
    },
    {
      question: "Qual é a política de troca/devolução?",
      answer: "Garantimos a qualidade de todos os produtos. Se receber algum item danificado ou com defeito, entre em contato em até 7 dias e faremos a troca ou reembolso."
    },
    {
      question: "Como entro em contato com vocês?",
      answer: "Você pode nos contatar pelo WhatsApp (11) 93447-1420 ou pelo e-mail suporte@boxdafiel.com. Estamos sempre prontos para ajudar!"
    }
  ]

  return (
    <div className="min-h-screen bg-brand-background pt-[180px] pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-6">
          Bem-vindo à revolução dos produtos do Corinthians no Brasil
        </h1>
        <p className="text-xl md:text-2xl text-brand-text/80 mb-8">
          Compre um box e receba{" "}
          <span className="text-brand-primary">produtos incríveis</span> em casa ou{" "}
          <span className="text-brand-primary">viva experiências inesquecíveis</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-brand-primary text-brand-background hover:bg-brand-primary/90">
            Como Funciona?
          </Button>
          <Link href="/#produtos">
            <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-background">
              Ver Todas as Caixas
            </Button>
          </Link>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-brand-primary/20 to-yellow-600/20 rounded-lg p-8 flex items-center justify-center">
            <Gift className="w-32 h-32 text-brand-primary" />
          </div>
        </div>
      </div>

      {/* Como Funciona Steps */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-brand-text text-center mb-12">
          Como Funciona?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-brand-cardBg border-brand-borderMuted/20 h-full relative overflow-hidden">
              <CardContent className="p-6 text-center h-full flex flex-col">
                {/* Número do passo */}
                <div className="absolute top-4 right-4 bg-brand-primary text-brand-background w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                
                <div className="mb-6 mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-4">
                  {step.title}
                </h3>
                <p className="text-brand-text/70 flex-grow">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Box Experience Section */}
      <div className="bg-gradient-to-r from-brand-primary/20 to-orange-500/20 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-4">
            O que é o{" "}
            <span className="text-brand-primary">BOX EXPERIENCE?</span>
          </h2>
          <p className="text-brand-text/80 max-w-4xl mx-auto mb-8 text-lg">
            Oferecemos a oportunidade de viver experiências exclusivas relacionadas ao 
            Sport Club Corinthians Paulista. Somos especializados em produtos oficiais 
            e experiências únicas que conectam você ainda mais com o Timão.
          </p>
          <p className="text-brand-primary font-semibold mb-8">
            Conheça algumas das nossas experiências futuras:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Arena Experience", icon: "🏟️" },
              { title: "Camarote VIP", icon: "🎫" },
              { title: "Dia na Arena", icon: "⚽" },
              { title: "Encontro com Ídolos", icon: "🌟" }
            ].map((experience, index) => (
              <div key={index} className="bg-brand-cardBg rounded-lg p-4 text-center border border-brand-borderMuted/20">
                <div className="text-4xl mb-2">{experience.icon}</div>
                <p className="text-brand-text text-sm font-medium">{experience.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Image */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-text mb-6">
              Ficou alguma dúvida?
            </h3>
            <div className="bg-brand-cardBg rounded-lg p-8 flex items-center justify-center border border-brand-borderMuted/20">
              <MessageCircle className="w-24 h-24 text-brand-primary" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-brand-cardBg border-brand-borderMuted/20 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-brand-text text-left hover:text-brand-primary">
                    <span className="flex items-center gap-3">
                      <span className="bg-brand-primary text-brand-background w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text/70 pl-9">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-brand-cardBg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-12 h-12 text-brand-primary" />
              <p className="text-brand-text">
                Ainda não entendeu alguma coisa? Temos o nosso suporte no WhatsApp, 
                só clicar no botão ao lado que você pode conversar conosco:
              </p>
            </div>
            <div className="text-center">
              <Link 
                href="https://api.whatsapp.com/send?phone=5511934471420&text=Ol%C3%A1!" 
                target="_blank"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-4 text-center">
        <Link href="/#produtos">
          <Button size="lg" className="bg-brand-primary text-brand-background hover:bg-brand-primary/90">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ver Todas as Caixas
          </Button>
        </Link>
      </div>
    </div>
  )
}