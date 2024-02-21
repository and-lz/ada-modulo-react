import { useState } from "react";
import CaixaDeBusca from "../components/CaixaDeBusca";
import TituloPagina from "../components/TituloPagina";
import ListaDeRestaurantes from "../components/ListaDeRestaurantes";

import restaurantes from "../data/restaurantsAndItems.json";
import { Restaurante } from "../components/CaixaRestaurante";

function PaginaBusca() {
  const [busca, definirBusca] = useState("");

  function buscar({ nome, descricao, categoria }: Restaurante) {
    return (
      valorAtendeABusca(nome) ||
      valorAtendeABusca(categoria) ||
      valorAtendeABusca(descricao)
    );
  }

  function valorAtendeABusca(valor: string) {
    return valor.toLowerCase().includes(busca.toLowerCase());
  }

  const listaRestaurantes = restaurantes.filter(buscar);

  return (
    <>
      <TituloPagina>Buscar</TituloPagina>
      <CaixaDeBusca busca={busca} definirBusca={definirBusca} />
      {busca ? <ListaDeRestaurantes restaurantes={listaRestaurantes} /> : <></>}
    </>
  );
}

export default PaginaBusca;
