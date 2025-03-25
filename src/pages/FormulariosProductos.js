import React, { Fragment, useState } from "react";
import NuevoProducto from "../components/NuevoProducto";
import NuevaMarca from "../components/NuevaMarca";
import NuevaCategoria from "../components/NuevaCategoria";
import NuevaSubCat from "../components/NuevaSubCat";

const FormulariosProductos = () => {
    const [nuevoProducto, setNuevoProducto] =useState(true);
    const [nuevaMarca, setNuevaMarca] =useState(false);
    const [nuevaCategoria, setNuevaCategoria] =useState(false);
    const [nuevaSubCategoria, setNuevaSubCategoria] =useState(false);

const nuevoProductoHandeler = () =>{
  setNuevoProducto(true);
  setNuevaMarca(false);
  setNuevaCategoria(false);
  setNuevaSubCategoria(false);
}

const nuevaMarcaHandeler = () =>{
  setNuevoProducto(false);
  setNuevaMarca(true);
  setNuevaCategoria(false);
  setNuevaSubCategoria(false);
}

const nuevaCategoriaHandeler = () =>{
  setNuevoProducto(false);
  setNuevaMarca(false);
  setNuevaCategoria(true);
  setNuevaSubCategoria(false);
}

const nuevaSubCategoriaHandeler = () =>{
  setNuevoProducto(false);
  setNuevaMarca(false);
  setNuevaCategoria(false);
  setNuevaSubCategoria(true);
}
  return (
    <Fragment>
      <div>
        <button onClick={nuevoProductoHandeler}>Agregar producto</button>
        <button onClick={nuevaMarcaHandeler}>Agregar marca</button>
        <button onClick={nuevaCategoriaHandeler}>Agregar categoria</button>
        <button onClick={nuevaSubCategoriaHandeler}>Agregar sub categoria</button>
      </div>
      <div>
          {nuevoProducto && <NuevoProducto/>}
          {nuevaMarca && <NuevaMarca/>}
          {nuevaCategoria && <NuevaCategoria/>}
          {nuevaSubCategoria && <NuevaSubCat/>}
      </div>
    </Fragment>
  );
};

export default FormulariosProductos;
