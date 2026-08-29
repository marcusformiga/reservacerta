# 02 - Captura real de leads

## Objetivo

Substituir o `console.info` atual por um destino real para armazenar leads do formulario.

## Escopo

- Enviar os dados do formulario para uma solucao simples.
- Exibir feedback claro de sucesso ou erro.
- Evitar perda de leads.

## Opcao inicial recomendada

Usar Formspree, Google Sheets via endpoint, Supabase ou Firebase. Para MVP, escolha a opcao com menor tempo de configuracao e manutencao.

## Passos

1. Escolher o destino dos leads.
2. Definir campos obrigatorios:
   - nome;
   - WhatsApp;
   - empresa;
   - segmento;
   - locacoes por mes;
   - controle atual.
3. Alterar `registrarLead(lead)` em `script.js` para enviar `POST`.
4. Tratar estados de carregamento, sucesso e erro.
5. Bloquear duplo envio enquanto a requisicao estiver em andamento.
6. Testar envio com dados reais e dados invalidos.
7. Registrar no README qual servico esta recebendo os leads.

## Criterios de aceite

- Um lead enviado aparece no destino escolhido.
- O usuario recebe mensagem de sucesso apos envio.
- Falha de rede exibe mensagem de erro sem limpar o formulario.
- Duplo clique no botao nao gera leads duplicados.

## Riscos

- Vazamento de dados por endpoint exposto incorretamente.
- Dependencia de servico gratuito com limite baixo.
- Leads sem telefone valido.

