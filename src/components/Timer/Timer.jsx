import { useState, useEffect, useRef } from "react";
import classes from "./Timer.module.css";

const Time = () => {
  const [vuelta, setVuelta] = useState(1);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    document.title = `Vuelta: ${vuelta}`;

    return () => {
      document.title = `Vite + React`;
    };
  }, [vuelta]);

  useEffect(() => {
    setSegundos(0);

    const intervalId = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [vuelta]);

  useEffect(() => {
    if (segundos === 60) {
      setSegundos(0);
      setMinutos((prev) => prev + 1);
    }
  }, [segundos]);

  useEffect(() => {
    if (minutos === 60) {
      setMinutos(0);
      setHoras((prev) => prev + 1);
    }
  }, [minutos]);

  const finalizarVuelta = () => {
    setVuelta((prev) => prev + 1);
  };

  return (
    <>
      <h2>
        {" "}
        Oferta termina en {horas}h:{minutos}m:{segundos}s
      </h2>
    </>
  );
};

const Timer = () => {
  const [show, setShow] = useState(true);

  return <>{show && <Time />}</>;
};

export default Timer;
