import React, { useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Productos from "./pages/Productos";
import FormulariosProductos from "./pages/FormulariosProductos";
import Loogin from "./pages/Loogin";
import Inicio from "./pages/Inicio";
import Eliminar from "./pages/Eliminar";
import AuthContext from "./store/auth-context";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const [categoria, setCategoria] = useState("");
  const [subCategoria, setSubCategoria] = useState("");
  const [searchUrl, setSearchUrl] = useState("");
  const [marcaUrl, setMarcaUrl] = useState("");

  const productos = ({ match }) => {
    setCategoria(match.params.categoria);
    return <Productos cat={categoria} />;
  };

  const prod = ({ match }) => {
    setSubCategoria(match.params.subcategoria);
    return <Productos sub={subCategoria} />;
  };

  const busqueda = ({ match }) => {
    setSearchUrl(match.params.search);
    return <Productos sear={searchUrl} />;
  };

  const marcas = ({ match }) => {
    console.log(match.params.brand);
    setMarcaUrl(match.params.brand);
    return <Productos mar={marcaUrl} />;
  };

  return (
    <Layout>
      <Switch>
        <Route path={"/inicio"} exact>
          <Inicio />
        </Route>

        <Route path={"/productos/:categoria"} component={productos} exact />

        <Route
          path={"/productos/:categoria/:subcategoria"}
          component={prod}
          exact
        />

        <Route path={"/busqueda/:search"} component={busqueda} exact />

        <Route path={"/marca/:brand"} component={marcas} exact />

        {isLoggedIn && (
          <Route path={"/formularios"}>
            <FormulariosProductos />
          </Route>
        )}

        {isLoggedIn && (
          <Route path={"/eliminar"}>
            <Eliminar />
          </Route>
        )}

        <Route path={"/loogin"} exact>
          <Loogin />
        </Route>

        <Route path="*">
          <Redirect to="inicio" />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
