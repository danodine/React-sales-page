import React, { useState, useEffect } from "react";
import Card from "../ui/Card";
import classes from "./Formularios.module.css";
import { Urls, HttpMethods } from "../../shared/constantes";

const FormularioNuevaSubCat = (props) => {
  const [subCat, setSubCat] = useState("");
  const [enteredCat, setEnteredCat] = useState("");
   //state para poder crear la lista de categorias
   const [categoria, setCategoria] = useState([]);


   useEffect(() => {
    const fetchCategorias = async () => {
      const response = await fetch(
        `${Urls.url}${Urls.categorias}`
      );
      const responseData = await response.json();
      const categorias = [];

      for (const key in responseData) {
        categorias.push({
          key: key,
          categoria: responseData[key].categoria,
        });
      }
      setCategoria(categorias);
    };
    fetchCategorias();
  }, []);


  const onChangeHandelerCat = (event) => {
    setEnteredCat(event.target.value);
  };
  const onChangeHandelerSubCat = (event) => {
    setSubCat(event.target.value);
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    const componentesData = {
      categoria: enteredCat,
      subCategoria: subCat,
    };
    props.onAddSubCat(componentesData, Urls.subCategorias, HttpMethods.post);
    setEnteredCat("");
    setSubCat("");
  };

   // para crear la lista de datos de categorias
   const listaCategorias = categoria.map((cat) => (
    <option key={cat.key} value={cat.categoria}>{cat.categoria}</option>
  ));

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandeler}>
        <div className={classes.control}>
          <label htmlFor="categoria">Categoria</label>
          <select
            required
            id="categoria"
            name="categoria"
            onChange={onChangeHandelerCat}
            value={enteredCat}
          >
            <option value=""></option>
            {listaCategorias}
          </select>

          <label htmlFor="subCat">Sub categoria</label>
          <input
            type="text"
            required
            id="subCat"
            onChange={onChangeHandelerSubCat}
            value={subCat}
          />
        </div>
        <div className={classes.actions}>
          <button>Agregar sub categoria</button>
        </div>
      </form>
    </Card>
  );
};

export default FormularioNuevaSubCat;
