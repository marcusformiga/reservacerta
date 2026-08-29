# 04 - Cadastro de clientes e importacao

## Objetivo

Permitir que a locadora registre clientes e migre dados basicos de planilhas.

## Campos do cliente

- Nome;
- WhatsApp;
- email opcional;
- documento opcional;
- endereco opcional;
- observacoes.

## Passos

1. Criar tabela/modelo de clientes.
2. Criar listagem com busca por nome e WhatsApp.
3. Criar formulario de cadastro e edicao.
4. Validar campos obrigatorios.
5. Implementar importacao CSV simples.
6. Criar tela de pre-visualizacao antes de importar.
7. Detectar possiveis duplicados por WhatsApp.
8. Mostrar resumo da importacao:
   - linhas importadas;
   - linhas ignoradas;
   - erros de validacao.

## Criterios de aceite

- Usuario cadastra, edita e lista clientes.
- Usuario importa CSV com clientes.
- Registros invalidos nao quebram a importacao inteira.
- Duplicados sao sinalizados antes de salvar.

## Fora do escopo

- Integracao automatica com agenda de contatos.
- Envio de mensagens.
- CRM completo.

