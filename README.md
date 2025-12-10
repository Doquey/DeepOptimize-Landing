# DeepOptimize - MLOps Optimization Agency

Landing page profissional para agência de otimização de modelos de Machine Learning, construída com Next.js, React e TypeScript.

## 🚀 Características

- **Next.js 16** com App Router
- **React 19** com TypeScript
- **CSS Modules** para estilização modular
- Design responsivo (mobile, tablet, desktop)
- Animações suaves e interativas
- Tema preto e azul moderno
- Performance otimizada

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🎨 Estrutura do Projeto

```
deepoptimize-site/
├── app/
│   ├── layout.tsx       # Layout raiz com metadata
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais
├── components/
│   ├── Navbar.tsx       # Navegação fixa
│   ├── Hero.tsx         # Seção hero com estatísticas
│   ├── Services.tsx     # Serviços oferecidos
│   ├── CaseStudy.tsx    # Case de sucesso CLIP
│   ├── Process.tsx      # Processo de otimização
│   ├── CTA.tsx          # Call-to-action
│   └── Footer.tsx       # Rodapé
├── public/              # Arquivos estáticos
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎯 Seções da Landing Page

1. **Hero** - Apresentação principal com estatísticas de impacto
2. **Services** - 3 serviços principais (Compressão, Latência, Edge)
3. **Case Study** - Case de sucesso com CLIP (200MB → 13MB)
4. **Process** - Metodologia em 4 passos
5. **CTA** - Call-to-action para contato
6. **Footer** - Links e informações

## ⚙️ Customização

### Cores

Edite as variáveis CSS em `app/globals.css`:

```css
:root {
  --primary-blue: #0066FF;
  --secondary-blue: #00BFFF;
  --black: #000000;
  /* ... */
}
```

### Conteúdo

- **Email de contato**: Edite em `components/CTA.tsx` (linha do mailto)
- **Metadata**: Edite em `app/layout.tsx`
- **Serviços**: Edite o array em `components/Services.tsx`
- **Processo**: Edite o array em `components/Process.tsx`

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Outros Hosts

```bash
# Build
npm run build

# A pasta .next/ contém os arquivos buildados
# Upload para seu host preferido
```

## 📱 Responsividade

- **Desktop**: 1200px+ (layout completo)
- **Tablet**: 640px - 1200px (grid adaptativo)
- **Mobile**: < 640px (layout em coluna única)

## 🔧 Tecnologias

- Next.js 16.0.8
- React 19.2.1
- TypeScript 5.9.3
- CSS Modules
- Google Fonts (Inter)

## 📄 Licença

Projeto desenvolvido para DeepOptimize © 2025
