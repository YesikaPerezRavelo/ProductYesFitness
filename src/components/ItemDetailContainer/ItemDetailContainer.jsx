import { useState, useEffect } from "react";
// import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    const documentRef = doc(db, "products", productId);

    getDoc(documentRef)
      .then((QueryDocumentSnapshot) => {
        const fields = QueryDocumentSnapshot.data();
        const productsAdapted = { id: QueryDocumentSnapshot.id, ...fields };
        setProduct(productsAdapted);
      })

      .cath((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    // getProductById(productId).then((response) => {
    //   setProduct(response);
    // });
  }, [productId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
