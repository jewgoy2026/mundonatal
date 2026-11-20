import type { Metadata } from 'next';

import { PolicyPage } from '@/components/policy-page';

export const metadata: Metadata = {
  title: 'Trocas e devoluções | Mundo do Natal Suplementos',
  description: 'Consulte os prazos e condições para trocas, devoluções e reembolsos de pedidos Mundo do Natal.',
};

export default function ReturnsPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Ajuda · pós-venda"
      title="Trocas e devoluções"
      description="Consulte seus direitos, os prazos de solicitação e o que precisamos receber para analisar uma troca, devolução ou reembolso."
      highlights={[
        { label: 'Arrependimento', value: 'Até 7 dias', note: 'Contados do recebimento do pedido.' },
        { label: 'Defeito em suplemento', value: 'Até 30 dias', note: 'Contados do recebimento do produto.' },
        { label: 'Reembolso via PIX', value: 'Até 48h úteis', note: 'Após a análise e autorização.' },
      ]}
      sections={[
        {
          title: 'Direito de arrependimento',
          content: <><p>Você pode desistir da compra em até 7 dias corridos após o recebimento, conforme o Código de Defesa do Consumidor.</p><p>O produto deve estar na embalagem original, completo, com o lacre intacto, sem indícios de uso ou consumo e acompanhado da nota fiscal. Para vestuário e acessórios, o item deve estar sem uso, sem lavagem e com as etiquetas.</p></>,
        },
        {
          title: 'Produto com defeito',
          content: <><p>O prazo para comunicar defeito de fabricação é de 30 dias corridos para suplementos e 90 dias corridos para vestuário ou acessórios, contados do recebimento.</p><p>Guarde o produto e envie o número do pedido, uma descrição do problema e fotos do item, do lote, das etiquetas e da embalagem. Após a análise, serão apresentadas as opções aplicáveis de troca, crédito ou reembolso.</p></>,
        },
        {
          title: 'Item errado, faltante ou avariado',
          content: <><p>Se a embalagem chegar aberta, violada ou danificada, recuse o recebimento. Caso perceba o problema após abrir, preserve a caixa, os produtos e as etiquetas.</p><p>Entre em contato com o número do pedido e fotos. Confirmada a ocorrência, a solução será feita por reenvio ou reembolso, sem custo adicional.</p></>,
        },
        {
          title: 'Kits, combos e troca de sabor',
          content: <><p>Em devoluções parciais de kits promocionais, o reembolso é calculado proporcionalmente ao valor efetivamente pago pelo conjunto.</p><p>A troca por outro sabor ou produto pode ser solicitada dentro do prazo de arrependimento, desde que o item permaneça lacrado. Eventuais diferenças de preço serão ajustadas.</p></>,
        },
        {
          title: 'Como solicitar',
          content: <><p>Envie a solicitação pelo <a className="font-bold text-black underline underline-offset-4" href="mailto:toca@mundonatal.com.br">atendimento Mundo do Natal por e-mail</a>, informando nome, número do pedido, motivo e, quando necessário, fotos.</p><p>Aguarde as instruções e o código de postagem antes de enviar qualquer produto. Quando a devolução decorrer de arrependimento dentro do prazo, defeito confirmado, item errado ou avaria, o custo do retorno será assumido pela operação.</p></>,
        },
        {
          title: 'Análise e reembolso',
          content: <><p>Após a chegada do produto, a conferência e a autorização do ressarcimento são concluídas em até 7 dias corridos.</p><p>O reembolso é feito pelo mesmo meio do pagamento original. Para PIX, a devolução ocorre em até 48 horas úteis após a autorização. O prazo bancário pode variar.</p></>,
        },
        {
          title: 'Itens que não podem ser devolvidos',
          content: <p>Não aceitamos produtos abertos, com lacre violado, consumidos, sem embalagem original ou enviados fora dos prazos, salvo quando houver defeito, erro de separação ou avaria de transporte. Itens de vestuário usados, lavados ou sem etiqueta também não são elegíveis.</p>,
        },
      ]}
    />
  );
}
