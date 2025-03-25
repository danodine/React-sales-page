import React, { Fragment, useState } from "react";

import EliminarMarca from '../components/eliminar/EliminarMarca'
import EliminarCategoria from '../components/eliminar/EliminarCategoria'
import EliminarSubCat from '../components/eliminar/EliminarSubCat'

const Eliminar = () => {
  const [eliminarMarca, setEliminarMarca] = useState(true);
  const [eliminarCategoria, setEliminarCategoria] = useState(false);
  const [eliminarSubCategoria, setEliminarSubCategoria] = useState(false);


  const eliminarMarcaHandeler = () => {
    setEliminarMarca(true);
    setEliminarCategoria(false);
    setEliminarSubCategoria(false);
  };

  const eliminarCategoriaHandeler = () => {
    setEliminarMarca(false);
    setEliminarCategoria(true);
    setEliminarSubCategoria(false);
  };

  const eliminarSubCategoriaHandeler = () => {
    setEliminarMarca(false);
    setEliminarCategoria(false);
    setEliminarSubCategoria(true);
  };
  return (
    <Fragment>
      <div>
        <button onClick={eliminarMarcaHandeler}>Eliminar marca</button>
        <button onClick={eliminarCategoriaHandeler}>Eliminar categoria</button>
        <button onClick={eliminarSubCategoriaHandeler}>Eliminar sub categoria</button>
      </div>
      <div>
        {eliminarMarca && <EliminarMarca />}
        {eliminarCategoria && <EliminarCategoria />}
        {eliminarSubCategoria && <EliminarSubCat />}
      </div>
    </Fragment>
  );
};

export default Eliminar;
