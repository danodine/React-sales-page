import React, { Fragment } from "react";
import FormularioNuevaSubCat from "./formularios/FormularioNuevaSubCat";
import addHandeler from "../services/http-services";

const NuevaSubCat = () => {

  return (
    <Fragment>
      <h2>Agregar Nueva SubCategoria</h2>
      <FormularioNuevaSubCat onAddSubCat={addHandeler} />
    </Fragment>
  );
};

export default NuevaSubCat;
