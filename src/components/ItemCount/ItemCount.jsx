import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.button1} onClick={decrease}>
        -
      </button>
      <button className={classes.button} onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
      <button className={classes.button2} onClick={increase}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
