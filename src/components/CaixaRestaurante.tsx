import { Link } from "react-router-dom";
import Avaliacoes from "./Avalicoes";

export interface Restaurante {
  nome: string;
  slug: string;
  avaliacao: number;
  categoria: string;
  tempoEntrega: number;
  descricao: string;
}
interface CaixaRestauranteProps {
  restaurante: Restaurante;
}

function CaixaRestaurante(props: CaixaRestauranteProps) {
  const {
    restaurante: { nome, avaliacao, categoria, tempoEntrega, descricao, slug },
  } = props;

  return (
    <li className="restaurant-box">
      <Link to={`${slug}/cardapio`}>
        <h2>📍 {nome}</h2>
        <div className="details">
          <span className="small-details">{categoria}</span>
          <span className="small-details">
            <Avaliacoes avaliacao={avaliacao} />
          </span>
          <span className="small-details">🚚 {tempoEntrega} mins</span>
        </div>
        <p>{descricao}</p>
      </Link>
    </li>
  );
}

export default CaixaRestaurante;
