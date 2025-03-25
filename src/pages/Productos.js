import React, { useState, useEffect } from "react";
import { Urls, HttpMethods } from "../shared/constantes";
import ProductList from "../components/productos/ProductList";

import addHandeler from "../services/http-services";

const Productos = (props) => {
  //const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  // eslint-disable-next-line
  const eliminarHandeler = (id) => {
    addHandeler(null, `productos/${id}.json`, HttpMethods.delete);
  };

  useEffect(() => {
    let mounted = true;
    const fetchProductos = async () => {
      const response = await fetch(`${Urls.url}${Urls.productos}`);
      const responseData = await response.json();
      const productos = [];

      for (const key in responseData) {
        const producto = {
          id: key,
          ...responseData[key],
        };
        productos.push(producto);
      }
      if (mounted) {
        setLoadedProducts(productos);
      }
    };

    fetchProductos();
    return () => (mounted = false);
  }, [eliminarHandeler]);

  return (
    <ProductList
      listaProductos={loadedProducts}
      cat={props.cat}
      sub={props.sub}
      sear={props.sear}
      mar={props.mar}
      eliminar={eliminarHandeler}
    />
  );
};

export default Productos;
