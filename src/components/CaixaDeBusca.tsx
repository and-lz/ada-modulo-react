function CaixaDeBusca(props) {
  const { busca, definirBusca } = props;

  // const {search, setSearch}

  return (
    <>
      <input
        type="text"
        placeholder="Pesquisar pelo nome do restaurante, categoria ou descrição."
        id="search"
        value={busca}
        onChange={(e) => definirBusca(e.target.value)}
      />
      <label htmlFor="search">🔎</label>
    </>
  );
}

export default CaixaDeBusca;
