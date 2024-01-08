import { useEffect, useState } from "react";
import React from "react";
import classes from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import ReactImg2 from "./assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const categoriesCollection = query(
      collection(db, "categories"),
      orderBy("name", "desc")
    );

    getDocs(categoriesCollection).then((querySnapshot) => {
      console.log(querySnapshot);
      const categoriesAdapted = querySnapshot.docs.map((doc) => {
        const fields = doc.data();
        return { id: doc.id, ...fields };
      });

      setCategories(categoriesAdapted);
    });
  }, []);

  return (
    <nav
      className={classes.container}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className={classes.divlogo}>
        <img onClick={() => navigate("/")} src={ReactImg2} alt="" />
      </div>
      <section className={classes.categories}>
        {categories.map((cat) => {
          return (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className={classes.button}
            >
              {cat.name}
            </Link>
          );
        })}

        {/* <Link to="/category/entrenamientos" className={classes.button}>
          ENTRENAMIENTOS
        </Link>

        <Link to="/category/excursiones" className={classes.button}>
          EXCURSIONES
        </Link>

        <Link to="/category/yoga" className={classes.button}>
          YOGA
        </Link> */}

        <div className={classes.cartwidget} onClick={() => navigate("/cart")}>
          <CartWidget />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
