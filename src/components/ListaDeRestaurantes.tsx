import CaixaRestaurante, { Restaurante } from "./CaixaRestaurante";

function ListaDeRestaurantes(props) {
  const { restaurantes } = props;

  return (
    <ul className="grid" role="list">
      {restaurantes.map((restaurante: Restaurante) => (
        <CaixaRestaurante key={restaurante.slug} restaurante={restaurante} />
      ))}
    </ul>
  );
}

export default ListaDeRestaurantes;
