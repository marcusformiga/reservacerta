# 06 - Reservas e verificacao de conflitos

## Objetivo

Permitir registrar reservas e impedir confirmacao quando nao houver quantidade suficiente no periodo.

## Campos da reserva

- Cliente;
- data/hora de inicio;
- data/hora de fim;
- status;
- itens e quantidades;
- observacoes.

## Status iniciais

- Orcamento;
- reservada;
- entregue;
- devolvida;
- cancelada.

## Passos

1. Criar tabela/modelo de reservas.
2. Criar tabela/modelo de itens da reserva.
3. Criar formulario de reserva.
4. Permitir adicionar multiplos itens em uma reserva.
5. Validar periodo de inicio e fim.
6. Implementar calculo de conflitos por item e periodo.
7. Exibir disponibilidade antes de salvar como reservada.
8. Bloquear confirmacao se quantidade solicitada for maior que a disponivel.
9. Permitir salvar como orcamento mesmo quando houver conflito, desde que nao bloqueie estoque.

## Regra de conflito

Uma reserva conflita quando existe sobreposicao de periodo e a soma das quantidades reservadas ultrapassa a quantidade total do item.

Reservas canceladas e orcamentos nao devem consumir disponibilidade.

## Criterios de aceite

- Usuario cria orcamento.
- Usuario transforma orcamento em reserva.
- Sistema mostra quantidade disponivel por item.
- Sistema bloqueia reserva sem disponibilidade suficiente.
- Reservas canceladas deixam de consumir disponibilidade.

## Fora do escopo

- Contratos.
- Pagamentos.
- Assinatura digital.

