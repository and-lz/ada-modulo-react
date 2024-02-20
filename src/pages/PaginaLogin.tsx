function PaginaLogin() {
  function chamarApi(usuario, senha) {
    console.log("Autorizado");
  }

  return (
    <form
      name="login"
      onSubmit={(event) => {
        event.preventDefault();
        chamarApi(event.target[0].value, event.target[1].value);
      }}
    >
      <input name="usuario" type="text" placeholder="usuário" />
      <label htmlFor="">😃</label>
      <input name="senha" type="password" id="senha" placeholder="senha" />
      <label htmlFor="senha">🔑</label>
      <button>Entrar</button>
    </form>
  );
}

export default PaginaLogin;
