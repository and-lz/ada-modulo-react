import CaixaRestaurante from "../components/CaixaRestaurante";
import TituloPagina from "../components/TituloPagina";
import restaurantes from "../data/restaurantsAndItems.json";

function PaginaRestaurantes() {
  return (
    <section>
      <TituloPagina>Restaurantes</TituloPagina>
      <div>
        <ul className="grid" role="list">
          {restaurantes.map((restaurante) => (
            <CaixaRestaurante
              key={restaurante.slug}
              restaurante={restaurante}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PaginaRestaurantes;
