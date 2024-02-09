import { useState } from "react";
import "./App.scss";
import CaixaItem from "./components/CaixaItem";
import CaixaRestaurante from "./components/CaixaRestaurante";

function App() {
  const restauranteDonaFlorinda = {
    nome: "Nonna's Trattoria",
    descricao:
      "Um refúgio italiano onde a família se reúne para saborear pratos caseiros.",
    avaliacao: 4.3,
    categoria: "Italiana",
    tempoEntrega: 40,
    valorEntrega: 6,
    cardapio: [
      {
        nome: "Spaghetti Carbonara",
        descricao: "Massa italiana com molho de queijo, bacon e ovo",
        preco: 15,
      },
    ],
  };
  const [carrinho, definirCarrinho] = useState([]);

  function aoAtualizar() {}

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas, [nome da pessoa]</span>
            <div className="shopping-cart">
              <button>carrinho de compras</button>
              <span className="badge">2</span>
              <div className="list">
                <ul role="list">
                  <li>
                    <span>3x</span>
                    <span>Nome do Item</span>
                    <span>R$ 100</span>
                  </li>
                </ul>
                <div className="total">Total: R$ 900</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <section>
          <h2>Restaurantes</h2>
          <ul className="grid" role="list">
            <CaixaRestaurante restaurante={restauranteDonaFlorinda} />
          </ul>
        </section>
        <section>
          <h2>Itens do Restaurante XYZ</h2>
          <ul
            className="grid"
            role="list"
            style={{ "--max": "200px" } as React.CSSProperties}
          >
            <CaixaItem
              aoAtualizar={aoAtualizar}
              item={restauranteDonaFlorinda.cardapio[0]}
            />
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
