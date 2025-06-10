import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Configurações de filtro
const FILTERS = {
  // Referências permitidas (anúncios)
  ALLOWED_REFERRERS: [
    'facebook.com',
    'google.com',
    'instagram.com',
    'youtube.com',
    'tiktok.com',
    'twitter.com',
    'linkedin.com',
    'pinterest.com'
  ],
  
  // Parâmetros UTM válidos
  VALID_UTM_SOURCES: [
    'facebook-ads',
    'google-ads',
    'instagram-ads',
    'youtube-ads',
    'tiktok-ads',
    'campaign'
  ],
  
  // User Agents de bots bloqueados
  BLOCKED_USER_AGENTS: [
    'bot',
    'crawler',
    'spider',
    'scraper',
    'facebook',
    'whatsapp',
    'telegram',
    'adspy',
    'bigspy',
    'poweradspy'
  ],
  
  // Países permitidos (códigos ISO)
  ALLOWED_COUNTRIES: ['BR', 'US', 'PT', 'ES'], // Brasil, EUA, Portugal, Espanha
  
  // ISPs bloqueados
  BLOCKED_ISPS: [
    'digitalocean',
    'amazonaws',
    'googlecloud',
    'azure',
    'ovh'
  ]
}

// Chave secreta para bypass
const BYPASS_KEY = 'VIP-BOXTIMAO-2025'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const userAgent = request.headers.get('user-agent') || ''
  const referer = request.headers.get('referer') || ''
  const ip = request.ip || request.headers.get('x-forwarded-for') || ''
  
  // Bypass com chave secreta
  if (url.searchParams.get('key') === BYPASS_KEY) {
    const response = NextResponse.next()
    response.cookies.set('access_granted', 'true', {
      maxAge: 7 * 24 * 60 * 60, // 7 dias
      httpOnly: true,
      secure: true
    })
    return response
  }
  
  // Verificar se já tem cookie de acesso
  if (request.cookies.get('access_granted')?.value === 'true') {
    return NextResponse.next()
  }
  
  // 1. FILTRO: User Agent (Bots)
  const isBot = FILTERS.BLOCKED_USER_AGENTS.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  )
  if (isBot) {
    return createBlockedResponse('Bot detectado')
  }
  
  // 2. FILTRO: Referência (Anúncios)
  let validReferrer = false
  if (referer) {
    validReferrer = FILTERS.ALLOWED_REFERRERS.some(domain =>
      new URL(referer).hostname.includes(domain)
    )
  }
  
  // 3. FILTRO: Parâmetros UTM
  const utmSource = url.searchParams.get('utm_source')
  const validUTM = utmSource && FILTERS.VALID_UTM_SOURCES.includes(utmSource)
  
  // 4. FILTRO: Acesso direto permitido apenas com UTM ou referrer válido
  if (!validReferrer && !validUTM) {
    return createBlockedResponse('Acesso negado - Entre através do anúncio')
  }
  
  // 5. FILTRO: Proxy/VPN básico (verifica headers suspeitos)
  const suspiciousHeaders = [
    'x-forwarded-for',
    'x-real-ip',
    'cf-connecting-ip'
  ]
  const hasMultipleIPs = suspiciousHeaders.some(header => {
    const value = request.headers.get(header)
    return value && value.split(',').length > 2
  })
  
  if (hasMultipleIPs) {
    return createBlockedResponse('Proxy/VPN detectado')
  }
  
  // Acesso liberado - criar cookie
  const response = NextResponse.next()
  response.cookies.set('access_granted', 'true', {
    maxAge: 24 * 60 * 60, // 24 horas
    httpOnly: true,
    secure: true
  })
  
  return response
}

function createBlockedResponse(reason: string) {
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Acesso Restrito - Box da Fiel</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          color: white;
        }
        .container {
          text-align: center;
          background: rgba(255,255,255,0.1);
          padding: 3rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          max-width: 500px;
        }
        .logo {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #FFD700;
        }
        .message {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .cta {
          background: #FFD700;
          color: #1e3c72;
          padding: 15px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .cta:hover {
          transform: translateY(-2px);
        }
        .reason {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-top: 2rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">⚽ BOX DA FIEL</div>
        <div class="message">
          <strong>Acesso Restrito</strong><br/>
          Esta área é exclusiva para clientes que vieram através dos nossos anúncios oficiais.
        </div>
        <a href="https://www.facebook.com/boxdafiel" class="cta">
          Ver Anúncios Oficiais
        </a>
        <div class="reason">Motivo: ${reason}</div>
      </div>
    </body>
    </html>
    `,
    {
      status: 403,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    }
  )
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 