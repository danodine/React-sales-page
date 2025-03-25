import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import { keys } from "../../shared/constantes";

import Card from "../ui/Card";
import AuthContext from "../../store/auth-context";
import classes from "../formularios/Formularios.module.css";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordlInputRef = useRef();

  const authCtx = useContext(AuthContext);

  // const [isLogin, setIsLogin] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);

  const submitHandeler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordlInputRef.current.value;

    //validation

    // setIsLoading(true);
    // let url;
    // if (isLogin) {
    //   url = `${Urls.signIn}${keys.ApiKey}`;
    // } else {
    //   url = `${Urls.signUp}${keys.ApiKey}`;
    // }
    // fetch(url, {
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${keys.ApiKey}`, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/formularios");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandeler}>
        <div className={classes.control}>
          <label htmlFor="correo">Correo</label>
          <input type="text" required id="correo" ref={emailInputRef} />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordlInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Log in</button>
        </div>
      </form>
    </Card>
  );
};
export default AuthForm;
