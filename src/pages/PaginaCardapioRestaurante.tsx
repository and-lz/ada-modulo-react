function PaginaCardapioRestaurante() {
  return (
    <>
      <section>
        <h2>Itens do Restaurante XYZ</h2>
        <p>Cardapio especifico do restaurante escolhido</p>
        <ul
          className="grid"
          role="list"
          style={{ "--max": "200px" } as React.CSSProperties}
        ></ul>
      </section>
    </>
  );
}

export default PaginaCardapioRestaurante;
