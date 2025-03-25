import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Urls, logos } from "../../shared/constantes";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AuthContext from "../../store/auth-context";
import Search from "./Search";

import "./Navegacion.css";

const Navgacion = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const loogoutHandeler = () => {
    authCtx.logout();
  };

  //state para poder crear la lista de categorias
  const [categoria, setCategoria] = useState([]);

  //state para poder crear la lista de subcategorias
  const [subCat, setSubCat] = useState([]);

  //get request para obtener los datos para la lista de categorias
  useEffect(() => {
    const urlCat = `${Urls.url}${Urls.categorias}`;
    const urSublCat = `${Urls.url}${Urls.subCategorias}`;

    const fetchData = async (url) => {
      const response = await fetch(url);
      const responseData = await response.json();
      const data = [];

      if (url === urlCat) {
        for (const key in responseData) {
          data.push({
            key: key,
            categoria: responseData[key].categoria,
          });
        }
        setCategoria(data);
      } else if (url === urSublCat) {
        for (const key in responseData) {
          data.push({
            key: key,
            categoria: responseData[key].categoria,
            subCategoria: responseData[key].subCategoria,
          });
        }
        setSubCat(data);
      }
    };
    fetchData(`${Urls.url}${Urls.categorias}`);
    fetchData(urSublCat);
  }, []);

  // mapeo del menu con las categorias d ela base
  const listaCategorias = categoria.map((cat) => {
    return (
      <div key={cat.key} className="dropdown">
        <button className="dropbtn">
          <NavLink
            activeClassName="activeMenu"
            to={`/productos/${cat.categoria}`}
            className="fa fa-caret-down"
          >
            {cat.categoria}
          </NavLink>
        </button>
        <div className="dropdown-content">
          {subCat.map((sub) => {
            if (cat.categoria === sub.categoria) {
              return (
                <NavLink
                  key={sub.key}
                  activeClassName="activeMenu"
                  to={`/productos/${cat.categoria}/${sub.subCategoria}`}
                  value={sub.subCategoria}
                >
                  {sub.subCategoria}
                </NavLink>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  });

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <NavLink to="/inicio" exact>
            <img className="img" alt="logo" src={logos.logoNav} />
          </NavLink>
        </Navbar.Brand>

        <Search />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">{listaCategorias}</Nav>
          <Nav>
            {isLoggedIn && (
              <LinkContainer to="/formularios" exact>
                <Nav.Link>Agregar</Nav.Link>
              </LinkContainer>
            )}

            {isLoggedIn && (
              <LinkContainer to="/eliminar" exact>
                <Nav.Link>Eliminar</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          <Nav>
            {!isLoggedIn && (
              <LinkContainer to="/loogin">
                <Nav.Link>log In</Nav.Link>
              </LinkContainer>
            )}
            {isLoggedIn && (
              <LinkContainer to="/inicio" onClick={loogoutHandeler}>
                <Nav.Link>log Out</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navgacion;
