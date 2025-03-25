import React, { useEffect, useState } from "react";
import { Urls, logos } from "../shared/constantes";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classes from "./inicio.module.css";
const Inicio = () => {
  const [marcas, setMarca] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${Urls.url}${Urls.marca}`);
      const responseData = await response.json();
      const data = [];
      //btener los datos para la lista de marcas
      for (const key in responseData) {
        data.push({
          key: key,
          logo: responseData[key].logo,
          marca: responseData[key].marca,
        });
      }
      setMarca(data);
    };
    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1201 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1025 },
      items: 4,
    },
    smallScreens: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 481 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 320 },
      items: 1,
    },
  };

  const filteredMarcas = marcas.map((marca) => (
    <Link to={`/marca/${marca.marca}`}>
      <img className={classes.marcasImg} src={marca.logo} alt={marca.marca} />
    </Link>
  ));

  return (
    <div className={classes.mainContainer}>
      <div className={classes.divMain}>
        <img src={logos.inicioHead} alt="Principal" />
      </div>

      <div className={classes.container1}>
        <img src={logos.iniciobody1} alt="body1" />
      </div>
      <div className={classes.container1}>
        <img src={logos.iniciobody2} alt="body2" />
      </div>

      <div className={classes.sobre}>
        <div className={classes.sobreHead}>
          <h3>xxx bikes ciclismo pación</h3>
        </div>
        <div className={classes.sobreBody}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className={classes.caruselContainer}>
        <div className={classes.caruselHead}>
          <h3>MARCAS</h3>
        </div>

        <Carousel responsive={responsive}>{filteredMarcas}</Carousel>
      </div>
    </div>
      </div>

      
  );
};
export default Inicio;
