import { useState } from "react";
import { Link } from "react-router-dom";
import InputCount from "../InputCount/InputCount";
import ButtonCount from "../ButtonCount/ButtonCount";

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const [inputType, setInputType] = useState("button");

  const [quantity, setQuantity] = useState(0);
  {
    inputType === "input" ? <InputCount /> : <ButtonCount />;
  }
  const handleOnAdd = (count) => {
    const objProductToAdd = {
      id,
      name,
      price,
      count,
    };
    console.log(objProductToAdd);
    console.log("agregue al carrito: ", count);

    setQuantity(count);
  };

  return (
    <article>
      <button
        onClick={() => setInputType(inputType === "input" ? "button" : "input")}
      >
        Cambiar contador
      </button>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} style={{ width: 100 }} />
      </picture>
      <section>
        <p>Categoria: {category}</p>
        <p>Descripción: {description}</p>
        <p>Precio: {price}</p>
      </section>
      <footer>
        {quantity === 0 ? (
          <InputCount onAdd={handleOnAdd} stock={stock} />
        ) : (
          <Link to="/cart">Finalizar compra</Link>
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
