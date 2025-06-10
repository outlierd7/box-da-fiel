#!/bin/bash

echo "🛡️  Deploying Sistema de Filtros - Box da Fiel"
echo "=============================================="

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_info() { echo -e "${YELLOW}ℹ️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }

print_info "Verificando se estamos na VPS..."

# Verificar se estamos na VPS
if [[ ! -d "/home/boxdafiel" ]]; then
    print_error "Este script deve ser executado na VPS!"
    exit 1
fi

print_info "Navegando para o diretório do projeto..."
cd /home/boxdafiel/public_html/box-ultimaedicao

print_info "Fazendo backup dos arquivos atuais..."
cp -r .next .next.backup.$(date +%Y%m%d_%H%M%S) 2>/dev/null || true

print_info "Atualizando código do repositório..."
git pull origin main

print_info "Instalando dependências..."
npm ci --production

print_info "Compilando aplicação com filtros..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build concluído com sucesso!"
    
    print_info "Reiniciando aplicação PM2..."
    pm2 restart boxtimao
    
    print_info "Verificando status..."
    pm2 status
    
    print_success "Deploy do sistema de filtros concluído!"
    
    echo ""
    echo "🔗 LINKS IMPORTANTES:"
    echo "================================"
    echo "🌐 Site: https://boxtimao.store"
    echo "🛡️  Painel Admin: https://boxtimao.store/admin/filtros"
    echo "🔑 Link Bypass: https://boxtimao.store?key=VIP-BOXTIMAO-2025"
    echo ""
    echo "📊 LINKS PARA ANÚNCIOS:"
    echo "Facebook: https://boxtimao.store?utm_source=facebook-ads&utm_campaign=box-fiel-2025"
    echo "Google: https://boxtimao.store?utm_source=google-ads&utm_campaign=box-fiel-2025"
    echo "Instagram: https://boxtimao.store?utm_source=instagram-ads&utm_campaign=box-fiel-2025"
    echo ""
    print_success "Sistema de filtros ativo e funcionando!"
else
    print_error "Erro no build! Verificando logs..."
    npm run build
    exit 1
fi 