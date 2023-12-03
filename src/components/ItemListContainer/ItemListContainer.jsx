import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  console.log(products);

  const productsComponents = products.map((product) => {
    return (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.img} style={{ width: 100 }} />
        <h3>{product.price}</h3>
      </div>
    );
  });

  return (
    <div>
      <h1>{greeting}</h1>
      {productsComponents}
    </div>
  );
};

export default ItemListContainer;
