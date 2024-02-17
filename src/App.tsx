import  "./App.scss";
import Rotas from "./components/Rotas";

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <Link to={"/"}>🏠</Link>
            <div className="shopping-cart">
              carrinho de compras
              <span className="badge">0</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <Rotas />
      </div>
    </>
  );
}

export default App;
