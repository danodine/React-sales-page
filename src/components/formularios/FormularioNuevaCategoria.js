import React, { useState } from "react";

import Card from "../ui/Card";
import { Urls, HttpMethods } from "../../shared/constantes";
import classes from "./Formularios.module.css";

const FormularioNuevaCategoria = (props) => {
  const [categoria, setcategoria] = useState("");

  const onChangeHandelerCategoria = (event) => {
    setcategoria(event.target.value);
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    const componentesData = {
      categoria: categoria,
    };
    props.onAddCategoria(componentesData, Urls.categorias, HttpMethods.post);

    setcategoria("");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandeler}>
        <div className={classes.control}>
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            required
            id="categoria"
            onChange={onChangeHandelerCategoria}
            value={categoria}
          />
        </div>
        <div className={classes.actions}>
          <button>Agregar categoria</button>
        </div>
      </form>
    </Card>
  );
};

export default FormularioNuevaCategoria;
