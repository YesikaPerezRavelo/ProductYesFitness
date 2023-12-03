const Item = ({ name, img, price }) => {
  return (
    <div style={{ background: "pink" }}>
      <h2>{name}</h2>
      <img src={img} style={{ width: 100 }} />
      <h3>${price}</h3>
    </div>
  );
};

export default Item;
