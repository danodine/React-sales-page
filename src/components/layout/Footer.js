import { SocialIcon } from "react-social-icons";
import { redes } from "../../shared/constantes";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.content}>
      <SocialIcon
        url={redes.facebook}
        bgColor="#343a40"
        fgColor="#ffffff"
        target="_blank"
      />
      <SocialIcon
        url={redes.instagram}
        bgColor="#343a40"
        fgColor="#ffffff"
        target="_blank"
      />
      <SocialIcon
        url={redes.youtube}
        bgColor="#343a40"
        fgColor="#ffffff"
        target="_blank"
      />
    </div>
  );
};

export default Footer;
