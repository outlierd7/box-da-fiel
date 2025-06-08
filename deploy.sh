#!/bin/bash

echo "🚀 Iniciando deploy na VPS Hostinger..."

# Configurações
PROJECT_NAME="box-ultimaedicao"
DEPLOY_PATH="/home/boxdafiel/public_html/$PROJECT_NAME"
BACKUP_PATH="/home/boxdafiel/backups"
GITHUB_REPO="https://github.com/seu-usuario/box-ultimaedicao.git"

# Criar diretório de logs se não existir
mkdir -p $DEPLOY_PATH/logs

# Criar backup da versão atual (se existir)
if [ -d "$DEPLOY_PATH" ]; then
    echo "📦 Criando backup da versão atual..."
    mkdir -p $BACKUP_PATH
    tar -czf "$BACKUP_PATH/backup-$(date +%Y%m%d-%H%M%S).tar.gz" -C $DEPLOY_PATH .
fi

# Parar a aplicação atual
echo "🛑 Parando aplicação atual..."
pm2 stop $PROJECT_NAME 2>/dev/null || echo "Aplicação não estava rodando"

# Fazer o deploy
echo "📥 Fazendo download do projeto..."
cd /home/boxdafiel/public_html/

# Se o diretório existe, fazer pull; senão, fazer clone
if [ -d "$PROJECT_NAME" ]; then
    cd $PROJECT_NAME
    git pull origin main
else
    git clone $GITHUB_REPO $PROJECT_NAME
    cd $PROJECT_NAME
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm ci --production

# Fazer build da aplicação
echo "🔨 Fazendo build da aplicação..."
npm run build

# Iniciar aplicação com PM2
echo "🚀 Iniciando aplicação..."
pm2 start ecosystem.config.js

# Salvar configuração do PM2
pm2 save

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Aplicação rodando em: http://seu-dominio.com"
echo "📊 Status: pm2 status"
echo "📋 Logs: pm2 logs $PROJECT_NAME" 