# 05 - Cadastro de itens e quantidade disponivel

## Objetivo

Permitir cadastrar itens locaveis e controlar a quantidade total disponivel para reserva.

## Campos do item

- Nome;
- categoria;
- quantidade total;
- valor de referencia opcional;
- descricao opcional;
- status ativo/inativo.

## Passos

1. Criar tabela/modelo de itens.
2. Criar listagem com filtros por categoria e status.
3. Criar formulario de cadastro e edicao.
4. Validar que quantidade total seja maior ou igual a zero.
5. Permitir inativar item sem apagar historico.
6. Preparar consulta de disponibilidade por periodo.

## Regra principal

Quantidade disponivel em um periodo:

```text
quantidade total do item - soma das quantidades reservadas no mesmo periodo
```

## Criterios de aceite

- Usuario cadastra, edita, lista e inativa itens.
- Quantidade total nao aceita valores invalidos.
- Itens inativos nao aparecem como opcao em novas reservas.
- O historico de reservas antigas continua preservado.

## Fora do escopo

- Controle financeiro completo.
- Controle detalhado de avarias.
- Estoque por deposito.

