import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import ItemCount from "./components/ItemCount/ItemCount.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Timer from "./components/Timer/Timer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import WorkoutElements from "./components/WorkoutElements/WorkoutElements.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Layout
        title={"Vive la experiencia más única e inigualable"}
        color="Dark"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum.
        </p>
      </Layout>
      <ItemListContainer
        greeting={
          "Bienvenido a YesFitness estos son los productos mas deseados"
        }
      />
      <Timer />
      <WorkoutElements />
      <ItemCount />
    </>
  );
}

export default App;
