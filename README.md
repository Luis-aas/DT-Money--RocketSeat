# DT-Money - Controle Financeiro

O **DT-Money** é um aplicativo de controle financeiro desenvolvido durante o curso de React da Rocketseat. A aplicação permite o gerenciamento de transações financeiras, incluindo entradas e saídas de dinheiro, com um painel de resumo de saldo total.

Além das funcionalidades do curso, foram implementados botões de filtragem de **entradas**, **saídas** e **total**, proporcionando uma experiência mais dinâmica e personalizada ao usuário.

## Tecnologias Utilizadas
- **React**: Biblioteca principal para a construção da interface.
- **TypeScript**: Para garantir tipagem estática e maior segurança no código.
- **Vite**: Para otimizar o processo de build e desenvolvimento.
- **JSON Server**: Para simular um backend com um banco de dados em JSON para armazenar as transações.

## Funcionalidades
- **Adicionar Transações**: É possível cadastrar entradas e saídas, informando a descrição, valor e categoria.
- **Visualizar Transações**: As transações são listadas com a descrição, tipo (entrada/saída), valor e categoria.
- **Resumo Financeiro**: Um painel de resumo que mostra as entradas, saídas e o saldo total.
- **Filtragem**: Botões de filtragem por entradas, saídas e total, permitindo uma visualização mais detalhada.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Luis-aas/DT-Money--RocketSeat.git

2. Instale as dependências:

   ```powershell
   npm install

3. Execute o projeto:
   ```powershell
   npm run dev

4. Abra o navegador e acesse http://localhost:3000.


## Melhorias Futuras

- **Botão para Excluir Transações**: Adicionar a funcionalidade para excluir transações diretamente na interface e, consequentemente, removê-las do banco de dados.
- **Filtragem por Mês**: Implementar um filtro para visualizar transações por mês, facilitando a análise de despesas e receitas em períodos específicos.
