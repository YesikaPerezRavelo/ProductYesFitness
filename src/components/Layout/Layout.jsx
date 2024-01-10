import classes from "./Layout.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Layout = (props) => {
  const { typeEffect } = useTypewriter({});

  return (
    <h1 style={{ margin: "50px", fontSize: "20px", color: "gray" }}>
      NO LO PIENSES
      <span
        style={{
          fontWeight: "700",
          color: "black",
          marginLeft: "3px",
          fontSize: "30px",
        }}
      >
        SOLO HAZLO ❤️​
      </span>
      <span style={{ color: "black", fontSize: "30px" }}>
        <Cursor cursosrStyle="|" />
      </span>
    </h1>
  );
};

export default Layout;
