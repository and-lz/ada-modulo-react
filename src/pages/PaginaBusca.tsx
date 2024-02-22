import { useState } from "react";
import CaixaDeBusca from "../components/CaixaDeBusca";
import TituloPagina from "../components/TituloPagina";
import ListaDeRestaurantes from "../components/ListaDeRestaurantes";

import todosRestaurantes from "../data/restaurantsAndItems.json";
import { Restaurante } from "../components/CaixaRestaurante";

function PaginaBusca() {
  const [filtro, definirFiltro] = useState("");

  function aplicarCriteriosDeBusca({
    nome,
    descricao,
    categoria,
  }: Restaurante) {
    return (
      valorContemTextoFiltro(nome) ||
      valorContemTextoFiltro(categoria) ||
      valorContemTextoFiltro(descricao)
    );
  }

  function valorContemTextoFiltro(valor: string) {
    return valor.toLowerCase().includes(filtro.toLowerCase());
  }

  const restauranteFiltados = todosRestaurantes.filter(aplicarCriteriosDeBusca);

  return (
    <>
      <TituloPagina>Buscar</TituloPagina>
      <CaixaDeBusca busca={filtro} definirBusca={definirFiltro} />
      {filtro ? (
        <ListaDeRestaurantes restaurantes={restauranteFiltados} />
      ) : (
        <></>
      )}
    </>
  );
}

export default PaginaBusca;
