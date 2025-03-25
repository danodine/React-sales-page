import React, { useState } from "react";

import Card from "../ui/Card";
import { Urls, HttpMethods } from "../../shared/constantes";
import classes from "./Formularios.module.css";

const FormularioNuevaMarca = (props) => {
  const [marca, setMarca] = useState("");
  const [logo, setLogo] = useState("");

  const onChangeHandelerMarca = (event) => {
    setMarca(event.target.value);
  };
  const onChangeHandelerLogo = (event) => {
    setLogo(event.target.value);
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    const componentesData = {
      marca: marca,
      logo: logo,
    };
    props.onAddMarca(componentesData, Urls.marca, HttpMethods.post);
    setMarca("");
    setLogo("");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandeler}>
        <div className={classes.control}>
          <label htmlFor="marca">Nombre de la marca</label>
          <input
            type="text"
            required
            id="marca"
            onChange={onChangeHandelerMarca}
            value={marca}
          />

          <label htmlFor="logo">Logo</label>
          <input
            type="url"
            required
            id="logo"
            onChange={onChangeHandelerLogo}
            value={logo}
          />
        </div>
        <div className={classes.actions}>
          <button>Agregar marca</button>
        </div>
      </form>
    </Card>
  );
};

export default FormularioNuevaMarca;
