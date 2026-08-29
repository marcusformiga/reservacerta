# ReservaCerta - Landing Page

Landing page para validar uma ideia de SaaS voltada para pequenas e medias locadoras de festas e eventos que ainda controlam reservas, disponibilidade, entregas e devolucoes com WhatsApp, planilhas, agenda e processos manuais.

## Proposta

O produto responde uma pergunta simples e critica:

> Posso aceitar essa reserva para essa data?

O objetivo inicial e reduzir problemas como:

- reservas duplicadas;
- falta de visibilidade sobre disponibilidade;
- conflitos entre locacoes;
- dificuldade para acompanhar entregas e devolucoes;
- dependencia excessiva de planilhas e memoria da equipe.

## Objetivo do MVP

Construir uma primeira versao simples, funcional e validavel, evitando overengineering.

Fluxo principal:

```text
Cliente
  |
Orcamento
  |
Reserva
  |
Verificacao de disponibilidade
  |
Entrega
  |
Devolucao
```

O valor principal do MVP e evitar que a locadora confirme um item que nao estara disponivel no periodo solicitado.

## Funcionalidades essenciais

- Cadastro de clientes;
- importacao simples de dados via planilha;
- cadastro de itens para locacao;
- controle de quantidade disponivel;
- cadastro de reservas;
- verificacao de conflito por periodo;
- visualizacao simples das reservas;
- controle basico de entrega e devolucao;
- formulario de captura de leads na landing page.

## Fora do MVP

Nesta fase, o produto nao deve incluir:

- microservicos;
- arquitetura distribuida;
- Kubernetes;
- filas ou mensageria;
- multiplos bancos de dados;
- machine learning ou IA generativa;
- integracao fiscal ou emissao de nota fiscal;
- roteirizacao logistica;
- integracao completa com WhatsApp;
- aplicativo mobile nativo;
- BI avancado;
- sistema complexo de permissoes;
- multi-tenant sofisticado;
- event sourcing ou CQRS;
- integracoes com dezenas de servicos externos.

Essas decisoes so devem ser consideradas depois que houver evidencia real de uso e necessidade.

## Publico-alvo inicial

Pequenas e medias locadoras de:

- mesas e cadeiras;
- brinquedos e inflaveis;
- decoracao;
- mobiliario para eventos;
- equipamentos de som;
- iluminacao;
- tendas;
- utensilios e equipamentos para festas.

Perfil desejado:

- 2 a 15 funcionarios;
- operacao recorrente de locacoes;
- WhatsApp como principal canal comercial;
- controle atual feito parcialmente por planilha, agenda ou papel;
- necessidade frequente de consultar disponibilidade por data.

## Estrutura

- `index.html`: conteudo e estrutura semantica;
- `styles.css`: estilos mobile-first, reutilizaveis e responsivos;
- `script.js`: comportamento do formulario com funcoes pequenas;
- `README.md`: descricao e orientacao do projeto.

## Como executar

Abra `index.html` diretamente no navegador.

Tambem e possivel usar uma extensao como Live Server no VS Code.

## Formulario de leads

Nesta versao, o formulario ainda nao envia dados para um backend. Os dados sao exibidos no console pela funcao:

```js
function registrarLead(lead) {
  console.info("Lead capturado:", lead);
}
```

Uma evolucao simples:

```text
Landing Page
    |
POST /leads
    |
Backend
    |
Banco de dados
```

Possiveis caminhos para a captura real:

- Supabase;
- Firebase;
- Google Sheets;
- Formspree;
- backend proprio.

## Proximo passo recomendado

Antes de desenvolver o SaaS completo:

- publicar a landing page;
- conversar com donos de locadoras;
- coletar 10 a 20 leads qualificados;
- entrevistar os interessados;
- identificar como eles controlam reservas hoje;
- descobrir qual problema gera mais prejuizo;
- validar disposicao para pagar;
- implementar o MVP somente depois dessa validacao.

Valide a dor primeiro. Construa depois.
