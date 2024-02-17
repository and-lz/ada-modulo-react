# Como definir Rotas numa aplicação React

0. Precisar ter o Node instalado na tua máquina. Caso não tenha, site do node, e instalar para a tua plataforma.
1. Instalar a dependência do react router
   `npm i react-router-dom`
2. Involver teu <App /> dentro do componente <BrowserRouter /> da Lib, geralmente num projeto vindo do Vite, isso ocorre no arquivo `main.tsx`
3. Criar um componente de <Rotas />, e nele conter, o componentes <Routes />, da própria lib, e dentro dele, o mapeamento de nossas páginas, para uma URL, seja ela estática ou dinâmica. Para ver exemplo, consultar o arquivo `Rotas.tsx`
4. Pegar componente de Rotas, definido no passo anterior, e renderizar no <App />

# Como navegar na aplicação, via links

1. Importar o componente <Link /> da lib react router dom.
   `import { Link } from "react-router-dom";``
2. Usar o componente do passo anterior, passando a prop `to``
<Link to="/url/mapeada/no/passo 3/da/sessão/anterior">
    [conteudo]
</Link>
3. Caso seja para uma URL dinâmica, não esquecer de passar como formar a url dinamica na prop `to`
<Link to=`/detalhes/${id}`} />
    [conteudo]
</Link>

# Como criar rotas de URL dinâmicas

1. No arquivo de Rotas, ou componente de Rotas, no componente <Route>, especificar no `path`, parametros dinâmicos usando `:`
   <Route path="caminho/para/pagina/:id">
   sendo ID a parte dinâmica
2. Na página que a rota dinamica exibirá, para pegar o valor dinâmico, usamos o hook da lib `useParams()`
   No corpo da página, usar da seguinte forma, conforme página de cardapio:
   ```js
   const { id } = useParams();
   ```
