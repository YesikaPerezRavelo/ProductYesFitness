import classes from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <section>
      <div className={classes.card}>
        <img src={img} style={{ width: 200 }} />
        <h2>{name}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, harum.
        </p>
        <ul>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
        </ul>
        <h3>${price}</h3>

        <Link className={classes.link} to={`/detail/${id}`}>
          Ver Detalle
        </Link>
      </div>
    </section>
  );
};

export default Item;
