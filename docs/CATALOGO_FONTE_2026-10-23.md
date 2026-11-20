# Inventário público do catálogo Mundo do Natal

Data da coleta: 23/10/2026

Fonte: <https://www.mundonatal.com.br/>

Este documento registra o estado público observado no storefront Shopify. Ele não contém credenciais e não representa uma autorização para reutilizar marca, textos ou imagens.

## Resumo

- **Total correto do catálogo comercial: 16 produtos.** Este é o número que deve ser usado na nova loja.
- A Shopify também expõe 4 registros auxiliares fora de `todos-os-produtos`, totalizando 20 páginas técnicas de produto. Esses 4 registros não aumentam o total comercial.
- 50 variantes entre os 16 produtos comerciais.
- 4 produtos auxiliares fora da coleção comercial, com 7 variantes.
- 13 coleções publicadas no sitemap.
- 7 entradas de navegação por produto e 4 entradas por objetivo.
- 3 produtos com preço promocional válido.
- Faixa de preço do catálogo comercial: R$ 24,90 a R$ 359,90.

### Conferência da quantidade

A contagem foi repetida em quatro superfícies públicas da mesma loja:

| Fonte | Quantidade | Interpretação |
| --- | ---: | --- |
| Página `todos-os-produtos` | 16 | Total comercial mostrado ao cliente |
| Feed da coleção `todos-os-produtos` | 16 | Confirma o total comercial |
| Feed global `/products.json` | 20 | Inclui os 4 registros auxiliares |
| Sitemap de produtos | 20 | Inclui os mesmos 4 registros auxiliares |

A segunda página do feed global retorna zero produtos, portanto não existe paginação adicional escondendo outros registros públicos.

## Categorias da navegação por produto

| Categoria | Produtos |
| --- | ---: |
| Whey Protein | 1 |
| Pré-treino | 2 |
| Creatina | 1 |
| Shot Energético | 1 |
| Kits | 4 |
| Vitaminas & Saúde | 6 |
| Barra de Proteína | 1 |

As sete categorias cobrem os 16 produtos comerciais. `Shot Energético` e `Barra de Proteína` apontam diretamente para produtos; as demais possuem coleções próprias.

## Coleções por objetivo

| Coleção | Produtos |
| --- | ---: |
| Ganho de Massa | 2 |
| Energia e Desempenho | 4 |
| Recuperação Muscular | 4 |
| Saúde do dia a dia | 6 |

Um produto pode pertencer a mais de um objetivo.

## Outras coleções publicadas

| Coleção | Produtos | Observação |
| --- | ---: | --- |
| Todos os Produtos | 16 | Catálogo comercial principal |
| Mais Vendidos | 1 | Contém somente `Hibernando`, item auxiliar a R$ 0,00 |
| Snacks | 0 | Coleção vazia |
| Sono e bem-estar | 0 | Coleção vazia |

## Produtos comerciais e preços

| Produto | Variantes | Preço atual | Preço anterior | Desconto exibido |
| --- | ---: | ---: | ---: | ---: |
| Barra de Proteína 15 g – Caixa com 12 Barras | 3 | R$ 109,00 | R$ 129,00 | 16% |
| Mundo do Natal ENERGY GUM – Chiclete Energético | 1 | R$ 24,90 | — | — |
| Kit Melatonina + Creatina + Glutamina | 2 | R$ 99,90 | — | — |
| Kit Melatonina + Glutamina | 1 | R$ 68,90 | — | — |
| Melatonina Mastigável 90 comprimidos | 1 | R$ 29,90 | R$ 39,90 | 25% |
| Cabelo e Barba – 30 comprimidos | 1 | R$ 39,90 | — | — |
| L-Glutamina 100% Pura – 300 g | 1 | R$ 49,90 | — | — |
| Magnésio Dimalato – 90 comprimidos | 1 | R$ 39,90 | — | — |
| Vitamina D3 2.000 UI – 30 comprimidos | 1 | R$ 39,90 | — | — |
| 1 kg de Creatina – kit 4 × 250 g | 5 | R$ 129,90 | — | — |
| Whey Protein Mundo do Natal 3W – 1 kg | 3 | R$ 279,90 | — | — |
| Arsenal do Mundo do Natal | 24 | R$ 359,90 | R$ 540,60 | 33% |
| Pré-Treino Mundo do Natal Ataque – 300 g | 2 | R$ 74,90 | — | — |
| Pré-Treino Mundo do Natal Ataque Mortal – 300 g | 1 | R$ 84,90 | — | — |
| Creatina Monohidratada – 250 g | 2 | R$ 45,90 | — | — |
| Shot Energético Café/Mocha – caixa 12 × 60 mL | 1 | R$ 59,90 | — | — |

## Produtos auxiliares fora de `todos-os-produtos`

| Produto | Variantes | Preço público | Observação |
| --- | ---: | ---: | --- |
| Camiseta Regata Dryfit Mundo do Natal | 4 | R$ 80,00 | Componente do kit Arsenal; apenas tamanho M marcado como disponível no feed |
| Hibernando | 1 | R$ 0,00 | Item auxiliar da coleção Mais Vendidos |
| Camiseta Mundo do Natal Oversize | 1 | R$ 0,00 | `compare_at_price` de R$ 150,00 |
| Lata colecionável | 1 | R$ 0,00 | Provável brinde/componente de kit |

Esses itens não devem entrar automaticamente no catálogo vendável da nova loja.

## Variantes relevantes

- Barra: Doce de Leite, Leite e Avelã e Chocolate.
- Creatina 250 g: Sem Sabor e Limão.
- Whey 3W: Leite em Pó, Chocolate e Cookies and Cream.
- Pré-Treino Ataque: Frutas Amarelas e Maçã Verde.
- Kit 1 kg de Creatina: cinco combinações entre Sem Sabor e Limão.
- Arsenal: 3 sabores de whey × 2 sabores de creatina × 4 tamanhos, totalizando 24 combinações. No feed público, apenas as seis combinações de tamanho M estão disponíveis.

## Disponibilidade e inconsistências

- O feed estruturado marca 15 dos 16 produtos comerciais como disponíveis; o Energy Gum aparece indisponível.
- O HTML renderizado mostra `PRODUTO ESGOTADO` em vários itens que o feed marca como disponíveis, inclusive Creatina e Arsenal.
- A implementação nova deve preservar disponibilidade separada por variante e não inferir estoque pelo texto do card.
- O feed fornece `compare_at_price` igual a R$ 0,00 para Whey e Shot. Esses valores não são preços anteriores válidos e devem ser normalizados para `null`.

## Regras comerciais observadas

- Frete grátis para o Sudeste acima de R$ 99,99.
- Frete grátis para as demais regiões acima de R$ 199,99.
- Produtos adicionais da seção `Compre junto` recebem 5% de desconto; o produto principal permanece no preço cheio.

## Fontes públicas consultadas

- Sitemap principal: <https://www.mundonatal.com.br/sitemap.xml>
- Feed público de produtos: <https://www.mundonatal.com.br/products.json?limit=250>
- Coleção principal: <https://www.mundonatal.com.br/collections/todos-os-produtos>
- Sitemap de coleções: <https://www.mundonatal.com.br/sitemap_collections_1.xml?from=494411809014&to=499191120118>
