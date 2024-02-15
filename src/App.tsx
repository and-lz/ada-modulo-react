import "./App.scss";
import PaginaCardapioRestaurante from "./pages/PaginaCardapioRestaurante";
import PaginaRestaurantes from "./pages/PaginaRestaurantes";

function App() {
  const pagina = "home";
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas, [nome da pessoa]</span>
            <div className="shopping-cart">
              carrinho de compras
              <span className="badge">0</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        {pagina === "home" ? <PaginaRestaurantes /> : ""}
        {pagina === "restaurantes" ? <PaginaCardapioRestaurante /> : ""}
      </div>
    </>
  );
}

export default App;
