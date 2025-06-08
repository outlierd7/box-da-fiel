#!/bin/bash

echo "🚀 Setup automático da VPS para Box da Fiel"
echo "============================================"

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para prints coloridos
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar se está rodando como root
if [[ $EUID -eq 0 ]]; then
   print_error "Este script não deve ser executado como root"
   exit 1
fi

print_info "Iniciando configuração da VPS..."

# 1. Atualizar sistema
print_info "Atualizando sistema..."
sudo apt update && sudo apt upgrade -y
print_success "Sistema atualizado"

# 2. Instalar dependências básicas
print_info "Instalando dependências básicas..."
sudo apt install -y curl wget git build-essential
print_success "Dependências básicas instaladas"

# 3. Instalar Node.js 18
print_info "Instalando Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
print_success "Node.js instalado: $(node --version)"

# 4. Instalar PM2
print_info "Instalando PM2..."
sudo npm install -g pm2
print_success "PM2 instalado: $(pm2 --version)"

# 5. Configurar PM2 para inicialização automática
print_info "Configurando PM2 para inicialização automática..."
pm2 startup > /tmp/pm2_startup.txt
sudo $(tail -n 1 /tmp/pm2_startup.txt)
print_success "PM2 configurado para inicialização automática"

# 6. Criar estrutura de diretórios
print_info "Criando estrutura de diretórios..."
mkdir -p /home/$USER/public_html
mkdir -p /home/$USER/backups
mkdir -p /home/$USER/logs
print_success "Diretórios criados"

# 7. Configurar firewall (se UFW estiver disponível)
if command -v ufw &> /dev/null; then
    print_info "Configurando firewall..."
    sudo ufw allow 22
    sudo ufw allow 80
    sudo ufw allow 443
    sudo ufw allow 3017
    print_success "Firewall configurado"
fi

# 8. Instalar Nginx (alternativa ao Apache)
read -p "Deseja instalar Nginx como proxy reverso? (y/n): " install_nginx
if [[ $install_nginx == "y" || $install_nginx == "Y" ]]; then
    print_info "Instalando Nginx..."
    sudo apt install -y nginx
    
    # Criar configuração básica do Nginx
    sudo tee /etc/nginx/sites-available/box-ultimaedicao > /dev/null <<EOF
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;
    
    location / {
        proxy_pass http://localhost:3017;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
    
    # Ativar site
    sudo ln -sf /etc/nginx/sites-available/box-ultimaedicao /etc/nginx/sites-enabled/
    sudo nginx -t && sudo systemctl restart nginx
    print_success "Nginx instalado e configurado"
fi

# 9. Criar script de monitoramento
print_info "Criando script de monitoramento..."
cat > /home/$USER/monitor.sh << 'EOF'
#!/bin/bash
echo "📊 Status do Sistema - Box da Fiel"
echo "=================================="
echo
echo "🔧 PM2 Status:"
pm2 status
echo
echo "💾 Uso de Memória:"
free -h
echo
echo "💽 Uso de Disco:"
df -h /
echo
echo "🌐 Porta 3017:"
netstat -tulpn | grep :3017 || echo "Porta 3017 não está em uso"
echo
echo "📋 Últimos logs (últimas 10 linhas):"
pm2 logs box-ultimaedicao --lines 10 2>/dev/null || echo "Aplicação não está rodando"
EOF

chmod +x /home/$USER/monitor.sh
print_success "Script de monitoramento criado"

# 10. Criar alias úteis
print_info "Criando aliases úteis..."
cat >> ~/.bashrc << 'EOF'

# Aliases para Box da Fiel
alias box-status="pm2 status"
alias box-logs="pm2 logs box-ultimaedicao"
alias box-restart="pm2 restart box-ultimaedicao"
alias box-monitor="~/monitor.sh"
alias box-deploy="cd /home/$USER/public_html/box-ultimaedicao && ./deploy.sh"
EOF

print_success "Aliases criados"

# 11. Configurar Git (se ainda não estiver configurado)
if ! git config --global user.name &> /dev/null; then
    print_info "Configurando Git..."
    read -p "Digite seu nome para o Git: " git_name
    read -p "Digite seu email para o Git: " git_email
    git config --global user.name "$git_name"
    git config --global user.email "$git_email"
    print_success "Git configurado"
fi

# 12. Verificar se tudo está funcionando
print_info "Verificando instalações..."
echo "Node.js: $(node --version)"
echo "NPM: $(npm --version)"
echo "PM2: $(pm2 --version)"
echo "Git: $(git --version)"

print_success "Setup concluído!"
echo
echo "📋 Próximos passos:"
echo "1. Faça o clone do projeto: git clone https://github.com/seu-usuario/box-ultimaedicao.git"
echo "2. Entre no diretório: cd box-ultimaedicao"
echo "3. Execute o deploy: ./deploy.sh"
echo "4. Configure seu domínio no painel da Hostinger"
echo "5. Para SSL gratuito: sudo certbot --nginx -d seu-dominio.com"
echo
echo "📊 Para monitorar: ~/monitor.sh"
echo "📋 Para ver logs: box-logs"
echo "🔄 Para restart: box-restart"
echo
print_success "VPS está pronta para o deploy!" 