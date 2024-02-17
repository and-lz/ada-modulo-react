import { Link, useParams } from "react-router-dom";
import restaurantes from "../data/restaurantsAndItems.json";
import CaixaItemRestaurante from "../components/CaixaItemRestaurante";

function PaginaCardapioRestaurante() {
  const { slug: idDaUrl } = useParams();

  const restaurante = restaurantes.filter(
    (restaurante) => restaurante.slug === idDaUrl
  )[0];

  return (
    <section>
      <Link to={"/"}>‹ Todos os restaurantes</Link>
      <h1>{restaurante.nome}</h1>
      <p className="intro">{restaurante.descricao}</p>
      <input
        type="text"
        id="search"
        placeholder="Pesquisar pelo nome do item ou descrição..."
      />
      <label htmlFor="search">🔎</label>
      <ul
        className="grid"
        role="list"
        style={{ "--max": "300px" } as React.CSSProperties}
      >
        {restaurante.cardapio.map((item) => (
          <>
            <CaixaItemRestaurante item={item} />
          </>
        ))}
      </ul>
    </section>
  );
}

export default PaginaCardapioRestaurante;
