"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

export default function Ajuda() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona o Box da Fiel?",
      answer: "O Box da Fiel oferece caixas misteriosas com produtos temáticos do Corinthians. Cada caixa contém itens surpresa com diferentes valores e raridades. Você compra uma caixa e descobre os itens que ganhou!"
    },
    {
      question: "Quais são as chances de ganhar cada item?",
      answer: "Cada item tem uma probabilidade específica que é informada na descrição da caixa. Os itens mais raros têm menores chances, enquanto itens comuns têm maiores probabilidades."
    },
    {
      question: "Posso devolver uma caixa?",
      answer: "Devido à natureza de produtos surpresa, não aceitamos devoluções de caixas abertas. Apenas produtos com defeito de fabricação podem ser trocados mediante análise."
    },
    {
      question: "Como faço para pagar?",
      answer: "Aceitamos pagamentos via PIX, cartão de crédito e outras formas de pagamento disponíveis em nossa plataforma segura."
    },
    {
      question: "Quanto tempo leva para receber minha caixa?",
      answer: "O prazo de entrega varia conforme sua localização. Geralmente entre 5 a 15 dias úteis após a confirmação do pagamento."
    },
    {
      question: "Posso comprar mais de uma caixa?",
      answer: "Sim! Você pode comprar quantas caixas desejar. Cada caixa é uma nova oportunidade de ganhar itens diferentes."
    },
    {
      question: "Os itens são originais?",
      answer: "Sim, todos os produtos são oficiais e licenciados pelo Sport Club Corinthians Paulista."
    },
    {
      question: "Como posso acompanhar meu pedido?",
      answer: "Após a compra, você receberá um código de rastreamento por e-mail para acompanhar o status da sua entrega."
    },
    {
      question: "Posso escolher os itens da caixa?",
      answer: "Não, a essência do Box da Fiel é a surpresa! Os itens são selecionados aleatoriamente com base nas probabilidades informadas."
    },
    {
      question: "Como entro em contato com o suporte?",
      answer: "Você pode entrar em contato conosco através do e-mail boxdafiel@gmail.com ou pelas nossas redes sociais."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-brand-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/">
              <Button variant="outline" className="mb-4">
                ← Voltar ao início
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-brand-primary mb-2">Perguntas Frequentes (FAQ)</h1>
            <p className="text-brand-textMuted">Encontre respostas para as dúvidas mais comuns</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-brand-borderMuted/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-brand-primary pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-brand-textSecondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-brand-borderMuted/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Ainda tem dúvidas?</h2>
            <p className="text-brand-textSecondary mb-6">
              Nossa equipe está sempre pronta para ajudar! Entre em contato conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:boxdafiel@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-black font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
              >
                📧 Enviar E-mail
              </a>
              <a 
                href="https://www.instagram.com/boxdafiel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-primary text-brand-primary font-semibold rounded-lg hover:bg-brand-primary hover:text-black transition-colors"
              >
                📱 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 