import type { Metadata } from 'next';

import { PolicyPage } from '@/components/policy-page';

export const metadata: Metadata = {
  title: 'Frete e entrega | Reino Natalino',
  description: 'Consulte modalidades, prazos e condições de entrega dos pedidos Mundo do Natal.',
};

export default function ShippingPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Ajuda · pedidos e entrega"
      title="Frete e entrega"
      description="Aqui você encontra as modalidades disponíveis neste site, os prazos estimados e as orientações para acompanhar ou corrigir uma entrega."
      highlights={[
        { label: 'Entrega normal', value: 'Grátis', note: 'Prazo estimado de 5 a 8 dias úteis.' },
        { label: 'Entrega expressa', value: 'R$ 27,92', note: 'Prazo estimado de 2 a 3 dias úteis.' },
        { label: 'Cobertura', value: 'Todo o Brasil', note: '26 estados e Distrito Federal.' },
      ]}
      sections={[
        {
          title: 'Onde entregamos',
          content: <p>Realizamos entregas em todo o território nacional. Não fazemos envios internacionais nem retirada presencial. As opções disponíveis para o endereço informado aparecem antes da confirmação do pedido.</p>,
        },
        {
          title: 'Modalidades e valores',
          content: <><p>Este checkout oferece entrega normal gratuita, com prazo estimado de 5 a 8 dias úteis, e entrega expressa por R$ 27,92, com prazo estimado de 2 a 3 dias úteis.</p><p>A modalidade escolhida e o valor correspondente ficam visíveis no resumo antes da geração do PIX.</p></>,
        },
        {
          title: 'Contagem do prazo',
          content: <><p>O prazo começa no primeiro dia útil após a confirmação do pagamento. Pedidos aprovados em fins de semana ou feriados entram na fila de separação no próximo dia útil.</p><p>Os prazos são estimativas e podem sofrer alterações por condições climáticas, restrições de rota, greves ou períodos de grande volume.</p></>,
        },
        {
          title: 'Rastreamento',
          content: <p>Após o despacho, o código de rastreamento é enviado ao e-mail informado no checkout. Confira também as pastas de spam e promoções. Caso não receba a atualização, fale com o atendimento e informe o número do pedido.</p>,
        },
        {
          title: 'Endereço e tentativas de entrega',
          content: <><p>Revise CEP, rua, número e complemento antes de gerar o pagamento. A alteração é possível somente enquanto o pedido ainda não tiver sido despachado.</p><p>A transportadora poderá realizar novas tentativas quando não houver alguém para receber. Se o pedido retornar por endereço incorreto ou incompleto, o atendimento orientará sobre reenvio ou cancelamento.</p></>,
        },
        {
          title: 'Avaria, atraso ou extravio',
          content: <><p>Se a embalagem chegar aberta, violada ou visivelmente danificada, recuse o recebimento e comunique o atendimento no mesmo dia.</p><p>Em caso de atraso sem atualização, entrega não localizada ou extravio confirmado, faremos a apuração com a transportadora e apresentaremos as opções de reenvio ou reembolso.</p></>,
        },
      ]}
    />
  );
}
