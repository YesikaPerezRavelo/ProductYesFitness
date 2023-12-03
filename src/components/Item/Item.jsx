import classes from "./Item.module.css";

const Item = ({ name, img, price }) => {
  return (
    <div style={{ background: "none" }}>
      <h2>{name}</h2>
      <img src={img} style={{ width: 300 }} />
      <h3>${price}</h3>
    </div>
  );
};

export default Item;
