function BuscaRestaurante(props) {
  const { busca, definirBusca } = props;
  return (
    <input
      type="text"
      placeholder="Pesquisar pelo nome do restaurante, categoria ou descrição."
      id="search"
      value={busca}
      onChange={(e) => definirBusca(e.target.value)}
    />
  );
}

export default BuscaRestaurante;
