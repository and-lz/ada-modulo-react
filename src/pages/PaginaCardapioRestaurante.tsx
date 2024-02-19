import { Link, useParams } from "react-router-dom";
import restaurantes from "../data/restaurantsAndItems.json";
import CaixaItemRestaurante from "../components/CaixaItemRestaurante";
import { useState } from "react";

function PaginaCardapioRestaurante() {
  const { slug: idDaUrl } = useParams();
  const [busca, definirBusca] = useState("");

  const restaurante = restaurantes.filter(
    (restaurante) => restaurante.slug === idDaUrl
  )[0];

  const listaItens = restaurante.cardapio.filter((itemCardapio) =>
    itemCardapio.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section>
      <Link to={"/"}>‹ Todos os restaurantes</Link>
      <h1>{restaurante.nome}</h1>
      <p className="intro">{restaurante.descricao}</p>
      <input
        type="text"
        id="search"
        value={busca}
        onChange={(e) => definirBusca(e.target.value)}
        placeholder="Pesquisar pelo nome do item ou descrição..."
      />
      <label htmlFor="search">🔎</label>
      <ul
        className="grid"
        role="list"
        style={{ "--max": "300px" } as React.CSSProperties}
      >
        {listaItens.map((item) => (
          <CaixaItemRestaurante item={item} />
        ))}
      </ul>
    </section>
  );
}

export default PaginaCardapioRestaurante;
