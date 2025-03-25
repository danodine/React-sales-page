import ProductItem from "./ProductItem";

import classes from "./ProductList.module.css";
const ProductList = (props) => {
  const productos = props.listaProductos;

  const filterCat = productos.filter(
    (producto) => producto.categoria === props.cat
  );
  const filterSubCat = productos.filter(
    (producto) => producto.subCat === props.sub
  );

  const filterSearch = productos.filter(
    (producto) =>
      producto.titulo.toLowerCase().includes(props.sear) ||
      producto.description.toLowerCase().includes(props.sear) ||
      producto.marca.toLowerCase().includes(props.sear)
  );

  const filterMarca = productos.filter(
    (producto) => producto.marca === props.mar
  );

  const eliminar = (elim) => {
    const el = elim;
    props.eliminar(el);
  };

  let print;
  if (filterCat.length > 0) {
    print = filterCat.map((productos) => (
      <ProductItem
        id={productos.id}
        categoria={productos.categoria}
        description={productos.description}
        foto={productos.foto}
        marca={productos.marca}
        precio={productos.precio}
        subCat={productos.subCat}
        titulo={productos.titulo}
        onEliminar={eliminar}
      />
    ));
  } else if (filterSubCat.length > 0) {
    print = filterSubCat.map((productos) => (
      <ProductItem
        id={productos.id}
        categoria={productos.categoria}
        description={productos.description}
        foto={productos.foto}
        marca={productos.marca}
        precio={productos.precio}
        subCat={productos.subCat}
        titulo={productos.titulo}
      />
    ));
  } else if (filterSearch.length > 0) {
    print = filterSearch.map((productos) => (
      <ProductItem
        id={productos.id}
        categoria={productos.categoria}
        description={productos.description}
        foto={productos.foto}
        marca={productos.marca}
        precio={productos.precio}
        subCat={productos.subCat}
        titulo={productos.titulo}
      />
    ));
  } else if (filterMarca.length > 0) {
    print = filterMarca.map((productos) => (
      <ProductItem
        id={productos.id}
        categoria={productos.categoria}
        description={productos.description}
        foto={productos.foto}
        marca={productos.marca}
        precio={productos.precio}
        subCat={productos.subCat}
        titulo={productos.titulo}
      />
    ));
  } else {
    print = <div>no hay elementos</div>;
  }

  return <ul className={classes.list}>{print}</ul>;
};

export default ProductList;
