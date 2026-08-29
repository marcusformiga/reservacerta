# Plano de implementacao - ReservaCerta

Este plano organiza as proximas features descritas no `README.md` em etapas executaveis. A ordem prioriza validacao comercial antes de complexidade tecnica.

## Ordem recomendada

1. Publicar a landing page e preparar medicao basica.
2. Implementar captura real de leads.
3. Criar base do MVP web.
4. Implementar cadastro de clientes e importacao por planilha.
5. Implementar cadastro de itens e quantidade disponivel.
6. Implementar reservas e verificacao de conflitos.
7. Criar visualizacao simples das reservas.
8. Implementar controle basico de entrega e devolucao.
9. Rodar piloto e decidir proximas features por evidencia.

## Principios

- Resolver primeiro a pergunta: "posso aceitar essa reserva para essa data?"
- Manter o MVP pequeno.
- Evitar recursos fora do escopo listado no README.
- Preferir implementacoes simples que permitam aprendizado rapido.
- Adicionar complexidade somente quando houver uso real.

## Resultado esperado do MVP

Uma locadora deve conseguir:

- cadastrar clientes;
- cadastrar itens locaveis com quantidade total;
- registrar uma reserva por periodo;
- saber se existe quantidade disponivel para o periodo;
- visualizar reservas futuras;
- marcar entrega e devolucao;
- evitar confirmar uma reserva conflitante.

