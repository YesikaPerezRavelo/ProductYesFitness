import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import ItemCount from "./components/ItemCount/ItemCount.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";

const Layout = (props) => {
  console.log(props);
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
      {props.children}
    </div>
  );
};

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

      <ItemCount />
    </>
  );
}

export default App;
