# Mundo do Natal Front

Storefront em Next/Vinext para a operação Mundo do Natal.

## Estado atual

- Home responsiva com banners desktop/mobile e carrossel automático.
- Catálogo local com 16 produtos e 50 variantes.
- Busca, filtro por categoria, filtro por objetivo e ordenação.
- Páginas de produto com galeria, variantes, disponibilidade e relacionados.
- Carrinho persistente em `localStorage` com drawer e página completa.
- Checkout demonstrativo com máscaras, consulta ViaCEP, revisão e PIX visual.
- Nenhuma cobrança real ou segredo de gateway nesta etapa.

## Desenvolvimento

```bash
npm install
npm run dev
```

O preview local abre em `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run build
```

## Próxima integração

O catálogo local deverá ser substituído pela API/PostgreSQL isolados da nova operação. Preço, desconto, frete, estoque e total final precisam ser recalculados no servidor antes da geração do PIX.

