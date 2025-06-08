# Script para atualizar GitHub automaticamente
param(
    [string]$message = "Atualização automática"
)

Write-Host "Iniciando atualização do GitHub..." -ForegroundColor Cyan

# Adicionar todas as mudanças
Write-Host "Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Verificar se há mudanças para commit
$status = git status --porcelain
if ([string]::IsNullOrEmpty($status)) {
    Write-Host "Nenhuma mudança para committar." -ForegroundColor Green
    exit 0
}

# Fazer commit
Write-Host "Fazendo commit..." -ForegroundColor Yellow
git commit -m $message

# Fazer push
Write-Host "Enviando para GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "Atualização concluída com sucesso!" -ForegroundColor Green 