import CaixaRestaurante from "../components/CaixaRestaurante";
import restaurantes from "../data/restaurantsAndItems.json";

function PaginaRestaurantes() {
  return (
    <section>
      <h2>Restaurantes</h2>
      <ul className="grid" role="list">
        {restaurantes.map((restaurante) => (
          <button>
            <CaixaRestaurante
              key={restaurante.nome}
              restaurante={restaurante}
            />
          </button>
        ))}
      </ul>
    </section>
  );
}

export default PaginaRestaurantes;
