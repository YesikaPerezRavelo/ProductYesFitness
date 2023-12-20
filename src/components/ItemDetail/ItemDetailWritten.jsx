import ItemCount from "../ItemCount/ItemCount";
import Timer from "../Timer/Timer";
import classes from "./ItemDetail.module.css";

const ItemDetail = ({ name, category, img, price, description, stock }) => {
  return (
    <section>
      <card>
        <Timer />
        <h1>{name}</h1>
        <p>categoria: {category}</p>
        <img src={img} style={{ width: 500 }} />
        <h3>${price}</h3>
        <p>Descripción: {description}</p>
        <ItemCount stock={stock} />
      </card>
    </section>
  );
};

export default ItemDetail;
