# Setup e Instalação

## ⚠️ Requisitos

- **Node.js >= 20.9.0** (versão atual no sistema: 18.20.8)
- npm ou yarn

## 🔧 Atualizar Node.js

### Opção 1: Usando nvm (Recomendado)

```bash
# Instalar nvm (se não tiver)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instalar Node.js 20
nvm install 20
nvm use 20

# Verificar versão
node --version  # Deve mostrar v20.x.x
```

### Opção 2: Usar Next.js 14 (compatível com Node 18)

Se preferir não atualizar o Node.js, pode usar o Next.js 14:

```bash
# No diretório deepoptimize-site
npm install next@14 react@latest react-dom@latest
```

## 🚀 Iniciar o Projeto

Após atualizar o Node.js para versão 20+:

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Acessar no navegador
# http://localhost:3000
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento (porta 3000)
npm run build    # Build para produção
npm start        # Servidor de produção
npm run lint     # Linting (se configurado)
```

## 🌐 Deploy Rápido

### Vercel

1. Criar conta em [vercel.com](https://vercel.com)
2. Conectar repositório GitHub
3. Deploy automático a cada push

ou via CLI:

```bash
npx vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy pasta .next/
npx netlify deploy --prod
```

## 🐛 Troubleshooting

### Erro: "Node.js version >=20.9.0 is required"

**Solução**: Atualize o Node.js usando nvm ou instale Next.js 14

### Erro de módulos não encontrados

```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já em uso

```bash
# Rodar em outra porta
PORT=3001 npm run dev
```

## 📝 Notas

- O projeto usa CSS Modules (sem Tailwind)
- TypeScript strict mode está habilitado
- Todas as rotas usam App Router (Next.js 13+)
