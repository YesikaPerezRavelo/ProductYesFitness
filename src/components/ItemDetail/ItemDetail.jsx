import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, category, img, price, description, stock }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>categoria: {category}</p>
      <img src={img} />
      <h3>${price}</h3>
      <p>Descripción: {description}</p>
      <ItemCount stock={stock} />
    </div>
  );
};

export default ItemDetail;
