import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((response) => {
          setProducts(response);
        })

        .catch((error) => {
          console.log(error);
        })

        .finally(() => {
          setLoading(false);
        });
    } else {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        })

        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);
  console.log(products);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
