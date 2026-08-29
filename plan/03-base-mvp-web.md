# 03 - Base do MVP web

## Objetivo

Criar a base da aplicacao web que sera usada pela locadora apos a validacao da landing page.

## Escopo

- Estrutura inicial da aplicacao.
- Rotas principais.
- Persistencia simples.
- Layout responsivo e operacional.

## Decisao tecnica sugerida

Comecar monolitico e simples. Para uma primeira versao, uma stack como Next.js, React com Vite, Laravel, Rails, Django ou Spring Boot com templates atende bem. Evite microservicos.

## Rotas iniciais

- `/clientes`
- `/itens`
- `/reservas`
- `/calendario`
- `/operacao`

## Modelo inicial de dados

- Cliente
- Item
- Reserva
- ItemReserva
- MovimentacaoOperacional

## Passos

1. Escolher stack com base no conhecimento do time.
2. Criar projeto com estrutura simples.
3. Configurar banco unico.
4. Criar layout base mobile-first.
5. Criar navegacao principal.
6. Definir padrao de validacao de formularios.
7. Definir padrao de mensagens de erro e sucesso.

## Criterios de aceite

- Aplicacao roda localmente com um comando documentado.
- Existe navegacao entre as telas principais.
- Banco e migracoes iniciais estao configurados.
- Layout funciona em celular e desktop.

## Fora do escopo

- Multi-tenant sofisticado.
- Permissoes complexas.
- App mobile nativo.

