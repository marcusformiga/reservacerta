# 08 - Controle basico de entrega e devolucao

## Objetivo

Acompanhar a etapa operacional da reserva sem criar um sistema logistico complexo.

## Escopo

- Marcar reserva como entregue.
- Marcar reserva como devolvida.
- Registrar observacoes simples.
- Ver pendencias operacionais.

## Passos

1. Adicionar acoes de status na reserva.
2. Criar validacoes de transicao:
   - reservada -> entregue;
   - entregue -> devolvida;
   - orcamento -> reservada;
   - qualquer status permitido -> cancelada.
3. Registrar data/hora da mudanca de status.
4. Registrar usuario responsavel quando houver autenticacao.
5. Criar painel de reservas entregues e ainda nao devolvidas.
6. Criar alerta visual para devolucoes atrasadas.

## Criterios de aceite

- Usuario marca uma reserva como entregue.
- Usuario marca uma reserva como devolvida.
- Reserva entregue aparece como pendente de devolucao.
- Reserva devolvida sai da lista de pendencias.
- Historico basico de status fica registrado.

## Fora do escopo

- Roteirizacao.
- Rastreamento em tempo real.
- Motoristas e veiculos.

