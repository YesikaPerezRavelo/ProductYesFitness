import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout.jsx";
import { CartProvider } from "./context/CartContext";
import CartView from "./components/CartView/CartView.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Layout></Layout>
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
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
