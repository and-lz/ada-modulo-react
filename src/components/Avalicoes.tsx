import { useState } from "react";

function Avaliacoes(props) {
  const avaliacao = props.avaliacao;
  const [nota, definirNota] = useState();

  if (avaliacao) return <>⭐ {avaliacao}</>;

  return (
    <>
      {nota ? (
        "Nota:" + nota
      ) : (
        <>
          <button onClick={() => definirNota(1)}>1</button>
          <button onClick={() => definirNota(2)}>2</button>
          <button onClick={() => definirNota(3)}>3</button>
          <button onClick={() => definirNota(4)}>4</button>
          <button onClick={() => definirNota(5)}>5</button>
        </>
      )}
    </>
  );
}

export default Avaliacoes;
