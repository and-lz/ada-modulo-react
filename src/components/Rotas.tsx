import PaginaCardapioRestaurante from "../pages/PaginaCardapioRestaurante";
import PaginaRestaurantes from "../pages/PaginaRestaurantes";

import { Route, Routes } from "react-router-dom";
import Detalhes from "./Detalhes";

function Rotas() {
  return (
    // Qual é o caminho, e o que será exibido naquele caminho
    <Routes>
      <Route path="/" element={<PaginaRestaurantes />} />
      <Route path="/:id/:categoria/detalhes" element={<Detalhes />} />
      <Route path="/busca" element={<Detalhes />} />
      <Route path="/:slug/cardapio" element={<PaginaCardapioRestaurante />} />
    </Routes>
  );
}

export default Rotas;
