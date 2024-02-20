import { useEffect, useState } from "react";
import CaixaRestaurante, { Restaurante } from "../components/CaixaRestaurante";
import restaurantes from "../data/restaurantsAndItems.json";
import TituloPagina from "../components/TituloPagina";

function PaginaRestaurantes() {
  const [busca, definirBusca] = useState("");
  const [dadosRestaurante, definirDadosRestaurante] = useState([]);

  function buscar({ nome, descricao, categoria }: Restaurante) {
    return (
      valorAtendeABusca(nome) ||
      valorAtendeABusca(categoria) ||
      valorAtendeABusca(descricao)
    );
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      definirDadosRestaurante(restaurantes);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function valorAtendeABusca(valor: string) {
    return valor.toLowerCase().includes(busca.toLowerCase());
  }

  const listaRestaurantes = restaurantes.filter(buscar);

  return (
    <section>
      <TituloPagina>Restaurantes</TituloPagina>
      {!dadosRestaurante.length ? <p>Carregando...</p> : ""}

      {dadosRestaurante.length ? (
        <div>
          <input
            type="text"
            placeholder="Pesquisar pelo nome do restaurante, categoria ou descrição."
            id="search"
            value={busca}
            onChange={(e) => definirBusca(e.target.value)}
          />
          <label htmlFor="search">🔎</label>
          <ul className="grid" role="list">
            {listaRestaurantes.map((restaurante) => (
              <CaixaRestaurante
                key={restaurante.slug}
                restaurante={restaurante}
              />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default PaginaRestaurantes;
