import React, { Fragment } from "react";
import FormularioNuevaMarca from "./formularios/FormularioNuevaMarca";
import addHandeler from "../services/http-services";

const NuevoProducto = () => {
  return (
    <Fragment>
      <h2>Agregar Nueva Marca</h2>
      <FormularioNuevaMarca onAddMarca={addHandeler} />
    </Fragment>
  );
};

export default NuevoProducto;
