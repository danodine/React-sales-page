import React, { useContext, useState } from "react";
import Card from "../ui/Card";
import AuthContext from "../../store/auth-context";

import { HttpMethods } from "../../shared/constantes";
import addHandeler from "../../services/http-services";

import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const [enteredTit, setEnteredTit] = useState(props.titulo);
  const [enteredDesc, setEnteredDesc] = useState(props.description);
  const [enteredImg, setEnteredImg] = useState(props.foto);
  const [enteredPre, setEnteredPre] = useState(props.precio);

  const onChangeHandelerTit = (event) => {
    setEnteredTit(event.target.value);
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

  const eliminarHandeler = () => {
    props.onEliminar(props.id);
  };

  const updateHandeler = (event) => {
    event.preventDefault();

    const productData = {
      categoria: props.categoria,
      subCat: props.subCat,
      titulo: enteredTit,
      marca: props.marca,
      description: enteredDesc,
      foto: enteredImg,
      precio: enteredPre,
    };
    addHandeler(productData, `productos/${props.id}.json`, HttpMethods.update);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.foto} alt={props.titulo} />
        </div>
        <div className={classes.content}>
          <h3>{props.titulo}</h3>
          <p>{props.description}</p>
          <p className={classes.price}>${props.precio}</p>
        </div>

        {isLoggedIn && (
          <div className={classes.content}>
            <div className={classes.actions}>
              <button onClick={eliminarHandeler}>Eliminar</button>
            </div>
            <form className={classes.form} onSubmit={updateHandeler}>
              <div className={classes.control}>
                <label htmlFor="description">Descripción</label>
                <input
                  value={enteredDesc}
                  onChange={onChangeHandelerDesc}
                  type="text"
                  id="description"
                />
                <label htmlFor="foto">Imagen</label>
                <input
                  value={enteredImg}
                  onChange={onChangeHandelerImg}
                  type="url"
                  id="foto"
                />

                <label htmlFor="precio">Precio</label>
                <input
                  value={enteredPre}
                  onChange={onChangeHandelerPre}
                  type="text"
                  id="precio"
                />

                <label htmlFor="titulo">Titulo</label>
                <input
                  value={enteredTit}
                  onChange={onChangeHandelerTit}
                  type="text"
                  id="titulo"
                />
              </div>
              <div className={classes.actions}>
                <button>Actualizar</button>
              </div>
            </form>
          </div>
        )}
      </Card>
    </li>
  );
};

export default ProductItem;
