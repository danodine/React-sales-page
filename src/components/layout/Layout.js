import Navegacion from "./Navegacion";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {

  return (
    <div>
      <Navegacion />
      <main className={classes.container}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
