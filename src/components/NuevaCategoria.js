import React, { Fragment } from "react";
import FormularioNuevaCategoria from "./formularios/FormularioNuevaCategoria";
import addHandeler from "../services/http-services";

const NuevaCategoria = () => {
  return (
    <Fragment>
      <h2>Agregar Nueva Categoria</h2>
      <FormularioNuevaCategoria onAddCategoria={addHandeler} />
    </Fragment>
  );
};

export default NuevaCategoria;
