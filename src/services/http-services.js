import { Urls } from "../shared/constantes";

const addHandeler = (data, tab, method) => {
    fetch(
      `${Urls.url}${tab}`,
      {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Contet-Type": "application/json",
        },
      }
    );
  };
  
  export default addHandeler;