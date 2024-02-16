import CaixaRestaurante from "../components/CaixaRestaurante";
import restaurantes from "../data/restaurantsAndItems.json";

function PaginaRestaurantes() {
  return (
    <section>
      <h1>Restaurantes</h1>
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
