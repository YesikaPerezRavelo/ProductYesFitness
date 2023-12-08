import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const WorkoutElements = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("pesas");

  const getProducts = () => {
    setLoading(true);

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const productsAdapted = json.results.map((prod) => {
          return {
            ...prod,
            title: prod.title,
            thumbnail: prod.thumbnail,
            price: prod.price,
          };
        });

        setProducts(json.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    getProducts();
  };

  if (loading) {
    return <h1>Cargando productos...</h1>;
  }

  return (
    <div>
      <h1>Elementos de Entrenamiento</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button>Search</button>
      </form>
      <ItemList products={products} />
    </div>
  );
};

export default WorkoutElements;
