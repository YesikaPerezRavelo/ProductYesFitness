import React from "react";
import classes from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import ReactImg2 from "./assets/logo.png";

const NavBar = () => {
  return (
    <nav
      className={classes.container}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className={classes.divlogo}>
        <img src={ReactImg2} alt="" />
      </div>
      <section className={classes.categories}>
        <button className={classes.button}>ENTRENAMIENTOS</button>
        <button className={classes.button}>AVENTURA</button>
        <button className={classes.button}>MASAJES</button>
        <button className={classes.button}>YOGA</button>
        <div className={classes.cartwidget}>
          <CartWidget />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
