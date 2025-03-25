import React, { useState, useEffect } from "react";
import { Urls, HttpMethods } from "../../shared/constantes";
import addHandeler from "../../services/http-services";
import classes from "./eliminar.module.css";

const EliminarCategoria = () => {
  //state para poder crear la lista de categorias
  const [categoria, setCategoria] = useState([]);

  // eslint-disable-next-line
  const eliminarHandeler = (id) => {
    addHandeler(null, `categorias/${id}.json`, HttpMethods.delete);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${Urls.url}${Urls.categorias}`);
      const responseData = await response.json();
      const data = [];

      //obtener los datos para la lista de categorias

      for (const key in responseData) {
        data.push({
          key: key,
          categoria: responseData[key].categoria,
        });
      }
      setCategoria(data);
    };
    fetchData();
  }, [eliminarHandeler]);

  const listaCategorias = categoria.map((cat) => (
    <table key={cat.key}>
      <tbody>
        <tr>
          <td className={classes.tdContent}>
            <h4>{cat.categoria}</h4>
          </td>
          <td className={classes.tdButton}>
            <button
              className={classes.btnEliminar}
              onClick={() => {
                eliminarHandeler(cat.key);
              }}
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  ));

  return (
    <div>
      <h3>Eliminar Categoria</h3>
      {listaCategorias}
    </div>
  );
};

export default EliminarCategoria;
