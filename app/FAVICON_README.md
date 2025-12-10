# Como Personalizar o Favicon (Ícone do Título)

## Opção 1: Usar Sua Própria Logo (Recomendado)

Se você quiser usar sua logo como favicon:

### 1. Prepare suas imagens:

- **favicon.ico** - 32x32px (formato ICO)
- **icon.png** - 32x32px (formato PNG)
- **apple-icon.png** - 180x180px (para dispositivos Apple)

### 2. Coloque na pasta `app/`:

```bash
cp sua-logo-32x32.png app/icon.png
cp sua-logo-180x180.png app/apple-icon.png
cp sua-logo.ico app/favicon.ico
```

### 3. Delete os arquivos gerados automaticamente:

```bash
rm app/icon.tsx
rm app/apple-icon.tsx
```

O Next.js automaticamente detectará os arquivos PNG/ICO e usará como favicon.

---

## Opção 2: Usar o Favicon Atual (Letra "D" com Gradiente)

O favicon atual já está configurado e mostra a letra **"D"** (de DeepOptimize) com o gradiente azul do site.

**Arquivos atuais:**
- `app/icon.tsx` - Gera favicon 32x32px dinamicamente
- `app/apple-icon.tsx` - Gera ícone Apple 180x180px dinamicamente

Estes arquivos geram os favicons automaticamente usando a letra "D" estilizada.

---

## Opção 3: Customizar o Favicon Gerado

Se você quiser mudar a letra ou estilo:

### Edite `app/icon.tsx`:

```tsx
// Mude a letra aqui:
<div>
  D  // <- Troque por qualquer letra/símbolo
</div>
```

### Ou mude as cores:

```tsx
background: 'linear-gradient(135deg, #0066FF, #00BFFF)', // <- Mude as cores
```

---

## Ferramentas para Criar Favicon

Se você tem uma logo mas não tem nos tamanhos certos:

### Online (Grátis):
- https://realfavicongenerator.net/
- https://favicon.io/

### Upload sua logo e baixe todos os tamanhos necessários!

---

## Verificar o Favicon

Após adicionar/modificar:

1. Reinicie o servidor: `npm run dev`
2. Recarregue a página com Ctrl+Shift+R (hard refresh)
3. Veja o ícone na aba do navegador

---

## Estrutura Final (com logo personalizada):

```
app/
├── favicon.ico       # Favicon principal (32x32)
├── icon.png          # PNG favicon (32x32)
└── apple-icon.png    # Apple touch icon (180x180)
```

**Ou mantém os arquivos .tsx** para favicon gerado automaticamente!
