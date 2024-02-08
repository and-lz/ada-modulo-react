import "./App.scss";

// Premissas:
// App de pedido de comida, estilo iFood
// Recursos:
// Página de Lista de Restaurantes
// Página de Produtos do Restaurante

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas, [nome da pessoa]</span>
            <div className="shopping-cart">
              carrinho de compras
              <span className="badge">2</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <section>
          <h2>Restaurantes</h2>
          <ul className="grid" role="list">
            <li className="restaurant-box">
              <h3>El Rancho Tex-Mex</h3>
              <div className="details">
                <span className="small-details">4.4</span>
                <span className="small-details">Italiana</span>
                <span className="small-details">30~40 min</span>
                <span className="small-details">R$ 5</span>
              </div>
              <p>
                Autêntica cozinha mexicana com uma pitada de sabor do Velho
                Oeste.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Itens do Restaurante XYZ</h2>
          <ul
            className="grid"
            role="list"
            style={{ "--max": "200px" } as React.CSSProperties}
          >
            <li>
              <h3>Nome do item</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
                ipsa.
              </p>
              <div className="counter">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
