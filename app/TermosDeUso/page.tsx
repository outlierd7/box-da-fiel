"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermosDeUso() {
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
            <h1 className="text-3xl font-bold text-brand-primary mb-2">Termos de Uso</h1>
            <p className="text-brand-textMuted">Última atualização: Janeiro de 2025</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-brand-borderMuted/20 rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">1. Aceitação dos Termos</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Ao acessar e usar o Box da Fiel, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concorda com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">2. Descrição do Serviço</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                O Box da Fiel é uma plataforma de vendas de caixas misteriosas com produtos temáticos do Sport Club Corinthians Paulista. 
                Cada caixa contém itens surpresa com valores e raridades diferentes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">3. Compras e Pagamentos</h2>
              <div className="space-y-3">
                <p className="text-brand-textSecondary leading-relaxed">
                  • Todas as compras são finais e não há garantia de itens específicos
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Os pagamentos são processados através de nossa plataforma segura
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • As probabilidades dos itens são informadas e não podem ser alteradas após a compra
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">4. Conta do Usuário</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Você é responsável por manter a confidencialidade de sua conta e senha. 
                Você concorda em aceitar a responsabilidade por todas as atividades que ocorrem sob sua conta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">5. Política de Devolução</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Devido à natureza de produtos surpresa, não aceitamos devoluções de caixas abertas. 
                Produtos com defeito podem ser trocados mediante análise e aprovação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">6. Limitação de Responsabilidade</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                O Box da Fiel não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais 
                resultantes do uso de nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">7. Modificações dos Termos</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                As alterações entram em vigor imediatamente após a publicação no site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">8. Contato</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Para questões sobre estes Termos de Uso, entre em contato conosco através do e-mail: 
                <a href="mailto:boxdafiel@gmail.com" className="text-brand-primary hover:underline"> boxdafiel@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 