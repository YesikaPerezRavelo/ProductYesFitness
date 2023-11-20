import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import ItemCount from "./components/ItemCount/ItemCount.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />

      <h1>Vive la experiencia más única e inigualable</h1>

      <ItemCount />
    </>
  );
}

export default App;
