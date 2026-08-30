# Guia para Agentes

Este repositório contém a landing page do ReservaCerta e o plano inicial para validar um SaaS simples para pequenas e médias locadoras de festas e eventos.

Use este guia como referência operacional antes de criar ou alterar arquivos.

## Prioridade das Fontes

1. Siga primeiro o `README.md`.
2. Para roadmap e próximas etapas, consulte os arquivos em `plan/`, começando por `plan/00-visao-geral.md`.
3. Em caso de conflito, o `README.md` vence este guia.
4. Não implemente funcionalidades fora do MVP sem pedido explícito.

## Objetivo do Produto

O ReservaCerta deve responder uma pergunta central:

```text
Posso aceitar essa reserva para essa data?
```

O objetivo inicial é validar a dor de locadoras que ainda controlam reservas, disponibilidade, entregas e devoluções com WhatsApp, planilhas, agenda, papel e memória da equipe.

## Escopo Atual

O estado atual do projeto é uma landing page estática com formulário de captura de leads.

Arquivos principais:

- `index.html`: conteúdo, estrutura semântica e formulário Netlify Forms.
- `styles.css`: estilos mobile-first, reutilizáveis e responsivos.
- `script.js`: comportamento do formulário com funções pequenas.
- `README.md`: descrição do projeto, escopo e orientação principal.
- `plan/`: plano incremental para publicação, validação e evolução do MVP.

## Como Executar

Abra `index.html` diretamente no navegador.

Também é aceitável usar uma extensão como Live Server no VS Code quando for útil para testar navegação e comportamento em ambiente HTTP local.

Não há, no estado atual, build step, backend, dependências instaláveis ou framework JavaScript.

## Formulário de Leads

O formulário `lead` em `index.html` está preparado para Netlify Forms.

Regras importantes:

- Preserve `name="lead"`.
- Preserve `method="POST"`.
- Preserve `data-netlify="true"`.
- Preserve o campo oculto `form-name` com valor `lead`.
- Preserve o honeypot `bot-field`, salvo se a estratégia de captura for alterada explicitamente.
- Em ambiente `file://`, o envio deve continuar sendo simulado no console para facilitar testes locais.

Fluxo esperado após publicação:

```text
Landing Page
    |
POST /
    |
Netlify Forms
    |
Painel do Netlify
```

## Diretrizes de Implementação

- Mantenha a solução simples, estática e validável.
- Prefira HTML semântico, CSS claro e JavaScript pequeno.
- Não introduza framework, bundler, backend ou banco de dados sem necessidade real e pedido explícito.
- Preserve acessibilidade básica: labels, foco visível, `aria-live` para mensagens e navegação compreensível.
- Mantenha o conteúdo em português do Brasil.
- Use nomes coerentes com o padrão atual em português.
- Evite mudanças cosméticas amplas quando a tarefa pedir uma alteração pontual.
- Não remova a integração com Netlify Forms sem substituir por uma estratégia equivalente de captura.

## Funcionalidades Essenciais do MVP

Quando o trabalho avançar além da landing page, mantenha o foco nas capacidades listadas no `README.md`:

- cadastro de clientes;
- importação simples de dados via planilha;
- cadastro de itens para locação;
- controle de quantidade disponível;
- cadastro de reservas;
- verificação de conflito por período;
- visualização simples das reservas;
- controle básico de entrega e devolução;
- formulário de captura de leads na landing page.

## Fora do Escopo Atual

Não implemente nesta fase:

- microserviços;
- arquitetura distribuída;
- Kubernetes;
- filas ou mensageria;
- múltiplos bancos de dados;
- machine learning ou IA generativa;
- integração fiscal ou emissão de nota fiscal;
- roteirização logística;
- integração completa com WhatsApp;
- aplicativo mobile nativo;
- BI avançado;
- sistema complexo de permissões;
- multi-tenant sofisticado;
- event sourcing ou CQRS;
- integrações com dezenas de serviços externos.

Essas decisões só devem ser consideradas depois de evidência real de uso e necessidade.

## Ordem Recomendada

Antes de construir o SaaS completo:

1. Publicar a landing page.
2. Preparar captura real de leads.
3. Conversar com donos de locadoras.
4. Coletar 10 a 20 leads qualificados.
5. Entrevistar interessados.
6. Entender como controlam reservas hoje.
7. Identificar qual problema gera mais prejuízo.
8. Validar disposição para pagar.
9. Implementar o MVP somente depois dessa validação.

Para detalhes, siga os arquivos em `plan/` na ordem numérica.

## Definition of Done

Considere uma alteração pronta quando:

- o comportamento pedido foi implementado;
- a página abre corretamente via `index.html`;
- o formulário mantém validação e feedback ao usuário;
- o envio local via `file://` continua funcionando quando aplicável;
- a estrutura semântica e responsiva foi preservada;
- o escopo continua alinhado ao `README.md`;
- pendências conhecidas foram registradas claramente no resultado.
