interface Restaurante {
  nome: string;
  avaliacao: number;
  categoria: string;
  tempoEntrega: number;
  valorEntrega: number;
  descricao: string;
}

interface CaixaRestauranteProps {
  restaurante: Restaurante;
}

function CaixaRestaurante(props: CaixaRestauranteProps) {
  const {
    restaurante: {
      nome,
      avaliacao,
      categoria,
      tempoEntrega,
      valorEntrega,
      descricao,
    },
  } = props;

  return (
    <li className="restaurant-box">
      <h1>{nome}</h1>
      <div className="details">
        <span className="small-details">{avaliacao}</span>
        <span className="small-details">{categoria}</span>
        <span className="small-details">{tempoEntrega}</span>
        <span className="small-details">{valorEntrega}</span>
      </div>
      <p>{descricao}</p>
    </li>
  );
}

export default CaixaRestaurante;
