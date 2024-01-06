import React from "react";
import classes from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import ReactImg2 from "./assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className={classes.container}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className={classes.divlogo}>
        <img onClick={() => navigate("/")} src={ReactImg2} alt="" />
      </div>
      <section className={classes.categories}>
        <Link to="/category/entrenamientos" className={classes.button}>
          ENTRENAMIENTOS
        </Link>

        <Link to="/category/excursiones" className={classes.button}>
          AVENTURA
        </Link>

        <Link to="/category/yoga" className={classes.button}>
          YOGA
        </Link>

        <div className={classes.cartwidget}>
          <CartWidget />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
