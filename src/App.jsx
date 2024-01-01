import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout.jsx";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Layout
            title={"Vive la experiencia más única e inigualable"}
            color="Dark"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              earum.
            </p>
          </Layout>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Bienvenidos"} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting={"Productos filtrados"} />}
            />
            <Route
              path="/detail/:productId/"
              element={<ItemDetailContainer />}
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
