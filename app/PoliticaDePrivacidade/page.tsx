"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PoliticaDePrivacidade() {
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
            <h1 className="text-3xl font-bold text-brand-primary mb-2">Política de Privacidade</h1>
            <p className="text-brand-textMuted">Última atualização: Janeiro de 2025</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-brand-borderMuted/20 rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">1. Informações que Coletamos</h2>
              <div className="space-y-3">
                <p className="text-brand-textSecondary leading-relaxed">
                  <strong>Informações Pessoais:</strong> Nome, e-mail, endereço, telefone, dados de pagamento
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  <strong>Informações de Uso:</strong> Dados sobre como você usa nosso site, páginas visitadas, tempo gasto
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  <strong>Informações Técnicas:</strong> Endereço IP, tipo de navegador, sistema operacional
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">2. Como Usamos Suas Informações</h2>
              <div className="space-y-3">
                <p className="text-brand-textSecondary leading-relaxed">
                  • Processar pedidos e pagamentos
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Fornecer suporte ao cliente
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Enviar atualizações sobre produtos e promoções
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Melhorar nossos serviços e experiência do usuário
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Cumprir obrigações legais
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">3. Compartilhamento de Informações</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando:
              </p>
              <div className="space-y-3 mt-3">
                <p className="text-brand-textSecondary leading-relaxed">
                  • Necessário para processar pagamentos (processadores de pagamento seguros)
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Exigido por lei ou autoridades competentes
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Para proteger nossos direitos e propriedade
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">4. Segurança dos Dados</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">5. Cookies e Tecnologias Similares</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Utilizamos cookies para melhorar sua experiência em nosso site, lembrar suas preferências e 
                analisar o tráfego. Você pode controlar o uso de cookies nas configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">6. Seus Direitos (LGPD)</h2>
              <div className="space-y-3">
                <p className="text-brand-textSecondary leading-relaxed">
                  Conforme a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Acessar suas informações pessoais
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Corrigir dados incompletos ou incorretos
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Solicitar a exclusão de seus dados
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Revogar seu consentimento
                </p>
                <p className="text-brand-textSecondary leading-relaxed">
                  • Solicitar a portabilidade de dados
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">7. Retenção de Dados</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos 
                nesta política ou conforme exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">8. Menores de Idade</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Nossos serviços não são destinados a menores de 18 anos. Não coletamos intencionalmente 
                informações pessoais de crianças sem o consentimento dos pais ou responsáveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">9. Alterações na Política</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Podemos atualizar esta Política de Privacidade ocasionalmente. Notificaremos sobre mudanças 
                significativas através do site ou por e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">10. Contato</h2>
              <p className="text-brand-textSecondary leading-relaxed">
                Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:
              </p>
              <div className="mt-3 space-y-2">
                <p className="text-brand-textSecondary">
                  E-mail: <a href="mailto:boxdafiel@gmail.com" className="text-brand-primary hover:underline">boxdafiel@gmail.com</a>
                </p>
                <p className="text-brand-textSecondary">
                  Encarregado de Dados: Box da Fiel
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 