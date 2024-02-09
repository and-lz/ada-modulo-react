import { useState } from "react";

interface Props {
  item: {
    nome: string;
    descricao: string;
    preco: number;
  };
}

function CaixaItem(props: Props) {
  const {
    item: { nome, descricao, preco },
  } = props;
  const [quantidade, definirQuantidade] = useState(10);

  function aumentarQuantidade() {
    definirQuantidade(quantidade + 1);
  }
  function diminuirQuantidade() {
    definirQuantidade(quantidade - 1);
  }

  return (
    <>
      <li>
        <h3>{nome}</h3>
        <p>
          {descricao} / R$ {preco},00
        </p>
        <div className="counter">
          <button onClick={diminuirQuantidade}>-</button>
          <span>{quantidade}</span>
          <button onClick={aumentarQuantidade}>+</button>
        </div>
      </li>
    </>
  );
}

export default CaixaItem;
