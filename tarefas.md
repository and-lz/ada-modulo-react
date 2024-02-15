## Sugestão de novos componentes

### Componente ListaCompras:

- Este componente recebe como propriedade um array de objetos, onde cada objeto representa um item da lista de compras.
- Cada objeto contém as seguintes chaves:
  - `item`: o nome do item a ser comprado.
  - `quantidade`: a quantidade desejada do item.
  - `valor`: o preço unitário do item.
- O componente deve controlar seu estado para determinar se a lista de compras está aberta ou não.
- Se a lista estiver aberta, o componente deve renderizar a lista de compras; caso contrário, não deve renderizar nada.

### Componente AvaliacaoPedidos:

- Este componente é responsável por exibir a avaliação de um pedido.
- Quando não recebe nenhum valor como propriedade, exibe uma série de botões representando estrelas.
- Cada botão representa uma avaliação possível, e ao clicar em um botão, o componente deve alterar o valor da avaliação para a nota correspondente.
- Se receber um valor como propriedade, em vez de exibir os botões de estrelas, o componente deve exibir o valor da avaliação passado por propriedade.
- O componente deve ser capaz de armazenar o estado da avaliação.

