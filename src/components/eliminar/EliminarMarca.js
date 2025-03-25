import React, { useState, useEffect } from "react";
import { Urls, HttpMethods } from "../../shared/constantes";
import classes from "./eliminar.module.css";
import addHandeler from "../../services/http-services";

const EliminarMarca = (props) => {
  //state para poder crear la lista de subcategorias
  const [marcas, setMarca] = useState([]);

  // eslint-disable-next-line
  const eliminarHandeler = (id) => {
    addHandeler(null, `marcas/${id}.json`, HttpMethods.delete);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${Urls.url}${Urls.marca}`);
      const responseData = await response.json();
      const data = [];
      //btener los datos para la lista de marcas
      for (const key in responseData) {
        data.push({
          key: key,
          logo: responseData[key].logo,
          marca: responseData[key].marca,
        });
      }
      setMarca(data);
    };
    fetchData();
  }, [eliminarHandeler]);

  //debo implementar el use callback o algo para arreglar que eliminar esta como dependecia de use effect

  const listaMarcas = marcas.map((marca) => (
    <table key={marca.key}>
      <tbody>
        <tr>
          <td className={classes.tdImagen}>
            <img className={classes.imgLogoNav} src={marca.logo} alt={marca.marca} />
          </td>
          <td className={classes.tdContent}>
            <h4>{marca.marca}</h4>
          </td>
          <td className={classes.tdButton}>
            <button
              className={classes.btnEliminar}
              onClick={() => eliminarHandeler(marca.key)}
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
      <h3>Eliminar Marca</h3>
      {listaMarcas}
    </div>
  );
};

export default EliminarMarca;
