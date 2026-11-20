export type ProductVariant = {
  id: string;
  title: string;
  price: number;
  compareAt?: number;
  available: boolean;
  sku?: string;
};

export type Product = {
  handle: string;
  name: string;
  shortName: string;
  description: string;
  category: string;
  goals: string[];
  badge?: string;
  images: string[];
  variants: ProductVariant[];
};

export const categories = [
  {
    "slug": "arvores-de-natal",
    "name": "Árvores de Natal"
  },
  {
    "slug": "decoracao-de-natal",
    "name": "Decoração de Natal"
  },
  {
    "slug": "figuras-natalinas",
    "name": "Figuras Natalinas"
  },
  {
    "slug": "iluminacao",
    "name": "Iluminação"
  },
  {
    "slug": "guirlandas",
    "name": "Guirlandas"
  },
  {
    "slug": "enfeites",
    "name": "Enfeites"
  }
] as const;

export const goals = [
  {
    "slug": "colecao-natal-2026",
    "name": "Coleção Natal 2026"
  },
  {
    "slug": "premium",
    "name": "Seleção Premium"
  },
  {
    "slug": "exclusivos",
    "name": "Exclusivos"
  },
  {
    "slug": "com-iluminacao",
    "name": "Com iluminação"
  },
  {
    "slug": "classicos-de-natal",
    "name": "Clássicos de Natal"
  }
] as const;

export const products: Product[] = [
  {
    "handle": "the-holiday-aisle-solar-led-christmas-decorative-outdoor-waterproof-landscape-lights-w110003751",
    "name": "Bonecos de Neve Solares com LED para Jardim – Kit com 4 Peças",
    "shortName": "Bonecos de Neve Solares com LED para Jardim – Kit com 4 Peças",
    "description": "Decore caminhos e canteiros com quatro pequenos bonecos de neve iluminados por energia solar. As estacas permitem instalar as peças no jardim de forma simples. Características Kit com quatro luminárias decorativas em formato de boneco de neve. Iluminação LED e alimentação por energia solar. Instalação por estacas no solo. Proteção IP55 informada pelo fabricante. Autonomia informada de 6 a 12 horas após cerca de seis horas de carga solar, variável conforme as condições de uso. Conteúdo da embalagem Quatro bonecos de neve solares com estacas de instalação. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Instale o painel em local com incidência de sol e ative o interruptor antes do primeiro uso. A autonomia depende da carga solar e do modo de iluminação. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Solar_LED_Christmas_Decorative_Outdoor_Waterproof_Landscape_Lights-416219711_9b747d51-cec2-4a95-8e72-1dc22adf312b.jpg?v=1791689548",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Solar_LED_Christmas_Decorative_Outdoor_Waterproof_Landscape_Lights-416219711.jpg?v=1791689548",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Solar_LED_Christmas_Decorative_Outdoor_Waterproof_Landscape_Lights-416219711_262906a8-d45a-4bd1-8457-da89ab623def.jpg?v=1791689548"
    ],
    "variants": [
      {
        "id": "mdn-10376188494010-50711561044154",
        "title": "Multicolorido",
        "price": 5990,
        "available": true,
        "sku": "MDN-W110003751"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-foldable-outdoor-led-light-balls-hanging-sphere-christmas-lights-with-warm-white-leds-metal-frame-globe-lights-for-patio-garden-holiday-party-decor",
    "name": "Esferas Natalinas Dobráveis com LED – Kit com 3 Peças",
    "shortName": "Esferas Natalinas Dobráveis com LED – Kit com 3 Peças",
    "description": "Ilumine árvores, varandas e jardins com um conjunto de três esferas de luz branca quente. A estrutura dobrável facilita a montagem e ocupa menos espaço durante o armazenamento. Características Conjunto com três esferas iluminadas. LEDs de luz branca quente. Oito modos: combinação, ondas, sequencial, brilho gradual, pisca alternado, redução gradual, cintilação e luz contínua. Estrutura metálica resistente à ferrugem e ganchos integrados para suspensão. Design dobrável para guardar após o uso. Alimentação por tomada com transformador e indicação de uso interno e externo. Medidas aproximadas Na opção selecionada de 13,8 polegadas, cada uma das três esferas tem aproximadamente 35,1 cm de diâmetro. Consulte o seletor de tamanho para outras composições disponíveis. Conteúdo da embalagem Três esferas iluminadas com sistema de alimentação e ganchos de suspensão. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Foldable_Outdoor_LED_Light_Balls_2C_Hanging_Sphere_Christmas_Lights_with_Warm_White_LEDs_2C_Metal_Frame_Globe_Lights_for_Patio_2C_Garden_2C_Holiday_26_Party_Decor-1002109152_e98f8080-4b18-4b3c-9eff-aca3771dc8f6.jpg?v=1791689529",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Foldable_Outdoor_LED_Light_Balls_2C_Hanging_Sphere_Christmas_Lights_with_Warm_White_LEDs_2C_Metal_Frame_Globe_Lights_for_Patio_2C_Garden_2C_Holiday_26_Party_Decor-1002109152.jpg?v=1791689529",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Foldable_Outdoor_LED_Light_Balls_2C_Hanging_Sphere_Christmas_Lights_with_Warm_White_LEDs_2C_Metal_Frame_Globe_Lights_for_Patio_2C_Garden_2C_Holiday_26_Party_Decor-1002109152_5349b93c-9959-426b-a737-710e647c64fe.jpg?v=1791689529"
    ],
    "variants": [
      {
        "id": "mdn-10376187216058-50711560519866",
        "title": "35,1 cm — 3 peças",
        "price": 11990,
        "available": true,
        "sku": "MDN-W123592129"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-30-pre-lit-fabric-snowman-w003572991",
    "name": "Boneco de Neve em Tecido Iluminado com LED – 76 cm",
    "shortName": "Boneco de Neve em Tecido Iluminado com LED – 76 cm",
    "description": "Um boneco de neve sorridente com cartola azul e cachecol colorido para completar o cenário natalino. O tecido macio com brilho leve envolve uma estrutura metálica e ganha destaque com a iluminação LED. Características Figura de boneco de neve com gesto de saudação. Revestimento de tecido macio com acabamento levemente brilhante. Estrutura metálica. Iluminação LED e alimentação por tomada. Produto que requer montagem. Medidas aproximadas Aproximadamente 76,2 cm de altura × 15,2 cm de largura × 58,4 cm de profundidade. Peso informado: aproximadamente 1,3 kg. Conteúdo da embalagem Um boneco de neve decorativo iluminado. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/30_22_Pre-Lit_Fabric_Snowman_5f592650-7475-4340-8bdb-164cdd7976a9.jpg?v=1791689502",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/30_22_Pre-Lit_Fabric_Snowman.jpg?v=1791689502",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/30_22_Pre-Lit_Fabric_Snowman_27f7817e-86a9-4d77-9848-98cde66e0635.jpg?v=1791689502"
    ],
    "variants": [
      {
        "id": "mdn-10376185839802-50711560454330",
        "title": "Único",
        "price": 12990,
        "available": true,
        "sku": "MDN-W003572991"
      }
    ]
  },
  {
    "handle": "astoria-grand-5-ft-lighted-angel-with-harp-led-lights-halo-zip-ties-ground-stakes-christmas",
    "name": "Anjo Natalino com Harpa e 120 LEDs – 1,52 m",
    "shortName": "Anjo Natalino com Harpa e 120 LEDs – 1,52 m",
    "description": "Monte uma composição natalina com um anjo de grandes asas, auréola e harpa. Os 120 LEDs em branco frio iluminam o tecido telado e realçam os detalhes da figura. Características Anjo decorativo com harpa, asas e auréola. 120 LEDs de luz branca fria. Estrutura metálica e revestimento de tecido telado. Adequado para decoração interna e externa conforme informação do fabricante. Alimentação por tomada com adaptador incluído. Medidas aproximadas Aproximadamente 152,4 cm de altura × 106,7 cm de comprimento × 48,8 cm de largura. Cabo de alimentação de aproximadamente 5 m. Peso líquido informado: aproximadamente 2,95 kg. Conteúdo da embalagem Um anjo iluminado, quatro estacas, oito abraçadeiras, um adaptador de alimentação e manual. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Christmas_Outdoor_Decoration.jpg?v=1791689485",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Christmas_Outdoor_Decoration_8047ba80-dae1-4018-b640-98d3aa02dbfb.jpg?v=1791689485",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Christmas_Outdoor_Decoration_fb741e42-366f-4b36-beaa-6b32db73f6c6.jpg?v=1791689485"
    ],
    "variants": [
      {
        "id": "mdn-10376185020602-50711531126970",
        "title": "Único",
        "price": 13990,
        "available": true,
        "sku": "MDN-W112143656"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-21-solar-christmas-tree-lights-set-w115702483",
    "name": "Mini Árvores de Natal Solares com LED – Kit com 10 Peças",
    "shortName": "Mini Árvores de Natal Solares com LED – Kit com 10 Peças",
    "description": "Crie um caminho natalino com dez mini árvores solares com estrela no topo. As luzes coloridas destacam canteiros, jardins e entradas sem depender de uma tomada próxima. Características Kit com dez mini árvores decorativas. 17 LEDs em cada árvore, totalizando 170 LEDs no conjunto. Painel solar individual e acendimento automático à noite quando ativado. Diferentes efeitos de iluminação selecionáveis. Materiais informados: ABS, silício monocristalino e estacas de liga de alumínio. Proteção IP65 informada pelo fabricante. Autonomia informada de 10 a 12 horas após 6 a 8 horas de carga solar, variável conforme as condições de uso. Medidas aproximadas Altura nominal aproximada de cada árvore: 53,3 cm. Conteúdo da embalagem Dez mini árvores solares iluminadas com estacas de instalação. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Instale o painel em local com incidência de sol e ative o interruptor antes do primeiro uso. A autonomia depende da carga solar e do modo de iluminação. Limpe com cuidado e guarde seco após o uso.",
    "category": "arvores-de-natal",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor_Christmas_Decorations_2C_21_22_Solar_Christmas_Tree_Stake_Lights_Outdoor_Waterproof_Decorations_2C_Solar_Candy_Cane_Christmas_Decorations_Outdoor_With_10_Modes_2C_Outside_Wate_59213893-57af-47ba-b676-db4595590385.jpg?v=1791689464",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor_Christmas_Decorations_2C_21_22_Solar_Christmas_Tree_Stake_Lights_Outdoor_Waterproof_Decorations_2C_Solar_Candy_Cane_Christmas_Decorations_Outdoor_With_10_Modes_2C_Outside_Wate_ad04abe4-2234-4146-9054-599516fe688b.jpg?v=1791689464",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor_Christmas_Decorations_2C_21_22_Solar_Christmas_Tree_Stake_Lights_Outdoor_Waterproof_Decorations_2C_Solar_Candy_Cane_Christmas_Decorations_Outdoor_With_10_Modes_2C_Outside_Wate.jpg?v=1791689464"
    ],
    "variants": [
      {
        "id": "mdn-10376183578810-50711528145082",
        "title": "Único",
        "price": 6990,
        "available": true,
        "sku": "MDN-W115702483"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-60-in-outdoor-christmas-decoration-lamp-post-with-cool-white-leds-and-pre-lit-red-bow-black-w122748970",
    "name": "Poste Natalino Preto com 151 LEDs e Laço Vermelho – 1,52 m",
    "shortName": "Poste Natalino Preto com 151 LEDs e Laço Vermelho – 1,52 m",
    "description": "Destaque a entrada com um poste natalino preto de acabamento nevado e laço vermelho iluminado. Os 151 LEDs em branco frio valorizam a decoração de jardins, caminhos e varandas. Características 151 LEDs de luz branca fria. Laço vermelho iluminado e acabamento com efeito de neve. Estrutura de ferro resistente à ferrugem com revestimento de tecido. Alimentação por tomada. Montagem com estacas de fixação incluídas. Medidas aproximadas Aproximadamente 152,3 cm de altura × 35,1 cm de largura × 35,1 cm de profundidade. Cabo de alimentação de aproximadamente 3 m. Conteúdo da embalagem Um poste decorativo iluminado com laço e estacas de fixação. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/60_in._Outdoor_Christmas_Decoration_Lamp_Post_with_Cool_White_LEDs_and_Pre-Lit_Red_Bow_2C_Black_4d98f859-dd6e-491d-b705-c6ba49dfe442.jpg?v=1791689440",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/60_in._Outdoor_Christmas_Decoration_Lamp_Post_with_Cool_White_LEDs_and_Pre-Lit_Red_Bow_2C_Black_e0a5b626-b21c-4e81-b5a9-4ad408923ca4.jpg?v=1791689440",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/60_in._Outdoor_Christmas_Decoration_Lamp_Post_with_Cool_White_LEDs_and_Pre-Lit_Red_Bow_2C_Black.jpg?v=1791689440"
    ],
    "variants": [
      {
        "id": "mdn-10376182268090-50711560421562",
        "title": "Único",
        "price": 10990,
        "available": true,
        "sku": "MDN-W122748970"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-outdoor-christmas-decorations-1988-solar-candy-cane-christmas-decorations-outdoor-yard-with-10-modes-and-144-bright-led-outside-waterproof-christmas-candy-cane-lights-pathway-w123390366",
    "name": "Bengalas Natalinas Solares com 144 LEDs – Kit com 12 Peças",
    "shortName": "Bengalas Natalinas Solares com 144 LEDs – Kit com 12 Peças",
    "description": "Ilumine caminhos e canteiros com 12 bengalas natalinas vermelhas e brancas com detalhes de estrelas. O conjunto usa energia solar e oferece diferentes efeitos de iluminação para decorar o jardim. Características Kit com 12 bengalas e 144 LEDs. Dez modos de iluminação selecionáveis. Painel solar com bateria de 1.200 mAh e recarga complementar por USB. Acendimento automático ao anoitecer quando ativado. Construção em ABS com proteção IP65 informada pelo fabricante. Autonomia informada de 10 a 12 horas após carga completa, variável conforme o sol e o modo escolhido. Medidas aproximadas Altura nominal aproximada de cada bengala: 50,5 cm. Comprimento total nominal do conjunto: aproximadamente 8,6 m. Conteúdo da embalagem 12 bengalas luminosas com sistema de alimentação solar e acessórios de instalação. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Instale o painel em local com incidência de sol e ative o interruptor antes do primeiro uso. A autonomia depende da carga solar e do modo de iluminação. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor_Christmas_Decorations_2C_19.88_E2_80_9D_Solar_Candy_Cane_Christmas_Decorations_Outdoor_Yard_With_10_Modes_And_144_Bright_Led_2C_Outside_Waterproof_Christmas_Candy_Cane_Lights_faf48fd3-02e1-4c59-a24d-3f7c5587872e.jpg?v=1791689421",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor_Christmas_Decorations_2C_19.88_E2_80_9D_Solar_Candy_Cane_Christmas_Decorations_Outdoor_Yard_With_10_Modes_And_144_Bright_Led_2C_Outside_Waterproof_Christmas_Candy_Cane_Lights_789f0993-0438-4cb8-83a3-53d7eef3aa9a.jpg?v=1791689421",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor_Christmas_Decorations_2C_19.88_E2_80_9D_Solar_Candy_Cane_Christmas_Decorations_Outdoor_Yard_With_10_Modes_And_144_Bright_Led_2C_Outside_Waterproof_Christmas_Candy_Cane_Lights.jpg?v=1791689421"
    ],
    "variants": [
      {
        "id": "mdn-10376181285050-50711559372986",
        "title": "12 peças",
        "price": 5990,
        "available": true,
        "sku": "MDN-W123390366"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-54-in-4-piece-outdoor-christmas-decoration-25d-reindeer-family-yard-decoration-with-warm-white-led-lights-w122748968",
    "name": "Família de Renas 2,5D Iluminadas com LED – Kit com 4 Peças",
    "shortName": "Família de Renas 2,5D Iluminadas com LED – Kit com 4 Peças",
    "description": "Monte uma família completa de renas na decoração natalina. O conjunto com quatro peças em tamanhos diferentes traz acabamento dourado e iluminação LED para destacar jardins, entradas e varandas. Características Conjunto com quatro renas em formato 2,5D. 166 LEDs conforme informação do fabricante. Estrutura de ferro e revestimento de tecido. Fios individuais conectados a um único plugue. Cabo de alimentação com aproximadamente 3 m. Acessórios de fixação incluídos. Medidas aproximadas Rena maior: 136,9 cm de altura × 63 cm de largura × 31 cm de profundidade. Rena média: 99,1 cm de altura × 66 cm de largura × 33 cm de profundidade. Filhote maior: 74,9 cm de altura × 48 cm de largura × 22,1 cm de profundidade. Filhote menor: 53,3 cm de altura × 68,6 cm de largura × 22,9 cm de profundidade. Conteúdo da embalagem Quatro renas iluminadas, estacas e abraçadeiras para montagem. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/54_in._4-Piece_Outdoor_Christmas_Decoration_2.5D_Reindeer_Family_Yard_Decoration_with_Warm_White_LED_Lights-738505381.jpg?v=1791689389",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/54_in._4-Piece_Outdoor_Christmas_Decoration_2.5D_Reindeer_Family_Yard_Decoration_with_Warm_White_LED_Lights-738505381_62ce56ff-5a2e-49dd-b06f-6d7e51dc9fd2.jpg?v=1791689389",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/54_in._4-Piece_Outdoor_Christmas_Decoration_2.5D_Reindeer_Family_Yard_Decoration_with_Warm_White_LED_Lights-738505381_429fadc8-7560-405a-80aa-c96843e8e554.jpg?v=1791689389"
    ],
    "variants": [
      {
        "id": "mdn-10376179613882-50711559078074",
        "title": "Dourado",
        "price": 12990,
        "available": true,
        "sku": "MDN-W122748968"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-28ft-lighted-christmas-polar-bear-outdoor-decoration-w112115182",
    "name": "Urso Polar no Trenó Iluminado com 104 LEDs – 85 cm",
    "shortName": "Urso Polar no Trenó Iluminado com 104 LEDs – 85 cm",
    "description": "Acrescente uma cena divertida ao Natal com um urso polar iluminado sobre um trenó. A textura macia e os detalhes brilhantes destacam a figura durante o dia e a iluminação branca quente valoriza a decoração à noite. Características Urso polar decorativo sobre trenó. 104 LEDs de luz branca quente. Revestimento macio e acabamento com detalhes em material brilhante. Estrutura desmontável para facilitar o armazenamento. Alimentação por tomada e indicação de uso interno e externo. Medidas aproximadas Altura nominal aproximada: 85,3 cm. Conteúdo da embalagem Uma decoração iluminada de urso polar sobre trenó. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2.8ft_Lighted_Christmas_Polar_Bear_Outdoor_Decoration_2ea18ea1-5873-4955-a2c0-f48ed8052084.jpg?v=1791689370",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2.8ft_Lighted_Christmas_Polar_Bear_Outdoor_Decoration.jpg?v=1791689369",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2.8ft_Lighted_Christmas_Polar_Bear_Outdoor_Decoration_9db576c2-86e4-486d-82c7-60240a381e09.jpg?v=1791689370"
    ],
    "variants": [
      {
        "id": "mdn-10376178368698-50711521427642",
        "title": "Único",
        "price": 8990,
        "available": true,
        "sku": "MDN-W112115182"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-72-lighted-outdoor-christmas-lamp-post-display-weather-resistant-lamppost-w122798368",
    "name": "Postes Natalinos Iluminados com LED – Kit com 2 de 1,83 m",
    "shortName": "Postes Natalinos Iluminados com LED – Kit com 2 de 1,83 m",
    "description": "Crie uma entrada natalina acolhedora com este conjunto de dois postes decorativos iluminados. Com cerca de 1,83 m de altura cada, eles valorizam caminhos, jardins e varandas. Características Kit com dois postes decorativos. 120 LEDs de luz branca quente em cada poste. Construção indicada pelo fabricante para uso externo. Alimentação por tomada e cabo transparente de aproximadamente 3 m. Disponível nas cores apresentadas no seletor do produto. Medidas aproximadas Altura aproximada de cada poste: 182,9 cm. Conteúdo da embalagem Dois postes iluminados e acessórios de montagem e fixação. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/72_22_Lighted_Outdoor_Christmas_Lamp_Post_Display_2C_Weather-Resistant_Lamppost-1891919823_b6be8418-bb28-4682-b57e-c29affe69756.jpg?v=1791689351",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/72_22_Lighted_Outdoor_Christmas_Lamp_Post_Display_2C_Weather-Resistant_Lamppost-1891919823_cf837e5a-d4ad-415d-ac34-5f9f79dc9a2f.jpg?v=1791689351",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/72_22_Lighted_Outdoor_Christmas_Lamp_Post_Display_2C_Weather-Resistant_Lamppost-1891919823.jpg?v=1791689351"
    ],
    "variants": [
      {
        "id": "mdn-10376177320122-50711558291642",
        "title": "Branco",
        "price": 21990,
        "available": true,
        "sku": "MDN-W122798368-01"
      },
      {
        "id": "mdn-10376177320122-50711558324410",
        "title": "Dourado",
        "price": 21990,
        "available": true,
        "sku": "MDN-W122798368-02"
      },
      {
        "id": "mdn-10376177320122-50711558357178",
        "title": "Vermelho",
        "price": 21990,
        "available": true,
        "sku": "MDN-W122798368-03"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-hutto-5ft-soldier-nutcracker-warm-lighted-leds-christmas-yard-decoration-outdoor-w114535735",
    "name": "Soldado Quebra-Nozes Natalino Iluminado com LED – 1,52 m",
    "shortName": "Soldado Quebra-Nozes Natalino Iluminado com LED – 1,52 m",
    "description": "Transforme a entrada da casa com um soldado quebra-nozes iluminado de aproximadamente 1,52 m. O visual clássico ganha destaque à noite com LEDs de luz branca quente. Características Figura natalina de soldado quebra-nozes. LEDs de luz branca quente. Indicado para decoração interna e externa. Alimentação por tomada com cabo de aproximadamente 3 m. Acessórios de fixação incluídos. Medidas aproximadas Altura aproximada: 152,4 cm. Conteúdo da embalagem Um soldado iluminado, quatro estacas e dez abraçadeiras. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5_FT._Outdoor_Christmas_Decoration_Nutcracker_Yard_Decoration_with_Warm_White_LED_Lights-957545190.jpg?v=1791689311",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5_FT._Outdoor_Christmas_Decoration_Nutcracker_Yard_Decoration_with_Warm_White_LED_Lights-957545190_a1e8bd42-3563-40ca-be70-01b56826ce61.jpg?v=1791689311",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5_FT._Outdoor_Christmas_Decoration_Nutcracker_Yard_Decoration_with_Warm_White_LED_Lights-957545190_06cf4128-e77d-4442-9930-621269024e35.jpg?v=1791689311"
    ],
    "variants": [
      {
        "id": "mdn-10376175091898-50711557701818",
        "title": "Dourado",
        "price": 11990,
        "available": true,
        "sku": "MDN-W114535735-01"
      },
      {
        "id": "mdn-10376175091898-50711557734586",
        "title": "Preto",
        "price": 11990,
        "available": true,
        "sku": "MDN-W114535735-02"
      },
      {
        "id": "mdn-10376175091898-50711557767354",
        "title": "Rosa",
        "price": 11990,
        "available": true,
        "sku": "MDN-W114535735-03"
      },
      {
        "id": "mdn-10376175091898-50711557800122",
        "title": "Vermelho",
        "price": 11990,
        "available": true,
        "sku": "MDN-W114535735-04"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-3-piece-led-hanging-ball-ornament-set-w114806709",
    "name": "Bolas Natalinas Suspensas com LED – Kit com 3 Tamanhos",
    "shortName": "Bolas Natalinas Suspensas com LED – Kit com 3 Tamanhos",
    "description": "Dê destaque à decoração com três bolas natalinas iluminadas em tamanhos diferentes. O brilho em branco quente permite montar uma composição suspensa ou apoiada no jardim. Características Kit com três bolas decorativas iluminadas. Estrutura metálica resistente à ferrugem. LEDs resistentes à água, indicados para uso interno e externo. Podem ser penduradas ou fixadas no solo. Alimentação por tomada. Medidas aproximadas Grande: aproximadamente 48,3 cm de largura × 48,3 cm de profundidade × 62,5 cm de altura. Média: 40 cm de largura × 40 cm de profundidade × 49,5 cm de altura. Pequena: 30,5 cm de largura × 30,5 cm de profundidade × 38,1 cm de altura. Conteúdo da embalagem Três bolas iluminadas, um plugue, nove estacas e 24 abraçadeiras. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3-Piece_LED_Hanging_Ball_Ornament_Set_a45eb2b1-d861-44bf-872d-6173bf189b74.jpg?v=1791689286",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3-Piece_LED_Hanging_Ball_Ornament_Set.jpg?v=1791689286",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3-Piece_LED_Hanging_Ball_Ornament_Set_29c18833-3b72-439c-839f-ccc6cab13f5b.jpg?v=1791689286"
    ],
    "variants": [
      {
        "id": "mdn-10376173650106-50711516381370",
        "title": "Único",
        "price": 12990,
        "available": true,
        "sku": "MDN-W114806709"
      }
    ]
  },
  {
    "handle": "the-holiday-aisle-lighted-rattan-running-reindeer-set-w111481674",
    "name": "Renas Natalinas Iluminadas em Rattan com 200 LEDs – Kit com 3 Peças",
    "shortName": "Renas Natalinas Iluminadas em Rattan com 200 LEDs – Kit com 3 Peças",
    "description": "Monte uma cena natalina com três renas em posição de corrida. O acabamento em rattan marrom e os laços vermelhos combinam com a iluminação branca quente para decorar jardins, entradas e ambientes internos. Características Conjunto com três renas de tamanhos diferentes. 200 LEDs em branco quente: 80 na rena maior, 70 na média e 50 na menor. Estrutura metálica com acabamento em rattan. Alimentação por tomada, com um único plugue para o conjunto. Adequado para decoração interna e externa conforme indicação do fabricante. Medidas aproximadas Maior tamanho selecionado: aproximadamente 133,1 cm de altura × 83,8 cm de largura × 45,7 cm de profundidade. Conteúdo da embalagem Três renas iluminadas e 12 estacas de fixação, sendo quatro para cada peça. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Freestanding_Christmas_Outdoor_Decoration-2060525072-2060525074.jpg?v=1791689263",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Freestanding_Christmas_Outdoor_Decoration-2060525072-2060525074_ff5895e2-79bf-4219-84e2-724fb52a0a37.jpg?v=1791689263",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Freestanding_Christmas_Outdoor_Decoration-2060525072-2060525074_afb67d74-6900-415e-9f83-bf388458747c.jpg?v=1791689263"
    ],
    "variants": [
      {
        "id": "mdn-10376172404922-50711557243066",
        "title": "Marrom e vermelho / 133",
        "price": 40990,
        "available": true,
        "sku": "MDN-W111481674"
      },
      {
        "id": "mdn-10376172404922-50711564386490",
        "title": "Marrom e vermelho / 1 × 83",
        "price": 40990,
        "available": false
      },
      {
        "id": "mdn-10376172404922-50711564419258",
        "title": "Marrom e vermelho / 8 × 45",
        "price": 40990,
        "available": false
      },
      {
        "id": "mdn-10376172404922-50711564452026",
        "title": "Marrom e vermelho / 7 cm (A × L × P)",
        "price": 40990,
        "available": false
      }
    ]
  },
  {
    "handle": "easybuychoice-4ft-3pcs-snowman-family-set-2d-large-outdoor-christmas-decorations-light-up-christmas-decor-with-130-warm-white-led-lights-lighted-holiday-displays-for-yard-decor-porch-patio-lawn-home-garden-ebyb1041",
    "name": "Família de Bonecos de Neve 2D com 130 LEDs – Kit com 3 Peças",
    "shortName": "Família de Bonecos de Neve 2D com 130 LEDs – Kit com 3 Peças",
    "description": "Receba o Natal com uma família de três bonecos de neve iluminados. A luz branca quente valoriza os detalhes dos chapéus e cachecóis e cria uma composição acolhedora no jardim, na varanda ou dentro de casa. Características Kit com três bonecos em formato 2D. 130 LEDs de luz branca quente com iluminação contínua: 60 no maior, 40 no médio e 30 no menor. Estrutura de ferro e revestimento de poliéster. Cabo de aproximadamente 1,5 m e fonte com saída de 4,5 V. Design desmontável para facilitar o armazenamento. Medidas aproximadas Maior: 124,5 cm de altura × 76,2 cm de comprimento × 27,9 cm de largura. Médio: 106,7 cm de altura × 69,9 cm de comprimento × 27,9 cm de largura. Menor: 61 cm de altura × 53,3 cm de comprimento × 14 cm de largura. Conteúdo da embalagem Três bonecos iluminados, seis parafusos borboleta, seis estacas, três abraçadeiras, nove pinos de fixação e três lâmpadas de reposição. Montagem e cuidados Monte conforme o manual e fixe as peças com segurança. Confira a tensão indicada na fonte antes de ligar à rede elétrica. Proteja as conexões da umidade. Limpe com cuidado e guarde seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4FT_3PCS_Snowman_Family_Set_2C_2D_Large_Outdoor_Christmas_Decorations_2C_Light_Up_Christmas_Decor_With_130_Warm_White_LED_Lights_2C_Lighted_Holiday_Displays_For_Yard_Decor_2C_Porch_2C_1accdf7e-b5a1-4a17-948c-b0ef81541ac5.jpg?v=1791689244",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4FT_3PCS_Snowman_Family_Set_2C_2D_Large_Outdoor_Christmas_Decorations_2C_Light_Up_Christmas_Decor_With_130_Warm_White_LED_Lights_2C_Lighted_Holiday_Displays_For_Yard_Decor_2C_Porch_2C.jpg?v=1791689244",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4FT_3PCS_Snowman_Family_Set_2C_2D_Large_Outdoor_Christmas_Decorations_2C_Light_Up_Christmas_Decor_With_130_Warm_White_LED_Lights_2C_Lighted_Holiday_Displays_For_Yard_Decor_2C_Porch_2C_8ece2ac8-6cb0-4b6f-8005-023f8ce379c1.jpg?v=1791689244"
    ],
    "variants": [
      {
        "id": "mdn-10376171159738-50711513891002",
        "title": "Único",
        "price": 11990,
        "available": true,
        "sku": "MDN-EBYB1041"
      }
    ]
  },
  {
    "handle": "familia-bonecos-neve-3d-346-leds-4-pecas",
    "name": "Família de Bonecos de Neve 3D com 346 LEDs – Kit com 4 Peças",
    "shortName": "Família de Bonecos de Neve 3D com 346 LEDs – Kit com 4 Peças",
    "description": "Crie um cenário natalino acolhedor com esta família de quatro bonecos de neve iluminados. Os chapéus e cachecóis coloridos contrastam com o tecido branco estampado com flocos de neve, enquanto 346 LEDs em branco frio destacam a composição à noite. Características Kit com quatro bonecos de neve em formato 3D. 346 LEDs de luz branca fria. Estrutura metálica e revestimento de tecido macio. Design desmontável para facilitar a montagem e o armazenamento. Indicado pelo fabricante para ambientes internos e externos. Alimentação por tomada. Medidas aproximadas Boneco maior: 120,5 cm de altura × 87 cm de largura × 43,8 cm de profundidade. Boneco médio: 99 cm de altura × 75 cm de largura × 46,5 cm de profundidade. Boneco pequeno: 62,2 cm de altura × 45,5 cm de largura × 28,5 cm de profundidade. Peso informado do conjunto: aproximadamente 5,1 kg. Conteúdo e cuidados Inclui quatro bonecos iluminados, estacas de fixação e abraçadeiras. Monte e fixe as peças conforme o manual. Confira a tensão indicada na fonte antes de conectar à rede elétrica. Guarde o conjunto seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "colecao-natal-2026",
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4_Piece_Snowman_Family_Christmas_Lighted_Display_Set_Collapsible_Snowmen_Yard_Decor_b80d9081-30e7-4172-9ad6-2b72b787487c.jpg?v=1791689153",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4_Piece_Snowman_Family_Christmas_Lighted_Display_Set_Collapsible_Snowmen_Yard_Decor_1366bffe-49ed-4b42-a33c-0bcb8e2db5a3.jpg?v=1791689153",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4_Piece_Snowman_Family_Christmas_Lighted_Display_Set_Collapsible_Snowmen_Yard_Decor.jpg?v=1791689153"
    ],
    "variants": [
      {
        "id": "mdn-10376165884090-50711507534010",
        "title": "Único",
        "price": 19990,
        "available": true,
        "sku": "MDN-W114954422"
      }
    ]
  },
  {
    "handle": "topo-de-arvore-laco-de-veludo-vermelho-luxo",
    "name": "Topo de Árvore Laço de Veludo Vermelho Luxo",
    "shortName": "Topo de Árvore Laço de Veludo Vermelho Luxo",
    "description": "Descrição Topo de árvore de Natal em formato de laço de veludo vermelho , desenvolvido para criar um acabamento elegante, clássico e marcante na decoração natalina. Com aproximadamente 1,20 metro de comprimento total , o laço possui caudas longas que descem pela árvore, criando um efeito sofisticado e proporcionando maior presença visual na decoração. O acabamento em veludo vermelho traz textura, profundidade e um visual tradicional de Natal, combinando especialmente com árvores verdes, iluminação em branco quente, enfeites dourados, vermelhos, champagne e decorações clássicas. Especificações do produto: Produto: Topo de árvore de Natal Modelo: Laço decorativo Cor: Vermelho Material: Veludo Comprimento aproximado: 1,20 m Formato: Laço com caudas longas Acabamento: Aveludado Estilo: Clássico e sofisticado Tema: Natal Uso recomendado: Árvore de Natal Ambiente indicado: Interno Quantidade: 1 unidade O laço pode ser instalado diretamente no topo da árvore e ajustado entre os galhos para proporcionar melhor sustentação e acabamento.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/456_9e3c260f-c947-482f-b970-352badd4cc90.webp?v=1791591182",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5466456.webp?v=1791591182",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/6456.webp?v=1791591181",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/456456.webp?v=1791591181"
    ],
    "variants": [
      {
        "id": "mdn-10375017431226-50706711543994",
        "title": "1.20 metros",
        "price": 6990,
        "available": true
      },
      {
        "id": "mdn-10375017431226-50706711576762",
        "title": "1.80 metros",
        "price": 8990,
        "available": true
      },
      {
        "id": "mdn-10375017431226-50706711609530",
        "title": "2.20 metros",
        "price": 9990,
        "available": true
      },
      {
        "id": "mdn-10375017431226-50706711642298",
        "title": "2.80 metros",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "topo-de-arvore-estrela-starburst-dupla-face-iluminada-dourada",
    "name": "Topo de Árvore Estrela Starburst Dupla Face Iluminada Dourada",
    "shortName": "Topo de Árvore Estrela Starburst Dupla Face Iluminada Dourada",
    "description": "Descrição Topo de árvore de Natal em formato de estrela Starburst de 16 pontas , desenvolvido para criar um acabamento elegante e marcante na decoração natalina. O design possui visual tridimensional e dupla face , permitindo que a estrela seja apreciada de diferentes ângulos na árvore. Produzido com conchas naturais de capiz , o topo apresenta estrutura delicada em tom dourado e acabamento translúcido, que valoriza a iluminação interna e cria um efeito sofisticado quando aceso. A luz em tom quente proporciona um brilho elegante, ideal para composições natalinas clássicas, refinadas ou contemporâneas. O modelo possui iluminação integrada e sistema bivolt 110V/220V , oferecendo maior praticidade de uso em diferentes regiões. Também acompanha haste de suporte e sistema de fixação para instalação segura no topo da árvore. Especificações do produto: Produto: Topo de árvore de Natal Formato: Estrela Starburst de 16 pontas Cor: Dourado Material principal: Conchas naturais de capiz Estrutura: Acabamento metálico dourado Design: Dupla face Iluminação: Integrada Cor da iluminação: Branco quente Voltagem: Bivolt 110V/220V Instalação: Fixação no topo da árvore Acompanha: Haste de suporte e acessórios de fixação Uso indicado: Ambientes internos e áreas externas cobertas Quantidade: 1 unidade Opções de tamanho Pequeno: aproximadamente 25 cm de altura Grande: aproximadamente 40 cm de altura Profundidade aproximada: 7,6 cm O modelo menor é indicado principalmente para árvores de aproximadamente 1,80 m a 2,10 m , enquanto o modelo maior combina melhor com árvores a partir de aproximadamente 2,10 m . A combinação entre o acabamento dourado, o capiz translúcido e a iluminação em branco quente proporciona um efeito luminoso sofisticado, transformando o topo da árvore em um dos principais destaques da decoração.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/23555.webp?v=1791401329",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3443.webp?v=1791401329",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32435.webp?v=1791401329",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/324_43850c59-5ba1-4ec7-a7e0-3bd69737b8b9.webp?v=1791401329",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/35232.webp?v=1791401329"
    ],
    "variants": [
      {
        "id": "mdn-10367938986170-50681543721146",
        "title": "Pequeno ( 25 cm )",
        "price": 4590,
        "available": true
      },
      {
        "id": "mdn-10367938986170-50681543753914",
        "title": "Grande ( 40 cm )",
        "price": 6990,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-100-bolas-de-natal-vermelhas-3-cm-4-cm-e-6-cm-ponteira-estrela-maleta-organizadora",
    "name": "Kit 100 Bolas de Natal Vermelhas 3 cm, 4 cm e 6 cm + Ponteira Estrela + Maleta Organizadora",
    "shortName": "Kit 100 Bolas de Natal Vermelhas 3 cm, 4 cm e 6 cm + Ponteira Estrela + Maleta Organizadora",
    "description": "Descrição Kit completo com 100 bolas decorativas de Natal na cor vermelha , acompanhado de 1 ponteira em formato de estrela dourada e 1 maleta organizadora transparente . O conjunto possui bolas em diferentes tamanhos e acabamentos, ideal para criar uma decoração natalina clássica, uniforme e visualmente rica. As peças apresentam versões foscas, brilhantes, com glitter e vazadas , permitindo variar texturas e pontos de destaque na árvore. A cor vermelha é uma das mais tradicionais do Natal e combina facilmente com dourado, verde, branco e iluminação em branco quente. Especificações do produto: Produto: Kit de bolas para árvore de Natal Quantidade: 100 bolas decorativas Cor: Vermelho Tamanhos: 3 cm, 4 cm e 6 cm Material: Plástico decorativo resistente Acabamentos: Fosco, brilhante, glitter e vazado com glitter Brinde: 1 ponteira estrela dourada Acompanha: 1 maleta organizadora transparente Tema: Natal Uso recomendado: Decoração de árvores de Natal Ambiente indicado: Interno Distribuição dos acabamentos: 36 bolas com glitter 28 bolas lisas foscas 28 bolas lisas brilhantes 8 bolas vazadas com glitter Total: 100 bolas O conjunto apresenta bolas em 3 tamanhos diferentes , facilitando o preenchimento da árvore. As menores podem ser utilizadas nas pontas dos galhos e espaços menores, enquanto as maiores criam pontos de destaque e volume na composição. Conteúdo da embalagem 100 bolas de Natal vermelhas 1 ponteira estrela dourada 1 maleta organizadora transparente Total do conjunto: 102 itens considerando as bolas, a ponteira e a maleta. Observação: As tonalidades podem apresentar pequenas variações de acordo com a iluminação das fotografias e a configuração de cada tela.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_810092-MLB115345133894_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790187046",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_639882-MLB116757401723_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790187045",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_721642-MLB115345191992_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790187046",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_854437-MLB116757666261_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790187045",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_628654-MLB115344040454_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790187045",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_912658-MLB115344899832_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790187046",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_726663-MLB115345457976_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790187046"
    ],
    "variants": [
      {
        "id": "mdn-10320381837498-50525233414330",
        "title": "Único",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-100-bolas-de-natal-douradas-3-cm-4-cm-e-6-cm-ponteira-estrela-maleta-organizadora",
    "name": "Kit 100 Bolas de Natal Douradas 3 cm, 4 cm e 6 cm + Ponteira Estrela + Maleta Organizadora",
    "shortName": "Kit 100 Bolas de Natal Douradas 3 cm, 4 cm e 6 cm + Ponteira Estrela + Maleta Organizadora",
    "description": "Descrição Kit completo com 100 bolas decorativas de Natal na cor dourada , acompanhado de 1 ponteira em formato de estrela e 1 maleta organizadora transparente . O conjunto possui bolas em diferentes tamanhos e acabamentos, permitindo criar uma decoração mais completa e bem distribuída na árvore. As peças combinam superfícies foscas, brilhantes, com glitter e vazadas , trazendo variedade visual e um acabamento sofisticado. A cor dourada é versátil e combina com árvores verdes, nevadas ou brancas, além de harmonizar facilmente com luzes em branco quente, laços, pinhas e outros acessórios natalinos. Especificações do produto: Produto: Kit de bolas para árvore de Natal Quantidade: 100 bolas decorativas Brinde: 1 ponteira estrela dourada Acompanha: 1 maleta organizadora transparente Cor: Dourado Tamanhos variados: 3 cm, 4 cm e 6 cm Material das bolas: Plástico decorativo leve e resistente Material da ponteira: Plástico decorativo Material da maleta: Plástico transparente Tema: Natal Uso recomendado: Ambientes internos Distribuição e acabamentos: Bolas com acabamento em glitter Bolas lisas foscas Bolas lisas brilhantes Bolas vazadas decorativas com glitter Tamanhos variados entre 3 cm, 4 cm e 6 cm O mix de tamanhos permite decorar diferentes áreas da árvore: as peças maiores ajudam a criar pontos de destaque, enquanto as menores são ideais para preenchimento e acabamento nos galhos. Conteúdo da embalagem 100 bolas natalinas douradas 1 ponteira estrela dourada 1 maleta organizadora transparente Total: 102 itens considerando bolas, ponteira e maleta.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_871775-MLB115344009800_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790186673",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_762544-MLB116757664611_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790186673",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_939246-MLB115345132266_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790186673",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_869040-MLB116756632029_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790186673",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_858254-MLB115344038846_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790186731",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_690357-MLB115345426454_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790186673"
    ],
    "variants": [
      {
        "id": "mdn-10320373481658-50525224665274",
        "title": "Único",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-100-bolas-de-natal-vermelho-e-dourado-3-cm-4-cm-e-6-cm-ponteira-estrela-dourada",
    "name": "Kit 100 Bolas de Natal Vermelho e Dourado 3 cm, 4 cm e 6 cm + Ponteira Estrela Dourada",
    "shortName": "Kit 100 Bolas de Natal Vermelho e Dourado 3 cm, 4 cm e 6 cm + Ponteira Estrela Dourada",
    "description": "Descrição Kit completo com 100 bolas decorativas para árvore de Natal , em uma combinação clássica de vermelho e dourado , acompanhado de 1 ponteira em formato de estrela dourada . O conjunto possui enfeites em diferentes tamanhos e acabamentos, permitindo preencher a árvore de maneira mais uniforme e criar profundidade na decoração. As bolas apresentam versões com glitter, acabamento fosco, brilhante e vazado decorativo , proporcionando variedade visual em uma única composição. As cores vermelho e dourado são ideais para uma decoração natalina tradicional e combinam facilmente com luzes em branco quente, laços, festões, pinhas e outros acessórios. Especificações do produto: Produto: Kit de bolas para árvore de Natal Quantidade: 100 bolas decorativas Brinde: 1 ponteira estrela dourada Total do conjunto: 101 peças Cores: Vermelho e dourado Tamanhos variados: 3 cm, 4 cm e 6 cm Material: Plástico decorativo leve e resistente Uso: Decoração de árvore de Natal Ambiente recomendado: Interno Tema: Natal tradicional Acabamentos do conjunto: 36 bolas com glitter 28 bolas lisas foscas 28 bolas lisas brilhantes 8 bolas vazadas com glitter Total: 100 bolas Os diferentes tamanhos ajudam a criar uma composição mais natural: as bolas maiores podem ser utilizadas nas áreas centrais e inferiores da árvore, enquanto as menores são indicadas para preencher espaços e decorar as extremidades dos galhos. Conteúdo da embalagem 100 bolas natalinas sortidas em vermelho e dourado + 1 ponteira estrela dourada.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_847268-MLB115345370594_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790184994",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_724700-MLB116757402683_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790184994",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_896593-MLB115345429058_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790184995",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_994460-MLB115345076762_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790184995",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_737216-MLB115344041380_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790184995",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_895675-MLB116757727023_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790184994",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D_NQ_NP_2X_963954-MLB115344041376_082026-F-kit-100-bola--brinde-estrela-enfeite-arvore-natal-decoracao.webp?v=1790184994"
    ],
    "variants": [
      {
        "id": "mdn-10320338419898-50525180068026",
        "title": "Único",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-32-enfeites-para-arvore-de-natal-azul-branco-e-prata-colecao-inverno-elegante",
    "name": "Kit 32 Enfeites para Árvore de Natal Azul, Branco e Prata – Coleção Inverno Elegante",
    "shortName": "Kit 32 Enfeites para Árvore de Natal Azul, Branco e Prata – Coleção Inverno Elegante",
    "description": "Kit com 32 enfeites decorativos para árvore de Natal , desenvolvido para compor uma decoração sofisticada e harmoniosa em tons de azul, azul claro, branco, prata e transparente . O conjunto reúne peças em diferentes formatos e acabamentos, incluindo bolas decorativas, gotas, pinhões, ornamentos alongados e pendentes especiais , criando um visual refinado e elegante para árvores de Natal residenciais ou comerciais. A combinação dos tons frios com detalhes brilhantes remete a uma proposta natalina inspirada no inverno, trazendo leveza, brilho e sofisticação para a decoração. Os diferentes formatos e texturas ajudam a preencher a árvore com profundidade visual, criando uma composição equilibrada e de alto impacto estético. Especificações do produto: Produto: Kit de enfeites para árvore de Natal Quantidade: 32 peças Cores predominantes: Azul, azul claro, branco e prata Cores complementares: Transparente e detalhes cintilantes Material: Plástico Acabamentos: Fosco, brilhante, metalizado, texturizado e com glitter Formatos: Bolas, gotas, pinhões, pendentes alongados e ornamentos especiais Detalhes: Aplicações com brilho, relevos decorativos e acabamento sofisticado Estilo: Elegante / invernal / sofisticado Tema: Natal Uso recomendado: Ambientes internos Indicação: Árvores de Natal, vitrines, salas, halls, recepções e decoração residencial Conteúdo da embalagem: 1 kit com 32 enfeites natalinos variados A paleta em azul e prata combina especialmente com árvores nevadas, iluminação em branco quente ou frio, laços claros e composições de Natal mais refinadas e contemporâneas.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/566.webp?v=1790129001",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/546757.webp?v=1790129002",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/56777.webp?v=1790129001"
    ],
    "variants": [
      {
        "id": "mdn-8554597548218-46748708012218",
        "title": "Único",
        "price": 16990,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-25-enfeites-para-arvore-de-natal-vermelho-branco-e-prata-colecao-inverno-classico",
    "name": "Kit 25 Enfeites para Árvore de Natal Vermelho, Branco e Prata – Coleção Inverno Clássico",
    "shortName": "Kit 25 Enfeites para Árvore de Natal Vermelho, Branco e Prata – Coleção Inverno Clássico",
    "description": "Kit com 25 enfeites decorativos para árvore de Natal , ideal para compor uma decoração elegante e acolhedora em tons de vermelho, branco e prata . O conjunto reúne peças em diferentes formatos e acabamentos, incluindo bolas lisas, bolas decoradas, pinhas, gotas alongadas e ornamentos especiais , criando uma composição visual sofisticada e harmoniosa para árvores de Natal residenciais ou comerciais. A paleta de cores combina o charme tradicional do vermelho com a leveza do branco e o brilho delicado da prata, proporcionando um visual natalino clássico com toque invernal. Os diferentes modelos permitem distribuir os enfeites de forma equilibrada por toda a árvore, agregando profundidade, textura e variedade ao décor. Especificações do produto: Produto: Kit de enfeites para árvore de Natal Quantidade: 25 peças Cores predominantes: Vermelho, branco e prata Material: Vidro decorativo Acabamentos: Fosco, brilhante, metalizado, glitter e texturizado Formatos: Bolas, gotas, pinhas e ornamentos decorativos variados Detalhes: Estampas natalinas, desenhos delicados e aplicações decorativas Estilo: Clássico / invernal / sofisticado Tema: Natal Uso recomendado: Ambientes internos Indicação: Árvores de Natal, vitrines, salas, halls, recepções e decoração residencial Conteúdo da embalagem: 1 kit com 25 enfeites natalinos variados A combinação dos diferentes tamanhos, texturas e formatos ajuda a criar uma decoração equilibrada, elegante e com forte apelo visual, principalmente quando combinada com luzes em branco quente e elementos nevados.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/6455634.webp?v=1790128796",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/6454.webp?v=1790128795",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/7555.webp?v=1790128795",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5353.webp?v=1790128795"
    ],
    "variants": [
      {
        "id": "mdn-8554596597946-46748704899258",
        "title": "Único",
        "price": 12750,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-32-enfeites-para-arvore-de-natal-vermelho-verde-e-dourado-colecao-natal-tradicional",
    "name": "Kit 32 Enfeites para Árvore de Natal Vermelho, Verde e Dourado – Coleção Natal Tradicional",
    "shortName": "Kit 32 Enfeites para Árvore de Natal Vermelho, Verde e Dourado – Coleção Natal Tradicional",
    "description": "Descrição Kit com 32 enfeites decorativos para árvore de Natal , desenvolvido em uma combinação clássica de vermelho, verde e dourado , ideal para criar uma decoração natalina tradicional, elegante e rica em detalhes. O conjunto reúne ornamentos em diferentes formatos e acabamentos, incluindo bolas natalinas, gotas, pontas alongadas e peças ornamentadas , com detalhes em glitter, desenhos dourados e superfícies foscas e brilhantes. A variedade de formatos permite distribuir os enfeites por toda a árvore, criando profundidade e uma composição visual mais completa. Combina especialmente com iluminação em branco quente, laços vermelhos, dourados e outros elementos tradicionais de Natal. Especificações do produto: Produto: Kit de enfeites para árvore de Natal Quantidade: 32 peças Cores predominantes: Vermelho, verde e dourado Material: Vidro decorativo Acabamentos: Fosco, brilhante, metalizado e com glitter Formatos: Bolas, gotas, pendentes alongados e ornamentos especiais Detalhes: Estampas natalinas e aplicações douradas Estilo: Natal tradicional / clássico Tema: Natal Uso recomendado: Ambientes internos Indicação: Árvores de Natal, vitrines, halls, recepções e decoração residencial Conteúdo da embalagem: 1 kit com 32 enfeites natalinos variados Por possuir diferentes desenhos, tamanhos e acabamentos, o conjunto proporciona uma decoração equilibrada e sofisticada, preservando as cores mais tradicionais do Natal.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/73466.webp?v=1790123293",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/324773.webp?v=1790123293",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32744.webp?v=1790123293"
    ],
    "variants": [
      {
        "id": "mdn-8554552688826-46748485451962",
        "title": "Único",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-16-enfeites-de-natal-tradicional-vermelho-e-verde-com-papai-noel-presentes-e-arvores",
    "name": "Kit 16 Enfeites de Natal Tradicional Vermelho e Verde com Papai Noel, Presentes e Árvores",
    "shortName": "Kit 16 Enfeites de Natal Tradicional Vermelho e Verde com Papai Noel, Presentes e Árvores",
    "description": "Descrição Kit com 16 enfeites decorativos de Natal , desenvolvido para criar uma decoração tradicional e sofisticada, combinando os clássicos tons de vermelho, verde e dourado . O conjunto apresenta diferentes formatos inspirados nos principais elementos natalinos, incluindo Papai Noel, trenó, presentes, árvores de Natal, folhas, caixa de correio, placa North Pole, guirlanda e flores natalinas . As peças possuem acabamento brilhante, metalizado e detalhes decorativos que proporcionam maior destaque quando utilizadas com iluminação de Natal. Ideal para decorar árvores de Natal, guirlandas, arranjos e outros ambientes residenciais ou comerciais. Especificações do produto: Produto: Kit de enfeites para árvore de Natal Quantidade: 16 peças Cores predominantes: Vermelho, verde e dourado Cores complementares: Branco e prata Material: Vidro decorativo com aplicações e acabamentos ornamentais Acabamento: Brilhante, metalizado e com detalhes em glitter Formatos: Papai Noel, trenó, presentes, árvores, folhas, flores, guirlanda e outros elementos natalinos Estilo: Natal tradicional Tema: Natal clássico Uso recomendado: Decoração interna Conteúdo da embalagem: 1 kit com 16 enfeites natalinos variados A variedade de formatos permite distribuir os ornamentos por diferentes pontos da árvore, criando uma decoração rica em detalhes e com o tradicional visual natalino em vermelho e verde.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3457342.webp?v=1790121464",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/478632.webp?v=1790121464"
    ],
    "variants": [
      {
        "id": "mdn-8554519625914-46748309782714",
        "title": "Único",
        "price": 12990,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-24-enfeites-para-arvore-de-natal-vermelho-e-dourado-com-bolas-e-pendentes-decorativos",
    "name": "Kit 24 Enfeites para Árvore de Natal Vermelho e Dourado com Bolas e Pendentes Decorativos",
    "shortName": "Kit 24 Enfeites para Árvore de Natal Vermelho e Dourado com Bolas e Pendentes Decorativos",
    "description": "Descrição Kit com 24 enfeites decorativos para árvore de Natal , desenvolvido para criar uma composição clássica e sofisticada em tons de vermelho, dourado e champagne . O conjunto reúne peças em diferentes formatos e acabamentos, incluindo bolas tradicionais, bolas ornamentadas, gotas, pendentes alongados e ornamentos decorativos. Os detalhes metalizados, foscos, brilhantes e com glitter ajudam a criar uma decoração mais rica e elegante. Ideal para árvores de Natal residenciais e comerciais, podendo ser utilizado em salas, halls, vitrines, lojas, recepções, hotéis e outros ambientes internos. Especificações do produto: Produto: Kit de enfeites para árvore de Natal Quantidade: 24 peças Cores predominantes: Vermelho, dourado e champagne Material: Plástico decorativo Acabamento: Fosco, brilhante, metalizado e com detalhes em glitter Formatos: Bolas, gotas, pendentes alongados e ornamentos decorativos Detalhes: Aplicações e desenhos ornamentais em dourado Estilo: Clássico, elegante e sofisticado Tema: Natal Uso recomendado: Ambientes internos Conteúdo da embalagem: 1 kit com 24 enfeites natalinos variados A combinação de vermelho e dourado traz uma estética natalina tradicional, enquanto os diferentes formatos e texturas ajudam a proporcionar profundidade e variedade visual à decoração.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/345636.webp?v=1790101194",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5345.webp?v=1790101194",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/643456.webp?v=1790101194"
    ],
    "variants": [
      {
        "id": "mdn-8553625616570-46745482231994",
        "title": "Único",
        "price": 13790,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-30-enfeites-para-arvore-de-natal-dourado-e-champagne-com-pedrarias-decorativas",
    "name": "Kit 30 Enfeites para Árvore de Natal Dourado e Champagne com Pedrarias Decorativas",
    "shortName": "Kit 30 Enfeites para Árvore de Natal Dourado e Champagne com Pedrarias Decorativas",
    "description": "Descrição Kit com 30 enfeites decorativos para árvore de Natal , composto por peças em diferentes formatos e acabamentos, com visual sofisticado em tons de dourado, champagne e prata . O conjunto inclui bolas natalinas, peças alongadas e ornamentos com detalhes decorativos que remetem a pedrarias, cristais, pérolas e aplicações brilhantes. A combinação de acabamentos foscos, metalizados e ornamentados proporciona uma composição elegante para árvores de Natal residenciais ou comerciais. Ideal para decoração de salas, halls, recepções, vitrines, lojas, hotéis, escritórios e outros ambientes internos. Especificações do produto: Produto: Kit de enfeites para árvore de Natal Quantidade: 30 peças Cores predominantes: Dourado, champagne e prata Material: Plástico decorativo Detalhes: Aplicações decorativas com efeito de pedrarias, pérolas, glitter e acabamento metalizado Acabamentos: Fosco, brilhante, metalizado e ornamentado Formatos: Bolas, gotas, peças alongadas e ornamentos decorativos Estilo: Clássico, luxuoso e sofisticado Tema: Natal Uso recomendado: Ambientes internos Conteúdo da embalagem: 1 kit com 30 enfeites natalinos variados Os diferentes tamanhos, formatos e acabamentos ajudam a criar profundidade e variedade visual na decoração da árvore, combinando especialmente com luzes em branco quente e outros acessórios em tons dourados e champagne.",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/45777.webp?v=1790099979",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5775.webp?v=1790099979",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3466.webp?v=1790099979",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ORN-2541066-3_BH-Heritage-Jeweled-Main-Ornaments-Set-of-30_SSC.webp?v=1790099979"
    ],
    "variants": [
      {
        "id": "mdn-8553578463418-46745332744378",
        "title": "Único",
        "price": 18790,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-32-enfeites-para-arvore-de-natal-azul-e-dourado-com-bolas-e-pendentes-decorativos",
    "name": "Kit 32 Enfeites para Árvore de Natal Azul e Dourado com Bolas e Pendentes Decorativos",
    "shortName": "Kit 32 Enfeites para Árvore de Natal Azul e Dourado com Bolas e Pendentes Decorativos",
    "description": "Descrição Kit com 32 enfeites decorativos para árvore de Natal , composto por peças em diferentes formatos, cores e acabamentos para criar uma decoração natalina elegante e sofisticada. O conjunto combina tons de azul, dourado, champagne e transparente , com peças lisas e ornamentadas, detalhes metalizados, glitter e desenhos decorativos. Possui bolas tradicionais, gotas, peças alongadas e pendentes em formatos variados, proporcionando uma composição rica e harmoniosa para a árvore de Natal. Ideal para árvores de Natal residenciais, decoração de salas, halls, vitrines, lojas, recepções e ambientes comerciais. Especificações: Produto: Kit de enfeites para árvore de Natal Quantidade: 32 peças Cores predominantes: Azul, dourado e champagne Cores complementares: Transparente e detalhes em branco Material: Plástico decorativo resistente Acabamento: Brilhante, fosco, metalizado e com detalhes em glitter Formatos: Bolas, gotas, pendentes alongados e ornamentos decorativos Estilo: Clássico, elegante e sofisticado Tema: Natal Uso recomendado: Decoração interna Conteúdo da embalagem: 1 kit com 32 enfeites natalinos variados Os diferentes formatos e acabamentos permitem distribuir as peças por toda a árvore, proporcionando maior variedade visual e uma decoração equilibrada.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/jdsugh.webp?v=1790049910",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/jwerhgbf.webp?v=1790049910",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/wefk.webp?v=1790049911",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/wfg.webp?v=1790049911"
    ],
    "variants": [
      {
        "id": "mdn-8551811055802-46739664371898",
        "title": "Único",
        "price": 18790,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-32-enfeites-para-arvore-de-natal-dourado-champagne-e-branco-bolas-e-pendentes-decorativos",
    "name": "Kit 32 Enfeites para Árvore de Natal Dourado, Champagne e Branco – Bolas e Pendentes Decorativos",
    "shortName": "Kit 32 Enfeites para Árvore de Natal Dourado, Champagne e Branco – Bolas e Pendentes Decorativos",
    "description": "Descrição Kit com 32 enfeites decorativos para árvore de Natal , composto por peças em diferentes formatos e acabamentos para criar uma decoração elegante e harmoniosa. O conjunto combina bolas natalinas, pendentes alongados, gotas e ornamentos decorativos , com detalhes metalizados, foscos, brilhantes e trabalhados. A combinação de dourado, champagne e branco proporciona um visual sofisticado e combina facilmente com árvores verdes, nevadas e outros acessórios natalinos. As peças podem ser distribuídas por toda a árvore, ajudando a criar volume, profundidade e variedade na composição. Ideal para decoração de árvores de Natal residenciais, vitrines, recepções, lojas, escritórios e ambientes comerciais. Especificações do produto: Produto: Kit de enfeites para árvore de Natal Quantidade: 32 peças Cores: Dourado, champagne, branco e detalhes transparentes Material: Plástico decorativo resistente Acabamento: Fosco, brilhante, metalizado e com detalhes em glitter Formatos: Bolas, gotas, pendentes alongados e ornamentos decorativos Estilo: Clássico e sofisticado Uso: Decoração natalina Ambiente indicado: Interno Tema: Natal Conteúdo da embalagem: 1 kit com 32 enfeites decorativos",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/234121.webp?v=1789748262",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/43234.webp?v=1789748262",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/1244.webp?v=1789748262",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32141234.webp?v=1789748262",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/12341234.webp?v=1789748262"
    ],
    "variants": [
      {
        "id": "mdn-8543635243194-46695398506682",
        "title": "Único",
        "price": 17990,
        "available": true
      }
    ]
  },
  {
    "handle": "150-luzes-de-natal-tradicionais-de-led-multicoloridas",
    "name": "150 luzes de Natal tradicionais LED multicoloridas 15 Metros",
    "shortName": "150 luzes de Natal tradicionais LED multicoloridas 15 Metros",
    "description": "Anime a decoração da sua árvore de Natal este ano com nossas luzes coloridas de pickwick! Com 150 LEDs multicoloridos com 5 tons vibrantes diferentes de vermelho, laranja, rosa, verde e azul, eles são perfeitos para espalhar alegria festiva. Enfeite sua árvore de Natal distribuindo os 15m de luzes uniformemente de cima para baixo e complemente com algumas bugigangas coloridas e enfeites de árvore para obter o efeito completo. O cabo verde combina perfeitamente com a folhagem e as luzes também possuem 9 funções disponíveis, oferecendo diferentes efeitos de iluminação! Você também pode usar o prático temporizador para garantir a iluminação automática todas as noites. 15m de luzes, 5m de cabo Tampa flor (D) 2,5cm 9 funções Temporizador de 6 horas",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-22%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL20010_1_Traditional-Multi-Coloured-Pickwick-Christmas-Tree-Lights-Indoor.jpg?v=1789486882"
    ],
    "variants": [
      {
        "id": "mdn-8536986157242-46654142218426",
        "title": "Único",
        "price": 3490,
        "compareAt": 4490,
        "available": true,
        "sku": "PL20010"
      }
    ]
  },
  {
    "handle": "60-luzes-de-natal-de-pinha-c7-multicoloridas",
    "name": "60 luzes de Natal de pinha C7 multicoloridas",
    "shortName": "60 luzes de Natal de pinha C7 multicoloridas",
    "description": "Com seu design sutil hachurado, essas lindas luzes de pinha C7 são perfeitas para enfeitar a árvore de Natal ou adicionar um brilho festivo em qualquer lugar da casa. Cada uma das 60 lâmpadas perspex C7 abriga um LED colorido para um brilho alegre, com cada tampa medindo 3,5 cm de comprimento. 15m de luzes; fio condutor de 5m 8 funções de iluminação Temporizador de 6 horas A combinação perfeita para árvores de 6 pés, 60 lâmpadas de pinha são espalhadas uniformemente por 15 m de cabo verde discreto e um fio verde adicional de 5 m é fornecido para sua conveniência. O plugue também está equipado com um temporizador opcional de 6 horas. Ah, e já mencionamos que essas luzes podem piscar, piscar, desbotar e muito mais? Para iluminar, basta conectar o transformador (plugue) preto na tomada mais próxima.",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-25%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL18040_multi-coloured-pinecone-c7-Christmas-fairy-lights_P1.jpg?v=1789486878"
    ],
    "variants": [
      {
        "id": "mdn-8536986058938-46654142120122",
        "title": "Único",
        "price": 2990,
        "compareAt": 3990,
        "available": true,
        "sku": "PL18040"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-azul-classico-nevado",
    "name": "Árvore de Natal Pinheiro Azul Clássico Nevado",
    "shortName": "Árvore de Natal Pinheiro Azul Clássico Nevado",
    "description": "Árvore de Natal Pinheiro Azul Clássico Nevado O Pinheiro Azul Clássico Nevado combina acabamento com efeito de neve e LED branco quente. Use-o como ponto de partida para uma decoração de inspiração invernal. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-azul-classico-nevado-1.webp?v=1789605887",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-azul-classico-nevado-2.webp?v=1789605887",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-azul-classico-nevado-3.webp?v=1789605886",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-azul-classico-nevado-4.webp?v=1789605886",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-azul-classico-nevado-5.webp?v=1789605887",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_cbebc766-a864-408b-bf5a-1d3506f15788.png?v=1789607317",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-azul-classico-nevado-7.webp?v=1789605886"
    ],
    "variants": [
      {
        "id": "mdn-8539307704506-46743678386362",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-4123636"
      },
      {
        "id": "mdn-8539307704506-46743678419130",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-4123637"
      },
      {
        "id": "mdn-8539307704506-46743678451898",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-4123638"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-branco-vermont-nevado",
    "name": "Árvore de Natal Pinheiro Branco de Vermont Nevado",
    "shortName": "Árvore de Natal Pinheiro Branco de Vermont Nevado",
    "description": "Árvore de Natal Pinheiro Branco de Vermont Nevado O Pinheiro Branco de Vermont Nevado traz acabamento com efeito de neve e iluminação LED branco quente. Para compor o cenário, experimente enfeites em tons claros, metálicos ou vermelho natalino. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-nevado-1.webp?v=1789605884",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-nevado-2.webp?v=1789605884",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-nevado-3.webp?v=1789605884",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-nevado-4.webp?v=1789605884",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-nevado-5.webp?v=1789605884",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_32b8d72f-dc26-4210-90c9-681f3643bf87.png?v=1789607316",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-nevado-7.webp?v=1789605886"
    ],
    "variants": [
      {
        "id": "mdn-8539307540666-46743775707322",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-4123614"
      },
      {
        "id": "mdn-8539307540666-46743775740090",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-4123615"
      },
      {
        "id": "mdn-8539307540666-46743775772858",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-4123616"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-broadway-fibra-optica",
    "name": "Árvore de Natal Broadway com Fibra Óptica",
    "shortName": "Árvore de Natal Broadway com Fibra Óptica",
    "description": "Árvore de Natal Broadway com Fibra Óptica A árvore de Natal Broadway combina fibra óptica e LED multicolorido na iluminação. É uma opção para quem deseja destacar as luzes na decoração natalina, com três alturas para escolher. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Fibra óptica e LED multicolorido combinados. No configurador, essa versão aparece como “Com LED - Multicolorido”. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-broadway-fibra-optica-1.webp?v=1789605882",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-broadway-fibra-optica-2.webp?v=1789605882",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-broadway-fibra-optica-3.webp?v=1789605882",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-broadway-fibra-optica-4.webp?v=1789605882",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-broadway-fibra-optica-5.webp?v=1789605882",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-broadway-fibra-optica-6.webp?v=1789605882",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-broadway-fibra-optica-7.webp?v=1789605882",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-broadway-fibra-optica-8.webp?v=1789605882"
    ],
    "variants": [
      {
        "id": "mdn-8539307311290-46743775543482",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-4002988"
      },
      {
        "id": "mdn-8539307311290-46743775576250",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-4002989"
      },
      {
        "id": "mdn-8539307311290-46743775609018",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-4002990"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-acucarado-nevado",
    "name": "Árvore de Natal Pinheiro Açucarado Nevado",
    "shortName": "Árvore de Natal Pinheiro Açucarado Nevado",
    "description": "Árvore de Natal Pinheiro Açucarado Nevado O Pinheiro Açucarado Nevado traz efeito de neve à decoração e permite escolher entre as configurações sem LED ou com LED branco quente. Confira quais opções estão disponíveis em cada altura. Tamanhos e configurações Alturas: 2,20 m e 2,80 m. Iluminação: Sem LED e Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-acucarado-nevado-1.webp?v=1789605879",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-acucarado-nevado-2.webp?v=1789605879",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-acucarado-nevado-3.webp?v=1789605879",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-acucarado-nevado-4.webp?v=1789605879",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-acucarado-nevado-5.webp?v=1789605879",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_62bec2ed-7716-44a6-b664-8c47e6854879.png?v=1789607316",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-acucarado-nevado-7.webp?v=1789605879",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-acucarado-nevado-8.webp?v=1789605880"
    ],
    "variants": [
      {
        "id": "mdn-8539306819770-46743775412410",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2803035"
      },
      {
        "id": "mdn-8539306819770-46743775445178",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808742"
      },
      {
        "id": "mdn-8539306819770-46743775477946",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-2808741"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-noruegues-do-norte",
    "name": "Árvore de Natal Pinheiro Norueguês do Norte",
    "shortName": "Árvore de Natal Pinheiro Norueguês do Norte",
    "description": "Árvore de Natal Pinheiro Norueguês do Norte O Pinheiro Norueguês do Norte reúne três alturas e iluminação LED branco quente. Uma opção para compor a decoração natalina com luz de tom acolhedor e montagem padrão. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-do-norte-1.webp?v=1789605877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-do-norte-2.webp?v=1789605877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-do-norte-3.webp?v=1789605877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-do-norte-4.webp?v=1789605877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-do-norte-5.webp?v=1789605877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-do-norte-6.webp?v=1789605877"
    ],
    "variants": [
      {
        "id": "mdn-8539306426554-46743775281338",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-4126141"
      },
      {
        "id": "mdn-8539306426554-46743775314106",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-4126142"
      },
      {
        "id": "mdn-8539306426554-46743775346874",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-4126143"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-silverado-slim-nevado",
    "name": "Árvore de Natal Pinheiro Silverado Slim Nevado",
    "shortName": "Árvore de Natal Pinheiro Silverado Slim Nevado",
    "description": "Árvore de Natal Pinheiro Silverado Slim Nevado O Pinheiro Silverado Slim Nevado reúne a proposta esguia da linha Slim, o acabamento nevado e LED branco quente. Confira a largura da configuração para planejar sua posição no ambiente. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-nevado-1.webp?v=1789605875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-nevado-2.webp?v=1789605875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-nevado-3.webp?v=1789605875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-nevado-4.webp?v=1789605875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-nevado-5.webp?v=1789605875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-nevado-6.webp?v=1789605876"
    ],
    "variants": [
      {
        "id": "mdn-8539306229946-46743775150266",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-4126153"
      },
      {
        "id": "mdn-8539306229946-46743775183034",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-4126154"
      },
      {
        "id": "mdn-8539306229946-46743775215802",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-4126155"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-branco-denali",
    "name": "Árvore de Natal Pinheiro Branco Denali",
    "shortName": "Árvore de Natal Pinheiro Branco Denali",
    "description": "Árvore de Natal Pinheiro Branco Denali O Pinheiro Branco Denali é uma árvore artificial de folhagem branca com LED branco quente. A cor permite explorar composições monocromáticas ou criar contraste com enfeites coloridos. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-denali-1.webp?v=1789605872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-denali-2.webp?v=1789605872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-denali-3.webp?v=1789605872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-denali-4.webp?v=1789605872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-denali-5.webp?v=1789605872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-denali-6.webp?v=1789605872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_3997e5af-80ce-4201-901e-dbdf177f3600.png?v=1789607316",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-denali-8.webp?v=1789605872"
    ],
    "variants": [
      {
        "id": "mdn-8539306197178-46743775019194",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2807697"
      },
      {
        "id": "mdn-8539306197178-46743775051962",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2807698"
      },
      {
        "id": "mdn-8539306197178-46743775084730",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2807699"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-yukon-nevado",
    "name": "Árvore de Natal Pinheiro Yukon Nevado",
    "shortName": "Árvore de Natal Pinheiro Yukon Nevado",
    "description": "Árvore de Natal Pinheiro Yukon Nevado O Pinheiro Yukon Nevado combina efeito de neve e LED branco quente em cinco alturas. Compare as medidas para criar uma composição proporcional ao pé-direito e à área livre do ambiente. Tamanhos e configurações Alturas: 1,80 m, 2,20 m, 2,80 m, 3,80 m e 4,80 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-nevado-1.webp?v=1789605870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-nevado-2.webp?v=1789605870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-nevado-3.webp?v=1789605870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-nevado-4.webp?v=1789605870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-nevado-5.webp?v=1789605870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-nevado-6.webp?v=1789605871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_bfb9b4d7-4347-4110-9e87-1f35ed98744c.png?v=1789607316",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-nevado-8.webp?v=1789605870"
    ],
    "variants": [
      {
        "id": "mdn-8539306000570-46743774822586",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2808541"
      },
      {
        "id": "mdn-8539306000570-46743774855354",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808542"
      },
      {
        "id": "mdn-8539306000570-46743774888122",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-2808543"
      },
      {
        "id": "mdn-8539306000570-46743774920890",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 43990,
        "available": true,
        "sku": "MDN-2808544"
      },
      {
        "id": "mdn-8539306000570-46743774953658",
        "title": "4,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 47990,
        "available": true,
        "sku": "MDN-2811006"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-golden-aspen-estate",
    "name": "Árvore de Natal Abeto Golden Aspen Estate",
    "shortName": "Árvore de Natal Abeto Golden Aspen Estate",
    "description": "Árvore de Natal Abeto Golden Aspen Estate O Abeto Golden Aspen Estate tem duas alturas e iluminação LED branco quente. Planeje a decoração a partir das medidas da configuração e escolha os enfeites que irão completar o cenário. Tamanhos e configurações Alturas: 2,20 m e 2,80 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-golden-aspen-estate-1.webp?v=1789605868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-golden-aspen-estate-2.webp?v=1789605874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-golden-aspen-estate-3.webp?v=1789605868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-golden-aspen-estate-4.webp?v=1789605868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-golden-aspen-estate-5.webp?v=1789605869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-golden-aspen-estate-6.webp?v=1789605868"
    ],
    "variants": [
      {
        "id": "mdn-8539305705658-46743774724282",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-4126903"
      },
      {
        "id": "mdn-8539305705658-46743774757050",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-4126904"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-catedral",
    "name": "Árvore de Natal Abeto Catedral",
    "shortName": "Árvore de Natal Abeto Catedral",
    "description": "Árvore de Natal Abeto Catedral O Abeto Catedral oferece três alturas com LED branco quente. Antes da escolha, meça o pé-direito e a área de circulação para acomodar a árvore e a ponteira. Tamanhos e configurações Alturas: 2,20 m, 2,80 m e 3,20 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-catedral-1.webp?v=1789605865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-catedral-2.webp?v=1789605865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-catedral-3.webp?v=1789605866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-catedral-4.webp?v=1789605866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-catedral-5.webp?v=1789605865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-catedral-6.webp?v=1789605866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-catedral-7.webp?v=1789605866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-catedral-8.webp?v=1789605866"
    ],
    "variants": [
      {
        "id": "mdn-8539305246906-50840850497722",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2808188"
      },
      {
        "id": "mdn-8539305246906-50840850530490",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2808189"
      },
      {
        "id": "mdn-8539305246906-46743774593210",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2808188"
      },
      {
        "id": "mdn-8539305246906-50738691473594",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 31990,
        "available": true
      },
      {
        "id": "mdn-8539305246906-46743774625978",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808191"
      },
      {
        "id": "mdn-8539305246906-50738691506362",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 33990,
        "available": true
      },
      {
        "id": "mdn-8539305246906-46743774658746",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-4126238"
      },
      {
        "id": "mdn-8539305246906-50738691539130",
        "title": "3,20 m / Sem LED / Montagem padrão",
        "price": 36990,
        "available": true
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-noruegues",
    "name": "Árvore de Natal Pinheiro Norueguês",
    "shortName": "Árvore de Natal Pinheiro Norueguês",
    "description": "Árvore de Natal Pinheiro Norueguês O Pinheiro Norueguês permite escolher entre LED branco quente e LED multicolorido, conforme a altura. Compare as configurações para definir se prefere uma composição de luz suave ou uma decoração mais colorida. Tamanhos e configurações Alturas: 1,20 m, 1,80 m, 2,20 m, 2,80 m, 3,20 m e 3,80 m. Iluminação: Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-1.webp?v=1789605863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-2.webp?v=1789605863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-3.webp?v=1789605863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-4.webp?v=1789605863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-5.webp?v=1789605863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_91cafa37-da19-4fa4-98c5-e07f9b90e849.png?v=1789607315",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-7.webp?v=1789605863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-noruegues-8.webp?v=1789605863"
    ],
    "variants": [
      {
        "id": "mdn-8539304886458-46743773479098",
        "title": "1,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 25990,
        "available": true,
        "sku": "MDN-2810264"
      },
      {
        "id": "mdn-8539304886458-46743773511866",
        "title": "1,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 26990,
        "available": true,
        "sku": "MDN-2810265"
      },
      {
        "id": "mdn-8539304886458-46743773544634",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-2810266"
      },
      {
        "id": "mdn-8539304886458-46743773577402",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2810267"
      },
      {
        "id": "mdn-8539304886458-46743773610170",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2810280"
      },
      {
        "id": "mdn-8539304886458-46743773642938",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2810270"
      },
      {
        "id": "mdn-8539304886458-46743773675706",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2810271"
      },
      {
        "id": "mdn-8539304886458-46743773708474",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2810272"
      },
      {
        "id": "mdn-8539304886458-46743773741242",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-2810273"
      },
      {
        "id": "mdn-8539304886458-46743773774010",
        "title": "3,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 38990,
        "available": true,
        "sku": "MDN-2810274"
      },
      {
        "id": "mdn-8539304886458-46743773806778",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2810275"
      },
      {
        "id": "mdn-8539304886458-46743773839546",
        "title": "3,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2810276"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-yukon",
    "name": "Árvore de Natal Pinheiro Yukon",
    "shortName": "Árvore de Natal Pinheiro Yukon",
    "description": "Árvore de Natal Pinheiro Yukon O Pinheiro Yukon oferece diferentes alturas e opções de LED branco quente ou multicolorido. Use as medidas de cada configuração para planejar uma decoração que respeite o espaço disponível. Tamanhos e configurações Alturas: 1,80 m, 2,20 m, 2,80 m, 3,80 m e 4,80 m. Iluminação: Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-1.webp?v=1789605860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-2.webp?v=1789605860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-3.webp?v=1789605860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-4.webp?v=1789605860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-5.webp?v=1789605860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-6.webp?v=1789605860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-7.webp?v=1789605860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-yukon-8.webp?v=1789605860"
    ],
    "variants": [
      {
        "id": "mdn-8539304755386-46743773118650",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2808269"
      },
      {
        "id": "mdn-8539304755386-46743773151418",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-4123597"
      },
      {
        "id": "mdn-8539304755386-46743773184186",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2808272"
      },
      {
        "id": "mdn-8539304755386-46743773216954",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2810262"
      },
      {
        "id": "mdn-8539304755386-46743773249722",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808803"
      },
      {
        "id": "mdn-8539304755386-46743773282490",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2810263"
      },
      {
        "id": "mdn-8539304755386-46743773315258",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2808804"
      },
      {
        "id": "mdn-8539304755386-46743773348026",
        "title": "4,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-2811005"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-nobre",
    "name": "Árvore de Natal Abeto Nobre",
    "shortName": "Árvore de Natal Abeto Nobre",
    "description": "Árvore de Natal Abeto Nobre O Abeto Nobre oferece opções de iluminação e montagem, incluindo Flip Tree em configurações específicas. Compare as combinações disponíveis para escolher a altura, a luz e a montagem desejadas. Tamanhos e configurações Alturas: 1,80 m, 2,20 m, 2,80 m e 3,20 m. Iluminação: Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão e Flip Tree. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-nobre-1.webp?v=1789605857",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-nobre-2.webp?v=1789605857",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-nobre-3.webp?v=1789605857",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-nobre-4.webp?v=1789605857",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-nobre-5.webp?v=1789605857",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_8dfaacd0-9d8c-46bc-aeb6-dfea523788f1.png?v=1789607315",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-nobre-7.webp?v=1789605857",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-nobre-8.webp?v=1789605857"
    ],
    "variants": [
      {
        "id": "mdn-8539304526010-46743772627130",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2800834"
      },
      {
        "id": "mdn-8539304526010-46743772659898",
        "title": "1,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808147"
      },
      {
        "id": "mdn-8539304526010-46743772692666",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2808433"
      },
      {
        "id": "mdn-8539304526010-46743772725434",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2800840"
      },
      {
        "id": "mdn-8539304526010-46743772758202",
        "title": "2,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808148"
      },
      {
        "id": "mdn-8539304526010-46743772790970",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808434"
      },
      {
        "id": "mdn-8539304526010-46743772823738",
        "title": "2,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808525"
      },
      {
        "id": "mdn-8539304526010-46743772856506",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2800843"
      },
      {
        "id": "mdn-8539304526010-46743772889274",
        "title": "2,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 40990,
        "available": true,
        "sku": "MDN-2808363"
      },
      {
        "id": "mdn-8539304526010-46743772922042",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-2808818"
      },
      {
        "id": "mdn-8539304526010-46743772954810",
        "title": "2,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 41990,
        "available": true,
        "sku": "MDN-2808526"
      },
      {
        "id": "mdn-8539304526010-46743772987578",
        "title": "3,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 44990,
        "available": true,
        "sku": "MDN-2808149"
      },
      {
        "id": "mdn-8539304526010-46743773020346",
        "title": "3,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 45990,
        "available": true,
        "sku": "MDN-2811004"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-lake-tahoe",
    "name": "Árvore de Natal Pinheiro Lake Tahoe",
    "shortName": "Árvore de Natal Pinheiro Lake Tahoe",
    "description": "Árvore de Natal Pinheiro Lake Tahoe O Pinheiro Lake Tahoe permite personalizar a iluminação entre branco quente e multicolorido, conforme a configuração. Compare as cinco alturas para definir a proporção da árvore no seu espaço. Tamanhos e configurações Alturas: 1,80 m, 2,20 m, 2,80 m, 3,20 m e 3,80 m. Iluminação: Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-lake-tahoe-1.webp?v=1789605853",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-lake-tahoe-2.webp?v=1789605854",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-lake-tahoe-3.webp?v=1789605853",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-lake-tahoe-4.webp?v=1789605854",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-lake-tahoe-5.webp?v=1789605854",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-lake-tahoe-6.webp?v=1789605854",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-lake-tahoe-7.webp?v=1789605854",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-lake-tahoe-8.webp?v=1789605854"
    ],
    "variants": [
      {
        "id": "mdn-8539304067258-46743772332218",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-4121685"
      },
      {
        "id": "mdn-8539304067258-46743772364986",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-4121686"
      },
      {
        "id": "mdn-8539304067258-46743772397754",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-4121687"
      },
      {
        "id": "mdn-8539304067258-46743772430522",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-4121688"
      },
      {
        "id": "mdn-8539304067258-46743772463290",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-4121689"
      },
      {
        "id": "mdn-8539304067258-46743772496058",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-4123664"
      },
      {
        "id": "mdn-8539304067258-46743772528826",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-4123665"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-woodland",
    "name": "Árvore de Natal Pinheiro Woodland",
    "shortName": "Árvore de Natal Pinheiro Woodland",
    "description": "Árvore de Natal Pinheiro Woodland O Pinheiro Woodland oferece três alturas e configurações com ou sem LED. A versão sem LED permite escolher a iluminação separadamente; nas versões com LED, escolha a cor oferecida no configurador. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-woodland-1.webp?v=1789605851",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-woodland-2.webp?v=1789605851",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-woodland-3.webp?v=1789605851",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-woodland-4.webp?v=1789605851",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-woodland-5.webp?v=1789605851",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-woodland-6.webp?v=1789605851",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-woodland-7.webp?v=1789605851",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-woodland-8.webp?v=1789605851"
    ],
    "variants": [
      {
        "id": "mdn-8539303805114-46743772004538",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2803800"
      },
      {
        "id": "mdn-8539303805114-46743772037306",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2807672"
      },
      {
        "id": "mdn-8539303805114-46743772070074",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2809070"
      },
      {
        "id": "mdn-8539303805114-46743772102842",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-2803803"
      },
      {
        "id": "mdn-8539303805114-46743772135610",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2807673"
      },
      {
        "id": "mdn-8539303805114-46743772168378",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2809071"
      },
      {
        "id": "mdn-8539303805114-46743772201146",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-4123621"
      },
      {
        "id": "mdn-8539303805114-46743772233914",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2807674"
      },
      {
        "id": "mdn-8539303805114-46743772266682",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2809072"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-prateado-europeu",
    "name": "Árvore de Natal Abeto Prateado Europeu",
    "shortName": "Árvore de Natal Abeto Prateado Europeu",
    "description": "Árvore de Natal Abeto Prateado Europeu O Abeto Prateado Europeu oferece configurações sem LED ou com LED branco quente. Compare as três alturas e planeje a combinação com seus enfeites antes de finalizar a escolha. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Sem LED e Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-prateado-europeu-1.webp?v=1789605848",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-prateado-europeu-2.webp?v=1789605848",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-prateado-europeu-3.webp?v=1789605848",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-prateado-europeu-4.webp?v=1789605848",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-prateado-europeu-5.webp?v=1789605848",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-prateado-europeu-6.webp?v=1789605848",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-prateado-europeu-7.webp?v=1789605848",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_498de765-a24b-4763-8395-88bd18d3ed5f.png?v=1789607315"
    ],
    "variants": [
      {
        "id": "mdn-8539303510202-46743771742394",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2810478"
      },
      {
        "id": "mdn-8539303510202-46743771775162",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2810479"
      },
      {
        "id": "mdn-8539303510202-46743771807930",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-2810476"
      },
      {
        "id": "mdn-8539303510202-46743771840698",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2810477"
      },
      {
        "id": "mdn-8539303510202-46743771873466",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-4121717"
      },
      {
        "id": "mdn-8539303510202-46743771906234",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-4121706"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-fraser-nevado",
    "name": "Árvore de Natal Abeto Fraser Nevado",
    "shortName": "Árvore de Natal Abeto Fraser Nevado",
    "description": "Árvore de Natal Abeto Fraser Nevado O Abeto Fraser Nevado reúne acabamento com efeito de neve e opções de LED branco quente ou multicolorido. Escolha a configuração que acompanha a paleta de cores da sua decoração. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-fraser-nevado-1.webp?v=1789605846",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-fraser-nevado-2.webp?v=1789605846",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-fraser-nevado-3.webp?v=1789605845",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-fraser-nevado-4.webp?v=1789605845",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-fraser-nevado-5.webp?v=1789605846",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_3bc53cfe-2567-45e8-a7be-95dc2a34123c.png?v=1789607315",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-fraser-nevado-7.webp?v=1789605846",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-fraser-nevado-8.webp?v=1789605846"
    ],
    "variants": [
      {
        "id": "mdn-8539303248058-46743771513018",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2809957"
      },
      {
        "id": "mdn-8539303248058-46743771545786",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2810236"
      },
      {
        "id": "mdn-8539303248058-46743771578554",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2809960"
      },
      {
        "id": "mdn-8539303248058-46743771611322",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2810238"
      },
      {
        "id": "mdn-8539303248058-46743771644090",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-2809959"
      },
      {
        "id": "mdn-8539303248058-46743771676858",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-2810239"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-grande-abeto-noruegues",
    "name": "Árvore de Natal Grande Abeto Norueguês",
    "shortName": "Árvore de Natal Grande Abeto Norueguês",
    "description": "Árvore de Natal Grande Abeto Norueguês O Grande Abeto Norueguês oferece três alturas, incluindo uma opção de 1,20 m. Compare as configurações sem LED e com LED branco quente para adequar a árvore ao seu projeto de Natal. Tamanhos e configurações Alturas: 1,20 m, 1,80 m e 2,20 m. Iluminação: Sem LED e Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-grande-abeto-noruegues-1.webp?v=1789605842",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-grande-abeto-noruegues-2.webp?v=1789605842",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-grande-abeto-noruegues-3.webp?v=1789605842",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-grande-abeto-noruegues-4.webp?v=1789605843",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-grande-abeto-noruegues-5.webp?v=1789605842",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-grande-abeto-noruegues-6.webp?v=1789605843",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-grande-abeto-noruegues-7.webp?v=1789605843",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-grande-abeto-noruegues-8.webp?v=1789605843"
    ],
    "variants": [
      {
        "id": "mdn-8539303182522-46743771250874",
        "title": "1,20 m / Sem LED / Montagem padrão",
        "price": 24990,
        "available": true,
        "sku": "MDN-2810484"
      },
      {
        "id": "mdn-8539303182522-46743771283642",
        "title": "1,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 24990,
        "available": true,
        "sku": "MDN-2810485"
      },
      {
        "id": "mdn-8539303182522-46743771316410",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-2810490"
      },
      {
        "id": "mdn-8539303182522-46743771349178",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2810487"
      },
      {
        "id": "mdn-8539303182522-46743771381946",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2810489"
      },
      {
        "id": "mdn-8539303182522-46743771414714",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-2810486"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-bosque-slim",
    "name": "Árvore de Natal Pinheiro Bosque Slim",
    "shortName": "Árvore de Natal Pinheiro Bosque Slim",
    "description": "Árvore de Natal Pinheiro Bosque Slim O Pinheiro Bosque Slim tem proposta de formato esguio e opções de montagem padrão ou Flip Tree, conforme a configuração. Compare altura e diâmetro para planejar a área ocupada pela árvore. Tamanhos e configurações Alturas: 1,80 m, 2,20 m, 2,80 m, 3,20 m, 3,80 m e 4,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão e Flip Tree. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-vermelho-slim-1.webp?v=1789605840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-vermelho-slim-2.webp?v=1789605840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-vermelho-slim-3.webp?v=1789605840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-vermelho-slim-4.webp?v=1789605840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-vermelho-slim-5.webp?v=1789605840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_ae5c919d-2563-4177-8473-fe93fbd9491e.png?v=1789607315",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-vermelho-slim-7.webp?v=1789605840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-vermelho-slim-8.webp?v=1789605840"
    ],
    "variants": [
      {
        "id": "mdn-8539302822074-46743770529978",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2800899"
      },
      {
        "id": "mdn-8539302822074-46743770562746",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2808240"
      },
      {
        "id": "mdn-8539302822074-46743770595514",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2811007"
      },
      {
        "id": "mdn-8539302822074-46743770628282",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-2800900"
      },
      {
        "id": "mdn-8539302822074-46743770661050",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2808241"
      },
      {
        "id": "mdn-8539302822074-46743770693818",
        "title": "2,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 33990,
        "available": true,
        "sku": "MDN-2808377"
      },
      {
        "id": "mdn-8539302822074-46743770726586",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2811008"
      },
      {
        "id": "mdn-8539302822074-46743770759354",
        "title": "2,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-2811013"
      },
      {
        "id": "mdn-8539302822074-46743770792122",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808242"
      },
      {
        "id": "mdn-8539302822074-46743770824890",
        "title": "2,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 39990,
        "available": true,
        "sku": "MDN-2808378"
      },
      {
        "id": "mdn-8539302822074-46743770857658",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2811009"
      },
      {
        "id": "mdn-8539302822074-46743770890426",
        "title": "2,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 40990,
        "available": true,
        "sku": "MDN-2811014"
      },
      {
        "id": "mdn-8539302822074-46743770923194",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-2808243"
      },
      {
        "id": "mdn-8539302822074-46743770955962",
        "title": "3,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 43990,
        "available": true,
        "sku": "MDN-2808379"
      },
      {
        "id": "mdn-8539302822074-46743770988730",
        "title": "3,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 38990,
        "available": true,
        "sku": "MDN-2811010"
      },
      {
        "id": "mdn-8539302822074-46743771021498",
        "title": "3,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 44990,
        "available": true,
        "sku": "MDN-2811015"
      },
      {
        "id": "mdn-8539302822074-46743771054266",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2808238"
      },
      {
        "id": "mdn-8539302822074-46743771087034",
        "title": "3,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2811011"
      },
      {
        "id": "mdn-8539302822074-46743771119802",
        "title": "4,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-2808239"
      },
      {
        "id": "mdn-8539302822074-46743771152570",
        "title": "4,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 46990,
        "available": true,
        "sku": "MDN-2811012"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-europeu",
    "name": "Árvore de Natal Abeto Europeu",
    "shortName": "Árvore de Natal Abeto Europeu",
    "description": "Árvore de Natal Abeto Europeu O Abeto Europeu permite escolher entre configurações sem LED e com LED branco quente. Confira as combinações oferecidas nas três alturas e complete a composição com os enfeites de sua preferência. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Sem LED e Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-europeu-1.webp?v=1789605837",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-europeu-2.webp?v=1789605837",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-europeu-3.webp?v=1789605837",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-europeu-4.webp?v=1789605836",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-europeu-5.webp?v=1789605837",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-europeu-6.webp?v=1789605837",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-europeu-7.webp?v=1789605837",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_7ce9fffb-534b-4e44-9b09-374984bef0b0.png?v=1789607314"
    ],
    "variants": [
      {
        "id": "mdn-8539302133946-46743770333370",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 26990,
        "available": true,
        "sku": "MDN-2807884"
      },
      {
        "id": "mdn-8539302133946-46743770366138",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-2808193"
      },
      {
        "id": "mdn-8539302133946-46743770398906",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-2807886"
      },
      {
        "id": "mdn-8539302133946-46743770431674",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2808196"
      },
      {
        "id": "mdn-8539302133946-46743770464442",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808198"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-montanha-berkshire",
    "name": "Árvore de Natal Abeto Montanha Berkshire",
    "shortName": "Árvore de Natal Abeto Montanha Berkshire",
    "description": "Árvore de Natal Abeto Montanha Berkshire O Abeto Montanha Berkshire oferece sete alturas e opções com ou sem LED. Compare as medidas e as combinações disponíveis para escolher uma configuração proporcional à sua decoração. Tamanhos e configurações Alturas: 1,20 m, 1,80 m, 2,20 m, 2,80 m, 3,20 m, 3,80 m e 4,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-montanha-berkshire-1.webp?v=1789605834",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-montanha-berkshire-2.webp?v=1789605834",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-montanha-berkshire-3.webp?v=1789605834",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-montanha-berkshire-4.webp?v=1789605834",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-montanha-berkshire-5.webp?v=1789605834",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-montanha-berkshire-6.webp?v=1789605834",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-montanha-berkshire-7.webp?v=1789605834",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_ac46231c-64c4-4f0d-9b2f-7f7d31619b6d.png?v=1789607314"
    ],
    "variants": [
      {
        "id": "mdn-8539302101178-46743769678010",
        "title": "1,20 m / Sem LED / Montagem padrão",
        "price": 24990,
        "available": true,
        "sku": "MDN-2810193"
      },
      {
        "id": "mdn-8539302101178-46743769710778",
        "title": "1,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 25990,
        "available": true,
        "sku": "MDN-2810192"
      },
      {
        "id": "mdn-8539302101178-46743769743546",
        "title": "1,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 25990,
        "available": true,
        "sku": "MDN-2810191"
      },
      {
        "id": "mdn-8539302101178-46743769776314",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2810196"
      },
      {
        "id": "mdn-8539302101178-46743769809082",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2810195"
      },
      {
        "id": "mdn-8539302101178-46743769841850",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2810194"
      },
      {
        "id": "mdn-8539302101178-46743769874618",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-2810199"
      },
      {
        "id": "mdn-8539302101178-46743769907386",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2810198"
      },
      {
        "id": "mdn-8539302101178-46743769940154",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2810197"
      },
      {
        "id": "mdn-8539302101178-46743769972922",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2810201"
      },
      {
        "id": "mdn-8539302101178-46743770005690",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2810202"
      },
      {
        "id": "mdn-8539302101178-46743770038458",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2810200"
      },
      {
        "id": "mdn-8539302101178-46743770071226",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-4126236"
      },
      {
        "id": "mdn-8539302101178-46743770103994",
        "title": "3,80 m / Sem LED / Montagem padrão",
        "price": 41990,
        "available": true,
        "sku": "MDN-2810205"
      },
      {
        "id": "mdn-8539302101178-46743770136762",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2810203"
      },
      {
        "id": "mdn-8539302101178-46743770169530",
        "title": "3,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2810204"
      },
      {
        "id": "mdn-8539302101178-46743770202298",
        "title": "4,80 m / Sem LED / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-2810208"
      },
      {
        "id": "mdn-8539302101178-46743770235066",
        "title": "4,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-2810206"
      },
      {
        "id": "mdn-8539302101178-46743770267834",
        "title": "4,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-2810207"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-verde-classico",
    "name": "Árvore de Natal Pinheiro Verde Clássico",
    "shortName": "Árvore de Natal Pinheiro Verde Clássico",
    "description": "Árvore de Natal Pinheiro Verde Clássico O Pinheiro Verde Clássico é uma árvore artificial de proposta tradicional. Escolha entre as configurações sem LED ou com LED branco quente e combine com enfeites nas cores do seu Natal. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Sem LED e Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-verde-classico-1.webp?v=1789605830",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-verde-classico-2.webp?v=1789605831",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-verde-classico-3.webp?v=1789605831",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-verde-classico-4.webp?v=1789605831",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-verde-classico-5.webp?v=1789605831",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_0744fba5-a52a-467f-a020-eaa70d23d0e2.png?v=1789607314",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-verde-classico-7.webp?v=1789605831",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-verde-classico-8.webp?v=1789605831"
    ],
    "variants": [
      {
        "id": "mdn-8539302068410-46743769415866",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-4120265"
      },
      {
        "id": "mdn-8539302068410-46743769448634",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-4120264"
      },
      {
        "id": "mdn-8539302068410-46743769481402",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-4120271"
      },
      {
        "id": "mdn-8539302068410-46743769514170",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-4120269"
      },
      {
        "id": "mdn-8539302068410-46743769546938",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-4120274"
      },
      {
        "id": "mdn-8539302068410-46743769579706",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-4120273"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-balsamico-alpino",
    "name": "Árvore de Natal Abeto Balsâmico Alpino",
    "shortName": "Árvore de Natal Abeto Balsâmico Alpino",
    "description": "Árvore de Natal Abeto Balsâmico Alpino O Abeto Balsâmico Alpino oferece seis alturas com LED branco quente e montagem padrão. Compare as medidas de cada configuração para planejar o espaço da árvore e dos enfeites. Tamanhos e configurações Alturas: 1,20 m, 1,80 m, 2,20 m, 2,80 m, 3,20 m e 3,80 m. Iluminação: Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-alpino-1.webp?v=1789605828",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-alpino-2.webp?v=1789605828",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-alpino-3.webp?v=1789605828",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_120a8c0e-d8b1-4ea3-a26e-8531c57bc62e.png?v=1789607314",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-alpino-5.webp?v=1789605828",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-alpino-6.webp?v=1789605828",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-alpino-7.webp?v=1789605828",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-alpino-8.webp?v=1789605828"
    ],
    "variants": [
      {
        "id": "mdn-8539301970106-46743769186490",
        "title": "1,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 25990,
        "available": true,
        "sku": "MDN-2807876"
      },
      {
        "id": "mdn-8539301970106-46743769219258",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2807861"
      },
      {
        "id": "mdn-8539301970106-46743769252026",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2807863"
      },
      {
        "id": "mdn-8539301970106-46743769284794",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2807865"
      },
      {
        "id": "mdn-8539301970106-46743769317562",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-2808186"
      },
      {
        "id": "mdn-8539301970106-46743769350330",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2808187"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-sanibel",
    "name": "Árvore de Natal Pinheiro Sanibel",
    "shortName": "Árvore de Natal Pinheiro Sanibel",
    "description": "Árvore de Natal Pinheiro Sanibel O Pinheiro Sanibel oferece três alturas e opções sem LED ou com LED branco quente. Escolha a configuração de acordo com o espaço e com a iluminação que deseja para a decoração. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Sem LED e Com LED - Branco Quente. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-sanibel-1.webp?v=1789605825",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-sanibel-2.webp?v=1789605825",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-sanibel-3.webp?v=1789605825",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-sanibel-4.webp?v=1789605825",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-sanibel-5.webp?v=1789605825",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_cdd93338-9f7d-40b5-9222-51b17c46b101.png?v=1789607314",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-sanibel-7.webp?v=1789605825",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-sanibel-8.webp?v=1789605826"
    ],
    "variants": [
      {
        "id": "mdn-8539301904570-46743768957114",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2807888"
      },
      {
        "id": "mdn-8539301904570-46743768989882",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2808244"
      },
      {
        "id": "mdn-8539301904570-46743769022650",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-2807889"
      },
      {
        "id": "mdn-8539301904570-46743769055418",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2807890"
      },
      {
        "id": "mdn-8539301904570-46743769088186",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-4123605"
      },
      {
        "id": "mdn-8539301904570-46743769120954",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2807892"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-stratford",
    "name": "Árvore de Natal Pinheiro Stratford",
    "shortName": "Árvore de Natal Pinheiro Stratford",
    "description": "Árvore de Natal Pinheiro Stratford O Pinheiro Stratford reúne três alturas e opções sem LED, com LED branco quente ou multicolorido. Compare as combinações antes de definir a base da sua decoração natalina. Tamanhos e configurações Alturas: 1,80 m, 2,20 m e 2,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-stratford-1.webp?v=1789605823",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-stratford-2.webp?v=1789605823",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-stratford-3.webp?v=1789605823",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-stratford-4.webp?v=1789605823",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-stratford-5.webp?v=1789605823",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-stratford-6.webp?v=1789605823",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-stratford-7.webp?v=1789605823",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-stratford-8.webp?v=1789605823"
    ],
    "variants": [
      {
        "id": "mdn-8539301675194-46743768629434",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-5066885"
      },
      {
        "id": "mdn-8539301675194-46743768662202",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2808752"
      },
      {
        "id": "mdn-8539301675194-46743768694970",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2808538"
      },
      {
        "id": "mdn-8539301675194-46743768727738",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-5066886"
      },
      {
        "id": "mdn-8539301675194-46743768760506",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2808753"
      },
      {
        "id": "mdn-8539301675194-46743768793274",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2808539"
      },
      {
        "id": "mdn-8539301675194-46743768826042",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-5066887"
      },
      {
        "id": "mdn-8539301675194-46743768858810",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808754"
      },
      {
        "id": "mdn-8539301675194-46743768891578",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808540"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-silverado-slim",
    "name": "Árvore de Natal Pinheiro Silverado Slim",
    "shortName": "Árvore de Natal Pinheiro Silverado Slim",
    "description": "Árvore de Natal Pinheiro Silverado Slim O Pinheiro Silverado Slim tem proposta de formato esguio. Compare o diâmetro de cada tamanho antes de escolher o local e personalize a iluminação entre as configurações oferecidas. Tamanhos e configurações Alturas: 1,80 m, 2,20 m, 2,80 m, 3,20 m e 3,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão e Flip Tree. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-1.webp?v=1789605820",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-2.webp?v=1789605820",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-3.webp?v=1789605820",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-4.webp?v=1789605820",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-5.webp?v=1789605820",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br_0141b5cd-948d-4651-951a-91f0b8c152fb.png?v=1789607313",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-7.webp?v=1789605820",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-silverado-slim-8.webp?v=1789605820"
    ],
    "variants": [
      {
        "id": "mdn-8539300659386-46743767908538",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-2810253"
      },
      {
        "id": "mdn-8539300659386-46743767941306",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2810254"
      },
      {
        "id": "mdn-8539300659386-46743767974074",
        "title": "1,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 31990,
        "available": true,
        "sku": "MDN-4123608"
      },
      {
        "id": "mdn-8539300659386-46743768006842",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2810255"
      },
      {
        "id": "mdn-8539300659386-46743768039610",
        "title": "1,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 32990,
        "available": true,
        "sku": "MDN-4123609"
      },
      {
        "id": "mdn-8539300659386-46743768072378",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2800890"
      },
      {
        "id": "mdn-8539300659386-46743768105146",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 31990,
        "available": true,
        "sku": "MDN-2804833"
      },
      {
        "id": "mdn-8539300659386-46743768137914",
        "title": "2,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 33990,
        "available": true,
        "sku": "MDN-2809245"
      },
      {
        "id": "mdn-8539300659386-46743768170682",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2808428"
      },
      {
        "id": "mdn-8539300659386-46743768203450",
        "title": "2,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 33990,
        "available": true,
        "sku": "MDN-2808413"
      },
      {
        "id": "mdn-8539300659386-46743768236218",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2800891"
      },
      {
        "id": "mdn-8539300659386-46743768268986",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2804834"
      },
      {
        "id": "mdn-8539300659386-46743768301754",
        "title": "2,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 39990,
        "available": true,
        "sku": "MDN-2809243"
      },
      {
        "id": "mdn-8539300659386-46743768334522",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808429"
      },
      {
        "id": "mdn-8539300659386-46743768367290",
        "title": "2,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 40990,
        "available": true,
        "sku": "MDN-2808826"
      },
      {
        "id": "mdn-8539300659386-46743768400058",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-4123606"
      },
      {
        "id": "mdn-8539300659386-46743768432826",
        "title": "3,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 43990,
        "available": true,
        "sku": "MDN-4123610"
      },
      {
        "id": "mdn-8539300659386-46743768465594",
        "title": "3,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 38990,
        "available": true,
        "sku": "MDN-4123607"
      },
      {
        "id": "mdn-8539300659386-46743768498362",
        "title": "3,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 44990,
        "available": true,
        "sku": "MDN-4123611"
      },
      {
        "id": "mdn-8539300659386-46743768531130",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-4123612"
      },
      {
        "id": "mdn-8539300659386-46743768563898",
        "title": "3,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-4123613"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-branco-vermont",
    "name": "Árvore de Natal Pinheiro Branco de Vermont",
    "shortName": "Árvore de Natal Pinheiro Branco de Vermont",
    "description": "Árvore de Natal Pinheiro Branco de Vermont O Pinheiro Branco de Vermont oferece oito alturas, opções de iluminação e montagem Flip Tree em configurações específicas. Compare os tamanhos e selecione a combinação adequada ao seu espaço. Tamanhos e configurações Alturas: 1,20 m, 1,80 m, 2,20 m, 2,80 m, 3,20 m, 3,80 m, 4,20 m e 4,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão e Flip Tree. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-1.webp?v=1789605816",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-2.webp?v=1789605815",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-3.webp?v=1789605815",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-4.webp?v=1789605816",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-5.webp?v=1789605816",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-6.webp?v=1789605816",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-7.webp?v=1789605816",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-pinheiro-branco-vermont-8.webp?v=1789605815"
    ],
    "variants": [
      {
        "id": "mdn-8539300364474-46743766728890",
        "title": "1,20 m / Sem LED / Montagem padrão",
        "price": 25990,
        "available": true,
        "sku": "MDN-5021024"
      },
      {
        "id": "mdn-8539300364474-46743766761658",
        "title": "1,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 26990,
        "available": true,
        "sku": "MDN-2808759"
      },
      {
        "id": "mdn-8539300364474-46743766794426",
        "title": "1,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-2808760"
      },
      {
        "id": "mdn-8539300364474-46743766827194",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-5021658"
      },
      {
        "id": "mdn-8539300364474-46743766859962",
        "title": "1,80 m / Sem LED / Flip Tree",
        "price": 33990,
        "available": true,
        "sku": "MDN-2808395"
      },
      {
        "id": "mdn-8539300364474-46743766892730",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2808761"
      },
      {
        "id": "mdn-8539300364474-46743766925498",
        "title": "1,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808755"
      },
      {
        "id": "mdn-8539300364474-46743766958266",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2808762"
      },
      {
        "id": "mdn-8539300364474-46743766991034",
        "title": "1,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808418"
      },
      {
        "id": "mdn-8539300364474-46743767023802",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-5021032"
      },
      {
        "id": "mdn-8539300364474-46743767056570",
        "title": "2,20 m / Sem LED / Flip Tree",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808380"
      },
      {
        "id": "mdn-8539300364474-46743767089338",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2808764"
      },
      {
        "id": "mdn-8539300364474-46743767122106",
        "title": "2,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808756"
      },
      {
        "id": "mdn-8539300364474-46743767154874",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808421"
      },
      {
        "id": "mdn-8539300364474-46743767187642",
        "title": "2,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808827"
      },
      {
        "id": "mdn-8539300364474-46743767220410",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-5021037"
      },
      {
        "id": "mdn-8539300364474-46743767253178",
        "title": "2,80 m / Sem LED / Flip Tree",
        "price": 39990,
        "available": true,
        "sku": "MDN-2808370"
      },
      {
        "id": "mdn-8539300364474-46743767285946",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808765"
      },
      {
        "id": "mdn-8539300364474-46743767318714",
        "title": "2,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 40990,
        "available": true,
        "sku": "MDN-2808757"
      },
      {
        "id": "mdn-8539300364474-46743767351482",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-2808422"
      },
      {
        "id": "mdn-8539300364474-46743767384250",
        "title": "2,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 41990,
        "available": true,
        "sku": "MDN-2808828"
      },
      {
        "id": "mdn-8539300364474-46743767417018",
        "title": "3,20 m / Sem LED / Montagem padrão",
        "price": 39990,
        "available": true,
        "sku": "MDN-2811155"
      },
      {
        "id": "mdn-8539300364474-46743767449786",
        "title": "3,20 m / Sem LED / Flip Tree",
        "price": 43990,
        "available": true,
        "sku": "MDN-2808374"
      },
      {
        "id": "mdn-8539300364474-46743767482554",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 38990,
        "available": true,
        "sku": "MDN-2808766"
      },
      {
        "id": "mdn-8539300364474-46743767515322",
        "title": "3,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 44990,
        "available": true,
        "sku": "MDN-2808758"
      },
      {
        "id": "mdn-8539300364474-46743767548090",
        "title": "3,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 39990,
        "available": true,
        "sku": "MDN-2808767"
      },
      {
        "id": "mdn-8539300364474-46743767580858",
        "title": "3,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 45990,
        "available": true,
        "sku": "MDN-2808419"
      },
      {
        "id": "mdn-8539300364474-46743767613626",
        "title": "3,80 m / Sem LED / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-5023645"
      },
      {
        "id": "mdn-8539300364474-46743767646394",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2808770"
      },
      {
        "id": "mdn-8539300364474-46743767679162",
        "title": "3,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 43990,
        "available": true,
        "sku": "MDN-2808771"
      },
      {
        "id": "mdn-8539300364474-46743767711930",
        "title": "4,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 44990,
        "available": true,
        "sku": "MDN-2806298"
      },
      {
        "id": "mdn-8539300364474-46743767744698",
        "title": "4,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-2808823"
      },
      {
        "id": "mdn-8539300364474-46743767777466",
        "title": "4,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 46990,
        "available": true,
        "sku": "MDN-2809254"
      },
      {
        "id": "mdn-8539300364474-46743767810234",
        "title": "4,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 47990,
        "available": true,
        "sku": "MDN-2808423"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-balsamico-imperial",
    "name": "Árvore de Natal Abeto Balsâmico Imperial",
    "shortName": "Árvore de Natal Abeto Balsâmico Imperial",
    "description": "Árvore de Natal Abeto Balsâmico Imperial O Abeto Balsâmico Imperial oferece sete alturas e combinações de iluminação e montagem. O sistema Flip Tree está disponível em configurações específicas, que podem ser conferidas no seletor do produto. Tamanhos e configurações Alturas: 1,80 m, 2,20 m, 2,80 m, 3,20 m, 3,80 m, 4,20 m e 4,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão e Flip Tree. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-imperial-1.webp?v=1789605808",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-imperial-2.webp?v=1789605808",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-imperial-3.webp?v=1789605808",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-imperial-4.webp?v=1789605808",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-imperial-5.webp?v=1789605808",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/iluminacao-descomplicada-pt-br.png?v=1789607260",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-imperial-7.webp?v=1789605808",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/arvore-de-natal-abeto-balsamico-imperial-8.webp?v=1789605809"
    ],
    "variants": [
      {
        "id": "mdn-8539299446970-46743765811386",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 30990,
        "available": true,
        "sku": "MDN-2800904"
      },
      {
        "id": "mdn-8539299446970-46743765844154",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-2800858"
      },
      {
        "id": "mdn-8539299446970-46743765876922",
        "title": "1,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808722"
      },
      {
        "id": "mdn-8539299446970-46743765909690",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-2808726"
      },
      {
        "id": "mdn-8539299446970-46743765942458",
        "title": "1,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808408"
      },
      {
        "id": "mdn-8539299446970-46743765975226",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-2800905"
      },
      {
        "id": "mdn-8539299446970-46743766007994",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-2800864"
      },
      {
        "id": "mdn-8539299446970-46743766040762",
        "title": "2,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808723"
      },
      {
        "id": "mdn-8539299446970-46743766073530",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-2808728"
      },
      {
        "id": "mdn-8539299446970-46743766106298",
        "title": "2,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 35990,
        "available": true,
        "sku": "MDN-2808407"
      },
      {
        "id": "mdn-8539299446970-46743766139066",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2800906"
      },
      {
        "id": "mdn-8539299446970-46743766171834",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-2800867"
      },
      {
        "id": "mdn-8539299446970-46743766204602",
        "title": "2,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 40990,
        "available": true,
        "sku": "MDN-2808725"
      },
      {
        "id": "mdn-8539299446970-46743766237370",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-2808729"
      },
      {
        "id": "mdn-8539299446970-46743766270138",
        "title": "2,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 41990,
        "available": true,
        "sku": "MDN-2808825"
      },
      {
        "id": "mdn-8539299446970-46743766302906",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 38990,
        "available": true,
        "sku": "MDN-2809213"
      },
      {
        "id": "mdn-8539299446970-46743766335674",
        "title": "3,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 44990,
        "available": true,
        "sku": "MDN-2808724"
      },
      {
        "id": "mdn-8539299446970-46743766368442",
        "title": "3,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 39990,
        "available": true,
        "sku": "MDN-2809212"
      },
      {
        "id": "mdn-8539299446970-46743766401210",
        "title": "3,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 45990,
        "available": true,
        "sku": "MDN-2808409"
      },
      {
        "id": "mdn-8539299446970-46743766433978",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-2809210"
      },
      {
        "id": "mdn-8539299446970-46743766466746",
        "title": "3,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 43990,
        "available": true,
        "sku": "MDN-2809211"
      },
      {
        "id": "mdn-8539299446970-46743766499514",
        "title": "4,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 44990,
        "available": true,
        "sku": "MDN-2806442"
      },
      {
        "id": "mdn-8539299446970-46743766532282",
        "title": "4,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-2809197"
      },
      {
        "id": "mdn-8539299446970-46743766565050",
        "title": "4,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-2806263"
      },
      {
        "id": "mdn-8539299446970-46743766597818",
        "title": "4,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 46990,
        "available": true,
        "sku": "MDN-2809196"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-abeto-fraser-imperial",
    "name": "Árvore de Natal Abeto Fraser Imperial",
    "shortName": "Árvore de Natal Abeto Fraser Imperial",
    "description": "Árvore de Natal Abeto Fraser Imperial O Abeto Fraser Imperial é uma árvore de Natal artificial para quem quer escolher tanto a iluminação quanto o sistema de montagem. Compare as configurações e encontre a combinação adequada ao seu ambiente. Tamanhos e configurações Alturas: 1,80 m, 2,20 m, 2,80 m, 3,20 m e 3,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão e Flip Tree. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "premium",
      "com-iluminacao"
    ],
    "badge": "Premium",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/abeto-fraser-imperial-led.webp?v=1789602080",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/abeto-fraser-imperial-sem-iluminacao.webp?v=1789602080",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/abeto-fraser-imperial-detalhe-folhagem.webp?v=1789602080",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/abeto-fraser-imperial-ambiente.webp?v=1789602080",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/abeto-fraser-imperial-base.webp?v=1789602080",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-F2_BH-Fraser-Fir-Flip-Tree_LEDCL_SSC.webp?v=1789603525",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-F2_BH-Fraser-Fir-Flip-Tree_LEDCL_Closeup-10.webp?v=1789603525",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-F2_BH-Fraser-Fir-Flip-Tree_Detail.webp?v=1789603525",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/BHENG_Easy-Plug-Artificial-Christmas-Tree.webp?v=1789603525",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-T_BH-Fraser-Fir_Lifestyle-25.webp?v=1789603525",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-T_BH-Fraser-Fir_Lifestyle-30.webp?v=1789603525",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-T_BH-Fraser-Fir_Lifestyle-35.webp?v=1789603525",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-T_BH-Fraser-Fir-LED-Twinkle_Glow_Detail-20.webp?v=1789603525"
    ],
    "variants": [
      {
        "id": "mdn-8538878476474-46743765024954",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-AFI-168-SEM"
      },
      {
        "id": "mdn-8538878476474-46743765057722",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-AFI-168-LED"
      },
      {
        "id": "mdn-8538878476474-46743765090490",
        "title": "1,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-AFI-198-LED-FLP"
      },
      {
        "id": "mdn-8538878476474-46743765123258",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-AFI-168-MIX"
      },
      {
        "id": "mdn-8538878476474-46743765156026",
        "title": "1,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 34990,
        "available": true,
        "sku": "MDN-AFI-198-MIX-FLP"
      },
      {
        "id": "mdn-8538878476474-46743765188794",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-AFI-229-SEM"
      },
      {
        "id": "mdn-8538878476474-46743765221562",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-AFI-229-LED"
      },
      {
        "id": "mdn-8538878476474-46743765254330",
        "title": "2,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 35990,
        "available": true,
        "sku": "MDN-AFI-229-LED-FLP"
      },
      {
        "id": "mdn-8538878476474-46743765287098",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-AFI-229-MIX"
      },
      {
        "id": "mdn-8538878476474-46743765319866",
        "title": "2,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 36990,
        "available": true,
        "sku": "MDN-AFI-229-MIX-FLP"
      },
      {
        "id": "mdn-8538878476474-46743765352634",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-AFI-274-SEM"
      },
      {
        "id": "mdn-8538878476474-46743765385402",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-AFI-274-LED"
      },
      {
        "id": "mdn-8538878476474-46743765418170",
        "title": "2,80 m / Com LED - Branco Quente / Flip Tree",
        "price": 40990,
        "available": true,
        "sku": "MDN-AFI-274-LED-FLP"
      },
      {
        "id": "mdn-8538878476474-46743765450938",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-AFI-274-MIX"
      },
      {
        "id": "mdn-8538878476474-46743765483706",
        "title": "2,80 m / Com LED - Multicolorido / Flip Tree",
        "price": 42990,
        "available": true,
        "sku": "MDN-AFI-274-MIX-FLP"
      },
      {
        "id": "mdn-8538878476474-46743765516474",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 38990,
        "available": true,
        "sku": "MDN-AFI-305-LED"
      },
      {
        "id": "mdn-8538878476474-46743765549242",
        "title": "3,20 m / Com LED - Branco Quente / Flip Tree",
        "price": 44990,
        "available": true,
        "sku": "MDN-AFI-305-LED-FLP"
      },
      {
        "id": "mdn-8538878476474-46743765582010",
        "title": "3,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 39990,
        "available": true,
        "sku": "MDN-AFI-305-MIX"
      },
      {
        "id": "mdn-8538878476474-46743765614778",
        "title": "3,20 m / Com LED - Multicolorido / Flip Tree",
        "price": 45990,
        "available": true,
        "sku": "MDN-AFI-305-MIX-FLP"
      },
      {
        "id": "mdn-8538878476474-46743765647546",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-AFI-366-LED"
      },
      {
        "id": "mdn-8538878476474-46743765680314",
        "title": "3,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 44990,
        "available": true,
        "sku": "MDN-AFI-366-MIX"
      }
    ]
  },
  {
    "handle": "arvore-de-natal-pinheiro-azul-imperial-com-led",
    "name": "Árvore de Natal Pinheiro Azul Imperial",
    "shortName": "Árvore de Natal Pinheiro Azul Imperial",
    "description": "Árvore de Natal Pinheiro Azul Imperial O Pinheiro Azul Imperial oferece sete alturas e configurações sem LED, com LED branco quente ou multicolorido. Compare as opções para personalizar a árvore de acordo com seu espaço e sua decoração. Tamanhos e configurações Alturas: 1,20 m, 1,80 m, 2,20 m, 2,80 m, 3,20 m, 3,80 m e 4,80 m. Iluminação: Sem LED, Com LED - Branco Quente e Com LED - Multicolorido. Montagem: Montagem padrão. As combinações de altura, iluminação e montagem variam. Selecione uma configuração no produto para conferir o preço, as medidas e a disponibilidade correspondentes. O que acompanha Árvore na configuração escolhida, bolsa de armazenamento e luvas de proteção. As versões iluminadas incluem pedal de acionamento. Como escolher e montar Meça a altura livre do ambiente e reserve espaço para a ponteira. Confira também o diâmetro da configuração e preserve a circulação ao redor da árvore. Para montar e modelar a folhagem, siga o manual do produto. Consulte a aba Materiais e construção e as informações da configuração. Se precisar confirmar algum detalhe antes da compra, fale com nossa equipe. Informe seu CEP para consultar as opções de frete e prazo.",
    "category": "arvores-de-natal",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Classic-Blue-Spruce-Artificial-Christmas-Tree_LEDCA_SSC-10.webp?v=1789575554",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Classic-Blue-Spruce-Artificial-Christmas-Tree_LEDCA_Closeup-10.webp?v=1789575555",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Classic-Blue-Spruce-Artificial-Christmas-Tree_Detail.webp?v=1789575554",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/BLU-T_Classic-Blue-Spruce-Tree_Lifestyle-15.webp?v=1789575555"
    ],
    "variants": [
      {
        "id": "mdn-8538291863738-46743764271290",
        "title": "1,20 m / Sem LED / Montagem padrão",
        "price": 25990,
        "available": true,
        "sku": "MDN-PAI-137-SEM"
      },
      {
        "id": "mdn-8538291863738-46743764304058",
        "title": "1,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 26990,
        "available": true,
        "sku": "MDN-PAI-137-LED"
      },
      {
        "id": "mdn-8538291863738-46743764336826",
        "title": "1,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-PAI-137-MIX"
      },
      {
        "id": "mdn-8538291863738-46743764369594",
        "title": "1,80 m / Sem LED / Montagem padrão",
        "price": 27990,
        "available": true,
        "sku": "MDN-PAI-168-SEM"
      },
      {
        "id": "mdn-8538291863738-46743764402362",
        "title": "1,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 28990,
        "available": true,
        "sku": "MDN-PAI-168-LED"
      },
      {
        "id": "mdn-8538291863738-46743764435130",
        "title": "1,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 29990,
        "available": true,
        "sku": "MDN-PAI-168-MIX"
      },
      {
        "id": "mdn-8538291863738-46743764467898",
        "title": "2,20 m / Sem LED / Montagem padrão",
        "price": 32990,
        "available": true,
        "sku": "MDN-PAI-229-SEM"
      },
      {
        "id": "mdn-8538291863738-46743764500666",
        "title": "2,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 33990,
        "available": true,
        "sku": "MDN-PAI-229-LED"
      },
      {
        "id": "mdn-8538291863738-46743764533434",
        "title": "2,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-PAI-229-MIX"
      },
      {
        "id": "mdn-8538291863738-46743764566202",
        "title": "2,80 m / Sem LED / Montagem padrão",
        "price": 34990,
        "available": true,
        "sku": "MDN-PAI-274-SEM"
      },
      {
        "id": "mdn-8538291863738-46743764598970",
        "title": "2,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 35990,
        "available": true,
        "sku": "MDN-PAI-274-LED"
      },
      {
        "id": "mdn-8538291863738-46743764631738",
        "title": "2,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 36990,
        "available": true,
        "sku": "MDN-PAI-274-MIX"
      },
      {
        "id": "mdn-8538291863738-46743764664506",
        "title": "3,20 m / Sem LED / Montagem padrão",
        "price": 37990,
        "available": true,
        "sku": "MDN-PAI-305-SEM"
      },
      {
        "id": "mdn-8538291863738-46743764697274",
        "title": "3,20 m / Com LED - Branco Quente / Montagem padrão",
        "price": 38990,
        "available": true,
        "sku": "MDN-PAI-305-LED"
      },
      {
        "id": "mdn-8538291863738-46743764730042",
        "title": "3,20 m / Com LED - Multicolorido / Montagem padrão",
        "price": 39990,
        "available": true,
        "sku": "MDN-PAI-305-MIX"
      },
      {
        "id": "mdn-8538291863738-46743764762810",
        "title": "3,80 m / Sem LED / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-PAI-366-SEM"
      },
      {
        "id": "mdn-8538291863738-46743764795578",
        "title": "3,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 42990,
        "available": true,
        "sku": "MDN-PAI-366-LED"
      },
      {
        "id": "mdn-8538291863738-46743764828346",
        "title": "3,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 44990,
        "available": true,
        "sku": "MDN-PAI-366-MIX"
      },
      {
        "id": "mdn-8538291863738-46743764861114",
        "title": "4,80 m / Sem LED / Montagem padrão",
        "price": 45990,
        "available": true,
        "sku": "MDN-PAI-457-SEM"
      },
      {
        "id": "mdn-8538291863738-46743764893882",
        "title": "4,80 m / Com LED - Branco Quente / Montagem padrão",
        "price": 47990,
        "available": true,
        "sku": "MDN-PAI-457-LED"
      },
      {
        "id": "mdn-8538291863738-46743764926650",
        "title": "4,80 m / Com LED - Multicolorido / Montagem padrão",
        "price": 49990,
        "available": true,
        "sku": "MDN-PAI-457-MIX"
      }
    ]
  },
  {
    "handle": "trio-de-mini-arvores-de-natal-bosque-encantado-vasos-rusticos-com-luzes-led",
    "name": "Trio de Mini Árvores de Natal Bosque Encantado Vasos Rústicos com Luzes LED",
    "shortName": "Trio de Mini Árvores de Natal Bosque Encantado Vasos Rústicos com Luzes LED",
    "description": "Descrição Um conjunto delicado e acolhedor inspirado na beleza dos pequenos pinheiros naturais. O Trio de Mini Árvores de Natal Bosque Encantado combina folhagem verde, formato de pinheiro e vasos decorativos com textura de tronco de árvore , criando uma composição rústica e elegante para o Natal. As três árvores possuem alturas diferentes , permitindo criar um efeito de profundidade e movimento na decoração. As pequenas luzes de tonalidade quente distribuídas pelos galhos acrescentam charme e deixam o conjunto ainda mais aconchegante quando iluminado. Por serem compactas, são perfeitas para decorar aparadores, mesas, bancadas, estantes, recepções, escritórios e pequenos espaços . Tamanhos do conjunto – da menor para a maior Modelo Altura aproximada Indicado para Mini – Pequena 45 cm Mesas, nichos e pequenas composições Mini – Média 60 cm Aparadores, bancadas e estantes Mini – Grande 75 cm Destaque principal em composições decorativas As medidas consideram aproximadamente a árvore completa, incluindo o vaso decorativo. Pequenas variações podem ocorrer de acordo com a abertura e posicionamento dos galhos. Detalhes do produto Tipo: conjunto de mini árvores de Natal decorativas Quantidade: 3 árvores Tamanhos: 45 cm, 60 cm e 75 cm Cor predominante: verde Base: vaso decorativo com aparência de tronco de madeira Folhagem: estilo pinheiro natural Formato: árvores com alturas e volumes diferentes Iluminação: pequenas luzes em tonalidade quente Estilo: rústico, natural, farmhouse e escandinavo Indicação: decoração de ambientes internos Combinações: madeira, vermelho, branco, verde, dourado, kraft e tons naturais Três alturas para criar uma composição perfeita A diferença de altura entre as três árvores permite utilizá-las juntas, formando um pequeno bosque natalino , ou separadamente em diferentes pontos do ambiente. O acabamento inspirado em casca de árvore reforça a proposta natural e dispensa a necessidade de esconder a base com saias ou outros acessórios. Para uma decoração mais completa, combine com laços vermelhos, pequenas caixas de presente, casinhas natalinas e elementos naturais . Observação: as medidas de 45 cm, 60 cm e 75 cm são uma sugestão proporcional baseada nas imagens . Se você tiver as medidas oficiais do fornecedor, posso substituir pelos tamanhos exatos.",
    "category": "arvores-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/7685.webp?v=1789526741",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4677.webp?v=1789526741",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/555_3da08eeb-b780-4e92-b083-cc511c80bcf8.webp?v=1789526741",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3336.webp?v=1789526741"
    ],
    "variants": [
      {
        "id": "mdn-8537201541306-46655577129146",
        "title": "75 cm",
        "price": 10790,
        "available": true
      }
    ]
  },
  {
    "handle": "mini-arvore-de-natal-90-cm-encanto-imperial-vermelho-dourado-com-luzes-led",
    "name": "Mini Árvore de Natal 90 cm Encanto Imperial Vermelho & Dourado com Luzes LED",
    "shortName": "Mini Árvore de Natal 90 cm Encanto Imperial Vermelho & Dourado com Luzes LED",
    "description": "Descrição Compacta no tamanho e marcante na decoração, a Mini Árvore de Natal Encanto Imperial 90 cm foi desenvolvida para criar uma composição natalina sofisticada mesmo em ambientes com pouco espaço. Com 90 cm de altura , apresenta folhagem verde e decoração inspirada no Natal clássico, combinando vermelho, dourado e pontos de luz quente . Os diferentes formatos e acabamentos dos enfeites proporcionam profundidade e riqueza visual, enquanto a estrela vermelha no topo completa a composição. Seu tamanho compacto é ideal para quem deseja levar o clima de Natal para aparadores, mesas, balcões, escritórios, recepções, quartos ou pequenos apartamentos , sem precisar utilizar uma árvore tradicional de grande porte. Tamanho Modelo Altura aproximada Indicado para Mini Árvore Encanto Imperial 90 cm Mesas, aparadores, balcões e pequenos ambientes Altura considerada da base até a extremidade superior da árvore. A percepção de volume pode variar conforme a abertura e organização dos galhos. Detalhes do produto Nome: Mini Árvore de Natal Encanto Imperial Altura: 90 cm Tipo: árvore de Natal decorativa compacta Cor predominante: verde Estilo: clássico sofisticado Paleta decorativa: vermelho e dourado Topo: estrela decorativa vermelha Decoração: bolas e ornamentos em diferentes formatos e acabamentos Iluminação visual: composição com luzes de tonalidade quente Base: acabamento decorativo em tecido vermelho Formato: compacto e proporcional Indicação: ambientes internos Combinações: vermelho, dourado, champanhe, verde e branco Um Natal clássico em tamanho compacto A combinação de vermelho e dourado traz o charme das decorações natalinas tradicionais, enquanto os detalhes brilhantes acrescentam um acabamento mais sofisticado. Mesmo com apenas 90 cm , a árvore cria um ponto de destaque no ambiente quando completamente decorada. É uma excelente opção para quem procura uma mini árvore elegante e pronta para protagonizar a decoração , podendo ser posicionada sobre móveis para ganhar ainda mais destaque. Combine com caixas de presente douradas ou vermelhas, velas decorativas e outros elementos natalinos para completar a composição",
    "category": "arvores-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/456.webp?v=1789526407",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5463463.webp?v=1789526407",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/63656.webp?v=1789526407",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3456356.webp?v=1789526407",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3634.webp?v=1789526407"
    ],
    "variants": [
      {
        "id": "mdn-8537195708602-46655534334138",
        "title": "90 cm",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-para-arvore-de-natal-prata-metalico-texturizado",
    "name": "Saia Rígida para Árvore de Natal Prata Metálico Texturizado",
    "shortName": "Saia Rígida para Árvore de Natal Prata Metálico Texturizado",
    "description": "Descrição principal Um acabamento elegante e sofisticado para valorizar a base da árvore de Natal. Com formato circular levemente cônico e acabamento metálico prateado , este colar envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais limpa, organizada e refinada. Produzido em metal com superfície texturizada e acabamento prateado brilhante , o modelo reflete suavemente as luzes e os elementos da decoração, criando um efeito luminoso especialmente bonito quando combinado com pisca-piscas de luz quente. Seu design contemporâneo permite combinar a peça com diferentes estilos de decoração, desde árvores clássicas em verde, vermelho e dourado até propostas modernas em branco, prata, champanhe e cristal. Tamanhos disponíveis Tamanho Medida aproximada Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: colar decorativo para base de árvore de Natal Material: metal Cor: prata Formato: circular / cônico Design: superfície metálica com textura em relevo Acabamento: prateado brilhante e reflexivo Estrutura: firme e estruturada Montagem: estrutura desenvolvida para envolver o suporte da árvore Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Efeito visual: reflexos metálicos que valorizam a iluminação natalina Estilo: sofisticado, clássico, contemporâneo e elegante Combinações: prata, branco, dourado, champanhe, cristal, verde e vermelho Elegância e brilho para sua decoração de Natal O acabamento prateado metálico cria um contraste sofisticado com os galhos verdes da árvore , transformando uma área normalmente escondida em parte importante da decoração. Sua superfície texturizada proporciona profundidade e diferentes reflexos conforme a incidência da iluminação. Combine com enfeites prateados e transparentes para uma composição moderna e elegante ou acrescente dourado e champanhe para criar uma decoração mais luxuosa. Presentes posicionados ao redor da peça ajudam a completar o cenário natalino. Por possuir acabamento metálico reflexivo e texturizado, pequenas variações de tonalidade, textura e reflexo podem ocorrer de acordo com a iluminação e o ambiente , fazendo parte das características visuais do produto.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32434_3280ec3a-8904-4108-abd3-2d13ba44a87a.webp?v=1789525376",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4234212.webp?v=1789525376",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32444.webp?v=1789525376"
    ],
    "variants": [
      {
        "id": "mdn-8537186173114-46655480823994",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537186173114-46655480856762",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537186173114-46655480889530",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "ee",
    "name": "Saia Rígida para árvore de Natal de caixa de madeira",
    "shortName": "Saia Rígida para árvore de Natal de caixa de madeira",
    "description": "Descrição Um acabamento rústico e sofisticado para transformar a base da árvore de Natal. Com estrutura circular em madeira natural e detalhes em tiras escuras com aplicações metálicas , este colar envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais elegante, acolhedora e organizada. Produzido em madeira com acabamento em tom castanho natural , o modelo valoriza os veios, nós e diferentes nuances características do material. As faixas decorativas em tom marrom escuro, acompanhadas por pequenos detalhes metálicos, remetem ao visual dos tradicionais barris de madeira e acrescentam personalidade à decoração. Seu formato cônico, mais estreito na parte superior e amplo na base, permite acomodar o suporte da árvore enquanto cria um acabamento harmonioso ao redor dos galhos inferiores. Tamanhos disponíveis Tamanho Medida aproximada Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: colar decorativo para base de árvore de Natal Material: madeira Cor: castanho / madeira natural Formato: circular cônico Design: inspirado em barril tradicional de madeira Detalhes: faixas decorativas escuras com aplicações metálicas Acabamento: natural e rústico Estrutura: firme e estruturada Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Estilo: rústico sofisticado, farmhouse, tradicional e natural Combinações: verde, vermelho, dourado, branco, kraft, xadrez e tons terrosos Charme rústico para sua decoração de Natal A combinação da madeira natural com os detalhes inspirados em um barril clássico cria uma base marcante para a árvore e adiciona textura, aconchego e personalidade ao ambiente. O acabamento combina especialmente bem com árvores de folhagem verde intensa e decorações natalinas tradicionais. Combine com presentes em papel kraft e fitas vermelhas ou brancas para reforçar o estilo clássico de Natal. Para uma composição mais sofisticada, acrescente enfeites dourados, iluminação em tom quente e elementos naturais. Por se tratar de um produto com aparência natural de madeira, variações sutis de tonalidade, veios, nós, marcas e textura podem ocorrer , contribuindo para o aspecto único e característico de cada peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/233.webp?v=1789525235",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/34423.webp?v=1789525235",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/24221.webp?v=1789525236",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2344.webp?v=1789525235"
    ],
    "variants": [
      {
        "id": "mdn-8537180569786-46655470862522",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537180569786-46655470895290",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537180569786-46655470928058",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "e",
    "name": "Saia Rígida de árvore de Natal de barril de madeira",
    "shortName": "Saia Rígida de árvore de Natal de barril de madeira",
    "description": "Descrição Um acabamento rústico e sofisticado para transformar a base da árvore de Natal. Com estrutura circular em madeira natural e detalhes em tiras escuras com aplicações metálicas , este colar envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais elegante, acolhedora e organizada. Produzido em madeira com acabamento em tom castanho natural , o modelo valoriza os veios, nós e diferentes nuances características do material. As faixas decorativas em tom marrom escuro, acompanhadas por pequenos detalhes metálicos, remetem ao visual dos tradicionais barris de madeira e acrescentam personalidade à decoração. Seu formato cônico, mais estreito na parte superior e amplo na base, permite acomodar o suporte da árvore enquanto cria um acabamento harmonioso ao redor dos galhos inferiores. Tamanhos disponíveis Tamanho Medida aproximada Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: colar decorativo para base de árvore de Natal Material: madeira Cor: castanho / madeira natural Formato: circular cônico Design: inspirado em barril tradicional de madeira Detalhes: faixas decorativas escuras com aplicações metálicas Acabamento: natural e rústico Estrutura: firme e estruturada Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Estilo: rústico sofisticado, farmhouse, tradicional e natural Combinações: verde, vermelho, dourado, branco, kraft, xadrez e tons terrosos Charme rústico para sua decoração de Natal A combinação da madeira natural com os detalhes inspirados em um barril clássico cria uma base marcante para a árvore e adiciona textura, aconchego e personalidade ao ambiente. O acabamento combina especialmente bem com árvores de folhagem verde intensa e decorações natalinas tradicionais. Combine com presentes em papel kraft e fitas vermelhas ou brancas para reforçar o estilo clássico de Natal. Para uma composição mais sofisticada, acrescente enfeites dourados, iluminação em tom quente e elementos naturais. Por se tratar de um produto com aparência natural de madeira, variações sutis de tonalidade, veios, nós, marcas e textura podem ocorrer , contribuindo para o aspecto único e característico de cada peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32434.webp?v=1789525097",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/214.webp?v=1789525097"
    ],
    "variants": [
      {
        "id": "mdn-8537177489594-46655464865978",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537177489594-46655464898746",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537177489594-46655464931514",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-para-arvore-de-natal-mosaico-perolado-com-dourado",
    "name": "Saia Rígida para Árvore de Natal Mosaico Perolado com Dourado",
    "shortName": "Saia Rígida para Árvore de Natal Mosaico Perolado com Dourado",
    "description": "Descrição Um acabamento sofisticado e luminoso para transformar a base da árvore de Natal. Com estrutura cônica revestida por peças com efeito madrepérola e detalhes dourados em formato geométrico , este colar envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais elegante, refinada e organizada. Produzido com acabamento perolado em tons de branco, champanhe e dourado , o modelo apresenta um delicado padrão de losangos que reflete suavemente a iluminação natalina. Seu design combina perfeitamente com decorações clássicas, luxuosas e contemporâneas, valorizando especialmente árvores decoradas com dourado, vermelho, champanhe e cristal. A estrutura firme permite posicionar o colar ao redor da base da árvore, proporcionando um acabamento decorativo completo e criando uma transição elegante entre os galhos e os presentes dispostos no chão. Tamanhos disponíveis Tamanho Medida aproximada Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: colar decorativo para base de árvore de Natal Material: estrutura rígida com revestimento decorativo Cor: madrepérola / branco perolado / dourado Formato: circular cônico Design: padrão geométrico em losangos Acabamento: efeito perolado com contornos dourados Estrutura: firme e estruturada Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Estilo: sofisticado, clássico, luxuoso e contemporâneo Combinações: dourado, champanhe, vermelho, branco, cristal e tons metálicos Sofisticação para sua decoração de Natal O acabamento em madrepérola combinado aos detalhes dourados cria um efeito elegante na base da árvore, especialmente quando utilizado próximo às luzes natalinas. O padrão geométrico acrescenta textura e transforma uma área normalmente escondida em um elemento de destaque da decoração. Combine com presentes em embalagens douradas, brancas ou vermelhas , bolas metalizadas e iluminação em tom quente para criar uma composição natalina sofisticada. Para uma proposta mais luxuosa, utilize enfeites em cristal, champanhe e dourado. Devido às características do acabamento decorativo, pequenas variações de tonalidade, brilho, textura e detalhes podem ocorrer , contribuindo para a aparência característica de cada peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/342.webp?v=1789524821",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3423434.webp?v=1789524821",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/234432.webp?v=1789524821",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3223.webp?v=1789524821"
    ],
    "variants": [
      {
        "id": "mdn-8537175097530-46655457820858",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537175097530-46655457853626",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537175097530-46655457886394",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-de-madeira-para-arvore-de-natal-design-rustico",
    "name": "Saia Rígida de Madeira para Árvore de Natal Design Rústico",
    "shortName": "Saia Rígida de Madeira para Árvore de Natal Design Rústico",
    "description": "Descrição Um acabamento rústico e sofisticado para transformar a base da árvore de Natal. Com estrutura quadrada em madeira e detalhes decorativos em formato de X , este colar envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais elegante, acolhedora e organizada. Produzido em madeira com acabamento em tom castanho natural , o modelo valoriza os veios, nuances e características próprias do material. Seu design remete às tradicionais caixas de madeira, trazendo um toque de decoração farmhouse e combinando perfeitamente com propostas natalinas rústicas, clássicas e naturais. A estrutura formada por painéis articulados facilita a instalação ao redor da árvore. O fecho metálico de aparência envelhecida complementa o estilo da peça e ajuda a manter os painéis unidos durante o uso. Tamanhos disponíveis Tamanho Medida aproximada Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: colar decorativo para base de árvore de Natal Material: madeira Cor: castanho / madeira natural Formato: quadrado Design: painéis com aplicação decorativa em X Acabamento: aspecto natural e rústico Estrutura: firme e estruturada Montagem: painéis articulados para facilitar a instalação ao redor da árvore Fechamento: fecho metálico decorativo com acabamento envelhecido Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Estilo: rústico sofisticado, farmhouse, tradicional e natural Combinações: verde, vermelho, dourado, branco, xadrez, kraft e tons terrosos Charme rústico para sua decoração de Natal A madeira cria um contraste elegante com os galhos verdes da árvore e acrescenta textura, aconchego e personalidade à decoração. O desenho em X reforça a inspiração farmhouse e transforma a própria base da árvore em um elemento decorativo. Combine com presentes em papel kraft e fitas vermelhas para uma composição natalina tradicional, ou utilize branco, dourado e tons naturais para criar um ambiente mais sofisticado e contemporâneo. Por se tratar de um produto com aparência natural de madeira, variações sutis de tonalidade, veios, marcas e textura podem ocorrer , contribuindo para o aspecto único e característico de cada peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/645.webp?v=1789524402",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/21334.webp?v=1789524402",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/12334.webp?v=1789524402"
    ],
    "variants": [
      {
        "id": "mdn-8537171329210-46655442616506",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537171329210-46655442649274",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537171329210-46655442682042",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-metalica-para-arvore-de-natal-dourado-martelado",
    "name": "Saia Rígida Metálica para Árvore de Natal Dourado Martelado",
    "shortName": "Saia Rígida Metálica para Árvore de Natal Dourado Martelado",
    "description": "Descrição principal Um acabamento elegante e imponente para transformar a base da árvore de Natal. Com formato circular e acabamento metálico dourado , esta saia decorativa envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição sofisticada e organizada. Produzida com estrutura metálica em tonalidade dourada , apresenta superfície texturizada com efeito martelado, criando pequenos relevos que refletem a iluminação de maneira delicada. O resultado é um acabamento luxuoso que combina especialmente bem com árvores decoradas em dourado, champagne, prata, branco e tons neutros. Seu design estruturado e levemente cônico mantém a peça firme ao redor da árvore. A abertura permite posicioná-la ao redor do suporte, proporcionando praticidade na montagem e um acabamento uniforme. Tamanhos disponíveis Tamanho Diâmetro aproximado Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: saia rígida decorativa para base de árvore de Natal Material: metal Cor: dourado Formato: circular Acabamento: metálico dourado com textura martelada Estrutura: firme e estruturada Design: levemente cônico, com base mais ampla Montagem: estrutura com abertura para instalação ao redor da árvore Função: esconder o suporte da árvore e proporcionar acabamento decorativo Superfície: texturizada com efeito de pequenos relevos Estilo: sofisticado, clássico, contemporâneo e luxuoso Combinações: dourado, champagne, prata, branco, verde, bege e tons neutros Elegância dourada para sua decoração de Natal O acabamento dourado transforma a base da árvore em um verdadeiro elemento decorativo. Sua superfície texturizada interage com as luzes natalinas, criando reflexos suaves e um efeito visual sofisticado . Combine com enfeites em dourado e prata para uma composição luxuosa, ou utilize branco, champagne e tons neutros para um Natal mais contemporâneo e elegante. Presentes posicionados ao redor da peça ajudam a completar a decoração e destacar ainda mais o acabamento metálico. Por possuir acabamento texturizado, pequenas variações visuais na superfície podem ocorrer , fazendo parte das características estéticas da peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/122_7d6924d4-2b22-4c3d-a942-ff832f6a3593.webp?v=1789524273",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/442312.webp?v=1789524273",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3444.webp?v=1789524273",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/231231.webp?v=1789524273"
    ],
    "variants": [
      {
        "id": "mdn-8537170247866-46655435047098",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537170247866-46655435079866",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537170247866-46655435112634",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-para-arvore-de-natal-trancada-dourado-champagne",
    "name": "Saia Rígida para Árvore de Natal Trançada Dourado Champagne",
    "shortName": "Saia Rígida para Árvore de Natal Trançada Dourado Champagne",
    "description": "Descrição Um acabamento sofisticado e luminoso para valorizar a base da árvore de Natal. Com formato circular e acabamento trançado , esta saia rígida envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais elegante, organizada e completa. Produzida com trama estruturada em tonalidade dourado champagne , a peça apresenta um acabamento delicadamente metalizado que reflete a iluminação da árvore e acrescenta brilho à decoração sem perder a elegância. Seu design levemente cônico, com a base mais ampla, cria uma transição harmoniosa entre a árvore e o piso. A estrutura firme mantém a saia posicionada ao redor da árvore durante toda a temporada, enquanto o sistema de abertura facilita sua instalação mesmo após a montagem da árvore. Tamanhos disponíveis Tamanho Diâmetro aproximado Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: saia rígida decorativa para base de árvore de Natal Material: estrutura trançada Cor: dourado champagne Formato: circular Acabamento: trama decorativa com efeito metalizado Estrutura: firme e estruturada Design: formato levemente cônico, com base mais ampla Montagem: estrutura articulada para facilitar a instalação ao redor da árvore Fechamento: sistema de encaixe com travas discretas Função: esconder o suporte da árvore e proporcionar acabamento decorativo Estilo: sofisticado, clássico, contemporâneo e elegante Combinações: branco, champagne, dourado, rosé, bege, verde, marrom e tons neutros Sofisticação e brilho para sua decoração de Natal O acabamento dourado champagne transforma a base da árvore em parte da própria decoração. Sua trama detalhada ganha destaque quando combinada com as luzes natalinas, criando reflexos sutis e uma aparência sofisticada. É uma excelente escolha para árvores decoradas com ornamentos dourados, champagne, branco, rosé e tons naturais , além de combinar perfeitamente com presentes em embalagens neutras e laços elegantes. O acabamento trançado pode apresentar pequenas variações de tonalidade e textura , características que contribuem para o aspecto decorativo e exclusivo da peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32455.webp?v=1789524099",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/23556.webp?v=1789524099",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/546435.webp?v=1789524099",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5465.webp?v=1789524099"
    ],
    "variants": [
      {
        "id": "mdn-8537169330362-46655424069818",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537169330362-46655424102586",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537169330362-46655424135354",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-para-arvore-de-natal-em-fibra-trancada-marrom",
    "name": "Saia Rígida para Árvore de Natal em Fibra Trançada Marrom",
    "shortName": "Saia Rígida para Árvore de Natal em Fibra Trançada Marrom",
    "description": "Descrição Um acabamento natural, elegante e sofisticado para transformar a base da árvore de Natal. Com formato circular e trama artesanal , esta saia rígida envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais organizada e refinada. Produzida com fibra trançada em tonalidade marrom escuro , apresenta nuances naturais que destacam a textura e o desenho da trama. Seu acabamento cria um contraste sofisticado com o verde da árvore e combina perfeitamente com decorações natalinas clássicas, rústicas, naturais ou contemporâneas. O design estruturado mantém a saia firme ao redor da árvore, enquanto seu formato levemente inclinado — mais amplo na base — proporciona um acabamento elegante e ajuda a integrar visualmente a árvore à decoração do ambiente. Tamanhos disponíveis Tamanho Diâmetro aproximado Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: saia rígida decorativa para base de árvore de Natal Material: fibra trançada Cor: marrom escuro Formato: circular Acabamento: trama artesanal com textura aparente Estrutura: firme e estruturada Design: formato levemente cônico, com base mais ampla Montagem: estrutura articulada para facilitar a instalação ao redor da árvore Fechamento: sistema discreto de união entre as partes Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Estilo: natural, rústico sofisticado, clássico e contemporâneo Combinações: verde, vermelho, dourado, champagne, branco, bege e tons terrosos Elegância natural para sua decoração de Natal A tonalidade marrom escuro valoriza especialmente árvores verdes e cria uma base visual sofisticada sem competir com os demais enfeites. A textura trançada acrescenta profundidade à decoração e proporciona um acabamento mais acolhedor à árvore. Combine com presentes em papel kraft, laços vermelhos, dourados ou brancos e iluminação em tom quente para criar uma composição natalina elegante e harmoniosa. Por apresentar acabamento com aparência natural, pequenas variações de tonalidade, textura e trama podem ocorrer , contribuindo para o aspecto único e artesanal de cada peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/324.webp?v=1789519800",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32532.webp?v=1789519800",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/32535.webp?v=1789519800",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3245235.webp?v=1789519800",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/325455.webp?v=1789519800"
    ],
    "variants": [
      {
        "id": "mdn-8537154420922-46655255380154",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537154420922-46655255412922",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537154420922-46655255445690",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-para-arvore-de-natal-tambor-vermelho-com-detalhes-dourados",
    "name": "Saia Rígida para Árvore de Natal Tambor Vermelho com Detalhes Dourados",
    "shortName": "Saia Rígida para Árvore de Natal Tambor Vermelho com Detalhes Dourados",
    "description": "Descrição Um acabamento marcante e sofisticado para valorizar a base da árvore de Natal. Inspirada no formato clássico de tambor natalino , esta saia rígida envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição elegante, organizada e cheia de personalidade. Produzida com estrutura rígida em vermelho intenso , a peça apresenta acabamento decorativo com detalhes dourados em padrão geométrico cruzado , além de bordas douradas que realçam seu formato circular. A combinação entre vermelho e dourado remete imediatamente ao Natal tradicional e cria um visual sofisticado. Seu design estruturado mantém a saia firme ao redor da árvore. O acabamento brilhante e os detalhes dourados fazem da peça um elemento decorativo de destaque, combinando especialmente bem com árvores ornamentadas em vermelho, verde e dourado. Tamanhos disponíveis Tamanho Diâmetro aproximado Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: saia rígida decorativa para base de árvore de Natal Modelo: tambor natalino Cor predominante: vermelho Detalhes: dourados Formato: circular Acabamento: vermelho com efeito decorativo e detalhes geométricos dourados Estrutura: firme e estruturada Bordas: acabamento em tom dourado Design: padrão cruzado inspirado nos tradicionais tambores natalinos Montagem: estrutura desenvolvida para facilitar a instalação ao redor da árvore Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Estilo: natalino clássico, sofisticado e tradicional Combinações: vermelho, dourado, verde, branco, champagne e xadrez natalino O clássico vermelho e dourado do Natal A combinação de vermelho intenso com detalhes dourados transforma a base da árvore em parte da decoração. Inspirado nos tradicionais tambores natalinos, o design adiciona profundidade e personalidade à composição, criando um acabamento especialmente bonito em árvores mais volumosas e ricamente decoradas. Combine com bolas vermelhas e douradas, laços xadrez, flores natalinas, luzes em tom quente e presentes com fitas coordenadas para criar uma decoração clássica e sofisticada. Devido às características do acabamento decorativo, pequenas variações de tonalidade, textura e reflexo podem ocorrer , sem comprometer a beleza e a funcionalidade da peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2041002_Large-Christmas-Drum-Tree-Collar_SSC.webp?v=1789519575",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/12344.webp?v=1789519575",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/12454.webp?v=1789519576",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2324.webp?v=1789519575",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/123.webp?v=1789519575"
    ],
    "variants": [
      {
        "id": "mdn-8537154257082-46655254626490",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537154257082-46655254659258",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537154257082-46655254692026",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-para-arvore-de-natal-em-mosaico-perolado-com-acabamento-dourado",
    "name": "Saia Rígida para Árvore de Natal em Mosaico Perolado com Acabamento Dourado",
    "shortName": "Saia Rígida para Árvore de Natal em Mosaico Perolado com Acabamento Dourado",
    "description": "Descrição Um acabamento elegante e sofisticado para transformar a base da árvore de Natal. Com formato circular e revestimento em mosaico perolado , esta saia rígida envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais refinada e organizada. Produzida com peças decorativas de efeito madrepérola em tons de branco, pérola e champagne , apresenta nuances e reflexos que variam delicadamente conforme a iluminação do ambiente. O acabamento é complementado por uma estrutura em tom dourado , criando uma combinação luxuosa e atemporal para a decoração natalina. O design estruturado mantém a saia firme ao redor da árvore, proporcionando excelente acabamento visual. O padrão geométrico do mosaico acrescenta textura e brilho à peça, tornando a própria base da árvore um elemento de destaque na decoração. Tamanhos disponíveis Tamanho Diâmetro aproximado Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: saia rígida decorativa para base de árvore de Natal Material: estrutura rígida com revestimento decorativo em mosaico Cor: perolado / champagne com detalhes dourados Formato: circular Acabamento: mosaico geométrico com efeito madrepérola Estrutura: firme e estruturada Bordas: acabamento metálico em tom dourado Montagem: estrutura desenvolvida para facilitar a instalação ao redor da árvore Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Estilo: sofisticado, clássico, elegante e contemporâneo Combinações: dourado, champagne, branco, vermelho, verde e tons neutros Elegância e sofisticação para sua decoração de Natal O efeito perolado do mosaico reflete suavemente as luzes da árvore, enquanto os detalhes dourados acrescentam um toque de requinte à composição. É uma excelente escolha para árvores com decoração dourada, champagne e branca , mas também cria um belo contraste com os tradicionais tons de vermelho e verde. Combine com presentes em embalagens claras, laços dourados ou vermelhos e iluminação em tom quente para criar uma decoração natalina sofisticada e harmoniosa. Devido às características do acabamento, pequenas variações de tonalidade, textura e reflexo podem ocorrer , contribuindo para a aparência única e especial de cada peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3455.webp?v=1789518904",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/34534.webp?v=1789518904",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/324535.webp?v=1789518904"
    ],
    "variants": [
      {
        "id": "mdn-8537153732794-46655250235578",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537153732794-46655250268346",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537153732794-46655250301114",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-para-arvore-de-natal-em-metal-vermelho-texturizado-copia",
    "name": "Saia Rígida para Árvore de Natal em Fibra Natural Trançada",
    "shortName": "Saia Rígida para Árvore de Natal em Fibra Natural Trançada",
    "description": "Descrição principal Um acabamento natural e sofisticado para transformar a base da árvore de Natal. Com formato de estrela e trama artesanal , este colar decorativo envolve o suporte da árvore, escondendo a estrutura e proporcionando uma composição mais elegante e organizada. Produzido com fibra natural trançada em tonalidade palha , apresenta diferentes nuances e pequenas variações características do material, criando uma aparência acolhedora e artesanal. A trama espessa acrescenta textura à decoração e combina especialmente bem com árvores verdes e estilos natalinos naturais, rústicos, clássicos ou contemporâneos. O design estruturado mantém o colar em pé ao redor da árvore. Seu formato estrelado diferencia a peça dos tradicionais modelos circulares e cria um detalhe decorativo marcante mesmo antes da colocação dos presentes. Tamanhos disponíveis Tamanho Diâmetro aproximado Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m Grande 150 cm (60\") Árvores de 2,40 m ou mais Recomenda-se conferir as medidas da base e do suporte da árvore antes da compra. Detalhes do produto Tipo: colar decorativo para base de árvore de Natal Material: fibra natural trançada Cor: natural / palha Formato: estrela Acabamento: trama artesanal com textura aparente Estrutura: firme e estruturada Montagem: estrutura articulada para facilitar a instalação ao redor da árvore Fechamento: sistema discreto de fixação Função: esconder o suporte e proporcionar acabamento decorativo à base da árvore Estilo: natural, rústico sofisticado e contemporâneo Combinações: verde, vermelho, dourado, champagne, branco e tons terrosos Charme natural para sua decoração de Natal A tonalidade natural da fibra cria um contraste elegante com os galhos verdes da árvore e permite diversas propostas de decoração. Combine com presentes em papel kraft e fitas vermelhas para um Natal tradicional, ou utilize dourado, champagne e branco para uma composição mais sofisticada. Por ser produzido com material de aparência natural, variações sutis de tonalidade, textura e trama podem ocorrer , contribuindo para o aspecto único e artesanal de cada peça.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/21673.webp?v=1789518034",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/1222.webp?v=1789518034",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2345.webp?v=1789518034",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/422.webp?v=1789518034"
    ],
    "variants": [
      {
        "id": "mdn-8537152422074-46655243747514",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537152422074-46655243780282",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537152422074-46655243813050",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-rigida-para-arvore-de-natal-em-metal-vermelho-texturizado",
    "name": "Saia Rígida para Árvore de Natal em Metal Vermelho Texturizado",
    "shortName": "Saia Rígida para Árvore de Natal em Metal Vermelho Texturizado",
    "description": "Descrição principal Uma alternativa elegante e estruturada às tradicionais saias de tecido. Este modelo funciona como um colar decorativo para a base da árvore de Natal , envolvendo o suporte e proporcionando um acabamento limpo, sofisticado e organizado. Produzida em material rígido com acabamento metálico vermelho brilhante , a peça apresenta uma superfície trabalhada em relevo, formando um delicado padrão geométrico que lembra pequenas escamas ou losangos. A textura valoriza o acabamento e cria diferentes reflexos conforme a incidência das luzes da árvore. Seu formato circular e levemente cônico envolve a base da árvore, escondendo visualmente o suporte e parte da estrutura inferior. Diferentemente das saias tradicionais que ficam estendidas sobre o piso, este modelo cria um acabamento vertical e estruturado, deixando mais espaço livre ao redor para a disposição dos presentes. O vermelho intenso e metalizado combina perfeitamente com o verde dos galhos e com decorações tradicionais em vermelho, dourado, branco, champagne e xadrez. Sob iluminação quente, a superfície texturizada ganha ainda mais profundidade e brilho. A abertura lateral facilita a instalação ao redor de árvores já montadas, enquanto o sistema de fechamento ajuda a manter a estrutura firme e o formato circular depois de posicionada. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e espaços compactos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — o mais procurado Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores mais abertas Recomenda-se conferir as dimensões do suporte da árvore antes da escolha para garantir o encaixe adequado. Detalhes do produto Tipo: saia rígida / colar para base de árvore de Natal Material: estrutura rígida com acabamento metálico Cor predominante: vermelho intenso Acabamento: vermelho metálico brilhante Textura: padrão geométrico em relevo Formato: circular e levemente cônico Design: clássico e estruturado Abertura: lateral para facilitar a instalação Fechamento: sistema de encaixe para manter a estrutura montada Função: esconder e envolver visualmente o suporte da árvore Estilo: clássico, elegante e sofisticado Combinações: vermelho, dourado, verde, branco, champagne e xadrez Conservação: limpar com pano macio e seco; evitar produtos abrasivos e umidade excessiva Um acabamento elegante para a base da árvore Além de esconder o suporte, esta saia rígida cria uma base decorativa que parece fazer parte da própria árvore . O acabamento metálico vermelho reflete suavemente as luzes natalinas, enquanto a textura em relevo acrescenta riqueza visual mesmo quando observada de perto. Com os presentes posicionados ao redor, o resultado é uma composição organizada e sofisticada, ideal para quem deseja o charme do Natal clássico em vermelho com um acabamento mais estruturado e marcante.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3452.webp?v=1789511251",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/651243.webp?v=1789511251",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/237634.webp?v=1789511251",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/21621.webp?v=1789511251"
    ],
    "variants": [
      {
        "id": "mdn-8537124372666-46655028527290",
        "title": "Pequeno 90 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537124372666-46655028560058",
        "title": "Médio 120 cm",
        "price": 11990,
        "available": true
      },
      {
        "id": "mdn-8537124372666-46655028592826",
        "title": "Grande 150 cm",
        "price": 11990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-azul-marinho-com-bordados-e-paetes-dourados",
    "name": "Saia para Árvore de Natal Azul Marinho com Bordados e Paetês Dourados",
    "shortName": "Saia para Árvore de Natal Azul Marinho com Bordados e Paetês Dourados",
    "description": "Descrição principal Uma combinação sofisticada e marcante para quem deseja fugir das cores tradicionais sem perder a elegância do Natal. Esta saia para árvore apresenta um azul marinho profundo , valorizado por aplicações douradas que criam um contraste luxuoso e iluminado. O desenho é formado por camadas de pétalas sobrepostas , distribuídas ao redor de toda a peça. O contorno acompanha essas formas, criando uma borda recortada que lembra uma grande flor aberta sob a árvore. Cada pétala recebe diferentes linhas ornamentais em dourado, trabalhadas com paetês, miçangas, contas e aplicações metalizadas . Os materiais variam em formato e textura, fazendo com que cada linha reflita a iluminação de maneira diferente. Pequenas áreas preenchidas com paetês acrescentam ainda mais brilho e profundidade ao desenho. O contraste entre o azul marinho e o dourado proporciona uma estética elegante e contemporânea. Sob as luzes quentes da árvore, os detalhes dourados ganham destaque sobre o fundo azul, criando uma composição especialmente sofisticada para decorações em dourado, champagne, branco e cristal. A parte central possui acabamento mais clean, deixando o trabalho ornamental concentrado principalmente nas extremidades. Dessa forma, é possível posicionar presentes sobre a saia sem esconder completamente os detalhes que caracterizam a peça. A abertura lateral facilita a instalação ao redor da árvore e conta com amarrações no mesmo tom azul , mantendo o fechamento discreto e integrado ao design. O recorte circular central acomoda o tronco ou suporte da árvore. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e espaços compactos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — tamanho versátil Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores volumosas A proporção e a distribuição dos detalhes ornamentais podem apresentar pequenas variações conforme o tamanho escolhido. Detalhes do produto Material: tecido de acabamento acetinado/aveludado Cor predominante: azul marinho profundo Cor dos detalhes: dourado Design: composição ornamental de pétalas sobrepostas Aplicações: paetês, miçangas, contas e elementos metalizados Acabamento: múltiplas linhas douradas acompanhando o formato das pétalas Formato: circular com borda recortada e ondulada Abertura: lateral para facilitar a colocação Fechamento: laços em tecido azul Centro: abertura circular para acomodar o tronco ou suporte Estilo: sofisticado, contemporâneo e luxuoso Combinações: dourado, champagne, branco, cristal, pérola e verde Conservação: recomenda-se limpeza delicada; evitar passar diretamente sobre as aplicações e armazenar protegida para preservar bordados e paetês Azul e dourado para um Natal sofisticado A intensidade do azul cria uma base elegante para o brilho do dourado. Com a iluminação natalina acesa, as aplicações refletem pequenos pontos de luz por toda a borda, destacando o desenho em camadas. O resultado é uma peça que funciona como uma verdadeira moldura decorativa para a árvore e para os presentes , ideal para composições natalinas de aparência requintada e diferenciada.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/54.webp?v=1789509356",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/58753.webp?v=1789509356",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4563.webp?v=1789509356",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/323.webp?v=1789509356"
    ],
    "variants": [
      {
        "id": "mdn-8537120145594-46654970003642",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537120145594-46654970036410",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537120145594-46654970069178",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-vermelho-com-bordados-e-paetes-dourados",
    "name": "Saia para Árvore de Natal em Veludo Vermelho com Bordados e Paetês Dourados",
    "shortName": "Saia para Árvore de Natal em Veludo Vermelho com Bordados e Paetês Dourados",
    "description": "Descrição O vermelho clássico do Natal ganha um acabamento sofisticado neste modelo de saia para árvore. Confeccionada em veludo vermelho intenso , a peça combina a riqueza do tecido aveludado com aplicações douradas que criam brilho, textura e profundidade ao redor da árvore. O desenho é formado por camadas ornamentais sobrepostas , semelhantes a grandes pétalas ou escamas decorativas. O próprio contorno da saia acompanha essas formas, resultando em uma borda recortada e ondulada que se destaca mesmo quando presentes são posicionados sobre a peça. Cada camada é cuidadosamente delineada por diferentes acabamentos dourados, incluindo paetês, miçangas e elementos metalizados . Áreas selecionadas recebem uma concentração maior de pequenos paetês, formando detalhes preenchidos que refletem as luzes natalinas e acrescentam ainda mais riqueza visual. A combinação de vermelho profundo e dourado remete imediatamente ao Natal tradicional, mas o desenho elaborado proporciona uma aparência mais refinada e luxuosa. É uma peça especialmente indicada para árvores decoradas com vermelho, dourado, champagne, verde e iluminação quente. Além de complementar a decoração, a saia cobre visualmente a região do suporte da árvore e cria uma base elegante para organizar os presentes. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e espaços compactos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — o mais procurado Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores mais abertas A distribuição e a proporção dos detalhes ornamentais podem apresentar pequenas variações conforme o tamanho escolhido. Detalhes do produto Material: tecido aveludado Cor predominante: vermelho intenso Detalhes: aplicações decorativas em dourado Design: camadas ornamentais inspiradas em pétalas Aplicações: paetês, miçangas e elementos metalizados Acabamento: linhas douradas acompanhando todo o desenho Formato: circular com borda recortada e ondulada Centro: abertura para acomodar o tronco ou suporte da árvore Estilo: clássico, sofisticado e luxuoso Combinações: ideal para decorações em vermelho, dourado, champagne e verde Conservação: recomenda-se limpeza delicada; não passar diretamente sobre as aplicações e guardar protegida para preservar os bordados O clássico vermelho e dourado em uma versão sofisticada Uma peça pensada para quem deseja preservar as cores tradicionais do Natal sem abrir mão de uma decoração mais elaborada. O veludo vermelho cria profundidade , enquanto os detalhes dourados captam a iluminação da árvore e proporcionam pontos de brilho por toda a borda. O resultado é uma saia que não apenas esconde o suporte da árvore: ela cria uma moldura natalina luxuosa para os presentes e para toda a composição .",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/6754564.webp?v=1789509241"
    ],
    "variants": [
      {
        "id": "mdn-8537119981754-46654969708730",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537119981754-46654969741498",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537119981754-46654969774266",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-marfim-com-bordado-dourado-e-pedrarias",
    "name": "Saia para Árvore de Natal em Veludo Marfim com Bordado Dourado e Pedrarias",
    "shortName": "Saia para Árvore de Natal em Veludo Marfim com Bordado Dourado e Pedrarias",
    "description": "Descrição principal Uma peça clássica e sofisticada para finalizar a decoração da árvore de Natal com elegância. Confeccionada em veludo marfim , esta saia combina uma superfície suave e luminosa com uma ampla faixa ornamental dourada aplicada em toda a circunferência. O grande destaque está na borda trabalhada em um desenho geométrico de losangos entrelaçados , elaborado com fios dourados, pequenas pérolas, contas e aplicações com efeito de pedraria. Alguns detalhes centrais refletem a iluminação da árvore, criando pontos de brilho que valorizam ainda mais o acabamento. A combinação entre marfim e dourado proporciona uma estética atemporal e luxuosa, especialmente bonita em árvores decoradas com branco, champagne, dourado, cristal e iluminação quente. O corpo central permanece mais clean, deixando toda a riqueza visual concentrada na moldura externa. Isso permite acomodar presentes sem esconder completamente os detalhes decorativos e evita que a composição fique excessivamente carregada. A peça possui abertura lateral para facilitar a instalação ao redor de árvores já montadas. O fechamento é realizado por botões revestidos em tecido claro , acompanhados por uma estreita faixa dourada. No centro, uma pequena abertura circular envolve o tronco ou estrutura da árvore e contribui para esconder o suporte e a fiação. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e espaços compactos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — o mais procurado Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores mais abertas A proporção da faixa ornamental pode apresentar pequenas variações conforme o tamanho escolhido. Detalhes do produto Material: tecido aveludado em tom marfim Cor predominante: marfim / branco quente Acabamento: faixa ornamental dourada em toda a circunferência Desenho: padrão geométrico de losangos entrelaçados Detalhes decorativos: fios metalizados, pérolas, contas e aplicações brilhantes Formato: circular Abertura: lateral para facilitar a colocação Fechamento: botões revestidos com acabamento dourado Centro: abertura circular para acomodar a base da árvore Estilo: clássico, elegante e luxuoso Combinações: dourado, champagne, branco, pérola, cristal e tons neutros Conservação: recomenda-se limpeza delicada; não passar diretamente sobre bordados e aplicações; armazenar protegida para preservar os detalhes Elegância que emoldura a árvore A ampla faixa dourada funciona como uma verdadeira joia ao redor da árvore de Natal . Quando combinada às luzes quentes e aos presentes, cria uma moldura sofisticada sem tirar o protagonismo dos demais elementos da decoração. O resultado é uma base elegante e luminosa, ideal para quem procura uma decoração natalina de aparência clássica, refinada e atemporal .",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5678.webp?v=1789509001",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5474.webp?v=1789509000",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4467.webp?v=1789509001"
    ],
    "variants": [
      {
        "id": "mdn-8537119228090-46654955225274",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537119228090-46654955258042",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537119228090-46654955290810",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-dourado-com-bordados-e-paetes-1",
    "name": "Saia para Árvore de Natal em Bouclé Bege",
    "shortName": "Saia para Árvore de Natal em Bouclé Bege",
    "description": "Descrição Uma saia de árvore que traz para a decoração de Natal a sensação de aconchego, textura e elegância natural . Com acabamento inteiramente revestido por tecido bouclé em tom bege claro, este modelo cria uma base volumosa e macia ao redor da árvore, lembrando a textura delicada da lã. Sua superfície é formada por pequenos fios encaracolados e densos, responsáveis pelo aspecto felpudo e pela riqueza visual da peça. A textura ganha ainda mais destaque quando combinada com a iluminação quente da árvore, criando um cenário acolhedor para os presentes. O tom bege neutro foi pensado para combinar facilmente com diferentes estilos de decoração. Fica especialmente elegante com árvores tradicionais verdes e ornamentos em vermelho, dourado, champagne, branco ou madeira. Por não possuir desenhos ou aplicações chamativas, também é uma excelente escolha para propostas de Natal mais minimalistas e contemporâneas. O formato circular proporciona uma cobertura ampla da base da árvore, ajudando a esconder o suporte e a fiação. A abertura lateral facilita a colocação mesmo depois da árvore já estar montada, enquanto o recorte central acomoda o tronco ou a estrutura do pinheiro. Quando os presentes são posicionados sobre a saia, a textura bouclé permanece aparente ao redor das embalagens, criando uma composição que remete a um tapete macio sob a árvore de Natal . Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e espaços compactos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — tamanho versátil Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores volumosas A proporção visual da saia em relação à árvore pode variar conforme a abertura dos galhos e o modelo da árvore utilizada. Detalhes do produto Material: tecido bouclé de textura felpuda Cor: bege claro / creme Textura: fios encaracolados com aparência macia e volumosa Design: liso e minimalista Formato: circular Centro: abertura para acomodar o tronco ou suporte da árvore Abertura: lateral para facilitar a instalação Acabamento: bordas revestidas no mesmo material Estilo: aconchegante, sofisticado e contemporâneo Combinações: verde, vermelho, dourado, champagne, branco e tons naturais Conservação: recomenda-se limpeza delicada e armazenamento em local seco, evitando objetos que possam puxar ou prender os fios O aconchego do Natal nos pequenos detalhes A textura é a protagonista deste modelo. O acabamento bouclé cria uma aparência macia, quente e confortável , trazendo para a base da árvore a mesma sensação dos tecidos utilizados em mantas e peças sofisticadas de decoração. É uma escolha especialmente bonita para quem busca um Natal elegante sem excessos: uma peça neutra que valoriza a árvore, os presentes e a iluminação sem competir com o restante da decoração.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/6767.webp?v=1789508742",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/888.webp?v=1789508742",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/889.webp?v=1789508741",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5555.webp?v=1789508741"
    ],
    "variants": [
      {
        "id": "mdn-8537116737722-46654920786106",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537116737722-46654920818874",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537116737722-46654920851642",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-dourado-com-bordados-e-paetes",
    "name": "Saia para Árvore de Natal em Veludo Dourado com Bordados e Paetês",
    "shortName": "Saia para Árvore de Natal em Veludo Dourado com Bordados e Paetês",
    "description": "Descrição Uma peça criada para transformar a base da árvore em um verdadeiro destaque da decoração natalina. Confeccionada em veludo dourado de aparência luminosa e sofisticada , esta saia combina diferentes tonalidades e texturas do ouro para criar um acabamento elegante e marcante. Seu desenho ornamental é formado por camadas de pétalas sobrepostas , distribuídas ao redor de toda a circunferência. O recorte ondulado acompanha cada pétala e proporciona à peça uma silhueta inspirada em uma grande flor, trazendo movimento e riqueza visual à composição. Cada camada recebe aplicações cuidadosamente distribuídas em paetês dourados, miçangas, contas e detalhes metalizados . Linhas curvas acompanham o formato das pétalas, enquanto áreas selecionadas recebem uma concentração maior de paetês, criando pontos de brilho e profundidade. O efeito monocromático dourado torna este modelo especialmente sofisticado: em vez de depender do contraste entre cores, a decoração ganha destaque pela combinação de brilho, relevo e diferentes reflexos do próprio dourado . Sob as luzes da árvore, as aplicações captam a iluminação e ajudam a criar uma atmosfera natalina ainda mais acolhedora. O formato amplo permite acomodar presentes sobre a peça enquanto mantém parte do acabamento ornamental visível ao redor da árvore. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e espaços compactos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — o mais versátil Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores volumosas A proporção e a distribuição dos detalhes decorativos podem apresentar pequenas variações conforme o tamanho escolhido. Detalhes do produto Material: tecido aveludado em tom dourado Cor predominante: dourado Design: composição ornamental de pétalas sobrepostas Formato: circular com acabamento externo recortado e ondulado Aplicações: paetês, miçangas, contas e elementos metalizados dourados Acabamento: linhas curvas bordadas acompanhando o desenho das pétalas Efeito: brilho sofisticado com diferentes texturas e reflexos Centro: abertura para acomodar o tronco ou suporte da árvore Estilo: luxuoso, clássico e elegante Combinações: ideal para árvores em dourado, champagne, branco, marfim, verde e tons terrosos Conservação: recomenda-se limpeza delicada; não passar diretamente sobre bordados e aplicações; guardar protegida para preservar o acabamento Destaque Dourado do centro à borda para um Natal verdadeiramente sofisticado. O desenho em pétalas e a riqueza das aplicações fazem desta saia muito mais do que um acabamento para esconder a base da árvore. Ela se torna parte da decoração, criando uma moldura luxuosa para os presentes e valorizando especialmente árvores com iluminação quente e ornamentos dourados.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/76567.webp?v=1789508579"
    ],
    "variants": [
      {
        "id": "mdn-8537116016826-46654914330810",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537116016826-46654914363578",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537116016826-46654914396346",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-marfim-com-bordados-e-paetes-dourados",
    "name": "Saia para Árvore de Natal em Veludo Marfim com Bordados e Paetês Dourados",
    "shortName": "Saia para Árvore de Natal em Veludo Marfim com Bordados e Paetês Dourados",
    "description": "Descrição Elegância e luminosidade para uma decoração de Natal sofisticada. Esta saia para árvore é confeccionada em veludo marfim de aparência macia e refinada , criando uma base clara que valoriza tanto árvores tradicionais quanto composições natalinas em tons de dourado, champagne e branco. O grande destaque está em seu desenho ornamental inspirado em pétalas sobrepostas , formando uma composição circular que lembra uma grande flor ao redor da árvore. O recorte ondulado acompanha o desenho e transforma a própria silhueta da saia em um elemento decorativo. As pétalas são realçadas por delicadas linhas douradas, compostas por paetês, miçangas e aplicações metalizadas . Diferentes formatos e texturas se alternam ao longo do desenho, criando profundidade e pontos de brilho que ganham ainda mais destaque quando iluminados pelas luzes da árvore. Nas áreas externas, detalhes preenchidos com pequenas aplicações douradas acrescentam riqueza ao acabamento sem comprometer a delicadeza da peça. O resultado é uma saia de árvore com aparência elegante e festiva, capaz de complementar decorações clássicas e contemporâneas. A abertura central acomoda a base da árvore e ajuda a esconder o suporte e a fiação. A abertura lateral permite instalar a peça mesmo depois da árvore montada e conta com amarrações em tecido marfim , discretas e integradas ao acabamento. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e espaços compactos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — opção versátil Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores mais volumosas A aparência e a distribuição do desenho podem apresentar pequenas variações conforme o tamanho da peça. Detalhes do produto Material: tecido aveludado em tom marfim Cor predominante: marfim / branco quente Detalhes: aplicações decorativas em dourado Acabamento: linhas ornamentais com paetês, miçangas e elementos metalizados Design: pétalas sobrepostas em composição floral Formato: circular com borda recortada e ondulada Abertura: lateral para facilitar a colocação ao redor da árvore Fechamento: laços em tecido marfim Centro: abertura circular para acomodar o tronco ou suporte da árvore Estilo: sofisticado, clássico e luxuoso Combinações: ideal para decorações em dourado, champagne, branco, pérola e tons neutros Conservação: recomenda-se limpeza delicada; não passar diretamente sobre paetês e aplicações; armazenar protegida para preservar os detalhes Um acabamento que transforma a base da árvore Mais do que esconder o suporte, esta saia funciona como uma verdadeira moldura para a decoração. O veludo marfim iluminado pelos detalhes dourados cria um cenário elegante para os presentes e proporciona um acabamento digno de árvores natalinas sofisticadas. O desenho em pétalas também permanece visível mesmo depois que os presentes são posicionados, formando uma delicada borda ornamental ao redor de toda a composição.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/785.jpg?v=1789508471",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/664.jpg?v=1789508471",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5324.jpg?v=1789508471",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/565.jpg?v=1789508471"
    ],
    "variants": [
      {
        "id": "mdn-8537115689146-46654912528570",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537115689146-46654912561338",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537115689146-46654912594106",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-vermelho-com-bordado-dourado-e-pedrarias",
    "name": "Saia para Árvore de Natal em Veludo Vermelho com Bordado Dourado e Pedrarias",
    "shortName": "Saia para Árvore de Natal em Veludo Vermelho com Bordado Dourado e Pedrarias",
    "description": "Descrição principal Uma peça sofisticada para transformar a base da árvore de Natal em parte da decoração. Confeccionada em veludo vermelho profundo , esta saia combina o clássico tom natalino com um acabamento dourado elaborado, criando uma composição elegante e marcante. Toda a circunferência recebe uma larga aplicação ornamental dourada , formada por desenhos geométricos entrelaçados. O trabalho reúne fios metalizados, pequenas pérolas, pedrarias e elementos espelhados que refletem delicadamente as luzes da árvore, proporcionando brilho e textura ao acabamento. O contraste entre o veludo vermelho e os detalhes dourados cria uma estética luxuosa, especialmente indicada para árvores decoradas em tons de dourado, champagne, vermelho, branco ou cristal . Mesmo com poucos presentes ao redor, a peça já proporciona um acabamento completo e sofisticado à decoração. A saia possui abertura lateral , facilitando sua colocação ao redor de árvores já montadas. No centro, o recorte circular acomoda o tronco ou a estrutura da árvore e ajuda a esconder o suporte, cabos e demais elementos da montagem. O fechamento acompanha o acabamento da peça, com uma faixa vertical em tom dourado e botões revestidos em veludo vermelho , mantendo a estética refinada até nos pequenos detalhes. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e espaços compactos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — tamanho versátil Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores de maior volume A proporção e a distribuição dos detalhes podem variar de acordo com o tamanho escolhido. Detalhes do produto Material: veludo vermelho Cor predominante: vermelho profundo Acabamento: aplicação ornamental dourada em toda a borda Detalhes: fios metalizados, pérolas, pedrarias e elementos decorativos com efeito espelhado Desenho: padrão geométrico sofisticado Abertura: lateral para facilitar a instalação Fechamento: faixa dourada com botões revestidos em veludo vermelho Centro: abertura circular para acomodar a base da árvore Estilo: clássico, elegante e luxuoso Conservação: recomenda-se limpeza delicada e armazenamento sem dobrar excessivamente as aplicações Destaque Um acabamento de luxo para a árvore de Natal. O veludo vermelho intenso encontra o brilho das aplicações douradas e pedrarias em uma peça criada para valorizar a decoração até o último detalhe. Pode mandar as próximas imagens. Vou manter esse mesmo padrão profissional , criando um título e uma descrição exclusivos para cada modelo.",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/432.jpg?v=1789507764",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/452.jpg?v=1789507764",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/6747.jpg?v=1789507764"
    ],
    "variants": [
      {
        "id": "mdn-8537113034938-46654900076730",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537113034938-46654900109498",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537113034938-46654900142266",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-vermelho-com-aplicacao-de-papai-noel",
    "name": "Saia para Árvore de Natal em Veludo Vermelho com Aplicação de Papai Noel",
    "shortName": "Saia para Árvore de Natal em Veludo Vermelho com Aplicação de Papai Noel",
    "description": "Descrição A cena clássica do Natal contada em tecido. Sobre um veludo vermelho vivo, o desenho do Papai Noel em seu trenó carregado de presentes atravessa a saia puxado por uma fila de renas em pleno salto, ligadas por rédeas em pontos de bolinha bordados. Ao redor, estrelas e flocos de neve em tons de marfim e prata completam o céu noturno. Todo o desenho é feito em aplicação de tecido (patchwork bordado), não em estampa: cada silhueta é recortada em veludo marfim e costurada à peça com acabamento em ponto cheio no contorno — o que dá relevo, textura e uma durabilidade que impressão nenhuma alcança. É o tipo de detalhe que fica bonito de perto e que vira peça de família com os anos. A borda é fechada por uma faixa larga em veludo marfim em todo o perímetro, que emoldura a cena e faz o contraste com o vermelho. A abertura lateral tem fechamento com sino prateado , um detalhe funcional e sonoro que as crianças adoram. O recorte central acomoda a base da árvore, escondendo suporte e fiação. Personalização: a faixa marfim aceita o bordado do sobrenome ou nome da família em letras vermelhas, aplicado na borda inferior — como no exemplo das fotos. É o que transforma a peça em presente de inauguração de casa, casamento ou primeiro Natal do bebê. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m e cantos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — o mais procurado Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores muito abertas Abertura central de aproximadamente 12 cm. Nos tamanhos maiores, a cena aparece com mais renas visíveis por conta da circunferência. Detalhes do produto Material: veludo vermelho com aplicações em veludo marfim e forro coordenado Desenho: Papai Noel no trenó, fila de renas, estrelas e flocos de neve Técnica: aplicação de tecido com contorno bordado em ponto cheio Acabamento: faixa larga em veludo marfim em todo o contorno Fechamento: abertura lateral com sino prateado Personalização: bordado de nome ou sobrenome na faixa marfim (opcional) Conservação: limpeza a seco recomendada; não passar sobre as aplicações; guardar enrolada Cores: vermelho e marfim",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/12.webp?v=1789506936",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/444.webp?v=1789506936",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/555.webp?v=1789506936"
    ],
    "variants": [
      {
        "id": "mdn-8537108283578-46654818549946",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537108283578-46654818582714",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537108283578-46654818615482",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-pele-sintetica-marfim",
    "name": "Saia para Árvore de Natal em Pele Sintética Marfim",
    "shortName": "Saia para Árvore de Natal em Pele Sintética Marfim",
    "description": "Descrição Textura no lugar do brilho. Esta saia é feita em pele sintética de pelo longo e denso, em um marfim quente que puxa levemente para o creme — o efeito é de neve fresca aos pés da árvore, aconchegante e luminoso sem precisar de nenhum enfeite. O pelo é macio, com caimento pesado e movimento natural: ele assenta no chão em volume, criando um relevo suave em vez da superfície lisa das saias de tecido. O acabamento é de peça única, sem debrum aparente, com o pelo contornando toda a borda e disfarçando a emenda. A abertura lateral é reta e simples, escondida pelo próprio pelo quando a peça é fechada em volta do tronco, e o recorte central circular acomoda a base da árvore cobrindo suporte e fiação. É a escolha para quem monta decoração em tons neutros — marfim, dourado velho, prata, madeira e vidro — e também a que melhor faz contraste com árvores verde-escuras, flocadas ou muito carregadas de enfeites vermelhos. Combina naturalmente com sacos de presente e meias de Natal na mesma pele sintética. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de mesa e de 1,20 m a 1,50 m Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — o mais procurado Grande 150 cm (60\") Árvores de 2,40 m ou mais e árvores muito abertas Abertura central de aproximadamente 10 cm de diâmetro. Detalhes do produto Material: pele sintética de pelo longo (frente) com forro em tecido Textura: pelo denso, macio, de caimento pesado Acabamento: borda em pelo, sem debrum aparente Fechamento: abertura lateral reta, disfarçada pelo pelo Conservação: limpar com pano úmido ou escova macia no sentido do pelo; não torcer nem passar; guardar solta, sem peso em cima, para o pelo não marcar Cor: marfim",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-1541004_Ivory-Lodge-Faux-Fur-Tree-Skirt_SSC-10.webp?v=1789495158",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/534.webp?v=1789495158",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/654.webp?v=1789495158",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/122.webp?v=1789495158"
    ],
    "variants": [
      {
        "id": "mdn-8537048088762-46654471307450",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537048088762-46654471340218",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537048088762-46654471372986",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-bordo-com-relevo-copia",
    "name": "Saia para Árvore de Natal em Veludo Azul Meia-Noite com Relevo",
    "shortName": "Saia para Árvore de Natal em Veludo Azul Meia-Noite com Relevo",
    "description": "Descrição A mesma alfaiataria da linha Luxe, agora em azul meia-noite — uma escolha elegante para quem quer fugir do vermelho tradicional sem perder o ar de festa. O veludo profundo, quase noturno, ganha reflexos em azul safira conforme a luz atinge o relevo, e o contraste entre as áreas altas e baixas do desenho fica ainda mais evidente nessa cor. Toda a superfície é trabalhada em relevo por matelassê: um grande medalhão central em desenho de mandala, cercado por faixas concêntricas de arabescos, arcos, pétalas e pontilhados. O desenho é construído em costura, não impresso — o volume é real e se sente ao toque. O contorno é em borda ondulada em pétalas , com bainha arrematada acompanhando cada curva. O fechamento se dá por três laços de veludo ao longo da abertura lateral, amarrados à mão, que ficam à vista como parte do acabamento. O recorte central circular e ribeteado encaixa no tronco e esconde base, suporte e fiação. Combinação certeira com enfeites dourados, prata, cristal e branco — e especialmente bonita sob árvores de tom verde-escuro ou flocadas, onde o azul cria um contraste sofisticado e menos óbvio. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 120 cm (48\") Árvores de 1,80 m a 2,10 m Médio 150 cm (60\") Árvores de 2,40 m — o mais procurado Grande 180 cm (72\") Árvores de 2,70 m ou mais, pé-direito alto e árvores muito abertas A medida do diâmetro considera a extensão máxima das pétalas. Abertura central de aproximadamente 15 cm. Detalhes do produto Material: veludo com relevo em matelassê (frente) e forro coordenado Desenho: medalhão central em mandala com faixas concêntricas de arabescos Formato: borda ondulada em pétalas Fechamento: abertura lateral com três laços de veludo Conservação: limpeza a seco recomendada; guardar enrolada, sem dobrar, para preservar o relevo Cor: azul meia-noite",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541003-1_60-inch-Midnight-Blue-Embossed-Velvet-Luxe-Tree-Skirt_SSC.webp?v=1789494698",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3_416cca89-d0ad-4744-a5bc-c0b7ef48ef4c.webp?v=1789494698",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541003-1_60-inch-Midnight-Blue-Embossed-Velvet-Luxe-Tree-Skirt_Closeup-20.webp?v=1789494698",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2_6f75b5f2-6050-4fa8-ae55-515bc7c0579a.webp?v=1789494698"
    ],
    "variants": [
      {
        "id": "mdn-8537046286522-46654449189050",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537046286522-46654449221818",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537046286522-46654449254586",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "product",
    "name": "Saia para Árvore de Natal em Veludo Bordô com Relevo",
    "shortName": "Saia para Árvore de Natal em Veludo Bordô com Relevo",
    "description": "Descrição principal A versão mais sofisticada do clássico. Em veludo bordô de brilho intenso, esta saia traz um trabalho de relevo em toda a superfície: um grande medalhão central em desenho de mandala, cercado por faixas concêntricas de arabescos, arcos e motivos florais marcados no tecido por matelassê. O relevo não é impresso — é construído em costura, o que cria volume real e faz o veludo refletir a luz em dois tons, do vinho profundo ao rubi acetinado. O contorno abandona o círculo simples e adota uma borda ondulada em pétalas , com bainha arrematada que acompanha cada curva. O fechamento é feito por três laços de veludo aplicados ao longo da abertura lateral, que amarram à mão e deixam o acabamento à vista como parte da decoração. O recorte central, circular e ribeteado, encaixa no tronco cobrindo base, suporte e fiação. Peça de destaque, pensada para árvores que ficam no centro do ambiente. O bordô mais fechado traz um ar clássico e aveludado que valoriza especialmente enfeites dourados, cobre, cristal e branco. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 120 cm (48\") Árvores de 1,80 m a 2,10 m Médio 150 cm (60\") Árvores de 2,40 m — o mais procurado Grande 180 cm (72\") Árvores de 2,70 m ou mais, pé-direito alto e árvores muito abertas A medida do diâmetro considera a extensão máxima das pétalas. Abertura central de aproximadamente 15 cm. Detalhes do produto Material: veludo com relevo em matelassê (frente) e forro coordenado Desenho: medalhão central em mandala com faixas concêntricas de arabescos Formato: borda ondulada em pétalas Fechamento: abertura lateral com três laços de veludo Conservação: limpeza a seco recomendada; guardar enrolada, sem dobrar, para preservar o relevo Cor: bordô",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541003-2_72-inch-Burgundy-Embossed-Velvet-Luxe-Tree-Skirt_SSC.webp?v=1789491763",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541003-2_60-inch-Burgundy-Embossed-Velvet-Luxe-Tree-Skirt_Closeup-30.webp?v=1789491763",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541003-2_60-inch-Burgundy-Embossed-Velvet-Luxe-Tree-Skirt_Closeup-20.webp?v=1789491763",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541003-2_60-inch-Burgundy-Embossed-Velvet-Luxe-Tree-Skirt_Closeup-10.webp?v=1789491763"
    ],
    "variants": [
      {
        "id": "mdn-8537002606778-46654244749498",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537002606778-46654244782266",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537002606778-46654244815034",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "saia-para-arvore-de-natal-em-veludo-vermelho",
    "name": "Saia para Árvore de Natal em Veludo Vermelho",
    "shortName": "Saia para Árvore de Natal em Veludo Vermelho",
    "description": "Um clássico que nunca sai de moda. Confeccionada em veludo de toque macio e caimento pesado, esta saia para árvore de Natal traz um vermelho profundo e encorpado que ganha brilho sutil conforme a luz atinge o tecido — o efeito é rico, quente e imediatamente natalino. O acabamento é o que faz a diferença: bainha com debrum arredondado em todo o contorno, costuras internas que dividem a peça em gomos e garantem o círculo perfeito quando estendida, e abertura lateral com fechamento discreto por botões forrados, que permite posicionar a peça ao redor do tronco sem esforço. O recorte central acomoda a base da árvore com folga, escondendo o suporte, os cabos e os fios de luz. Perfeita para cobrir a base da árvore, proteger o piso e criar o cenário ideal para os presentes. Vermelho versátil, que combina tanto com decoração tradicional em dourado e verde quanto com composições mais modernas em branco e prata. Tamanhos disponíveis Tamanho Diâmetro Indicado para Pequeno 90 cm (36\") Árvores de 1,20 m a 1,50 m, mesas e cantos Médio 120 cm (48\") Árvores de 1,80 m a 2,10 m — o mais procurado Grande 150 cm (60\") Árvores de 2,40 m ou mais, pé-direito alto Todos os tamanhos possuem abertura central de aproximadamente 12 cm de diâmetro. Detalhes do produto Material: veludo (frente) com forro em tecido coordenado Acabamento: debrum arredondado em todo o contorno Fechamento: abertura lateral com botões forrados Conservação: limpeza a seco recomendada; guardar enrolada para evitar marcas de vinco Cor: vermelho rubi",
    "category": "enfeites",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541004_60in-Red-Velvet-Tree-Skirt_SSC.webp?v=1789491113",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541004_60in-Red-Velvet-Tree-Skirt_Closeup-20.webp?v=1789491113",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541004_60in-Red-Velvet-Tree-Skirt_Closeup-10.webp?v=1789491114",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/SKT-2541004_60in-Red-Velvet-Tree-Skirt_Closeup-30.webp?v=1789491113"
    ],
    "variants": [
      {
        "id": "mdn-8537002574010-46654244651194",
        "title": "Pequeno 90 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537002574010-46654244683962",
        "title": "Médio 120 cm",
        "price": 4990,
        "available": true
      },
      {
        "id": "mdn-8537002574010-46654244716730",
        "title": "Grande 150 cm",
        "price": 4990,
        "available": true
      }
    ]
  },
  {
    "handle": "6-luzes-de-cluster-externas-em-cascata-brancas-quentes",
    "name": "6 luzes externas em cascata brancas quentes",
    "shortName": "6 luzes externas em cascata brancas quentes",
    "description": "Adicione brilho ao seu jardim neste Natal com nossas luzes em cascata para exteriores. Com 6 gotas de 1 m de luzes de cluster espaçadas a 2 m do centro, essas luzes de Natal exclusivas apresentam 480 LEDs brancos quentes entre elas e são uma ótima alternativa às luzes de gelo para adicionar um brilho extra aconchegante ao seu jardim neste inverno. Projetado para estilizar árvores, basta conectar suas luzes usando o cabo de 10 m, alimentar cada gota de luzes do cluster na extremidade de um galho e ligá-las, optando pela função de temporizador de 8 horas para iluminar seu jardim noite após noite com um brilho suave sazonal. Comprimento de queda de 1m 2m do ponto central Cabo de ligação de 10m Temporizador de 8 horas",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-25%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/L4F2309_1.jpg?v=1789486881",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/L4F2309_2.jpg?v=1789486881"
    ],
    "variants": [
      {
        "id": "mdn-8536986124474-46654142185658",
        "title": "Único",
        "price": 5990,
        "compareAt": 7990,
        "available": true,
        "sku": "L4F2309"
      }
    ]
  },
  {
    "handle": "50-micro-luzes-de-fadas-para-exteriores-com-estrelas-brancas-quentes",
    "name": "Estreluz50: Fadas Exteriores Branco Quente",
    "shortName": "Estreluz50: Fadas Exteriores Branco Quente",
    "description": "Adicione um toque festivo cintilante ao seu espaço! Nossas luzes micro em forma de estrela são o toque final perfeito para sua casa e jardim nesta temporada. Com um plástico super macio e um cabo extremamente flexível, elas podem ser facilmente envolvidas em folhagens ou moldadas dentro de um vaso para criar um destaque aconchegante natalino. Distribuídas uniformemente ao longo de 4,9 metros de fio prateado, cada estrela tem 2 cm e é iluminada por um LED em tom branco quente. Simplesmente insira 3 pilhas AA no compartimento de baterias, ajuste o timer de 6 horas e aguarde um brilho no mesmo horário todas as noites. 4,9 metros de comprimento com 50 cm de cabo inicial Requer 3 pilhas AA Timer de 6 horas Uso interno e externo",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-38%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/LL21075_50-Warm-White-Star-Outdoor-Micro-Fairy-Lights.jpg?v=1789486880"
    ],
    "variants": [
      {
        "id": "mdn-8536986091706-46654142152890",
        "title": "Único",
        "price": 4990,
        "compareAt": 7990,
        "available": true,
        "sku": "LL21075"
      }
    ]
  },
  {
    "handle": "luzes-azuis",
    "name": "100 Luzes Azuis",
    "shortName": "100 Luzes Azuis",
    "description": "Nossas luzes de fada Core Connect são perfeitas para adicionar brilho à sua casa ou evento especial. Ideais para uso doméstico e comercial, essas luzes de baixa tensão podem ser usadas em ambientes internos e externos. Um elemento básico para iluminar árvores e pátios amplos, eles equilibram estilo e durabilidade. Com a capacidade de estender até 80 m de luzes a partir de um plugue e com conectores simples nas extremidades de cada corda, é incrivelmente fácil conectá-los para criar o comprimento perfeito. O plugue do transformador Core Connect (vendido separadamente) vem com um cabo de 4,5 m. Basta ativar a função de temporizador e selecionar efeito de iluminação para brilhar ano após ano. Cordas de 1x20m Conecte até 80m Temporizador de 6 horas 8 efeitos de iluminação Uso interno e externo",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-14%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100BG_Blue-LED-Connectable-Fairy-Lights_P1.jpg?v=1789486877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100BG_Blue-LED-Connectable-Fairy-Lights_P2.jpg?v=1789486878",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100BG_Blue-LED-Connectable-Fairy-Lights_P3.jpg?v=1789486877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100BG_Blue-LED-Connectable-Fairy-Lights_P4.jpg?v=1789486878"
    ],
    "variants": [
      {
        "id": "mdn-8536986026170-46654142087354",
        "title": "Único",
        "price": 2990,
        "compareAt": 3490,
        "available": true,
        "sku": "ML100BG"
      }
    ]
  },
  {
    "handle": "luzes-brancas",
    "name": "100 Luzes Brancas",
    "shortName": "100 Luzes Brancas",
    "description": "Nossas luzes de fada Core Connect são perfeitas para adicionar brilho à sua casa ou evento especial. Ideais para uso doméstico e comercial, essas luzes de baixa tensão podem ser usadas em ambientes internos e externos. Um elemento básico para iluminar árvores e pátios amplos, eles equilibram estilo e durabilidade. Com a capacidade de estender até 80 m de luzes a partir de um plugue e com conectores simples nas extremidades de cada corda, é incrivelmente fácil conectá-los para criar o comprimento perfeito. O plugue do transformador Core Connect (vendido separadamente) vem com um cabo de 4,5 m. Basta ativar a função de temporizador e selecionar efeito de iluminação para brilhar ano após ano. Cordas de 1x20m Conecte até 80m Temporizador de 6 horas 8 efeitos de iluminação Uso interno e externo",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-43%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P1_3d0b95ef-e93e-4b19-8795-5b54a7500205.jpg?v=1789486877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-Low-Voltage-Christmas-Lights_P2_ccf6a391-55d0-4728-870b-299ac6f2e4ca.jpg?v=1789486877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-Low-Voltage-Christmas-Lights_P3.jpg?v=1789486876",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P4_68eb5860-9417-45ee-abdd-f461b2272a85.jpg?v=1789486877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P5_02bb79de-e2fb-42d8-be45-b416326d5b89.jpg?v=1789486877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P6_6cc676f3-c7d7-418b-aead-f5fea531c91f.jpg?v=1789486877",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P7_427fbbbb-6bad-4187-ada6-885b09a4be00.jpg?v=1789486876",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_Commercial-Low-Voltage-Christmas-Lights_P9_38353a36-b1f7-4618-90fb-5d7d75eb2e15.jpg?v=1789486877"
    ],
    "variants": [
      {
        "id": "mdn-8536985993402-46654142054586",
        "title": "Único",
        "price": 1990,
        "compareAt": 3490,
        "available": true,
        "sku": "ML100WG"
      }
    ]
  },
  {
    "handle": "100-luzes-multicolors-10-metros",
    "name": "100 Luzes Multicolors",
    "shortName": "100 Luzes Multicolors",
    "description": "Nossas luzes de fada Core Connect são perfeitas para adicionar brilho à sua casa ou evento especial. Ideais para uso doméstico e comercial, essas luzes de baixa tensão podem ser usadas em ambientes internos e externos. Um elemento básico para iluminar árvores e pátios amplos, eles equilibram estilo e durabilidade. Com a capacidade de estender até 80 m de luzes a partir de um plugue e com conectores simples nas extremidades de cada corda, é incrivelmente fácil conectá-los para criar o comprimento perfeito. O plugue do transformador Core Connect (vendido separadamente) vem com um cabo de 4,5 m. Basta ativar a função de temporizador e selecionar efeito de iluminação para brilhar ano após ano. Cordas de 1x20m Conecte até 80m Temporizador de 6 horas 8 efeitos de iluminação Uso interno e externo",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-14%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_80-Multi-Coloured-LED-Fairy-Lights_P1.jpg?v=1789486875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_80-Multi-Coloured-LED-Fairy-Lights_P2.jpg?v=1789486875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_multi-coloured-Christmas-tree-lights-at-queen-ethelburgas-york_P3.jpg?v=1789486876",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_Huge-Christmas-Tree-multi-coloured-lights-queen-ethelburgas_P4.jpg?v=1789486876",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_Multi-Coloured-Christmas-Lights-on-Tree_P5.jpg?v=1789486875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_80-Multi-Coloured-LED-Fairy-Lights_P6.jpg?v=1789486875",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_80-Multi-Coloured-LED-Fairy-Lights_P7.jpg?v=1789486875"
    ],
    "variants": [
      {
        "id": "mdn-8536985960634-46654142021818",
        "title": "Único",
        "price": 2990,
        "compareAt": 3490,
        "available": true,
        "sku": "ML100MG"
      }
    ]
  },
  {
    "handle": "150-luzes-de-led-tradicional-natalina-15-metros",
    "name": "150 Luzes de LED Tradicional Natalina 15 metros",
    "shortName": "150 Luzes de LED Tradicional Natalina 15 metros",
    "description": "Combinando o icônico formato de lâmpada pontiaguda e o brilho dourado por excelência, este é, em nossa opinião, o conjunto perfeito de luzes para árvores de Natal. Com 150 LEDs brancos quentes cintilantes sobre um cabo verde leve, essas luzes farão sua árvore parecer totalmente nostálgica. 15m de luzes; fio condutor de 5m 9 configurações de velocidade com função de memória Temporizador de 6 horas Cada lâmpada é feita de perspex transparente e com garantia de permanência fria, tornando essas luzes a escolha perfeita para uma árvore de interior. Equipados com um controlador de 9 velocidades e função de memória, eles podem permanecer estáticos ou cintilar em um ritmo que se adapta ao seu estilo. Além do mais, eles têm uma opção prática de temporizador de 6 horas, então não há necessidade de se preocupar em desligá-los à noite, eles mesmos farão isso! Há também um fio verde de 5 m da primeira lâmpada ao transformador (plugue) para maior comodidade.",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-33%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL18035_100-Warm-White-Traditional-Christmas-Tree-Lights-Close_P1.jpg?v=1789486874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL18035_20_100-Warm-White-Traditional-Christmas-Tree-Lights_P2.jpg?v=1789486874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL18035_20_100-Warm-White-Traditional-Christmas-LED-Tree-Lights_P3.jpg?v=1789486874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL18035_20_Warm-White-Traditional-Christmas-LED-Tree-Lights-Lifestyle-Close_P4.jpg?v=1789486874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL18035_20_100-Warm-White-Traditional-Christmas-LED-Tree-Lights-Lifestyle_P5.jpg?v=1789486875"
    ],
    "variants": [
      {
        "id": "mdn-8536985927866-46654141989050",
        "title": "Único",
        "price": 3000,
        "compareAt": 4490,
        "available": true,
        "sku": "PL18035"
      }
    ]
  },
  {
    "handle": "200-luzes-azuis-20-metros",
    "name": "200 Luzes Azuis",
    "shortName": "200 Luzes Azuis",
    "description": "Nossas luzes de fada Core Connect são perfeitas para adicionar brilho à sua casa ou evento especial. Ideais para uso doméstico e comercial, essas luzes de baixa tensão podem ser usadas em ambientes internos e externos. Um elemento básico para iluminar árvores e pátios amplos, eles equilibram estilo e durabilidade. Com a capacidade de estender até 80 m de luzes a partir de um plugue e com conectores simples nas extremidades de cada corda, é incrivelmente fácil conectá-los para criar o comprimento perfeito. O plugue do transformador Core Connect (vendido separadamente) vem com um cabo de 4,5 m. Basta ativar a função de temporizador e selecionar efeito de iluminação para brilhar ano após ano. Cordas de 2x40m Conecte até 80m Temporizador de 6 horas 8 efeitos de iluminação Uso interno e externo",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-33%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100BG_Blue-LED-Connectable-Fairy-Lights_P1_70986366-19c1-4e36-8edd-7d32935fbdf1.jpg?v=1789486873",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100BG_Blue-LED-Connectable-Fairy-Lights_P2_c21b349a-6b49-4d3b-a453-0e88709431ac.jpg?v=1789486873",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100BG_Blue-LED-Connectable-Fairy-Lights_P3_24d79bf7-81fb-415d-bc76-1fd42d64594b.jpg?v=1789486873",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100BG_Blue-LED-Connectable-Fairy-Lights_P4_17dda5ac-9f54-4292-ba25-b1314dda78be.jpg?v=1789486873"
    ],
    "variants": [
      {
        "id": "mdn-8536985895098-46654141956282",
        "title": "Único",
        "price": 3990,
        "compareAt": 5990,
        "available": true
      }
    ]
  },
  {
    "handle": "200-luzes-brancas-20-metros",
    "name": "200 Luzes Brancas",
    "shortName": "200 Luzes Brancas",
    "description": "Nossas luzes de fada Core Connect são perfeitas para adicionar brilho à sua casa ou evento especial. Ideais para uso doméstico e comercial, essas luzes de baixa tensão podem ser usadas em ambientes internos e externos. Um elemento básico para iluminar árvores e pátios amplos, eles equilibram estilo e durabilidade. Com a capacidade de estender até 80 m de luzes a partir de um plugue e com conectores simples nas extremidades de cada corda, é incrivelmente fácil conectá-los para criar o comprimento perfeito. O plugue do transformador Core Connect (vendido separadamente) vem com um cabo de 4,5 m. Basta ativar a função de temporizador e selecionar efeito de iluminação para brilhar ano após ano. Cordas de 2x40m Conecte até 80m Temporizador de 6 horas 8 efeitos de iluminação Uso interno e externo",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-33%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P1_cd94d979-bc57-4160-bf70-b45935256cfe.jpg?v=1789486872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-Low-Voltage-Christmas-Lights_P2_1460db06-08d9-401c-8550-1ec0fba1d034.jpg?v=1789486872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-Low-Voltage-Christmas-Lights_P3_390dcc37-5a8c-4c36-986f-7b0c33279783.jpg?v=1789486872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P4_57588e3e-358a-4852-8b11-3772e87037d5.jpg?v=1789486872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P5_d4bee9f0-7f1d-4cd1-b08d-095497cee568.jpg?v=1789486872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P6_cffc0948-5867-4b0c-ac46-08e0c5931861.jpg?v=1789486872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_White-LED-Fairy-Lights_P7_edad84bb-08ec-43d3-89cb-9cd070411765.jpg?v=1789486873",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100WG_Commercial-Low-Voltage-Christmas-Lights_P9_604675dc-6f2b-4050-bffa-7f65850566cc.jpg?v=1789486872"
    ],
    "variants": [
      {
        "id": "mdn-8536985829562-46654141890746",
        "title": "Único",
        "price": 3990,
        "compareAt": 5990,
        "available": true,
        "sku": "ML100WG"
      }
    ]
  },
  {
    "handle": "200-luzes-multicolors-20-metros",
    "name": "200 Luzes Multicolors",
    "shortName": "200 Luzes Multicolors",
    "description": "Nossas luzes de fada Core Connect são perfeitas para adicionar brilho à sua casa ou evento especial. Ideais para uso doméstico e comercial, essas luzes de baixa tensão podem ser usadas em ambientes internos e externos. Um elemento básico para iluminar árvores e pátios amplos, eles equilibram estilo e durabilidade. Com a capacidade de estender até 80 m de luzes a partir de um plugue e com conectores simples nas extremidades de cada corda, é incrivelmente fácil conectá-los para criar o comprimento perfeito. O plugue do transformador Core Connect (vendido separadamente) vem com um cabo de 4,5 m. Basta ativar a função de temporizador e selecionar efeito de iluminação para brilhar ano após ano. Cordas de 2x40m Conecte até 80m Temporizador de 6 horas 8 efeitos de iluminação Uso interno e externo",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-33%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_80-Multi-Coloured-LED-Fairy-Lights_P1_ed7075ff-867c-4f29-a79d-0db269514ee2.jpg?v=1789486871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_80-Multi-Coloured-LED-Fairy-Lights_P2_b88abe3d-0ea5-4b7e-bdca-930ac7866ddb.jpg?v=1789486871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_multi-coloured-Christmas-tree-lights-at-queen-ethelburgas-york_P3_c2b9533f-846c-410d-89e2-4b3cb3099a3d.jpg?v=1789486871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_Huge-Christmas-Tree-multi-coloured-lights-queen-ethelburgas_P4_643ac53c-9bb1-4089-b217-64a4df4da007.jpg?v=1789486871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_Multi-Coloured-Christmas-Lights-on-Tree_P5_3ace28e4-1a3d-4ec6-9d47-71cff87bb215.jpg?v=1789486871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_80-Multi-Coloured-LED-Fairy-Lights_P6_969d7968-ca9c-4b9d-8e7e-c02309308b4f.jpg?v=1789486871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ML100MG_80-Multi-Coloured-LED-Fairy-Lights_P7_373e4ae0-8fef-4f37-bd2f-fbadf9457fef.jpg?v=1789486871"
    ],
    "variants": [
      {
        "id": "mdn-8536985796794-46654141857978",
        "title": "Único",
        "price": 3990,
        "compareAt": 5990,
        "available": true,
        "sku": "ML100MG"
      }
    ]
  },
  {
    "handle": "varal-de-luzes-led-para-decoracao-natal",
    "name": "Varal de Luzes Led para Decoração Natal",
    "shortName": "Varal de Luzes Led para Decoração Natal",
    "description": "Deixe suas comemorações inesquecíveis transformando seu quintal! O Varal de Luzes Led para Decoração Natal é a decoração perfeita para seu quintal/jardim, além de serem lindas, a iluminaria conta com adaptação solar, livre- se de gastos de energia elétrica. São totalmente a prova d'agua. E também uma ótima decoração natalina. Brilho forte e intenso Com lindos e brilhantes modos de iluminação podem atender a todas as suas necessidades para diferentes luzes. além do brilho intenso ela vem com bateria de maior capacidade interna de 1800MAH. O Varal de Luzes Led para Decoração Natal trará a você uma atmosfera mais acolhedora e quente para qualquer ocasião. Instalação simples rápida As lâmpadas são alimentadas por energia solar e são captadas através do painel solar, que por sua vez é fácil de montar e instalar em qualquer lugar. Benefícios: ✅ São fáceis de instalar e acendem sozinhas a noite ✅ São mais duráveis: A placa de energia solar dura de 20 a 25 anos. ✅ Economizam um dinheirão na conta de luz ✅ São a prova d’água, poeira e construída com peças de alta qualidade ✅ O investimento na iluminação solar consegue se pagar ao longo dos anos com a economia na conta de luz. Amplamente utilizado Estas luzes são a decoração perfeita para terraço, pérgola, bistrô, quintal, deck, churrasqueira, guarda-chuva, jantar, aniversário, Natal, Halloween, festa de Ano Novo e muito mais. Especificações: Modelo: Incandescente Voltagem: 127V ou 220V (selecione na hora da compra) Potência: 15w Cor da Luz: Branco Quente (Amarelinha) Tamanho: Aproximadamente 6,5 centímetros. O pacote inclui: 1x Varal de Luzes Led para Decoração Natal",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-65%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/VaraldeLuzesLedparaDecoracaoNatal3.webp?v=1789486870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/VaraldeLuzesLedparaDecoracaoNatal7.png?v=1789486870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/VaraldeLuzesLedparaDecoracaoNatal4.png?v=1789486870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/VaraldeLuzesLedparaDecoracaoNatal5.webp?v=1789486870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/VaraldeLuzesLedparaDecoracaoNatal6.webp?v=1789486870"
    ],
    "variants": [
      {
        "id": "mdn-8536985764026-46654141759674",
        "title": "Amarela / 5 Metros",
        "price": 12770,
        "compareAt": 18999,
        "available": true,
        "sku": "lp-amarela/5m"
      },
      {
        "id": "mdn-8536985764026-46654141792442",
        "title": "Amarela / 10 Metros",
        "price": 15770,
        "compareAt": 20999,
        "available": true
      },
      {
        "id": "mdn-8536985764026-46654141825210",
        "title": "Amarela / 20 Metros",
        "price": 22770,
        "compareAt": 36999,
        "available": true
      }
    ]
  },
  {
    "handle": "cortina-de-led-com-300-luzes-e-8-modos-para-natal",
    "name": "Cortina de Luz de Led com 300 Luzes e 8 Modos para Natal",
    "shortName": "Cortina de Luz de Led com 300 Luzes e 8 Modos para Natal",
    "description": "CORTINA DE LED COM 300 LUZES E 8 MODOS PARA O NATAL Nós sabemos que, durante o Natal, você procura sempre o melhor para criar um ambiente mágico e iluminado em sua casa. É por isso que apresentamos a Cortina de LED com 300 Luzes e 8 Modos para o Natal , a solução perfeita para transformar seu lar em um cenário natalino deslumbrante. DESCUBRA O BRILHO MÁGICO DAS LUZES DE NATAL Deixe sua casa brilhar com a Cortina de LED para o Natal . Cada luz é uma pequena estrela que adicionará um toque de magia à sua decoração, tornando este Natal verdadeiramente inesquecível. A CORTINA DE LED É MAIS QUE UMA DECORAÇÃO Além de iluminar sua casa, a Cortina de LED para o Natal traz a alegria do Natal para o coração de todos. Crie momentos especiais em família e compartilhe risos e amor sob o brilho encantador dessas luzes. QUALIDADE QUE BRILHA POR ANOS Feita para iluminar muitos Natais, a Cortina de LED para o Natal apresenta alta qualidade e durabilidade. Cada lâmpada é projetada para brilhar e encantar, ano após ano. DETALHES DO PRODUTO QUE VOCÊ VAI ADORAR 300 Luzes Deslumbrantes : Este conjunto inclui 300 luzes LED para iluminar seu espaço com um brilho deslumbrante. 8 Modos de Iluminação : Escolha entre 8 modos de iluminação diferentes para criar a atmosfera perfeita. Fácil de Instalar : A cortina é simples de montar, permitindo que você crie um cenário mágico em minutos. Economia de Energia : As luzes LED são eficientes em termos energéticos, proporcionando um brilho espetacular sem pesar na conta de luz. Controle Remoto : Acompanha um controle remoto para ajustar os modos de iluminação de forma conveniente. ACOMPANHA NO PACOTE: 01 Cortina de LED com 300 Luzes e 8 Modos para o Natal",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-32%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/CortinadeLedcom300Luzese8Modos5.jpg?v=1789486869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/CortinadeLedcom300Luzese8Modos4.jpg?v=1789486869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/CortinadeLedcom300Luzese8Modos3.webp?v=1789486869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/CortinadeLedcom300Luzese8Modos7.jpg?v=1789486869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/CortinadeLedcom300Luzese8Modos2.webp?v=1789486869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/CortinadeLedcom300Luzese8Modos1.webp?v=1789486869"
    ],
    "variants": [
      {
        "id": "mdn-8536985731258-46654141661370",
        "title": "Branco - Frio / 3 Metros - 300 Leds",
        "price": 14970,
        "compareAt": 21999,
        "available": true
      },
      {
        "id": "mdn-8536985731258-46654141694138",
        "title": "Amarelo - Quente / 3 Metros - 300 Leds",
        "price": 14970,
        "compareAt": 21999,
        "available": true
      },
      {
        "id": "mdn-8536985731258-46654141726906",
        "title": "Colorido - RGB / 3 Metros - 300 Leds",
        "price": 14970,
        "compareAt": 21999,
        "available": true
      }
    ]
  },
  {
    "handle": "luzes-em-led-modelo-cortina-decoracao-de-natal-flocos-de-neve",
    "name": "Luzes em LED Modelo Cortina Decoração de Natal Flocos de Neve",
    "shortName": "Luzes em LED Modelo Cortina Decoração de Natal Flocos de Neve",
    "description": "Luzes em LED Modelo Cortina Decoração de Natal Flocos de Neve Dê ao seu Natal um toque mágico com a luz LED Flocos de Neve. Esta linda decoração é feita com lâmpadas LED de alta intensidade, e oferece beleza e cor à sua casa. Surpreenda familiares e amigos com este que é o item de decoração natalina mais desejado! ESPECIFICAÇÕES: Tipo de item: Miçangas Fonte de alimentação: CA",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-43%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S9ccbefcf77b3495ab7b3076eee416da7r.webp?v=1789486868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S851c765192ba432db4ace80bc3b1bf0ep.jpg?v=1789486868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S16855e5d48b248f0866f9b02fdc6b088G.jpg?v=1789486868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sfc20a27954bb4b61befa663eb03b9097U.jpg?v=1789486868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S269220657ff74831b5de2b0cff6583edL.jpg?v=1789486868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S2fc020fb8f604934841758763769c263S.jpg?v=1789486868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Se5f5db085a3547e689262e6a25294967B.jpg?v=1789486868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sb14a79c9aa114783b220ea477f47e8717.jpg?v=1789486868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S129ab9399b1845f4bd3652fa6c27bea2a.jpg?v=1789486868"
    ],
    "variants": [
      {
        "id": "mdn-8536985698490-46654141530298",
        "title": "Amarela",
        "price": 16390,
        "compareAt": 28990,
        "available": true,
        "sku": "136:173#Warm White;200009209:201447604;200007763:201336100"
      },
      {
        "id": "mdn-8536985698490-46654141563066",
        "title": "Branca",
        "price": 16390,
        "compareAt": 28990,
        "available": true,
        "sku": "136:200002572#White;200009209:201447604;200007763:201336100"
      },
      {
        "id": "mdn-8536985698490-46654141595834",
        "title": "Colorida",
        "price": 16390,
        "compareAt": 28990,
        "available": true,
        "sku": "136:175#Multicolor;200009209:201447604;200007763:201336100"
      },
      {
        "id": "mdn-8536985698490-46654141628602",
        "title": "Azul",
        "price": 16390,
        "compareAt": 28990,
        "available": true,
        "sku": "136:200002573#Blue;200009209:201447604;200007763:201336100"
      }
    ]
  },
  {
    "handle": "escada-luz-em-led-colorido-decoracao-de-natal-com-papai-noel-pendurado-3m",
    "name": "Escada Luz em LED Colorido Decoração de Natal com Papai Noel Pendurado 3M",
    "shortName": "Escada Luz em LED Colorido Decoração de Natal com Papai Noel Pendurado 3M",
    "description": "Escada Luz em LED Colorido Decoração de Natal com Papai Noel Pendurado 3M Colha os frutos da decoração de natal. Com a Escada Luz em LED Colorido Decoração de Natal com Papai Noel Pendurado 3M, você pode destacar sua decoração natalina com cores vibrantes e iluminação em LED. Crie uma atmosfera vibrante e inspiradora, com Papai Noel pendurado para alegrar a todos! ESPECIFICAÇÕES: Tensão: 5V Estilo: Novidade, Lâmpada decorativa, Luz atmosférica Característica: Com controle remoto Tipo de plugue: Plug USB",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-34%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Ab6132fc238ae4a0f965aefb5524b8f29Z.jpg?v=1789486867",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Af2aa44f2ffc84065b0014e4ca2fd4155m.jpg?v=1789486867",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Af64a1c97885c4671895b06058e55d585C.jpg?v=1789486867",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Ae9703243f3e94b9e9a434d7a91f4a4fdb.jpg?v=1789486867",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A2da36acc7efd4597b4888baada553f23w.jpg?v=1789486867",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Aad247dc4d32549859bf0c2105ab5acafa.jpg?v=1789486867",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Aa4df0dbf6d444fb1982e8e97f11097d45.jpg?v=1789486867"
    ],
    "variants": [
      {
        "id": "mdn-8536985665722-46654141497530",
        "title": "Único",
        "price": 14990,
        "compareAt": 22550,
        "available": true,
        "sku": "14:366#300cm 228leds;136:173#Four colors;249:200006305#USB version"
      }
    ]
  },
  {
    "handle": "luzes-varal-20-led-3m",
    "name": "Luzes Varal 20 LED 3M",
    "shortName": "Luzes Varal 20 LED 3M",
    "description": "Decoração de Natal Luzes Varal 20 LED 3M Enfeite sua casa neste Natal com nossas lindas luzes de varal de 3 metros e 20 LEDs! Decore com elegância e crie momentos inesquecíveis com sua família. Um verdadeiro presente para você e para o Natal! ESPECIFICAÇÕES: Tipo: Varal Tamanho: 3M",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-60%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A117ccdc449144a949f61850ee6ef68917.webp?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Ae92b464afb5e463e87c6518067f3b32cw.jpg?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A14cdd126d46d444aa60b5a80d6eaa64ec.jpg?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Ac0be660a92ff4749b14089fea7770c9dJ.jpg?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A3f73346e07b742cbabcee641105236afY.jpg?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A7db53332c4c04d25bd592bfdebcc44b3e.webp?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A5e712f06294b4b03ab01f4a19eaae5a4w.jpg?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A9738353668f94164bf65324fb28ccc12k.jpg?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Ad8b6362709334776b876a980e96be96ay.webp?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A6256e47d237e4ea7ab90e84a060522797.jpg?v=1789486866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/A177103f73d2d43d8a5d53aea9c958637C.jpg?v=1789486866"
    ],
    "variants": [
      {
        "id": "mdn-8536985632954-46654141399226",
        "title": "Arvore de Natal + Rena",
        "price": 7990,
        "compareAt": 19990,
        "available": true,
        "sku": "14:202422806#light style 1"
      },
      {
        "id": "mdn-8536985632954-46654141431994",
        "title": "Árvore de Natal + Floco de Neve",
        "price": 7990,
        "compareAt": 19990,
        "available": true,
        "sku": "14:200006151#light style 5"
      },
      {
        "id": "mdn-8536985632954-46654141464762",
        "title": "Estrela + Floco de Neve",
        "price": 7990,
        "compareAt": 19990,
        "available": true,
        "sku": "14:200004889#light style 11"
      }
    ]
  },
  {
    "handle": "cortina-de-luzes-decoracao-natal-em-led",
    "name": "Cortina de Luzes Decoração Natal em LED",
    "shortName": "Cortina de Luzes Decoração Natal em LED",
    "description": "Cortina de Luzes Decoração Natal em LED, a decoração perfeita para tornar este Natal ainda mais alegre. Envolva sua casa com luzes de LED e crie momentos incríveis em família. ESPECIFICAÇÕES: Ocasião: Sala de Estar Fonte de luz: lâmpadas LED Distância de iluminação: 1-5m Fonte de alimentação: CA Tensão: 5V",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-38%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S8840d724e66f4f89a63ae8bfe0b175b2o.webp?v=1789486864",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S88805114f1e945c9b3e8c9177b47b0c5J.webp?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S4f95d196f4fd4740a929e9ae68ca9a557.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S1c0a5ddbe991420bbf7c549c8e12bc2dz.jpg?v=1789486864",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S1682c3a10321469f9ce9cf011f0fb646W.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sa146b86c9fa644e5b611e5acf51fac11K.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S0fa5a6174aeb43c5824f1e71b39fbe6dY.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S8747f63cd7f943288cc1791bcd369b5e4.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S930fe8d2a12c445c857fdcc91740855eL.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sdfb2a131c1294d678c0a7048aebf847bU.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S8086d7f68c20435f99ea590048e73dfag.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sd88a908aec7c479da8fd614af67fa2ff7.jpg?v=1789486865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sdd54dc1f62bb43f092cc487ec1019308k.jpg?v=1789486865"
    ],
    "variants": [
      {
        "id": "mdn-8536985600186-46654141268154",
        "title": "Árvore de Natal",
        "price": 11990,
        "compareAt": 19300,
        "available": true,
        "sku": "136:173#Christmas tree;200009209:201447604"
      },
      {
        "id": "mdn-8536985600186-46654141300922",
        "title": "Coração",
        "price": 11990,
        "compareAt": 19300,
        "available": true,
        "sku": "136:200002572#heart;200009209:201447604"
      },
      {
        "id": "mdn-8536985600186-46654141333690",
        "title": "Estrela",
        "price": 11990,
        "compareAt": 19300,
        "available": true,
        "sku": "136:175#star;200009209:201447604"
      },
      {
        "id": "mdn-8536985600186-46654141366458",
        "title": "Circulo",
        "price": 11990,
        "compareAt": 19300,
        "available": true,
        "sku": "136:200002573#circle;200009209:201447604"
      }
    ]
  },
  {
    "handle": "cortina-em-led-globos-decoracao-de-natal",
    "name": "Cortina de Luzes em LED Globos Decoração de Natal",
    "shortName": "Cortina de Luzes em LED Globos Decoração de Natal",
    "description": "Cortina de Luzes em LED Globos Decoração de Natal Transforme o Natal em uma verdadeira festa! Nossa Cortina de Luzes em LED Globos Decoração de Natal é a decoração perfeita para quebrar a monotonia e criar um ambiente mágico e alegre. Estamos certos que você e seus convidados vão adorar! ESPECIFICAÇÕES: Ocasião: Sala de Estar Natalina Controle remoto: Não",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-42%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sbd40e99864b444a9a30c8954e2864ae65.webp?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S7fe0b0ed03844af28ccf04726449efb2F.jpg?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S6402ffd4c07b4f21872f32e18561bbfbH.jpg?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S3b247a5a193c4c558af553051eb2b0c4I.webp?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sf3589c29945c44c584df915f0c24c1a43.jpg?v=1789486864",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Saa83cba2578341c6ae3e1935d4865eaa4.jpg?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S461a8fe090e54545b8a6f78be4ad964cp.webp?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sa3e9e9d3bf5b4335b3df765b07e1dc48U.webp?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S177b3986021a4417b1ac9b017eb175a1K.webp?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S87ecb6a1a63a4fbd93c01d70f053566cT.webp?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S4764b191b30f4f89b8e8977d171d216bb.webp?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sd3acb4641dae408bbb0f15b4a6b17e38c.webp?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S7f7ff4e4f29741c480d7c54cf7de0500n.jpg?v=1789486864",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S3f7ee2fa82f24aac9a7a483d2a8da005X.jpg?v=1789486864",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/S97249ae6d3c54c60abc1315921fafda5U.jpg?v=1789486863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Sba05aaa031024737b76e632ff334cca0Z.jpg?v=1789486863"
    ],
    "variants": [
      {
        "id": "mdn-8536985567418-46654141071546",
        "title": "Papai Noel - Luz Amarela",
        "price": 12990,
        "compareAt": 22250,
        "available": true,
        "sku": "136:173#Santa Claus-Warm;200009209:201447604"
      },
      {
        "id": "mdn-8536985567418-46654141104314",
        "title": "Papai Noel - Luz Colorida",
        "price": 12990,
        "compareAt": 22250,
        "available": true,
        "sku": "136:200002572#Santa Claus-Color;200009209:201447604"
      },
      {
        "id": "mdn-8536985567418-46654141137082",
        "title": "Árvore de Natal - Luz Amarela",
        "price": 12990,
        "compareAt": 22250,
        "available": true,
        "sku": "136:175#Tree-Warm;200009209:201447604"
      },
      {
        "id": "mdn-8536985567418-46654141169850",
        "title": "Árvore de Natal - Luz Colorida",
        "price": 12990,
        "compareAt": 22250,
        "available": true,
        "sku": "136:200002573#Tree-Color;200009209:201447604"
      },
      {
        "id": "mdn-8536985567418-46654141202618",
        "title": "Boneco de Neve - Luz Amarela",
        "price": 12990,
        "compareAt": 22250,
        "available": true,
        "sku": "136:10#Snowman-Warm;200009209:201447604"
      },
      {
        "id": "mdn-8536985567418-46654141235386",
        "title": "Boneco de Neve - Luz Colorida",
        "price": 12990,
        "compareAt": 22250,
        "available": true,
        "sku": "136:29#Snowman-Color;200009209:201447604"
      }
    ]
  },
  {
    "handle": "sinos-de-natal-animados-em-led",
    "name": "Sinos de Natal animados em LED",
    "shortName": "Sinos de Natal animados em LED",
    "description": "Descrição do produto Decoração luminosa com dois sinos e laços, desenhados por tubos de LED sobre uma estrutura metálica. A sequência de luzes cria um efeito visual de sinos tocando. Características Dimensões: 55 cm de altura × 55 cm de largura LEDs em branco quente e vermelho 7 modos de piscar e iluminação estática Cabo de alimentação de 5 m Alimentação elétrica Estrutura para pendurar Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_LED_Christmas_Bell_Lights__Christmas_Decorations__Christow_b846ecca7eb8efdf35abdab72d055512.webp?v=1789486549",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_LED_Christmas_Bell_Lights__Christmas_Decorations__Christow_5b0c92a6732c431d7cda688259ca406b.webp?v=1789486549",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_LED_Christmas_Bell_Lights__Christmas_Decorations__Christow_a92503f46fa0ac79afe52e33cf71c8f2.webp?v=1789486549",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_LED_Christmas_Bell_Lights__Christmas_Decorations__Christow_f0c522b6dd2f0dc2ece51ef8f5f233ec.webp?v=1789486549"
    ],
    "variants": [
      {
        "id": "mdn-8536980914362-46654099161274",
        "title": "Único",
        "price": 12990,
        "available": true
      }
    ]
  },
  {
    "handle": "quebra-nozes-animado-com-led",
    "name": "Quebra-Nozes animado emLED",
    "shortName": "Quebra-Nozes animado emLED",
    "description": "Descrição do produto Quebra-nozes decorativo desenhado com tubos de LED multicoloridos sobre uma armação metálica. Os modos de iluminação permitem variar o efeito luminoso na decoração de paredes e painéis natalinos. Características Dimensões: 160 cm de altura × 92 cm de largura 252 LEDs multicoloridos 7 modos de piscar e iluminação estática Cabo de alimentação de 5 m Alimentação elétrica Estrutura metálica para pendurar Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_Nutcracker_Rope_Light__Christmas_Decorations__Christow_bae885617722299c3b8c207f85c7a51f.webp?v=1789486548",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/613620_saluting_nutcracker_2022_gif_2000x2000_10880183-2048-4190-b70d-f5da9802b62a.webp?v=1789486547",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_Nutcracker_Rope_Light__Christmas_Decorations__Christow_6c061a1f2ec3257465348acd9f6a2edd.webp?v=1789486547",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_Nutcracker_Rope_Light__Christmas_Decorations__Christow_f617a485a14454f4cded24b72f03fc29.webp?v=1789486548"
    ],
    "variants": [
      {
        "id": "mdn-8536980848826-46654098866362",
        "title": "Único",
        "price": 19890,
        "available": true
      }
    ]
  },
  {
    "handle": "natal-feliz-papai-noel-em-led",
    "name": "Natal Feliz Papai Noel em LED",
    "shortName": "Natal Feliz Papai Noel em LED",
    "description": "Descrição do produto Painel luminoso com Papai Noel acenando, desenhado por tubos de LED em várias cores. Uma peça para compor a decoração natalina em paredes, entradas e painéis. Características Dimensões: 150 cm de altura × 92 cm de largura 411 LEDs multicoloridos Modos de piscar com pontos de luz intermitentes Cabo de alimentação de 5 m Alimentação elétrica Estrutura metálica para pendurar Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Happy_Santa_Christmas_Rope_Light__Christmas_Decorations__Christow_95eca809df6b20f37981e886ad417d7e.webp?v=1789486546",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Happy_Santa_Christmas_Rope_Light__Christmas_Decorations__Christow_6afa2a34d2fe49d392eeb4c77299e1b2.webp?v=1789486547",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Happy_Santa_Christmas_Rope_Light__Christmas_Decorations__Christow_cb16e32a48646b0bb99a967af9108f97.webp?v=1789486546",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Happy_Santa_Christmas_Rope_Light__Christmas_Decorations__Christow_eee3332f01fcb8000c78d3827d624c62.webp?v=1789486547"
    ],
    "variants": [
      {
        "id": "mdn-8536980783290-46654098571450",
        "title": "Único",
        "price": 15990,
        "available": true
      }
    ]
  },
  {
    "handle": "luz-de-corda-com-efeito-de-estrela-cadente-com-led",
    "name": "Luz de corda com efeito de estrela cadente emLED",
    "shortName": "Luz de corda com efeito de estrela cadente emLED",
    "description": "Descrição do produto Decoração luminosa de parede com estrelas coloridas e sequência de luzes que cria o efeito de estrela cadente. A estrutura metálica pode compor painéis, paredes e entradas na decoração de Natal. Características Dimensões aproximadas: 220 cm de largura × 88 cm de altura 456 LEDs multicoloridos em tubo flexível Modos de iluminação com função memória Cabo de alimentação de 5 m Alimentação elétrica Estrutura metálica para pendurar Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Shooting_Star_Scene_Rope_Light__Christmas_Lights__Christow_5c824919457fea22dcadf782875f803b.webp?v=1789486546",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Shooting_Star_Scene_Rope_Light__Christmas_Lights__Christow_0c688f54499f04d6efa8415e408bba16.webp?v=1789486545",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Shooting_Star_Scene_Rope_Light__Christmas_Lights__Christow_f2a128f5fba464e61356b3da4b37586f.webp?v=1789486546",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Shooting_Star_Scene_Rope_Light__Christmas_Lights__Christow_01d88e2a1a813307fb6359cd2a77a56e.webp?v=1789486546"
    ],
    "variants": [
      {
        "id": "mdn-8536980717754-46654098342074",
        "title": "Único",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "luminaria-de-parede-papai-noel-e-estrela-com-led",
    "name": "Luminária de parede Papai Noel e Estrela com LED",
    "shortName": "Luminária de parede Papai Noel e Estrela com LED",
    "description": "Descrição do produto Luminária decorativa de parede com Papai Noel e estrelas em uma composição vertical. Os contornos coloridos em LED destacam o desenho na decoração de Natal. Características Dimensões: 140 cm de altura × 43 cm de largura 288 LEDs multicoloridos em tubo flexível Cabo de alimentação de 5 m Alimentação elétrica Estrutura metálica para pendurar Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Santa__Star_Wall_Light__Christmas_Decorations__Christow_500319ff2a14a22b3a68638bd3f23242.webp?v=1789486545",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Santa__Star_Wall_Light__Christmas_Decorations__Christow_fc581615fe9756eced15706aab937f84.webp?v=1789486544",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Santa__Star_Wall_Light__Christmas_Decorations__Christow_4e5adf6faa692d6d712ffd1cd057e099.webp?v=1789486544",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Santa__Star_Wall_Light__Christmas_Decorations__Christow_d616476700ca5ae3c57d4977f4f6799d.webp?v=1789486545"
    ],
    "variants": [
      {
        "id": "mdn-8536980684986-46654098309306",
        "title": "Único",
        "price": 25890,
        "available": true
      }
    ]
  },
  {
    "handle": "letreiro-de-natal-com-luzes-de-corda",
    "name": "Letreiro de Natal com luzes de corda em LED",
    "shortName": "Letreiro de Natal com luzes de corda em LED",
    "description": "Descrição do produto Letreiro natalino luminoso com a mensagem “Merry Christmas”, contornos coloridos e detalhes decorativos. A iluminação fixa destaca o desenho em paredes, janelas e painéis. Características Dimensões: 85 cm de largura × 40 cm de altura Iluminação em LED com modo estático Cabo de alimentação de 5 m Alimentação elétrica Estrutura metálica com tubo de LED flexível Mensagem em inglês: Merry Christmas Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Merry_Christmas_Rope_Light_Sign__Christmas_Decorations__Christow_dd92612bff03def2c52f26431c5764cd.webp?v=1789486544",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Merry_Christmas_Rope_Light_Sign__Christmas_Decorations__Christow_df21cb35c985ddbbbd73d3cb7aaf58e0.webp?v=1789486544",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Merry_Christmas_Rope_Light_Sign__Christmas_Decorations__Christow_2886c1c86baeb42e0226a49354ffb3e3.webp?v=1789486544",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Merry_Christmas_Rope_Light_Sign__Christmas_Decorations__Christow_04d07b0ed6e2a101f21d2e521895970a.webp?v=1789486544"
    ],
    "variants": [
      {
        "id": "mdn-8536980619450-46654098014394",
        "title": "Único",
        "price": 17990,
        "available": true
      }
    ]
  },
  {
    "handle": "boneco-de-neve-em-led",
    "name": "Boneco de Neve em LED",
    "shortName": "Boneco de Neve em LED",
    "description": "Descrição do produto Painel luminoso em formato de boneco de neve com presentes. A sequência dos LEDs cria um efeito visual de malabarismo, sem movimentação mecânica da estrutura. Características Dimensões: 98 cm de altura × 68 cm de largura 200 LEDs multicoloridos 7 modos de piscar e iluminação estática Cabo de alimentação de 5 m Alimentação elétrica Estrutura metálica para pendurar Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_Juggling_Snowman_Rope_Light__Christmas_Decorations__Christow_c4751cb8162e5fc1fdf61cbc67b259e6.webp?v=1789486543",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_Juggling_Snowman_Rope_Light__Christmas_Decorations__Christow_4599cf549daa5157258f4402ad8eb556.webp?v=1789486543",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_Juggling_Snowman_Rope_Light__Christmas_Decorations__Christow_2df5116e1c680162bc8e21fbc4e0b7ba.webp?v=1789486543",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Animated_Juggling_Snowman_Rope_Light__Christmas_Decorations__Christow_e04c304734e5e21d6e20d537fb457355.webp?v=1789486543"
    ],
    "variants": [
      {
        "id": "mdn-8536980553914-46654097719482",
        "title": "Único",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-vermelha-e-branca-nordica-com-led-70-cm",
    "name": "Guirlanda Vermelha e Branca Nórdica Com LED 70 cm",
    "shortName": "Guirlanda Vermelha e Branca Nórdica Com LED 70 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 70 cm em estilo nórdico, com detalhes vermelhos e brancos e iluminação LED integrada. A composição combina folhagem artificial e cores tradicionais do Natal; funciona com 2 pilhas D inclusas. Características Tamanho: 70 cm. Variedade / modelo: vermelha e branca, estilo nórdico. Tipo: guirlanda decorativa de Natal Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341011_Outdoor-Lit-Nordic-Splendor-Wreath_SSC.webp?v=1789486016",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341011_Outdoor-Lit-Nordic-Splendor-Wreath_Closeup-25.webp?v=1789486017",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341011_Outdoor-Lit-Nordic-Splendor-Wreath_Closeup-15.webp?v=1789486016",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341011_Outdoor-Lit-Nordic-Splendor-Foliage_Lifestyle-10.webp?v=1789486016"
    ],
    "variants": [
      {
        "id": "mdn-8536971051194-46654004003002",
        "title": "Único",
        "price": 15290,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-verde-natural-com-led-70-cm",
    "name": "Guirlanda Verde Natural Com LED 90 cm",
    "shortName": "Guirlanda Verde Natural Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm, modelo Verde Natural, com folhagem verde de aspecto natural e iluminação LED integrada. A composição de folhagens mantém um visual clássico para portas e paredes. Alimentação por 2 pilhas D inclusas. Características Tamanho: 90 cm. Variedade / modelo: Verde Natural, folhagem artificial verde. Tipo: guirlanda decorativa de Natal Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1741018_White-Berry-Cypress-Wreath_24in_SSC.webp?v=1789486015",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1741018_White-Berry-Cypress-Foliage_Lifestyle-40.webp?v=1789486015",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1741018_White-Berry-Cypress-Foliage_findingsilverpennies.com_Blog-10.webp?v=1789486015",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1741018_White-Berry-Cypress-Foliage_Lifestyle-55.webp?v=1789486015"
    ],
    "variants": [
      {
        "id": "mdn-8536970985658-46654003708090",
        "title": "Único",
        "price": 12990,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-poinsetia-mesclada-com-led-70-cm",
    "name": "Guirlanda Poinsétia Mesclada Com LED 90 cm",
    "shortName": "Guirlanda Poinsétia Mesclada Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com flores de poinsétia mescladas, folhagem verde e iluminação LED integrada. As flores são o destaque desta composição. Alimentação por 2 pilhas D inclusas. Características Variedade / modelo: flores de poinsétia mescladas com folhagem verde. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341026_Marbled-Outdoor-Lit-Poinsettia-Celebration-Wreath_SSC.webp?v=1789486014",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341026_Marbled-Outdoor-Lit-Poinsettia-Celebration-Wreath_Closeup-20.webp?v=1789486014",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341026_Marbled-Outdoor-Lit-Poinsettia-Celebration-Wreath_Closeup-15.webp?v=1789486014",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341026_Marbled-Outdoor-Lit-Poinsettia-Celebration-Wreath_Closeup-10.webp?v=1789486014"
    ],
    "variants": [
      {
        "id": "mdn-8536970920122-46654003413178",
        "title": "Único",
        "price": 16890,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-pinhas-e-bagas-de-natal-com-led-70-cm",
    "name": "Guirlanda Pinhas e Bagas de Natal Com LED 90 cm",
    "shortName": "Guirlanda Pinhas e Bagas de Natal Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina de 90 cm com folhagem de cipreste artificial, pinhas naturais e bagas vermelhas decorativas. A iluminação LED integrada destaca a composição verde e vermelha. Alimentação por 2 pilhas inclusas. Características Variedade / modelo: cipreste com pinhas e bagas vermelhas. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Alimentação: 2 pilhas (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2241021_Outdoor-Christmas-Charm-Wreath_28in_LEDC_Closeup-15_e3125220-b112-41aa-86ca-cb2f41934196.webp?v=1789486013",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2241021_Outdoor-Christmas-Charm-Wreath_28in_LEDC_Closeup-10_7e25a5be-b40b-4cff-a16e-dc7026e08e9f.webp?v=1789486014",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041015_Outdoor-Red-Berry-Pine-Foliage_Detail.webp?v=1789486014",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041015-6_Outdoor-Red-Berry-Pine-Foliage_Lifestyle-15.webp?v=1789486013"
    ],
    "variants": [
      {
        "id": "mdn-8536970887354-46654003380410",
        "title": "Único",
        "price": 15590,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-nevada-champagne-com-led-70-cm",
    "name": "Guirlanda Nevada Champagne Com LED 90 cm",
    "shortName": "Guirlanda Nevada Champagne Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagem de acabamento nevado, detalhes champagne, ornamentos resistentes e iluminação LED integrada. O efeito neve e os tons champagne definem o visual deste modelo. Alimentação por 2 pilhas D inclusas. Características Variedade / modelo: nevada com detalhes champagne. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1841012_Champagne-and-Crystal--Wreath_28in-LEDCL_SSC-10.webp?v=1789486012",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1841012_Champagne-and-Crystal-Wreath_LEDCL_Closeup-25.webp?v=1789486013",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1841012_Champagne-and-Crystal-Foliage_Detail.webp?v=1789486012",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1841012_Champagne-and-Crystal-Foliage_Lifestyle-15.webp?v=1789486012"
    ],
    "variants": [
      {
        "id": "mdn-8536970821818-46654003151034",
        "title": "Único",
        "price": 18190,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-natal-flores-vermelhas-com-led-70-cm",
    "name": "Guirlanda Natal Flores Vermelhas Com LED 90 cm",
    "shortName": "Guirlanda Natal Flores Vermelhas Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com flores vermelhas em destaque sobre folhagem verde e iluminação LED integrada. A composição floral tem acabamento detalhado e pode decorar portas e paredes. Funciona com 2 pilhas D inclusas. Características Variedade / modelo: flores vermelhas com folhagem verde. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2241023_Outdoor-Pointsettia-Celebration-Wreath_26in_LEDC_SSC.webp?v=1789486011",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2241023_Outdoor-Pointsettia-Celebration-Wreath_26in_LEDC_Closeup-10.webp?v=1789486011",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2241023_Outdoor-Pointsettia-Celebration-Wreath_26in_LEDC_Closeup-15.webp?v=1789486011",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2241023_Outdoor-Pointsettia-Celebration-Foliage_Battery-Compartment_SpFeat-10.webp?v=1789486011"
    ],
    "variants": [
      {
        "id": "mdn-8536970756282-46654002888890",
        "title": "Único",
        "price": 14290,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-macas-vermelhas-com-led-70-cm",
    "name": "Guirlanda Maçãs Vermelhas Com LED 90 cm",
    "shortName": "Guirlanda Maçãs Vermelhas Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com maçãs vermelhas decorativas, folhagem verde e iluminação LED integrada. As maçãs em destaque caracterizam a composição deste modelo. Alimentação por 2 pilhas D inclusas. Características Variedade / modelo: maçãs vermelhas com folhagem verde. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/NWW-DW_Norway-Spruce-Holiday-Wreath_18in-LEDCL_SSC.webp?v=1789486010",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/NWW-DW_Norway-Spruce-Holiday-Foliage_Detail.webp?v=1789486010"
    ],
    "variants": [
      {
        "id": "mdn-8536970723514-46654002856122",
        "title": "Único",
        "price": 16890,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-laco-vermelho-luxo-com-led-70-cm",
    "name": "Guirlanda Laço Vermelho Luxo Com LED 90 cm",
    "shortName": "Guirlanda Laço Vermelho Luxo Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com laço vermelho em destaque, folhagem verde, detalhes clássicos de Natal e iluminação LED integrada. O laço é o elemento central da composição. Funciona com 2 pilhas D inclusas. Características Variedade / modelo: laço vermelho com folhagem verde. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541010-1_28in-Royal-Heirloom-Wreath_SSC.webp?v=1789486009",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541010-1_28in-Royal-Heirloom-Wreath_Closeup-10.webp?v=1789486009",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541010-1_28in-Royal-Heirloom-Wreath_Closeup-15.webp?v=1789486009",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541010-1_Royal-Heirloom-Wreath_Lifestyle-10.webp?v=1789486009"
    ],
    "variants": [
      {
        "id": "mdn-8536970657978-46654002561210",
        "title": "Único",
        "price": 19490,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-glamour-vermelho-e-dourado-com-led-70-cm",
    "name": "Guirlanda Glamour Vermelho e Dourado Com LED 70 cm",
    "shortName": "Guirlanda Glamour Vermelho e Dourado Com LED 70 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 70 cm, modelo Glamour, com detalhes vermelhos e dourados distribuídos sobre folhagem verde e iluminação LED integrada. A combinação de cores define o acabamento decorativo. Alimentação por 2 pilhas D inclusas. Características Tamanho: 70 cm. Variedade / modelo: Glamour, vermelho e dourado sobre folhagem verde. Tipo: guirlanda decorativa de Natal Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041013-2_Gilded-Glory-Magnolia-Wreath_LEDCL_SSC.webp?v=1789486008",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041013-2_Gilded-Glory-Magnolia-Wreath_LEDCL_Closeup-20.webp?v=1789486008",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041013_Gilded-Glory-Magnolia-Foliage_Detail.webp?v=1789486008",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041013-2_Gilded-Glory-Magnolia-Wreath_LEDCL_Closeup-10.webp?v=1789486008"
    ],
    "variants": [
      {
        "id": "mdn-8536970592442-46654002266298",
        "title": "Único",
        "price": 18190,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-floresta-dourada-com-led-70-cm",
    "name": "Guirlanda Floresta Dourada Com LED 90 cm",
    "shortName": "Guirlanda Floresta Dourada Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm, modelo Floresta Dourada, com elementos dourados sobre folhagem verde e iluminação LED integrada. Indicada para composições natalinas em portas e paredes; funciona com 2 pilhas D inclusas. Características Variedade / modelo: Floresta Dourada, folhagem verde com detalhes dourados. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2141012_Gilded-Forest-Wreath_28in_SSC_1.webp?v=1789486007",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2141012_Gilded-Forest-Wreath_28in_Closeup-10.webp?v=1789486007",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2141012_Gilded-Forest-Foliage_Detail.webp?v=1789486007",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2141012_Gilded-Forest-Foliage_Lifestyle-10.webp?v=1789486007"
    ],
    "variants": [
      {
        "id": "mdn-8536970559674-46654002233530",
        "title": "Único",
        "price": 16890,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-flores-marfim-com-led-70-cm",
    "name": "Guirlanda Flores Marfim Com LED 90 cm",
    "shortName": "Guirlanda Flores Marfim Com LED 90 cm",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com flores em tom marfim, folhagem verde e iluminação LED integrada. O contraste entre as flores claras e a folhagem caracteriza esta composição floral. Alimentação por 2 pilhas D inclusas. Características Variedade / modelo: flores marfim com folhagem verde. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Alimentação: 2 pilhas D (inclusas) Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341025-5_Ivory-Outdoor-Lit-Poinsettia-Celebration-Wreath_SSC.webp?v=1789486006",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341025-5_Ivory-Outdoor-Lit-Poinsettia-Celebration-Wreath_Closeup-15.webp?v=1789486006",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2341025-5_Ivory-Outdoor-Lit-Poinsettia-Celebration-Wreath_Closeup-10.webp?v=1789486005"
    ],
    "variants": [
      {
        "id": "mdn-8536970494138-46654001414330",
        "title": "Único",
        "price": 13990,
        "available": true
      }
    ]
  },
  {
    "handle": "kit-com-30-mini-enfeites-de-natal-decorativos-coloridos-para-arvore",
    "name": "Kit com 30 Mini Enfeites de Natal Decorativos Coloridos para Árvore",
    "shortName": "Kit com 30 Mini Enfeites de Natal Decorativos Coloridos para Árvore",
    "description": "Descrição: Deixe sua decoração natalina mais alegre e encantadora com este kit de mini enfeites de Natal. O conjunto contém 30 unidades , com modelos variados inspirados em símbolos tradicionais da época, como Papai Noel, árvore de Natal, boneco de neve, urso, soldadinho, presentes, sino, meia e outros personagens. Os enfeites apresentam acabamento brilhante, detalhes coloridos e alça superior para pendurar. São indicados para decorar árvores de Natal, guirlandas, arranjos, mesas, vitrines, festas e pequenos espaços. Especificações Característica Informação Quantidade 30 enfeites Tamanho Mini; tamanhos variados Dimensões aproximadas Cerca de 3 a 6 cm por unidade Cores Multicolorido, com predominância de vermelho, verde e dourado Material Vidro com acabamento pintado e detalhes decorativos Modelos Sortidos Fixação Alça metálica para pendurar Tema Natal Uso indicado Decoração interna e árvore de Natal Conteúdo da embalagem 1 kit com 30 mini enfeites Observação: As dimensões são aproximadas e podem variar conforme o modelo. As cores podem apresentar pequenas diferenças devido à iluminação da fotografia e à configuração da tela. O produto é decorativo e deve ser manuseado com cuidado.",
    "category": "figuras-natalinas",
    "goals": [
      "exclusivos"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/ORN-2541070_Christmas-Nostalgia-Mini-Ornaments-Set-of-30_SSC.webp?v=1789065690"
    ],
    "variants": [
      {
        "id": "mdn-8530622906554-46617316163770",
        "title": "Único",
        "price": 8790,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-magnolias-vermelhas-e-folhagens-douradas",
    "name": "Guirlanda de Natal 90 cm com LED, Magnólias Vermelhas e Folhagens Douradas",
    "shortName": "Guirlanda de Natal 90 cm com LED, Magnólias Vermelhas e Folhagens Douradas",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com flores de magnólia em vermelho intenso, folhagens, detalhes dourados, frutas decorativas e iluminação LED. O modelo tem composição floral com presença marcante para portas e paredes. Acompanha pilhas e controle. Características Variedade / modelo: magnólias vermelhas, folhagens douradas e frutas decorativas. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "exclusivos",
      "com-iluminacao"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5_b6a14c51-c0eb-48a4-87a6-d5c454d058fd.webp?v=1788412977",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4_62806585-ab9b-4df8-a220-3210f82c3866.webp?v=1788412977",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3_aad5659b-fc83-4e9c-b7e2-58e70929139c.webp?v=1788412977",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2_9b87003c-5682-49d2-ba5e-9ec304d313ca.webp?v=1788412977",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/1_69e82056-4d17-43aa-9b95-a4031a40c876.webp?v=1788412977"
    ],
    "variants": [
      {
        "id": "mdn-8514588442810-46539024466106",
        "title": "Único",
        "price": 15290,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-pinhas-nevadas-e-folhagens-verdes",
    "name": "Guirlanda de Natal 90 cm com LED, Pinhas Nevadas e Folhagens Verdes",
    "shortName": "Guirlanda de Natal 90 cm com LED, Pinhas Nevadas e Folhagens Verdes",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens em tons de verde, pinhas decorativas de acabamento nevado, ramos claros e iluminação LED. O efeito neve nas pinhas diferencia esta composição inspirada no inverno. Acompanha pilhas e controle. Características Variedade / modelo: pinhas nevadas, ramos claros e folhagens verdes. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "exclusivos",
      "com-iluminacao"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/1.jpg?v=1788382744",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4.jpg?v=1788382744",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3.jpg?v=1788382744",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2.jpg?v=1788382744"
    ],
    "variants": [
      {
        "id": "mdn-8514195226810-46537521889466",
        "title": "Único",
        "price": 13990,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-folhagens-verdes-e-frutas-vermelhas-1",
    "name": "Guirlanda de Natal 90 cm com LED, Folhagens Verdes e Frutas Vermelhas",
    "shortName": "Guirlanda de Natal 90 cm com LED, Folhagens Verdes e Frutas Vermelhas",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens em tons de verde, pequenos ramos de frutas vermelhas e iluminação LED. Este modelo de composição clássica combina folhagem e detalhes frutados para portas, paredes e espaços temáticos. Acompanha pilhas e controle. Características Variedade / modelo: folhagens verdes com pequenos ramos de frutas vermelhas. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541050-1_Red-Berry-Mistletoe-Wreath-28-inch-Battery-Operated_SSC.webp?v=1788379547",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541050-1_Red-Berry-Mistletoe-Wreath-28-inch-Battery-Operated_Closeup-30.webp?v=1788379547",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541050-1_Red-Berry-Mistletoe-Wreath-28-inch-Battery-Operated_Closeup-20.webp?v=1788379547"
    ],
    "variants": [
      {
        "id": "mdn-8513146486970-46531569647802",
        "title": "Único",
        "price": 10390,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-folhagens-verdes-e-mini-frutas-claras",
    "name": "Guirlanda de Natal 90 cm com LED, Folhagens Verdes e Mini Frutas Claras",
    "shortName": "Guirlanda de Natal 90 cm com LED, Folhagens Verdes e Mini Frutas Claras",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens em diferentes tons de verde, pequenos detalhes ornamentais claros e iluminação LED. A composição tem acabamento volumoso e aparência delicada. Acompanha pilhas e controle. Características Variedade / modelo: folhagens verdes com mini detalhes ornamentais claros. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "exclusivos",
      "com-iluminacao"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/11.webp?v=1788379236",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/333.webp?v=1788379236",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/55.webp?v=1788379236",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/22.webp?v=1788379236",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/44.webp?v=1788379236"
    ],
    "variants": [
      {
        "id": "mdn-8513141964986-46531547070650",
        "title": "Único",
        "price": 11390,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-laco-azul-e-folhagens-verdes",
    "name": "Guirlanda de Natal 90 cm com LED, Laço Azul e Folhagens Verdes",
    "shortName": "Guirlanda de Natal 90 cm com LED, Laço Azul e Folhagens Verdes",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens em tons de verde, pequenas flores decorativas claras, laço azul intenso e iluminação LED. O laço azul é o destaque de cor desta composição. Acompanha pilhas e controle. Características Variedade / modelo: laço azul, pequenas flores claras e folhagens verdes. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "exclusivos",
      "com-iluminacao"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/1_36469417-f61e-47f5-a0b9-6cf1cdaad84e.webp?v=1788378650",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3_9393936d-492a-4ac5-86e0-a16b6f1a5d88.webp?v=1788378650",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4_b41c991d-6c35-4f13-98f4-4edf0c3a71ff.webp?v=1788378651",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2_a4d66fe9-a65f-4836-ad8d-f8bfa4d5d50f.webp?v=1788378650"
    ],
    "variants": [
      {
        "id": "mdn-8513139114170-46531528687802",
        "title": "Único",
        "price": 12690,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-bolas-decorativas-e-folhas-douradas",
    "name": "Guirlanda de Natal 90 cm com LED, Bolas Decorativas e Folhas Douradas",
    "shortName": "Guirlanda de Natal 90 cm com LED, Bolas Decorativas e Folhas Douradas",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens, bolas ornamentais de diferentes formatos, folhas douradas decorativas, frutas vermelhas e iluminação LED. A variedade de ornamentos caracteriza o acabamento deste modelo. Acompanha pilhas e controle. Características Variedade / modelo: bolas ornamentais, folhas douradas e frutas vermelhas. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/7_d7be16b2-00ec-4407-8644-08b955eeef68.webp?v=1788377280",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/8_fbf4ae77-5ac7-44c9-80c9-5c69e9422906.webp?v=1788377282",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/000.webp?v=1788377281",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/99.webp?v=1788377281"
    ],
    "variants": [
      {
        "id": "mdn-8513127448762-46531437723834",
        "title": "Único",
        "price": 15590,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-folhagens-verdes-e-frutas-vermelhas",
    "name": "Guirlanda de Natal 90 cm com LED, Folhagens Verdes e Frutas Vermelhas",
    "shortName": "Guirlanda de Natal 90 cm com LED, Folhagens Verdes e Frutas Vermelhas",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens em tons de verde, frutas decorativas vermelhas e verdes e iluminação LED. O contraste entre folhagem e frutas caracteriza este modelo. Acompanha pilhas e controle. Características Variedade / modelo: folhagens verdes com frutas vermelhas e verdes. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/9.webp?v=1788377025",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041005_Outdoor-Berry-Burst-Foliage_Lifestyle-20.webp?v=1788377025",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041005_Outdoor-Berry-Burst-Wreath_LEDCL_Closeup-10_1.webp?v=1788377025",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2041005_Outdoor-Berry-Burst-Foliage_Detail_1.webp?v=1788377025",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2_bf6ea411-1818-4950-afc0-40870646c53f.webp?v=1788377025"
    ],
    "variants": [
      {
        "id": "mdn-8513124335802-46531424583866",
        "title": "Único",
        "price": 12990,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-e-folhagens-verdes",
    "name": "Guirlanda de Natal 90 cm com LED e Folhagens Verdes",
    "shortName": "Guirlanda de Natal 90 cm com LED e Folhagens Verdes",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens em tons de verde e iluminação LED. O modelo de folhagem verde pode compor a decoração de portas e paredes; acompanha pilhas e controle. Características Variedade / modelo: folhagens verdes. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/5.webp?v=1788376748",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/7.webp?v=1788376748",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/8.webp?v=1788376748",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/6.webp?v=1788376748"
    ],
    "variants": [
      {
        "id": "mdn-8513118961850-46531416096954",
        "title": "Único",
        "price": 11390,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-laco-vermelho-bolas-douradas-e-frutas-vermelhas",
    "name": "Guirlanda de Natal 90 cm com LED, Laço Vermelho, Bolas Douradas e Frutas Vermelhas",
    "shortName": "Guirlanda de Natal 90 cm com LED, Laço Vermelho, Bolas Douradas e Frutas Vermelhas",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens, laço vermelho, bolas natalinas douradas, frutas vermelhas, pinhas e iluminação LED. O modelo reúne diferentes elementos decorativos em uma composição vermelha, verde e dourada. Acompanha pilhas e controle. Características Variedade / modelo: laço vermelho, bolas douradas, frutas vermelhas e pinhas. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "decoracao-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/1_dfc9ce56-0a08-4506-ab93-7dac92dddfe7.webp?v=1788374382",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/4.webp?v=1788374382",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3_bdc77111-b073-42e9-a41a-d1458280b680.webp?v=1788374382",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2_67e89ec1-129a-4d69-a62a-cacbdaa0e354.webp?v=1788374382"
    ],
    "variants": [
      {
        "id": "mdn-8513105002682-46531356950714",
        "title": "Único",
        "price": 12690,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-pinhas-e-folhagens-verdes",
    "name": "Guirlanda de Natal 90 cm com LED, Pinhas e Folhagens Verdes",
    "shortName": "Guirlanda de Natal 90 cm com LED, Pinhas e Folhagens Verdes",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens em diferentes tons de verde, pinhas decorativas e iluminação LED. Este modelo destaca a combinação de pinhas e folhagem para uma decoração natalina de aspecto natural. Acompanha pilhas e controle. Características Variedade / modelo: pinhas decorativas com folhagens verdes. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1441009_Mixed-Evergreen-with-Pinecones-Wreath_34in-LEDCL_SSC_1.webp?v=1788374096",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3_ec1c3594-5975-4dd3-826e-3ab0a5a01c84.webp?v=1788374096",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2_c6b969b1-7896-4abf-b13e-428e34c89f48.webp?v=1788374096",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/1_e3c66df1-f2b7-42f6-9b63-43d7f8eed6fe.webp?v=1788374096",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1441009_Mixed-Evergreen-with-Pinecones_Detail-20_1.webp?v=1788374096"
    ],
    "variants": [
      {
        "id": "mdn-8513096155322-46531318612154",
        "title": "Único",
        "price": 12690,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-natal-90-cm-com-led-laco-bordo-pinhas-e-frutas-vermelhas",
    "name": "Guirlanda de Natal 90 cm com LED, Laço Bordô, Pinhas e Frutas Vermelhas",
    "shortName": "Guirlanda de Natal 90 cm com LED, Laço Bordô, Pinhas e Frutas Vermelhas",
    "description": "Descrição do produto Guirlanda natalina artificial de 90 cm com folhagens, pinhas decorativas, frutas vermelhas, laço bordô e iluminação LED. O laço em tom bordô é o destaque de cor desta composição. Acompanha pilhas e controle. Características Variedade / modelo: laço bordô, pinhas e frutas vermelhas. Tipo: guirlanda decorativa de Natal Tamanho: 90 cm Folhagem artificial Iluminação: LED Itens inclusos: pilhas e controle Para decorar portas, paredes e ambientes natalinos. Em áreas externas, mantenha a peça em local coberto e protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541017-1_28in-Boxwood-and-Berries-Wreath_SSC_1.webp?v=1788373813",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541017-1_28in-Boxwood-and-Berries-Wreath_Closeup-15_1.webp?v=1788373813",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541017-1_28in-Boxwood-and-Berries-Wreath_Closeup-10_1.webp?v=1788373813",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541017-1_28in-Boxwood-and-Berries-Wreath_Closeup-20.webp?v=1788373813",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-2541017-1_28in-Boxwood-and-Berries-Wreath_Closeup-05_1.webp?v=1788373813"
    ],
    "variants": [
      {
        "id": "mdn-8513094811834-46531306684602",
        "title": "Único",
        "price": 12690,
        "available": true
      }
    ]
  },
  {
    "handle": "festao-com-frutinhas-vermelhas-e-luzes-led-60-cm-x-2-m",
    "name": "Festão com Frutinhas Vermelhas e Luzes LED – 60 cm x 2 m",
    "shortName": "Festão com Frutinhas Vermelhas e Luzes LED – 60 cm x 2 m",
    "description": "Descrição do Produto O Festão Boxwood & Berries combina folhagem artificial em tons de verde com frutos vermelhos decorativos e iluminação LED branca. Seu visual natalino é ideal para complementar a decoração de portas, lareiras, escadas, corrimãos, varandas e outros ambientes. O festão possui iluminação LED integrada e temporizador, que mantém as luzes acesas por 6 horas e desligadas por 18 horas. A folhagem é adequada para uso externo. Características Festão decorativo de Natal Folhagem artificial em tons de verde Frutos vermelhos decorativos Iluminação LED branca Temporizador integrado: 6 horas ligado e 18 horas desligado Adequado para uso externo Tamanho: 60 cm x 2 m Pilhas inclusas Conteúdo da embalagem 1 Festão Boxwood & Berries com iluminação LED Tamanho: 60 cm x 2 m",
    "category": "iluminacao",
    "goals": [
      "exclusivos",
      "com-iluminacao"
    ],
    "badge": "Exclusivo",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/1.webp?v=1788365116",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3.webp?v=1788365116",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/2.webp?v=1788365116"
    ],
    "variants": [
      {
        "id": "mdn-8513008140474-46531064070330",
        "title": "Único",
        "price": 6790,
        "available": true
      }
    ]
  },
  {
    "handle": "festao-evergreen-com-pinhas-e-luzes-led",
    "name": "Festão Evergreen com Pinhas e Luzes LED",
    "shortName": "Festão Evergreen com Pinhas e Luzes LED",
    "description": "Folhagem Artificial Evergreen com Pinhas e Luzes LED Decore sua casa para o Natal com uma folhagem artificial de aparência natural, composta por ramos de pinheiro e pontas inspiradas no Fraser Fir, complementados por pinhas naturais e iluminação LED branca. O design combina com diferentes estilos de decoração e pode ser utilizado em ambientes internos ou externos. A folhagem é pré-iluminada com luzes LED e possui temporizador integrado, que mantém as luzes acesas por 6 horas e desligadas por 18 horas, facilitando o uso no dia a dia. Características Folhagem artificial decorativa para Natal Ramos de pinheiro e Fraser Fir Detalhes com pinhas naturais Iluminação LED branca Temporizador integrado: 6 horas ligado e 18 horas desligado Indicada para uso externo Disponível em diferentes tamanhos e configurações Opções de guirlanda e coroa, conforme a variação selecionada Alimentação As versões possuem alimentação por pilhas, que não estão incluídas. A quantidade e o tipo de pilha variam de acordo com o tamanho e a configuração escolhidos. Conteúdo 1 unidade de folhagem decorativa na configuração selecionada.",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-W-1_BH-Fraser-Fir-Connectable-Garland-10-feet-LED-Clear_SSC.webp?v=1788363637",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1441009_Mixed-Evergreen-with-Pinecones_Lifestyle-40.webp?v=1788363637",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1441009_Mixed-Evergreen-with-Pinecones_Lifestyle-10.webp?v=1788363652"
    ],
    "variants": [
      {
        "id": "mdn-8513004011706-46531035824314",
        "title": "Único",
        "price": 6790,
        "available": true
      }
    ]
  },
  {
    "handle": "festao-pinheiro-natural-com-pinhas-e-frutas-vermelhas-60-cm-x-2-m",
    "name": "Festão Pinheiro Natural com Pinhas e Frutas Vermelhas 60 cm x 2 m",
    "shortName": "Festão Pinheiro Natural com Pinhas e Frutas Vermelhas 60 cm x 2 m",
    "description": "Produzido com folhagens artificiais de alta qualidade, ele possui visual volumoso e natural, enriquecido com pinhas, frutas vermelhas decorativas e luzes LED de tom branco quente, proporcionando um ambiente acolhedor e sofisticado. Ideal para decorar lareiras, portas, corrimãos, janelas e ambientes internos, criando um clima natalino encantador. Características: Dimensões: 60 cm de largura x 2 m de comprimento Folhagens artificiais com aparência natural Decorado com pinhas e frutas vermelhas Iluminação com luzes LED branco quente Reutilizável e de fácil instalação Ideal para decoração de Natal em ambientes internos e áreas cobertas",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1741016_Outdoor-Winter-Evergreen-Garland_10ft_SSC.webp?v=1784836968",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1741016_Winter-Evergreen-Garland_6.5ft-LEDCL_Lifestyle.webp?v=1784836968",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1741016_Outdoor-Winter-Evergreen-Foliage_8in-vs-12in_SpFeat-20.webp?v=1784836968",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WRG-1741016_Outdoor-Winter-Evergreen-Foliage_Battery-Compartment_SpFeat-10.webp?v=1784836968"
    ],
    "variants": [
      {
        "id": "mdn-8461245448378-46191792423098",
        "title": "Único",
        "price": 6790,
        "available": true
      }
    ]
  },
  {
    "handle": "mini-arvore-nevada-flocada-30-cm-com-luzes-led",
    "name": "Mini Árvore Nevada Flocada 30 cm com Luzes LED",
    "shortName": "Mini Árvore Nevada Flocada 30 cm com Luzes LED",
    "description": "A Mini Árvore Nevada 30 cm é ideal para complementar a decoração de Natal em mesas, aparadores, escritórios, recepções e outros ambientes internos. Com acabamento flocado que simula neve sobre os galhos, proporciona um visual elegante e aconchegante. Possui iluminação LED de luz quente integrada e base revestida em tecido rústico, pronta para decorar diferentes espaços com praticidade. Seu tamanho compacto permite fácil posicionamento, sendo uma excelente opção para compor a decoração natalina em ambientes residenciais e comerciais. Características: Altura: 30 cm Mini árvore de Natal artificial Acabamento flocado com efeito de neve Cor: Verde com detalhes nevados Iluminação LED de luz quente integrada Base revestida em tecido rústico Indicada para uso em ambientes internos Material resistente e reutilizável",
    "category": "arvores-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/BFR-QT_Frosted-BH-Balsam-Fir-Tabletop-_30in-LEDCF_SSC.webp?v=1784662759",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/BFR-QT_Frosted-BH-Balsam-Fir-Tabletop_Closeup-10.webp?v=1784662759",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/BFR-QT_Frosted-BH-Balsam-Fir-Tabletop-Tree_Stand_SpFeat-10.webp?v=1784662759",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/BFR-QT_Frosted-BH-Balsam-Fir-Tabletop-Tree_Battery-Compartment_SpFeat-20.webp?v=1784662759"
    ],
    "variants": [
      {
        "id": "mdn-8458536943802-46182983368890",
        "title": "30 cm",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "mini-arvore-greenwich-estates®-pinheiros-com-luzes-led-quentes",
    "name": "Mini Árvore  Pinheiros com Luzes LED Quentes",
    "shortName": "Mini Árvore  Pinheiros com Luzes LED Quentes",
    "description": "É ideal para decorar mesas, aparadores, escritórios, recepções e outros ambientes internos durante o Natal. Produzida com folhagem de aparência natural, conta com pinhas decorativas e iluminação LED de luz quente integrada, proporcionando um visual elegante e acolhedor. Seu tamanho compacto permite fácil instalação em diferentes espaços, sendo uma excelente opção para complementar a decoração natalina com praticidade e durabilidade. Características: Altura: 60 cm Mini árvore de Natal artificial Linha: Pinheiros Cor: Verde Pinhas decorativas naturais Iluminação LED de luz quente integrada Fácil de montar e posicionar Indicada para uso em ambientes internos Material resistente e reutilizável",
    "category": "arvores-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/GEP-T_Greenwich-Estates-Pine-Tree_3ft_LEDC_SSC.webp?v=1784662351",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/GEP-T_Greenwich-Estates-Pine-Tree_Lifestyle-30.webp?v=1784662351",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/GEP-T_Greenwich-Estates-Pine-Tree_Stake_SpFeat-10.webp?v=1784662351",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/GEP-T_Greenwich-Estates-Pine-Tree_Lifestyle-10.webp?v=1784662351"
    ],
    "variants": [
      {
        "id": "mdn-8458536517818-46182982156474",
        "title": "60 cm",
        "price": 16990,
        "available": true
      }
    ]
  },
  {
    "handle": "mini-arvore-de-natal-artificial-90-cm-com-vaso-e-luzes-led-quentes",
    "name": "Mini Árvore de Natal Artificial 90 cm com Vaso e Luzes LED Quentes",
    "shortName": "Mini Árvore de Natal Artificial 90 cm com Vaso e Luzes LED Quentes",
    "description": "Mini Árvore de Natal artificial de 90 cm , ideal para decorar salas, escritórios, recepções, lojas e outros ambientes internos. Produzida com folhagem de alta qualidade, proporciona um visual natural e elegante. Acompanha vaso decorativo e iluminação LED de luz quente integrada, criando um ambiente acolhedor para a decoração de Natal. Com design compacto e acabamento detalhado, é uma excelente opção para quem busca praticidade, durabilidade e uma decoração natalina sofisticada. Características: Altura: 90 cm Mini árvore de Natal artificial Cor: Verde Iluminação LED de luz quente integrada Base em vaso decorativo Folhagem de aparência natural Fácil de montar e posicionar Indicada para uso em ambientes internos Material resistente e reutilizável",
    "category": "arvores-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WPS-T_Windsor-Potted-Spruce_LEDCA_SSC-10.webp?v=1784662038",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WPS-T_Windsor-Potted-Spruce_LEDCA_Closeup-10.webp?v=1784662038",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WPS-T_Windsor-Potted-Spruce_Detail.webp?v=1784662038",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/WPS-T_Windsor-Potted-Spruce_Stand_SpFeat-10.webp?v=1784662038"
    ],
    "variants": [
      {
        "id": "mdn-8458533667002-46182967771322",
        "title": "90 cm",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "100-micro-luzes-de-fada-com-led-branco-quente",
    "name": "100 micro luzes de fada LED brancas quentes",
    "shortName": "100 micro luzes de fada LED brancas quentes",
    "description": "Ilumine sua cozinha ou espaço residencial com estilo contemporâneo usando esta série de 100 micro LEDs brancos quentes. Com mais de 5 metros de fio prateado fino e quase invisível, você pode estilizá-los com tecidos e folhagem para um toque pessoal. Detalhes do produto: 100 micro LEDs brancos quentes 5 metros de luzes, incluindo 3 metros de chumbo Plugue interno (incluído) O fio maleável destas luzes permite que você as molde da maneira que preferir, mantendo a forma escolhida. Além disso, o plugue está incluso, tornando-as prontas para uso imediato. Não há tomada próxima? Utilize o cabo de 3 metros fornecido para conectá-las.",
    "category": "iluminacao",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-25%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/C100-YW_100-Micro-wire-firefly-LED-fairy-lights-warm-white-shelf-close_P1.jpg?v=1784659905",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/C100-YW_100-Micro-wire-firefly-LED-fairy-lights-warm-white-shelf-decoration_P2.jpg?v=1784659904",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/C100-YW_100-Micro-wire-firefly-fairy-lights-warm-white-silver_P3.jpg?v=1784659905",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/C100-YW_100-Brass-Micro-Fairy-Lights-Plug-In-Mains-Living-Room_P4.jpg?v=1784659904",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/C100-YW_100-Micro-wire-firefly-fairy-lights-warm-white-Shelf_P5.jpg?v=1784659905"
    ],
    "variants": [
      {
        "id": "mdn-8458515906746-46182920585402",
        "title": "Único",
        "price": 1490,
        "compareAt": 1990,
        "available": true,
        "sku": "C100-YW"
      }
    ]
  },
  {
    "handle": "figura-de-natal-robin-ao-ar-livre",
    "name": "Figura de Natal Robin ao ar livre",
    "shortName": "Figura de Natal Robin ao ar livre",
    "description": "Descrição do produto Figura decorativa de pássaro Robin em acrílico, iluminada por LEDs brancos. O formato compacto permite compor mesas, aparadores e pequenos cenários natalinos. Características Dimensões: 14 cm de altura × 21 cm de largura × 11 cm de comprimento 20 LEDs brancos Alimentação: 3 pilhas AA Cabo de 50 cm até o compartimento de pilhas Temporizador de 6 horas Uso e cuidados Use em ambientes internos ou externos cobertos. Proteja a peça, o compartimento de pilhas e as conexões da chuva e da umidade. Instale em local estável e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/L4F2304.jpg?v=1784659888"
    ],
    "variants": [
      {
        "id": "mdn-8458515022010-46182919110842",
        "title": "Único",
        "price": 3999,
        "compareAt": 4999,
        "available": true,
        "sku": "L4F2304"
      }
    ]
  },
  {
    "handle": "figura-de-natal-ao-ar-livre-de-passaro-acrilico",
    "name": "Figura de Natal ao ar livre de pássaro acrílico",
    "shortName": "Figura de Natal ao ar livre de pássaro acrílico",
    "description": "Descrição do produto Pássaro decorativo em acrílico com corpo claro e base em formato de galho. A iluminação branca destaca a figura em composições natalinas sobre mesas e aparadores. Características Dimensões: 28,5 cm de altura × 11,5 cm de largura × 19 cm de comprimento 20 LEDs brancos Alimentação: 3 pilhas AA Temporizador de 6 horas Material: acrílico Uso e cuidados Use em ambientes internos ou externos cobertos. Proteja a peça, o compartimento de pilhas e as conexões da chuva e da umidade. Instale em local estável e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-11%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/LL21070_Acrylic-Bird-Branch-Illuminated-Snow-Christmas-Setting.jpg?v=1784659887"
    ],
    "variants": [
      {
        "id": "mdn-8458514989242-46182919078074",
        "title": "Único",
        "price": 3999,
        "compareAt": 4499,
        "available": true,
        "sku": "LL21070"
      }
    ]
  },
  {
    "handle": "figura-de-natal-ao-ar-livre-de-coelhinho-acrilico",
    "name": "Figura de Natal ao ar livre de coelhinho acrílico",
    "shortName": "Figura de Natal ao ar livre de coelhinho acrílico",
    "description": "Descrição do produto Coelhinho decorativo em acrílico marrom claro, na posição sentada. A iluminação interna realça a figura para compor cenários de Natal e decorações sobre superfícies estáveis. Características Dimensões: 27 cm de altura × 14,5 cm de largura × 19 cm de comprimento Iluminação em LED Alimentação: 3 pilhas AA Temporizador de 6 horas Material: acrílico Uso e cuidados Use em ambientes internos ou externos cobertos. Proteja a peça, o compartimento de pilhas e as conexões da chuva e da umidade. Instale em local estável e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-11%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/LL21071_Acrylic-Sitting-Bunny-Figure-Illuminated-Snow-Setting-Christmas.jpg?v=1784659885"
    ],
    "variants": [
      {
        "id": "mdn-8458514923706-46182919012538",
        "title": "Único",
        "price": 3999,
        "compareAt": 4499,
        "available": true,
        "sku": "LL21071"
      }
    ]
  },
  {
    "handle": "rena-acrilica-fawn-iluminada",
    "name": "Rena acrílica Fawn iluminada",
    "shortName": "Rena acrílica Fawn iluminada",
    "description": "Descrição do produto Figura decorativa em acrílico no formato de filhote de rena, com gorro natalino e laço vermelho. Os LEDs brancos iluminam o corpo da peça para compor mesas, aparadores e cenários de Natal. Características Dimensões: 24,5 cm de altura × 14 cm de largura × 28,5 cm de comprimento 30 LEDs brancos Alimentação: 3 pilhas AA Temporizador de 6 horas Material: acrílico Uso e cuidados Use em ambientes internos ou externos cobertos. Proteja a peça, o compartimento de pilhas e as conexões da chuva e da umidade. Instale em local estável e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-14%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/LL21121_Acrylic-Standing-Fawn-Festive-Figure-Illuminated-Snow-Setting-Christmas.jpg?v=1784659884"
    ],
    "variants": [
      {
        "id": "mdn-8458514890938-46182918979770",
        "title": "Único",
        "price": 2999,
        "compareAt": 3499,
        "available": true,
        "sku": "LL21121"
      }
    ]
  },
  {
    "handle": "figura-de-natal-de-pato-acrilico",
    "name": "Figura de Natal de Pato Acrílico",
    "shortName": "Figura de Natal de Pato Acrílico",
    "description": "Descrição do produto Pato decorativo em acrílico com iluminação interna. A figura pode ser usada em composições natalinas sobre mesas, aparadores e superfícies estáveis. Características Dimensões: 29 cm de altura × 12 cm de largura × 27 cm de profundidade Alimentação: 3 pilhas AA Cabo de 50 cm até o compartimento de pilhas Temporizador de 6 horas Material: acrílico Conteúdo: 1 figura de pato Uso e cuidados Use em ambientes internos ou externos cobertos. Proteja a peça, o compartimento de pilhas e as conexões da chuva e da umidade. Instale em local estável e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-14%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/L4F2002_2_Outdoor-LED-Acrylic-Duck-Christmas-Figure-Cabin-Close.jpg?v=1784659883",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/L4F2002_1_Outdoor-LED-Acrylic-Duck-Christmas-Figure-Cabin.jpg?v=1784659883",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-L4F20012_4_Outdoor-LED-Acrylic-Ducklings-Acrylic-Duck-Christmas-Figures-Cabin-Close_6625131c-cdda-4269-ae87-8a3d8315862e.jpg?v=1784659883",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-L4F20012_2_Outdoor-LED-Acrylic-Ducklings-Acrylic-Duck-Christmas-Figures-Cabin_74b91829-f9bd-4f00-8faf-f8e5250757d5.jpg?v=1784659883"
    ],
    "variants": [
      {
        "id": "mdn-8458514792634-46182918947002",
        "title": "Único",
        "price": 2999,
        "compareAt": 3499,
        "available": true,
        "sku": "LL21122"
      }
    ]
  },
  {
    "handle": "figura-de-natal-ao-ar-livre-de-coruja-de-24cm",
    "name": "Figura de Natal ao ar livre de coruja de 24cm",
    "shortName": "Figura de Natal ao ar livre de coruja de 24cm",
    "description": "Descrição do produto Coruja decorativa em acrílico, com iluminação branca e base que compõe o desenho da peça. O tamanho de 24 cm de altura permite decorar mesas, aparadores e pequenos espaços. Características Dimensões: 24 cm de altura × 16 cm de largura × 15,5 cm de comprimento 30 LEDs brancos Alimentação: 3 pilhas AA Cabo de 50 cm até o compartimento de pilhas Temporizador de 6 horas Uso e cuidados Use em ambientes internos ou externos cobertos. Proteja a peça, o compartimento de pilhas e as conexões da chuva e da umidade. Instale em local estável e siga as orientações da embalagem.",
    "category": "decoracao-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/L4F2302.jpg?v=1784659882",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/L4F2302_2.jpg?v=1784659882"
    ],
    "variants": [
      {
        "id": "mdn-8458514661562-46182918783162",
        "title": "Único",
        "price": 3999,
        "compareAt": 4999,
        "available": true,
        "sku": "L4F2302"
      }
    ]
  },
  {
    "handle": "figura-de-natal-do-bulldog-frances",
    "name": "Figura de Natal do Bulldog Francês",
    "shortName": "Figura de Natal do Bulldog Francês",
    "description": "Descrição do produto Figura natalina em formato de bulldog francês com gorro e cachecol. Os LEDs em branco quente iluminam o corpo da peça para compor entradas, salas e varandas cobertas. Características Dimensões: 55 cm de altura × 20 cm de largura × 50 cm de comprimento 50 LEDs branco quente Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "exclusivos"
    ],
    "badge": "-33%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22062_French-Bulldog-Christmas-Figure.jpg?v=1784659881",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22062_French-Bulldog-Christmas-Figure-Indoor.jpg?v=1784659881",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-PL220596062_600x600_5783c47e-e745-4309-be8f-c309e701850c.jpg?v=1784659881",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor-Winter-Setting-With-Figures_2000x2000_a78f3b93-a1d3-45ea-a498-5d207be2ec1f.jpg?v=1784659881",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-PL220596062_Alpaca-Sledging-Penguin-_-French-Bulldog-Christmas-Figures-Cabin_600x600_95bba1b5-ea72-4f6a-9c3d-9a29abe77835.jpg?v=1784659881",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22062_French-Bulldog-Christmas-Figure-Off.jpg?v=1784659881",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22062_French-Bulldog-Christmas-Figure-Indoor-Off.jpg?v=1784659881"
    ],
    "variants": [
      {
        "id": "mdn-8458514596026-46182918684858",
        "title": "Único",
        "price": 9990,
        "compareAt": 14999,
        "available": true,
        "sku": "PL22062"
      }
    ]
  },
  {
    "handle": "luz-estrela-led-pequena-para-interior-e-exterior",
    "name": "Luz estrela LED pequena para interior e exterior",
    "shortName": "Luz estrela LED pequena para interior e exterior",
    "description": "Descrição do produto Estrela decorativa tridimensional com estrutura prateada e microluzes em branco quente. Os diferentes modos de iluminação permitem escolher entre efeitos luminosos e luz fixa. Características Dimensões: 35 cm de altura × 35 cm de largura × 10 cm de profundidade 200 micro LEDs branco quente 8 modos de iluminação Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1910_Regular-Outdoor-3D-Micro-Light-Star-Close_P1.jpg?v=1784659880",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1910_Regular-Outdoor-3D-Micro-Light-Star-cabin.jpg?v=1784659880",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1910_Regular-Outdoor-3D-Micro-Light-Star-indoor_P2.jpg?v=1784659880",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-XX191012_Micro-Star-Light-Trio-Indoor-Christmas_2000x2000_cbbb7342-a93a-4351-9192-dce0daff8aae.jpg?v=1784659880",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1910_Regular-Outdoor-3D-Micro-Light-Star-Trio_P2.jpg?v=1784659880",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1910_Regular-Outdoor-3D-Micro-Light-Star-Garden-Trio_P3.jpg?v=1784659880"
    ],
    "variants": [
      {
        "id": "mdn-8458514530490-46182918619322",
        "title": "Único",
        "price": 3999,
        "compareAt": 4999,
        "available": true,
        "sku": "XX1910"
      }
    ]
  },
  {
    "handle": "figura-de-natal-de-cachorro-acrilico-ao-ar-livre",
    "name": "Figura de Natal de cachorro acrílico ao ar livre",
    "shortName": "Figura de Natal de cachorro acrílico ao ar livre",
    "description": "Descrição do produto Cachorro decorativo em acrílico, com detalhes natalinos em vermelho e iluminação branca. A figura pode compor a decoração da sala, da entrada ou de uma varanda coberta. Características Altura: 46 cm 40 LEDs brancos Cabo de alimentação de 5 m Alimentação elétrica Temporizador de 6 horas Material: acrílico Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-25%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL21074_Acrylic-Christmas-Dog-Illuminated-Snow-Setting.jpg?v=1784659879"
    ],
    "variants": [
      {
        "id": "mdn-8458514497722-46182918586554",
        "title": "Único",
        "price": 5999,
        "compareAt": 7999,
        "available": true,
        "sku": "PL21074"
      }
    ]
  },
  {
    "handle": "figura-de-natal-de-pinguim-acrilico-ao-ar-livre",
    "name": "Figura de Natal de pinguim acrílico ao ar livre",
    "shortName": "Figura de Natal de pinguim acrílico ao ar livre",
    "description": "Descrição do produto Pinguim natalino em acrílico azul e branco, com gorro e cachecol vermelho. A iluminação interna branca destaca a figura em mesas, entradas e cenários decorativos. Características Altura: 34 cm 40 LEDs brancos Cabo de alimentação de 5 m Alimentação elétrica com transformador Material: acrílico Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-50%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1701_Outdoor_Acrylic_Penguin_Christmas_Figure.jpg?v=1784659878",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor_Acrylic_Penguin_Santa_Snowman_Christmas_Figures_Snowy-Porch.jpg?v=1784659877"
    ],
    "variants": [
      {
        "id": "mdn-8458514432186-46182918521018",
        "title": "Único",
        "price": 3999,
        "compareAt": 7999,
        "available": true,
        "sku": "XX1701"
      }
    ]
  },
  {
    "handle": "figura-de-natal-de-papai-noel-em-acrilico-ao-ar-livre",
    "name": "Figura de Natal de Papai Noel em acrílico ao ar livre",
    "shortName": "Figura de Natal de Papai Noel em acrílico ao ar livre",
    "description": "Descrição do produto Papai Noel decorativo em acrílico, com traje vermelho e iluminação interna branca. O formato compacto permite incluir a figura em mesas, aparadores e cenários de Natal. Características Altura: 34 cm 40 LEDs brancos Cabo de alimentação de 5 m Alimentação elétrica Material: acrílico Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "decoracao-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-11%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1702_Outdoor_Acrylic_Santa_Christmas_Figure.jpg?v=1784659876"
    ],
    "variants": [
      {
        "id": "mdn-8458514366650-46182918455482",
        "title": "Único",
        "price": 3999,
        "compareAt": 4499,
        "available": true,
        "sku": "XX1702"
      }
    ]
  },
  {
    "handle": "figura-de-natal-de-boneco-de-neve-acrilico-ao-ar-livre",
    "name": "Figura de Natal de boneco de neve acrílico ao ar livre",
    "shortName": "Figura de Natal de boneco de neve acrílico ao ar livre",
    "description": "Descrição do produto Boneco de neve decorativo em acrílico, com cachecol vermelho e iluminação branca. Uma figura para compor pequenos cenários natalinos sobre superfícies estáveis. Características Altura: 34 cm 40 LEDs brancos Cabo de alimentação de 5 m Alimentação elétrica Material: acrílico Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1703_Outdoor_Acrylic_Snowman_Christmas_Figure.jpg?v=1784659875"
    ],
    "variants": [
      {
        "id": "mdn-8458514333882-46182918422714",
        "title": "Único",
        "price": 3999,
        "compareAt": 4999,
        "available": true,
        "sku": "XX1703"
      }
    ]
  },
  {
    "handle": "figura-de-natal-de-alpaca",
    "name": "Figura de Natal de Alpaca",
    "shortName": "Figura de Natal de Alpaca",
    "description": "Descrição do produto Alpaca decorativa com gorro natalino e sela colorida. A figura iluminada pode compor a decoração da entrada, da sala e de varandas cobertas. Características Dimensões: 78 cm de altura × 27 cm de largura × 55 cm de comprimento Iluminação em LED Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Requer montagem; acompanha abraçadeiras para fixação das pernas Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "com-iluminacao"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22060_Alpaca-Christmas-Figure.jpg?v=1784659874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22060_Alpaca-Christmas-Figure-Indoor.jpg?v=1784659874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-PL220596062.jpg?v=1784659874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor-Winter-Setting-With-Figures.jpg?v=1784659874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-PL220596062_Alpaca-Sledging-Penguin-_-French-Bulldog-Christmas-Figures-Cabin_600x600_91fde02e-8ac6-4c55-ab62-6d08fc4a5432.jpg?v=1784659874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22060_Alpaca-Christmas-Figure-Off.jpg?v=1784659874",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22060_Alpaca-Christmas-Figure-Indoor-Off.jpg?v=1784659874"
    ],
    "variants": [
      {
        "id": "mdn-8458514301114-46182918389946",
        "title": "Único",
        "price": 9999,
        "compareAt": 12499,
        "available": true,
        "sku": "PL22060"
      }
    ]
  },
  {
    "handle": "rena-iluminada-24v",
    "name": "Rena iluminada 24v",
    "shortName": "Rena iluminada 24v",
    "description": "Descrição do produto Figura decorativa de filhote de rena em pé, com revestimento de vime sintético marrom. A iluminação em branco quente destaca o contorno da peça na decoração de Natal. Características Dimensões: 60 cm de altura × 50 cm de largura × 12 cm de profundidade 80 LEDs branco quente Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Suporte de chão para posicionamento Dimensões da embalagem: 40 cm de altura × 20 cm de largura × 42 cm de comprimento Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "iluminacao",
    "goals": [
      "exclusivos",
      "com-iluminacao"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1904_Rattan-Fawn-Christmas-Figure-Outdoor-Garden-Close_P1.jpg?v=1784659872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1904_Rattan-Fawn-Christmas-Figure-Outdoor-Garden.jpg?v=1784659873",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1904_Studley-Rattan-Fawn-Light-Up-Reindeer-Indoor.jpg?v=1784659872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1904_Rattan-Doe-Fawn-Reindeer-Christmas-Figures-Outdoor-Garden_P2.jpg?v=1784659872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1904_Rattan-Stag--Doe-Fawn-Reindeer-Christmas-Figures-Outdoor-Garden_P3.jpg?v=1784659873",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1904_Rattan-Fawn-Christmas-Figure-Outdoor-Garden-Family.jpg?v=1784659872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1904_Studley-Rattan-Fawn-Light-Up-Reindeer-Indoor_2.jpg?v=1784659873"
    ],
    "variants": [
      {
        "id": "mdn-8458514202810-46182918160570",
        "title": "Único",
        "price": 7999,
        "compareAt": 9999,
        "available": true,
        "sku": "XX1904"
      }
    ]
  },
  {
    "handle": "rena-descansando-iluminada-24v",
    "name": "Rena Descansando Iluminada 24v",
    "shortName": "Rena Descansando Iluminada 24v",
    "description": "Descrição do produto Figura decorativa de filhote de rena em posição de descanso, com acabamento em vime sintético marrom e iluminação em branco quente. Uma peça para compor cenários natalinos em salas, entradas e varandas cobertas. Características Rena em posição de descanso Revestimento em vime sintético Iluminação em LED branco quente Alimentação elétrica Dimensões: 60 cm de altura × 50 cm de largura × 12 cm de profundidade Dimensões da embalagem: 40 cm de altura × 20 cm de largura × 42 cm de comprimento Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "exclusivos"
    ],
    "badge": "-25%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2210_Studley-Rattan-Sitting-Fawn-Light-Up-Reindeer-Barn-Night_9b081b2b-ac1a-4b31-880a-9d18d63d101d.jpg?v=1784659872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2210_Studley-Rattan-Sitting-Fawn-Light-Up-Reindeer_4be4ca0f-3472-4fc8-b65e-7a674fbc9337.jpg?v=1784659871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2210_Studley-Rattan-Sitting-Fawn-Light-Up-Reindeer-Barn-Indoor_002e3ee1-5dd0-44af-800e-9f244bbc4901.jpg?v=1784659872",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2210_Studley-Rattan-Sitting-Fawn-Light-Up-Reindeer-Barn.jpg?v=1784659871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2210_Studley-Rattan-Sitting-Fawn-Light-Up-Reindeer-Barn-Indoor-Far.jpg?v=1784659871",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2210_Studley-Rattan-Sitting-Fawn-Light-Up-Reindeer-Barn-Indoor-Off.jpg?v=1784659871"
    ],
    "variants": [
      {
        "id": "mdn-8458514038970-46182917669050",
        "title": "Único",
        "price": 8999,
        "compareAt": 11999,
        "available": true,
        "sku": "XX2210"
      }
    ]
  },
  {
    "handle": "trio-de-pinguim-acrilico-para-exterior",
    "name": "Trio de pinguim acrílico para exterior",
    "shortName": "Trio de pinguim acrílico para exterior",
    "description": "Descrição do produto Conjunto com três pinguins decorativos em acrílico, ligados entre si por cabos. A iluminação das figuras compõe uma cena natalina para entradas e varandas cobertas. Características Conteúdo: 3 figuras de pinguim Dimensões de cada figura: 34 cm de altura × 22 cm de largura × 20,5 cm de profundidade Distância de cabo entre as figuras: 1 m Cabo de alimentação de 5 m Alimentação elétrica Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "exclusivos"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL19003_Set-of-3-Acrylic-Penguins-Christmas-Figures-Close_P1.jpg?v=1784659870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL19003_Set-of-3-Acrylic-Penguins-Christmas-Figures-Cabin_P2.jpg?v=1784659870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL19003_Set-of-3-Acrylic-Penguins-Christmas-Figures-Whitespace-on_P3.jpg?v=1784659870",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL19003_Set-of-3-Acrylic-Penguins-Christmas-Figures-Whitespace_P4.jpg?v=1784659870"
    ],
    "variants": [
      {
        "id": "mdn-8458513940666-46182917308602",
        "title": "Único",
        "price": 11999,
        "compareAt": 15000,
        "available": true,
        "sku": "PL19003"
      }
    ]
  },
  {
    "handle": "rena-iluminada-luz-branca",
    "name": "Rena Iluminada Luz Branca",
    "shortName": "Rena Iluminada Luz Branca",
    "description": "Descrição do produto Rena decorativa com estrutura metálica e revestimento em acrílico transparente. A iluminação permite escolher branco, branco quente ou uma combinação dos dois tons. Características Dimensões: 77 cm de altura × 55 cm de largura 80 LEDs de duas cores Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Base para posicionamento Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-30%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_2.jpg?v=1784659869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_3.jpg?v=1784659869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_4.jpg?v=1784659869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_5.jpg?v=1784659869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_6.jpg?v=1784659869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_7.jpg?v=1784659869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_8.jpg?v=1784659869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_9.jpg?v=1784659869",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2307UK_1.jpg?v=1784659869"
    ],
    "variants": [
      {
        "id": "mdn-8458513842362-46182916948154",
        "title": "Único",
        "price": 6999,
        "compareAt": 9999,
        "available": true,
        "sku": "XX2307UK"
      }
    ]
  },
  {
    "handle": "cabeca-de-rena-iluminada",
    "name": "Cabeça de Rena Iluminada",
    "shortName": "Cabeça de Rena Iluminada",
    "description": "Descrição do produto Cabeça de rena decorativa com chifres, acabamento em rattan sintético e iluminação em branco quente. O gancho traseiro permite compor a decoração de paredes e entradas. Características Dimensões: 84 cm de altura × 65 cm de largura Iluminação em LED branco quente Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Gancho na parte traseira Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "exclusivos"
    ],
    "badge": "-29%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1901_Rattan-Stags-Head-Wall-Mounted-Christmas-Figure-Close_P1.jpg?v=1784659868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1901_Rattan-Stags-Head-Christmas-Figure-Wall-Mounted_P2.jpg?v=1784659868",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1901_Rattan-Stags-Head-Christmas-Figure-Wall-Mounted-Side_P3.jpg?v=1784659868"
    ],
    "variants": [
      {
        "id": "mdn-8458513744058-46182916849850",
        "title": "Único",
        "price": 9999,
        "compareAt": 13999,
        "available": true,
        "sku": "XX1901"
      }
    ]
  },
  {
    "handle": "figura-de-natal-renas-e-treno-iluminados",
    "name": "Figura de Natal Renas e Treno iluminados",
    "shortName": "Figura de Natal Renas e Treno iluminados",
    "description": "Descrição do produto Conjunto decorativo com duas renas e um trenó, em estrutura metálica revestida de acrílico. Os cachecóis vermelhos removíveis e os LEDs em branco frio compõem o cenário natalino. Características Conteúdo: 2 renas e 1 trenó 240 LEDs branco frio no conjunto Renas: 68 cm de altura × 41 cm de largura × 35 cm de profundidade Trenó: 35 cm de altura × 51 cm de largura × 29 cm de profundidade Alimentação: 3 pilhas tipo D Temporizador de 6 horas Cabo de 3 m até o compartimento de pilhas Uso e cuidados Use em ambientes internos ou externos cobertos. Proteja a peça, o compartimento de pilhas e as conexões da chuva e da umidade. Instale em local estável e siga as orientações da embalagem.",
    "category": "decoracao-de-natal",
    "goals": [
      "exclusivos"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1805_Reindeer-Pair-Sleigh-Christmas-Figures-Scarf-Snow_P1.jpg?v=1784659867",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1805_Reindeer-_-Sleigh-Battery-Christmas-Figure.jpg?v=1784659867",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1805_Reindeer-_-Sleigh-Battery-Christmas-Figure-Off.jpg?v=1784659867"
    ],
    "variants": [
      {
        "id": "mdn-8458513711290-46182916817082",
        "title": "Único",
        "price": 15999,
        "compareAt": 20000,
        "available": true,
        "sku": "XX1805"
      }
    ]
  },
  {
    "handle": "figura-de-natal-pinguim",
    "name": "Figura de Natal Pinguim",
    "shortName": "Figura de Natal Pinguim",
    "description": "Descrição do produto Pinguim decorativo sentado em um trenó, com cachecol e protetores de orelha. Os LEDs em branco quente iluminam a composição para decorar salas, entradas e varandas cobertas. Características Dimensões: 66 cm de altura × 25 cm de largura × 66 cm de comprimento 60 LEDs branco quente Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-19%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22059_Sledging-Penguin-Christmas-Figure.jpg?v=1784659866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22059_Sledging-Penguin-Christmas-Figure-Indoor.jpg?v=1784659866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-PL220596062_600x600_e1b7c3ba-7ccd-4841-b826-89a51d744537.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Outdoor-Winter-Setting-With-Figures_2000x2000_a3ef1a0b-376c-4552-8dc1-d80113d8d5be.jpg?v=1784659866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-PL220596062_Alpaca-Sledging-Penguin-_-French-Bulldog-Christmas-Figures-Cabin_600x600_64ac01cc-de3c-48d3-a8ed-87814816cd97.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22059_Sledging-Penguin-Christmas-Figure-Off.jpg?v=1784659866",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL22059_Sledging-Penguin-Christmas-Figure-Indoor-Off.jpg?v=1784659866"
    ],
    "variants": [
      {
        "id": "mdn-8458513645754-46182916751546",
        "title": "Único",
        "price": 12999,
        "compareAt": 15999,
        "available": true,
        "sku": "PL22059"
      }
    ]
  },
  {
    "handle": "figura-de-natal-ovelha-negra-iluminada-shaun-the-sheep",
    "name": "Figura de Natal Ovelha Negra iluminada ( Shaun the Sheep )",
    "shortName": "Figura de Natal Ovelha Negra iluminada ( Shaun the Sheep )",
    "description": "Descrição do produto Figura decorativa de ovelha com cabeça e pernas pretas, corpo claro e gorro natalino vermelho removível. A iluminação em branco quente destaca a peça em cenários de Natal. Características Dimensões: 50 cm de altura × 31 cm de largura × 69 cm de comprimento 48 LEDs branco quente Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-19%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_27.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_1.jpg?v=1784659864",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_5.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_9.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_4.jpg?v=1784659864",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_2.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_10.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_3.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_13.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_17.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_14.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_shaun-the-sheep-light-up-christmas-figure.jpg?v=1784659864",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_shaun-the-sheep-light-up-christmas-figure-close-up.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_28.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_26.jpg?v=1784659865",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/STS01_29.jpg?v=1784659865"
    ],
    "variants": [
      {
        "id": "mdn-8458513547450-46182916423866",
        "title": "Único",
        "price": 12999,
        "compareAt": 15999,
        "available": true,
        "sku": "STS01"
      }
    ]
  },
  {
    "handle": "figura-de-natal-ao-ar-livre-de-alce-esquiador",
    "name": "Figura de Natal ao ar livre de alce esquiador",
    "shortName": "Figura de Natal ao ar livre de alce esquiador",
    "description": "Descrição do produto Alce decorativo em posição de esqui, com cachecol e iluminação em branco quente. A figura cria uma cena de inverno para compor a decoração natalina em salas, entradas e varandas cobertas. Características Altura: 86 cm 50 LEDs branco quente Cabo de alimentação de 8 m Alimentação elétrica Temporizador de 6 horas Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-20%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/PL21056_LED-Skiing-Moose-Outdoor-Christmas-Figure-Snow.jpg?v=1784659863",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/LED-Outdoor-Christmas-Figures.jpg?v=1784659863"
    ],
    "variants": [
      {
        "id": "mdn-8458513416378-46182916063418",
        "title": "Único",
        "price": 15999,
        "compareAt": 20000,
        "available": true,
        "sku": "PL21056"
      }
    ]
  },
  {
    "handle": "conjunto-de-5-renas-com-iluminacao-led-de-duas-cores",
    "name": "Conjunto de 5 renas com iluminação LED de duas cores",
    "shortName": "Conjunto de 5 renas com iluminação LED de duas cores",
    "description": "Descrição do produto Conjunto com cinco renas decorativas em rattan sintético cinza. A iluminação de duas cores permite escolher branco frio, branco quente ou uma mistura dos dois tons para a composição natalina. Características Conteúdo: 5 figuras de rena Acabamento em rattan sintético cinza LEDs de duas cores Cabo de alimentação de 8 m em cada figura Temporizador de 6 horas Pinos de metal para fixação Cada figura tem alimentação própria: são necessárias 5 tomadas Altura do veado grande: 1,4 m Altura da corça grande: 1,3 m Altura do veado: 140 cm Altura da corça: 100 cm Altura do filhote: 60 cm Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "exclusivos"
    ],
    "badge": "-17%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2105XX2104XX2102XX2103_7.jpg?v=1784659862",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Harlow-Extended-Family-Rattan-Light-Up-Figures.jpg?v=1784659862",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2105XX2104XX2102XX2103_9.jpg?v=1784659862",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-XX21023_Harlow-Rattan-3in1-Light-Up-Reindeer-Family_24_2000x2000_b140de44-a322-4688-9810-5eb0fad4764a.jpg?v=1784659862",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Harlow-Rattan-Reindeer-family-grass-dual-white.jpg?v=1784659862",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Harlow-Rattan-Reindeer-family-grass-warm-white.jpg?v=1784659862",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Harlow-Rattan-Reindeer-family-snow-dual-white_73e76248-53f4-43e3-8047-39b960e17480.jpg?v=1784659862"
    ],
    "variants": [
      {
        "id": "mdn-8458513318074-46182915702970",
        "title": "Único",
        "price": 49999,
        "compareAt": 59999,
        "available": true,
        "sku": "D-XX21002345"
      }
    ]
  },
  {
    "handle": "conjunto-de-8-renas-iluminadas-studley-rattan",
    "name": "Conjunto de 8 renas iluminadas Studley Rattan",
    "shortName": "Conjunto de 8 renas iluminadas Studley Rattan",
    "description": "Descrição do produto Conjunto decorativo com oito renas em diferentes tamanhos e posições, com estruturas metálicas revestidas em rattan sintético marrom. A iluminação em branco quente permite compor um cenário natalino amplo. Características Conteúdo: 8 figuras de rena Alturas variadas, de 36 cm a 2 m Total de 1.700 LEDs branco quente Cabos de alimentação de 8 m Temporizador de 6 horas Estacas metálicas para fixação Altura da rena Stag maior: 2 m Altura da rena Doe: 1 m Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "decoracao-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-30%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Reindeer-Family-Winter-Barn-Setting_3.jpg?v=1784659861",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/Reindeer-Family-Winter-Barn-Setting.jpg?v=1784659861",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1902_Rattan-Stag-Christmas-Figure-Outdoor-Garden-Close_P1_600x600_84600d8c-036f-47a6-9eed-36996a4b2304.jpg?v=1784659861",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX19034_Rattan-Doe-Fawn-Reindeer-Christmas-Figures-Outdoor-Garden_P1_600x600_3780ed4b-41b8-4e7c-8d2a-ecd34d9c903d.jpg?v=1784659861",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1908_XL-Rattan-Stag-Reindeer-Chirstmas-Figure-Garden-Outdoor-Close_P1_600x600_46b26e32-b2ce-4b18-99da-4c8cf8e0ddbe.jpg?v=1784659861",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX1909_XL-Rattan-Doe-Reindeer-Chirstmas-Figure-Garden-Outdoor-Close_P1_600x600_a8ae4b32-034b-4f2e-ab7f-a7663bdc3a6a.jpg?v=1784659861",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2210_Studley-Rattan-Sitting-Fawn-Light-Up-Reindeer-Barn-Night_600x600_21aa5c0f-bf7f-4a23-b736-508fef4dc0cc.jpg?v=1784659861",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/XX2209_Studley-Rattan-Sitting-Doe-Light-Up-Reindeer_600x600_27a48606-ba01-430e-8728-f26cc3e66cfb.jpg?v=1784659861"
    ],
    "variants": [
      {
        "id": "mdn-8458513154234-46182915276986",
        "title": "Único",
        "price": 69990,
        "compareAt": 99990,
        "available": true,
        "sku": "D-STUDLEY"
      }
    ]
  },
  {
    "handle": "familia-de-renas-cintilantes-multicolors",
    "name": "Familia de Renas RGB Wifi - Controle pelo Celular",
    "shortName": "Familia de Renas RGB Wifi - Controle pelo Celular",
    "description": "Descrição do produto Conjunto com três renas decorativas e iluminação RGB controlada pelo celular. O aplicativo Twinkly permite configurar cores, efeitos e temporizador conforme as instruções do equipamento. Características Conteúdo: veado, corça e filhote Veado: 120 cm de altura × 73 cm de largura × 19 cm de profundidade Corça: 88 cm de altura × 62 cm de largura × 19 cm de profundidade Filhote: 60 cm de altura × 32 cm de largura × 14 cm de profundidade Iluminação RGB Controle pelo aplicativo Twinkly via Wi-Fi Cabo de alimentação de 4 m Temporizador personalizável Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "decoracao-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-56%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_2.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_3.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_4.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_5.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_6.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_7.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_8.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_9.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_10.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_11.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_12.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_13.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_14.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_15.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_16.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_17.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_18.jpg?v=1784659860",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/D-TWXX23014_1.jpg?v=1784659860"
    ],
    "variants": [
      {
        "id": "mdn-8458513055930-46182914916538",
        "title": "Único",
        "price": 39990,
        "compareAt": 89990,
        "available": true,
        "sku": "D-TWXX23014"
      }
    ]
  },
  {
    "handle": "enfeite-bolachinha-natal",
    "name": "Enfeite Bolachinha Natal",
    "shortName": "Enfeite Bolachinha Natal",
    "description": "Descrição do produto Enfeite natalino em formato de biscoito de gengibre, com acabamento marrom e detalhes em vermelho e branco. A figura de bolachinha tem gorro natalino e pode compor a decoração da árvore, de festões e de pequenos cenários de Natal. Características Formato de biscoito de gengibre Cores: marrom, vermelho e branco Detalhes decorativos de gorro e coração Alça para pendurar Peça decorativa sem iluminação Uso e cuidados Use em ambientes internos, mantendo a peça protegida da umidade. Guarde em local seco após o uso. Produto decorativo; não é alimento.",
    "category": "decoracao-de-natal",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3pcs-natal-fuzzy-gingerbread-man-doll-xmas-tree-pingentes-presente-de-ano-novo-crian-as-enfeites.jpg?v=1784659859",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3pcs-natal-fuzzy-gingerbread-man-doll-xmas-tree-pingentes-presente-de-ano-novo-crian-as-enfeites_1c8fd922-a65a-4d69-82f4-1782de2f8b68.jpg?v=1784659858",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3pcs-natal-fuzzy-gingerbread-man-doll-xmas-tree-pingentes-presente-de-ano-novo-crian-as-enfeites_ede4a09e-fa93-4522-8d05-f00b26186d91.jpg?v=1784659858",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3pcs-natal-fuzzy-gingerbread-man-doll-xmas-tree-pingentes-presente-de-ano-novo-crian-as-enfeites_b76a0b9c-cc0f-4a2b-b96b-05d32145426c.jpg?v=1784659858",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/3pcs-natal-fuzzy-gingerbread-man-doll-xmas-tree-pingentes-presente-de-ano-novo-crian-as-enfeites.jpg_640x640_cf483977-c3dd-428d-9358-0388534709b0.jpg?v=1784659858"
    ],
    "variants": [
      {
        "id": "mdn-8458512924858-46182914359482",
        "title": "Único",
        "price": 990,
        "available": true,
        "sku": "12000030217027670"
      }
    ]
  },
  {
    "handle": "boneco-de-neve",
    "name": "Boneco de Neve",
    "shortName": "Boneco de Neve",
    "description": "Descrição do produto Escultura natalina de boneco de neve com cachecol e uma composição de bolas de neve sobre a cabeça. A estrutura metálica revestida em PVC recebe iluminação em branco quente. Características Dimensões: 182,88 cm de altura × 111,76 cm de largura × 30,48 cm de profundidade 156 LEDs branco quente Materiais: metal e PVC Alimentação elétrica por tomada Requer montagem Conteúdo: 1 escultura de boneco de neve Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-35%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01.webp?v=1784659844",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02.webp?v=1784659844",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/03.webp?v=1784659844"
    ],
    "variants": [
      {
        "id": "mdn-8458511974586-46182912360634",
        "title": "Único",
        "price": 12990,
        "compareAt": 19990,
        "available": true
      }
    ]
  },
  {
    "handle": "boneco-de-neve-cintilante",
    "name": "Boneco de Neve Cintilante",
    "shortName": "Boneco de Neve Cintilante",
    "description": "Descrição do produto Boneco de neve decorativo com cartola, cachecol vermelho e um pássaro pousado na mão. Os LEDs multicoloridos iluminam a figura para compor a decoração natalina. Características Dimensões: 182,88 cm de altura × 152,4 cm de largura × 43,18 cm de profundidade 100 LEDs multicoloridos Estrutura metálica com revestimento em tecido Alimentação elétrica por tomada Peso aproximado da peça: 6,7 kg Conteúdo: 1 boneco de neve Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-13%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01_e0264396-07c5-4665-a41c-f8d476759b13.webp?v=1784659843",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02_a79ebce3-e60f-44a0-8702-df406c7d6ad7.webp?v=1784659842",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/03_e898b780-baac-446e-8d32-8ad91468465a.webp?v=1784659843",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/04.webp?v=1784659843",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/05.webp?v=1784659843"
    ],
    "variants": [
      {
        "id": "mdn-8458511941818-46182912327866",
        "title": "Único",
        "price": 12990,
        "compareAt": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "quebra-nozes-cintilante",
    "name": "Quebra Nozes Cintilante",
    "shortName": "Quebra Nozes Cintilante",
    "description": "Descrição do produto Quebra-nozes decorativo com chapéu azul, uniforme vermelho e verde e acabamento cintilante. A iluminação em branco frio destaca os detalhes da figura na decoração de Natal. Características Dimensões: 152,4 cm de altura × 68,58 cm de largura × 30,48 cm de profundidade Iluminação em LED branco frio Estrutura em aço com revestimento em tecido Alimentação elétrica por tomada Inclui estacas para fixação Requer montagem Peso aproximado: 3,18 kg Conteúdo: 1 quebra-nozes Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-75%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01_0e7fefbd-ce97-4081-8b06-842dfb6f47f7.webp?v=1784659842",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/03_63e15c82-2b9f-4a84-96ba-b63144f42fb5.webp?v=1784659842",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02_952e6960-a438-4686-b3dd-f911fcc4ab4e.webp?v=1784659842"
    ],
    "variants": [
      {
        "id": "mdn-8458511876282-46182912196794",
        "title": "1 Quebra-Nozes",
        "price": 9990,
        "compareAt": 12990,
        "available": true
      },
      {
        "id": "mdn-8458511876282-46182912229562",
        "title": "2 Quebra-Nozes",
        "price": 17990,
        "compareAt": 25900,
        "available": true
      },
      {
        "id": "mdn-8458511876282-46182912262330",
        "title": "4 Quebra-Nozes",
        "price": 24990,
        "compareAt": 39990,
        "available": true
      }
    ]
  },
  {
    "handle": "luz-cintilante-bolha-de-natal",
    "name": "Luz Cintilante Bolha de Natal",
    "shortName": "Luz Cintilante Bolha de Natal",
    "description": "Descrição do produto Decoração luminosa vertical inspirada nas luzes natalinas de bolha, com base redonda e acabamento cintilante. Os LEDs destacam o desenho da peça em cenários natalinos. Características Dimensões: 127 cm de altura × 52,07 cm de diâmetro 115 LEDs cintilantes Estrutura em ferro com fio de algodão e malha decorativa Cabo de alimentação de 152,4 cm Alimentação elétrica por tomada Inclui 2 estacas metálicas Peso aproximado: 1,81 kg Conteúdo: 1 peça Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-33%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01_cf7cabbf-3e1a-4ff6-9bd1-bc4951b6ac45.webp?v=1784659840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02_8530be29-45ac-4f6c-8559-f2c2ee68f424.webp?v=1784659841"
    ],
    "variants": [
      {
        "id": "mdn-8458511810746-46182912164026",
        "title": "Único",
        "price": 9990,
        "compareAt": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "2-velas-cintilantes-de-bastao-de-doces",
    "name": "2 Velas Cintilantes de Bastão de Doces",
    "shortName": "2 Velas Cintilantes de Bastão de Doces",
    "description": "Descrição do produto Conjunto de duas velas decorativas com listras vermelhas e brancas, chama moldada e iluminação LED cintilante. O desenho remete aos bastões de doces usados na decoração natalina. Características Conteúdo: 2 velas decorativas Altura de cada vela: 91,44 cm Material: plástico moldado com acabamento metálico Iluminação em LED Temporizador de 4 horas Alimentação: 3 pilhas tipo D por vela Acompanha estacas para fixação Uso e cuidados Use em ambientes internos ou externos cobertos. Proteja a peça, o compartimento de pilhas e as conexões da chuva e da umidade. Instale em local estável e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-22%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01_cffe5b91-36a8-44e6-ad2e-c49eb0011ce2.webp?v=1784659839",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02_17b8fa16-5ba1-4f3e-98e7-58859abf121d.webp?v=1784659840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/03_c66b6b3e-85dc-4402-a568-b6cca71b9ad3.webp?v=1784659839",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/04_b32e5a92-ddc0-4942-a43e-93a8f22e6b88.webp?v=1784659840",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/05_e58764be-a4ad-41e9-b00d-d89ac7daea32.webp?v=1784659839"
    ],
    "variants": [
      {
        "id": "mdn-8458511777978-46182912098490",
        "title": "Único",
        "price": 13990,
        "compareAt": 17990,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-iluminada",
    "name": "Guirlanda Iluminada",
    "shortName": "Guirlanda Iluminada",
    "description": "Descrição do produto Guirlanda natalina iluminada em estrutura metálica revestida, com vela, laço vermelho e contorno verde e vermelho. Possui 270 LEDs distribuídos entre vela, laço e contorno, alça para pendurar e alimentação por tomada. Mede 116,84 cm de altura × 91,44 cm de largura × 12,7 cm de profundidade. Características Variedade / modelo: estrutura natalina iluminada com vela e laço. 270 LEDs: 40 na vela, 60 no laço e 170 no contorno Estrutura metálica com revestimento e alça para pendurar Dimensões: 116,84 cm de altura × 91,44 cm de largura × 12,7 cm de profundidade Peso aproximado: 2,95 kg Alimentação elétrica por tomada; cabo de 274,32 cm Requer montagem Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01_d027ae25-2851-4a02-9bf4-b18b3dc71a80.webp?v=1784659838",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02_e6aa3420-3f80-47d0-a808-7432f34e45be.webp?v=1784659838"
    ],
    "variants": [
      {
        "id": "mdn-8458511745210-46182912065722",
        "title": "Único",
        "price": 14990,
        "available": true
      }
    ]
  },
  {
    "handle": "presepio-natalino",
    "name": "Presépio Natalino",
    "shortName": "Presépio Natalino",
    "description": "Descrição do produto Presépio natalino iluminado com as figuras de José, Maria e o menino Jesus, sob uma composição com estrela. Uma peça para representar a cena do nascimento na decoração de Natal. Características Dimensões totais: 152,4 cm de altura × 106,68 cm de largura × 39,37 cm de profundidade José: 100,33 cm de altura Maria: 67,31 cm de altura Menino Jesus: 41,91 cm de altura Alimentação elétrica com adaptador Acompanha estacas e abraçadeiras para fixação Requer montagem Escolha a opção de cor disponível ao comprar Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-25%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/393302689_17983958789450908_736931058219666031_n.jpg?v=1784659837",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/392939387_17983958798450908_3684473293657799740_n.jpg?v=1784659837",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/392939252_17983958807450908_2476686066115812284_n.jpg?v=1784659837"
    ],
    "variants": [
      {
        "id": "mdn-8458511712442-46182911967418",
        "title": "Dourado",
        "price": 14990,
        "compareAt": 19990,
        "available": true
      },
      {
        "id": "mdn-8458511712442-46182912000186",
        "title": "Branco",
        "price": 14990,
        "compareAt": 19990,
        "available": true
      },
      {
        "id": "mdn-8458511712442-46182912032954",
        "title": "Colorido",
        "price": 14990,
        "compareAt": 19990,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-de-flores-brilhante",
    "name": "Guirlanda de Pinheiro Brilhante",
    "shortName": "Guirlanda de Pinheiro Brilhante",
    "description": "Descrição do produto Guirlanda natalina de 152,4 cm de diâmetro com folhagem artificial de aparência de pinheiro Bristol, em PE e PVC. A iluminação combina LEDs branco quente cintilantes e multicoloridos fixos. Com 40,64 cm de profundidade, é uma composição para paredes e espaços amplos, com alimentação por tomada. Características Variedade / modelo: folhagem artificial de pinheiro Bristol. Materiais: PE e PVC Dimensões: 152,4 cm de altura × 152,4 cm de largura × 40,64 cm de profundidade Mais de 300 LEDs branco quente cintilantes e mais de 100 LEDs multicoloridos fixos Peso aproximado: 10,43 kg Alimentação elétrica por tomada; cabo de 182,88 cm Requer montagem Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01.jpg?v=1784659836",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02.jpg?v=1784659836"
    ],
    "variants": [
      {
        "id": "mdn-8458511614138-46182911869114",
        "title": "Único",
        "price": 19990,
        "available": true
      }
    ]
  },
  {
    "handle": "cavalo-e-treno-brilhantes",
    "name": "Cavalo e Trenó Brilhantes",
    "shortName": "Cavalo e Trenó Brilhantes",
    "description": "Descrição do produto Conjunto decorativo de cavalo e trenó com revestimento branco e iluminação em branco frio. Os detalhes natalinos compõem o cenário para entradas e varandas cobertas. Características Conteúdo: 1 cavalo e 1 trenó Materiais: ferro, fio de algodão e tecido decorativo Cavalo: 160 LEDs; 106,68 cm de altura × 129,54 cm de largura × 24,13 cm de profundidade; peso aproximado de 3,74 kg Trenó: 120 LEDs; 82,55 cm de altura × 127 cm de largura × 43,18 cm de profundidade; peso aproximado de 6,24 kg Cabo de alimentação de 274,32 cm Alimentação elétrica por tomada Inclui 4 estacas para fixação Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-38%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01_f246d47e-8a6d-45f1-a577-c93f9566a506.jpg?v=1784659836",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02_3a7c5ef1-97ad-4eea-ae8d-663777b83577.jpg?v=1784659834",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/03.jpg?v=1784659835",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/04.jpg?v=1784659835"
    ],
    "variants": [
      {
        "id": "mdn-8458511548602-46182911803578",
        "title": "Único",
        "price": 24990,
        "compareAt": 39990,
        "available": true
      }
    ]
  },
  {
    "handle": "cachorrinho-de-natal-alegre-e-saltitante",
    "name": "Cachorrinho de Natal Alegre e Saltitante",
    "shortName": "Cachorrinho de Natal Alegre e Saltitante",
    "description": "Descrição do produto Cachorrinho decorativo em posição de salto sobre um presente vermelho, com cachecol e detalhes natalinos. A iluminação multicolorida cintilante destaca a composição tridimensional. Características Dimensões: 121,92 cm de altura × 106,68 cm de largura × 50,8 cm de profundidade 144 LEDs em vermelho, verde, roxo e branco quente Efeito cintilante Estrutura metálica com revestimento em tecido Cabo de alimentação de 152,4 cm Alimentação elétrica por tomada Peso aproximado: 4,54 kg Conteúdo: 1 composição de cachorro e presente Uso e cuidados Use em ambientes internos ou externos cobertos, com conexões e controlador protegidos da chuva e da umidade. Confira a tensão indicada no produto antes de ligar e siga as orientações da embalagem.",
    "category": "figuras-natalinas",
    "goals": [
      "classicos-de-natal"
    ],
    "badge": "-25%",
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/02_950d6240-06cf-4bca-934d-4cf324686a58.jpg?v=1784659833",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/01_722bfb76-33ad-4b36-a3ce-089679c9b20e.jpg?v=1784659833",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/03_d9c3d35d-17d5-45a9-9513-63fec8c0d9a1.jpg?v=1784659833"
    ],
    "variants": [
      {
        "id": "mdn-8458511515834-46182911770810",
        "title": "Único",
        "price": 14990,
        "compareAt": 19990,
        "available": true
      }
    ]
  },
  {
    "handle": "guirlanda-tradicional-decorativa-de-pinheiro-verde-com-led",
    "name": "Guirlanda Tradicional Decorativa de Pinheiro Verde com LED",
    "shortName": "Guirlanda Tradicional Decorativa de Pinheiro Verde com LED",
    "description": "Descrição do produto Guirlanda decorativa natalina de variedade tradicional, com folhagem artificial verde de pinheiro e iluminação LED. A composição de pinheiro verde pode ser usada em portas e paredes, mantendo a peça protegida da chuva e da umidade. Características Variedade / modelo: tradicional de pinheiro verde artificial. Tipo: guirlanda decorativa natalina Folhagem artificial de pinheiro Cor predominante: verde Iluminação: LED Mantenha em local protegido de chuva e umidade. Guarde em local seco após o uso.",
    "category": "guirlandas",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-W_BH-Fraser-Fir-Wreath-Set-of-2_18in-LEDC_SSC.webp?v=1781581954",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-W_BH-Fraser-Fir-Foliage_Detail_1.webp?v=1781581954",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-W_BH-Fraser-Fir-Wreath_Closeup-10.webp?v=1781581955",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-W_BH-Fraser-Fir-Wreath_Lifestyle-10_1.webp?v=1781581954"
    ],
    "variants": [
      {
        "id": "mdn-8416964247738-46025431974074",
        "title": "Único",
        "price": 12990,
        "available": true
      }
    ]
  },
  {
    "handle": "festao-tradicional-decorativo-de-pinheiro-verde",
    "name": "Festão Tradicional Decorativo de Pinheiro Verde",
    "shortName": "Festão Tradicional Decorativo de Pinheiro Verde",
    "description": "Uma escolha especial para transformar a decoração de Natal.",
    "category": "enfeites",
    "goals": [
      "classicos-de-natal"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-W_BH-Fraser-Fir-Garland_6ft-LEDCL_SSC.webp?v=1781581686",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-W_BH-Fraser-Fir-Foliage_Detail.webp?v=1781581686",
      "https://cdn.shopify.com/s/files/1/0767/3092/5242/files/FRR-W_BH-Fraser-Fir-Wreath_Lifestyle-10.webp?v=1781581686"
    ],
    "variants": [
      {
        "id": "mdn-8416963854522-46025430991034",
        "title": "Único",
        "price": 7990,
        "available": true
      }
    ]
  }
];
