# 🚀 Guia de Deploy - VPS Hostinger

## Pré-requisitos na VPS

### 1. Instalar Node.js
```bash
# Atualizar o sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js (versão 18 ou superior)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalação
node --version
npm --version
```

### 2. Instalar PM2 (Process Manager)
```bash
sudo npm install -g pm2

# Configurar PM2 para iniciar automaticamente
pm2 startup
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME
```

### 3. Instalar Git
```bash
sudo apt install git -y
```

## Passos para Deploy

### 1. Conectar na VPS via SSH
```bash
ssh seu-usuario@seu-ip-vps
```

### 2. Navegar para o diretório web
```bash
cd /home/boxdafiel/public_html/
```

### 3. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/box-ultimaedicao.git
cd box-ultimaedicao
```

### 4. Instalar dependências
```bash
npm ci --production
```

### 5. Fazer build da aplicação
```bash
npm run build
```

### 6. Dar permissões ao script de deploy
```bash
chmod +x deploy.sh
```

### 7. Iniciar aplicação com PM2
```bash
pm2 start ecosystem.config.js
pm2 save
```

## Configuração do Domínio

### 1. No painel da Hostinger
- Vá em **Hosting** → **Manage**
- Clique em **Advanced** → **Subdomains**
- Crie um subdomínio ou configure o domínio principal

### 2. Configurar DNS (se necessário)
- Aponte o domínio para o IP da VPS
- Aguarde propagação (até 24h)

## Scripts Úteis

### Deploy automático
```bash
./deploy.sh
```

### Comandos PM2
```bash
# Ver status
pm2 status

# Ver logs
pm2 logs box-ultimaedicao

# Restart
pm2 restart box-ultimaedicao

# Stop
pm2 stop box-ultimaedicao

# Deletar processo
pm2 delete box-ultimaedicao
```

### Atualizar aplicação
```bash
cd /home/boxdafiel/public_html/box-ultimaedicao
git pull origin main
npm ci --production
npm run build
pm2 restart box-ultimaedicao
```

## SSL/HTTPS (Certificado gratuito)

### 1. Instalar Certbot
```bash
sudo apt install snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
```

### 2. Obter certificado
```bash
sudo certbot --apache -d seu-dominio.com
```

### 3. Renovação automática
```bash
sudo crontab -e
# Adicionar linha:
0 12 * * * /usr/bin/certbot renew --quiet
```

## Monitoramento

### 1. Logs da aplicação
```bash
pm2 logs box-ultimaedicao --lines 100
```

### 2. Monitoramento em tempo real
```bash
pm2 monit
```

### 3. Verificar uso de recursos
```bash
htop
df -h
free -h
```

## Backup

### 1. Script de backup automático
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/boxdafiel/backups"
PROJECT_DIR="/home/boxdafiel/public_html/box-ultimaedicao"

mkdir -p $BACKUP_DIR
tar -czf "$BACKUP_DIR/backup_$DATE.tar.gz" -C $PROJECT_DIR .

# Manter apenas os últimos 7 backups
find $BACKUP_DIR -name "backup_*.tar.gz" -mtime +7 -delete
```

### 2. Agendar backup diário
```bash
crontab -e
# Adicionar linha para backup diário às 2h da manhã:
0 2 * * * /home/boxdafiel/backup.sh
```

## Troubleshooting

### Problema: Aplicação não inicia
```bash
# Verificar logs
pm2 logs box-ultimaedicao

# Verificar se a porta está sendo usada
netstat -tulpn | grep :3017

# Reiniciar PM2
pm2 kill
pm2 start ecosystem.config.js
```

### Problema: Erro de permissões
```bash
# Corrigir permissões do diretório
sudo chown -R boxdafiel:boxdafiel /home/boxdafiel/public_html/box-ultimaedicao
```

### Problema: Memória insuficiente
```bash
# Verificar uso de memória
free -h

# Adicionar swap se necessário
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

## URLs de Acesso

- **Produção**: http://seu-dominio.com
- **PM2 Monitor**: `pm2 monit`
- **Logs**: `pm2 logs box-ultimaedicao`

## Contatos para Suporte

- **Documentação Next.js**: https://nextjs.org/docs
- **Documentação PM2**: https://pm2.keymetrics.io/docs/
- **Suporte Hostinger**: https://www.hostinger.com.br/contato 