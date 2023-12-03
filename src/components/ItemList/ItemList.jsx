import Item from "../Item/Item";
import classes from "./ItemList.module.css";

const ItemList = ({ products }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {products.map((product) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ItemList;
