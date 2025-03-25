import React, { useState, useEffect } from "react";
import Card from "../ui/Card";
import { Urls, HttpMethods} from "../../shared/constantes";
import classes from "./Formularios.module.css";

const FormularioNuevoProducto = (props) => {
  // state para los datos ingresados por teclado
  const [enteredCat, setEnteredCat] = useState("");
  const [enteredSubCat, setEnteredSubCat] = useState("");
  const [enteredTit, setEnteredTit] = useState("");
  const [enteredMarca, setEnteredMarca] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredImg, setEnteredImg] = useState("");
  const [enteredPre, setEnteredPre] = useState("");

  //state para poder crear la lista de categorias
  const [categoria, setCategoria] = useState([]);
  //state para poder crear la lista de subcategorias
  const [subCat, setSubCat] = useState([]);
  //state para poder crear la lista de subcategorias
  const [marcas, setMarca] = useState([]);

  useEffect(() => {
    const urlCat = `${Urls.url}${Urls.categorias}`;
    const urlSubCat = `${Urls.url}${Urls.subCategorias}`;
    const urlMarca = `${Urls.url}${Urls.marca}`;

    const fetchData = async (url) => {
      const response = await fetch(url);
      const responseData = await response.json();
      const data = [];

      //obtener los datos para la lista de categorias
      if (url === urlCat) {
        for (const key in responseData) {
          data.push({
            key: key,
            categoria: responseData[key].categoria,
          });
        }
        setCategoria(data);
      } else if (url === urlSubCat) {
        //obtener los datos para la lista de subcategorias
        for (const key in responseData) {
          data.push({
            key: key,
            categoria: responseData[key].categoria,
            subCategoria: responseData[key].subCategoria,
          });
        }
        setSubCat(data);
      } else if (url === urlMarca) {
        //btener los datos para la lista de marcas
        for (const key in responseData) {
          data.push({
            key: key,
            logo: responseData[key].logo,
            marca: responseData[key].marca,
          });
        }
        setMarca(data);
      }
    };
    fetchData(urlCat);
    fetchData(urlSubCat);
    fetchData(urlMarca);
  }, []);

  //setear los valores de los datos ingresados por teclado
  const onChangeHandelerCat = (event) => {
    setEnteredCat(event.target.value);
  };
  const onChangeHandelerSubCat = (event) => {
    setEnteredSubCat(event.target.value);
  };
  const onChangeHandelerTit = (event) => {
    setEnteredTit(event.target.value);
  };
  const onChangeHandelerMarca = (event) => {
    setEnteredMarca(event.target.value);
  };
  const onChangeHandelerDesc = (event) => {
    setEnteredDesc(event.target.value);
  };
  const onChangeHandelerImg = (event) => {
    setEnteredImg(event.target.value);
  };
  const onChangeHandelerPre = (event) => {
    setEnteredPre(event.target.value);
  };

  //para enviar los datos ingresados por teclado
  const submitHandeler = (event) => {
    event.preventDefault();

    const productData = {
      categoria: enteredCat,
      subCat: enteredSubCat,
      titulo: enteredTit,
      marca: enteredMarca,
      description: enteredDesc,
      foto: enteredImg,
      precio: enteredPre,
    };

    props.onAddProducto(productData, Urls.productos, HttpMethods.post);

    setEnteredCat("");
    setEnteredSubCat("");
    setEnteredTit("");
    setEnteredMarca("");
    setEnteredDesc("");
    setEnteredImg("");
    setEnteredPre("");
  };

  // para crear la lista de datos de categorias
  const listaCategorias = categoria.map((cat) => (
    <option key={cat.key} value={cat.categoria}>{cat.categoria}</option>
  ));
  // para crear la lista de datos de sub categorias basadas en la categoria
  const listaSubCat = subCat.map((sub) => {
    if (enteredCat === sub.categoria) {
      return <option key={sub.key} value={sub.subCategoria}>{sub.subCategoria}</option>;
    }else{
      return null
    }
  });

  
  // para crear la lista de datos de marcas
  const listaMArcas = marcas.map((mar) => (
    <option key={mar.key} value={mar.marca}>{mar.marca}</option>
  ));
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandeler}>
        <div className={classes.control}>
          <label htmlFor="categoria">Categoria</label>
          <select
            required
            id="categoria"
            name="categoria"
            onChange={onChangeHandelerCat}
            value={enteredCat}
          >
            <option value=""></option>
            {listaCategorias}
          </select>

          <label htmlFor="subCategoria">Sub ategoria</label>
          <select
            required
            id="subCategoria"
            name="subCategoria"
            onChange={onChangeHandelerSubCat}
            value={enteredSubCat}
          >
            <option value=""></option>
            {listaSubCat}
          </select>

          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            required
            id="titulo"
            onChange={onChangeHandelerTit}
            value={enteredTit}
          />

          <label htmlFor="marca">Marca</label>
          <select
            required
            id="marca"
            name="marca"
            onChange={onChangeHandelerMarca}
            value={enteredMarca}
          >
            <option value=""></option>
            {listaMArcas}
          </select>

          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            required
            rows="5"
            onChange={onChangeHandelerDesc}
            value={enteredDesc}
          ></textarea>

          <label htmlFor="imagen">Imagen</label>
          <input
            type="url"
            required
            id="imagen"
            onChange={onChangeHandelerImg}
            value={enteredImg}
          />

          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            required
            id="precio"
            onChange={onChangeHandelerPre}
            value={enteredPre}
          />
        </div>
        <div className={classes.actions}>
          <button>Agregar producto</button>
        </div>
      </form>
    </Card>
  );
};

export default FormularioNuevoProducto;
