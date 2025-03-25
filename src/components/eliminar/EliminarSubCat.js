import React, { useState, useEffect, Fragment } from "react";
import { Urls, HttpMethods } from "../../shared/constantes";
import addHandeler from "../../services/http-services";
import classes from "./eliminar.module.css";

const EliminarSubCat = () => {
  //state para poder crear la lista de subcategorias
  const [subCategoria, setSubCategoria] = useState([]);

  // eslint-disable-next-line
  const eliminarHandeler = (id) => {
    addHandeler(null, `subCategorias/${id}.json`, HttpMethods.delete);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${Urls.url}${Urls.subCategorias}`);
      const responseData = await response.json();
      const data = [];

      for (const key in responseData) {
        data.push({
          key: key,
          categoria: responseData[key].categoria,
          subCategoria: responseData[key].subCategoria,
        });
      }
      setSubCategoria(data);
    };
    fetchData();
  }, [eliminarHandeler]);

  const listaSubCat = subCategoria.map((subCat) => (
    <table key={subCat.key}>
      <tbody>
        <tr>
          <td className={classes.tdContent}>
            <h4>{subCat.subCategoria}</h4>
          </td>
          <td className={classes.tdButton}>
            <button
              className={classes.btnEliminar}
              onClick={() => {
                eliminarHandeler(subCat.key);
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
    <Fragment>
      <h3>Eliminar Sub-Categoria</h3>
      {listaSubCat}
    </Fragment>
  );
};

export default EliminarSubCat;
