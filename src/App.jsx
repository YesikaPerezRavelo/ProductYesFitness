import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import ItemCount from "./components/ItemCount/ItemCount.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Timer from "./components/Timer/Timer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a mi ecommerce"} />
      <Layout
        title={"Vive la experiencia más única e inigualable"}
        color="Dark"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum.
        </p>
      </Layout>

      <ItemCount />

      <Timer />
    </>
  );
}

export default App;
