import PaginaCardapioRestaurante from "../pages/PaginaCardapioRestaurante";
import PaginaRestaurantes from "../pages/PaginaRestaurantes";

import { Route, Routes } from "react-router-dom";

function Rotas() {
  return (
    // Qual é o caminho, e o que será exibido naquele caminho
    <Routes>
      <Route path="/" element={<PaginaRestaurantes />} />
      <Route path="/:slug/cardapio" element={<PaginaCardapioRestaurante />} />
    </Routes>
  );
}

export default Rotas;
