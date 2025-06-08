# Box da Fiel - Site Oficial

Este é o projeto do site oficial da Box da Fiel desenvolvido em Next.js.

## 🚀 Como executar o projeto

### Primeira vez (Setup inicial):
```bash
# 1. Instalar dependências
npm install

# 2. Executar em modo desenvolvimento
npm run dev
```

### Próximas vezes (Execução rápida):
```bash
# Apenas executar o servidor
npm run dev
```

## 🌐 Acessar o site

Após executar `npm run dev`, o site estará disponível em:
- **Local**: http://localhost:3000
- **Rede**: http://192.168.1.102:3000 (acessível por outros dispositivos na mesma rede)

## 📋 Scripts disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa o servidor de produção
- `npm run lint` - Executa o linter
- `npm run setup` - Script completo de configuração inicial

## 🛠️ Tecnologias utilizadas

- **Framework**: Next.js 15.2.4
- **React**: 19
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Language**: TypeScript

## 📁 Estrutura do projeto

```
├── app/                 # Páginas e layouts (App Router)
├── components/          # Componentes reutilizáveis
├── lib/                # Utilitários e configurações
├── hooks/              # Custom hooks
├── styles/             # Estilos globais
├── public/             # Arquivos estáticos
└── ...
```

## 🔧 Configurações importantes

- O projeto está configurado para ignorar erros de TypeScript e ESLint durante o build
- As imagens estão configuradas como não otimizadas
- O site é responsivo e possui sistema de autenticação

## 📝 Notas importantes

- **Porta padrão**: 3000
- **Ambiente**: Desenvolvimento local
- **Auto-reload**: Habilitado (mudanças são aplicadas automaticamente)
- **TypeScript**: Configurado e ativo

---

**Desenvolvido para a Box da Fiel** 🏆 