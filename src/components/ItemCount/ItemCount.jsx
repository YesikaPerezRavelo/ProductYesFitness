import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
    // setCount((prev) => prev + 1)
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.button} onClick={decrease}>
        Decreace
      </button>
      <button className={classes.button} onClick={() => setCount(0)}>
        Reset
      </button>
      <button className={classes.button} onClick={increase}>
        Increase
      </button>
    </div>
  );
};

export default ItemCount;
