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
        <Link to="/detail/egYMZCBTAcKQEc2JfbNZ" className={classes.button}>
          ENTRENAMIENTOS
        </Link>
        <Link to="/detail/LrsME4ETZNymXQEqqAJW" className={classes.button}>
          AVENTURA
        </Link>
        <Link to="/detail/FwjSwam1LmXULHvgAvqC" className={classes.button}>
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
