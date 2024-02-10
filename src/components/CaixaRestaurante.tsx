interface CaixaRestauranteProps {
  restaurante: {
    nome: string;
    avaliacao: number;
    categoria: string;
    tempoEntrega: number;
    descricao: string;
  };
}

function CaixaRestaurante(props: CaixaRestauranteProps) {
  const {
    restaurante: { nome, avaliacao, categoria, tempoEntrega, descricao },
  } = props;
  //   const { categoria, nome = "Padrão" } = props;
  //   const categoria = props.categoria;
  //   const nome = props.nome;

  return (
    <>
      <li className="restaurant-box">
        <h1>{nome}</h1>
        <div className="details">
          <span className="small-details">{avaliacao}</span>
          <span className="small-details">{categoria}</span>
          <span className="small-details">{tempoEntrega}</span>
        </div>
        <p>{descricao}</p>
      </li>
    </>
  );
}

export default CaixaRestaurante;
