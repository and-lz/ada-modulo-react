import { useState } from "react";
import CaixaRestaurante, { Restaurante } from "../components/CaixaRestaurante";
import restaurantes from "../data/restaurantsAndItems.json";

function PaginaRestaurantes() {
  const [busca, definirBusca] = useState("");

  function buscar(restaurante: Restaurante) {
    return (
      restaurante.nome.toLowerCase().includes(busca.toLowerCase()) ||
      restaurante.categoria.toLowerCase().includes(busca.toLowerCase()) ||
      restaurante.descricao.toLowerCase().includes(busca.toLowerCase())
    );
  }

  const listaRestaurantes = restaurantes.filter(buscar);

  return (
    <section>
      <h1>Restaurantes</h1>
      <input
        type="text"
        placeholder="Pesquisar pelo nome do restaurante, categoria ou descrição."
        id="search"
        onChange={(e) => definirBusca(e.target.value)}
        value={busca}
      />
      <label htmlFor="search">🔎</label>
      <ul className="grid" role="list">
        {listaRestaurantes.map((restaurante) => (
          <CaixaRestaurante key={restaurante.slug} restaurante={restaurante} />
        ))}
      </ul>
    </section>
  );
}

export default PaginaRestaurantes;
