import Image from "next/image"
import Link from "next/link"
import { InstagramIcon } from "lucide-react" // Exemplo, o original usa ri-instagram-line

export function Footer() {
  // Estrutura baseada no <footer data-v-3ec7c192="" class="footer-crt">
  const footerNav1 = [
    { href: "/", label: "Início" },
    { href: "javascript:void(0)", label: "Cadastre-se" },
    { href: "/como-funciona", label: "Como Funciona" },
    { href: "/Ajuda", label: "FAQ" },
  ]
  const footerNav2 = [
    { href: "javascript:void(0)", label: "Entrar" },
    { href: "/TermosDeUso", label: "Termos de Uso" },
    { href: "/PoliticaDePrivacidade", label: "Política de Privacidade" },
  ]

  return (
    <footer className="bg-black text-brand-textMuted py-8">
      {" "}
      {/* footer-crt */}
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Coluna 1: Logo e Social */}
          <div className="col-xs-12 md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="mb-3">
              <Image
                src="https://www.boxdafiel.com/img/logohor.9085d7a9.webp"
                alt="Box da Fiel Logo"
                width={120}
                height={30}
                className="h-auto"
                style={{ maxWidth: "120px" }}
              />
            </Link>
            <ul className="social-links flex space-x-3">
              <li>
                <a
                  href="https://www.instagram.com/boxdafiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary"
                >
                  <InstagramIcon size={24} /> {/* Substituir por ri-instagram-line se necessário */}
                </a>
              </li>
              {/* Adicionar outros links sociais se houver */}
            </ul>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="col-xs-12 md:col-span-1">
            <nav className="nav-footer">
              <ul className="space-y-2">
                {footerNav1.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="nav-link text-sm hover:text-brand-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna 3: Navegação e Selos */}
          <div className="col-xs-12 md:col-span-1">
            <nav className="nav-footer">
              <ul className="space-y-2">
                {footerNav2.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="nav-link text-sm hover:text-brand-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="flex items-center justify-center md:justify-start space-x-2 mt-3">
                  <Image
                    src="https://gamecomm.s3.amazonaws.com/pix-106.svg"
                    alt="Pix"
                    width={60} // Ajustar tamanho
                    height={20}
                    className="img-gray p-1" // Original tem p-2, mt-12
                  />
                  <Image
                    src="https://www.boxdafiel.com/img/reclame-aqui-logo.fff7341f.png"
                    alt="Reclame Aqui"
                    width={70} // Ajustar tamanho
                    height={20}
                    className="img-gray p-1"
                  />
                </li>
              </ul>
            </nav>
          </div>

          {/* Coluna 4: Logo GameComm */}
          <div className="col-xs-12 md:col-span-1 flex justify-center md:justify-end items-center pt-3 md:pt-0">
            <a href="https://gameecom.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://gamecomm.s3.amazonaws.com/logo-gamecomm.png"
                alt="GameComm"
                width={100} // Ajustar tamanho
                height={30}
                className="img-gray"
              />
            </a>
          </div>
        </div>

        <div className="text-center text-xs mt-8 pt-8 border-t border-brand-borderMuted">
          ® {new Date().getFullYear()} Box da Fiel - Todos os direitos reservados
        </div>
      </div>
    </footer>
  )
}
