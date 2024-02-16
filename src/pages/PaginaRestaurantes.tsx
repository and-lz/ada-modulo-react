import CaixaRestaurante from "../components/CaixaRestaurante";
import restaurantes from "../data/restaurantsAndItems.json";

function PaginaRestaurantes() {
  return (
    <section>
      <h1>Restaurantes</h1>
      <input
        type="text"
        placeholder="Pesquisar pelo nome do restaurante, categoria ou descrição."
        id="search"
      />
      <label htmlFor="search">🔎</label>
      <ul className="grid" role="list">
        {restaurantes.map((restaurante) => (
          <button>
            <CaixaRestaurante
              key={restaurante.slug}
              restaurante={restaurante}
            />
          </button>
        ))}
      </ul>
    </section>
  );
}

export default PaginaRestaurantes;
