import PaginaBusca from "../pages/PaginaBusca";
import PaginaCardapioRestaurante from "../pages/PaginaCardapioRestaurante";
import PaginaLogin from "../pages/PaginaLogin";
import PaginaRestaurantes from "../pages/PaginaRestaurantes";

import { Route, Routes } from "react-router-dom";

function Rotas() {
  return (
    // Qual é o caminho, e o que será exibido naquele caminho
    <Routes>
      <Route path="/" element={<PaginaRestaurantes />} />
      <Route path="/login" element={<PaginaLogin />} />
      <Route path="/busca" element={<PaginaBusca />} />
      <Route path="/:slug/cardapio" element={<PaginaCardapioRestaurante />} />
    </Routes>
  );
}

export default Rotas;
