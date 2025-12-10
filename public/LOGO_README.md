# Como Adicionar Sua Logo

## Passos:

1. **Prepare sua logo**:
   - Formato recomendado: PNG com fundo transparente
   - Tamanho recomendado: 512x512px ou maior (será redimensionada automaticamente)
   - A logo deve ser quadrada para melhor resultado

2. **Adicione a logo ao projeto**:
   - Copie sua logo para esta pasta `/public/`
   - Renomeie para `logo.png`

3. **Exemplo de comando**:
   ```bash
   # Se sua logo está em outro lugar:
   cp /caminho/para/sua/logo.png /home/luis-ai/work/coding/DeepOptimize/deepoptimize-site/public/logo.png
   ```

## Formatos Suportados

- PNG (recomendado para transparência)
- JPG/JPEG
- SVG (para logos vetoriais)
- WebP

## Tamanhos Usados

- **Navbar**: 40x40px
- **Footer**: 40x40px
- **Hero/Mobile**: 60x60px

A logo será automaticamente redimensionada pelo Next.js Image component.

## Fallback

Se você não adicionar uma logo, o site usará o texto "DeepOptimize" com estilo gradiente azul como logo padrão.

## Customização Adicional

Para ajustar o tamanho ou comportamento da logo, edite:
- `/components/Logo.tsx` - Componente da logo
- `/components/Logo.module.css` - Estilos da logo
