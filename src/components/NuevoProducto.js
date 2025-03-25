import React, { Fragment } from "react";
import FormularioNuevoProducto from "./formularios/FormularioNuevoProducto";
import addHandeler from "../services/http-services";

const NuevoProducto = () => {
  return (
    <Fragment>
      <h2>Agregar Nuevo Producto</h2>
      <FormularioNuevoProducto onAddProducto={addHandeler} />
    </Fragment>
  );
};

export default NuevoProducto;
