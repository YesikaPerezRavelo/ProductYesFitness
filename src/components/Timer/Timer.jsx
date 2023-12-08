import { useState, useEffect, useRef } from "react";
import classes from "./Timer.module.css";

const Time = () => {
  const [vuelta, setVuelta] = useState(1);
  const [horas, setHoras] = useState(23);
  const [minutos, setMinutos] = useState(60);
  const [segundos, setSegundos] = useState(60);

  useEffect(() => {
    setSegundos(60);

    const intervalId = setInterval(() => {
      setSegundos((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [vuelta]);

  useEffect(() => {
    if (segundos === 0) {
      setSegundos(60);
      setMinutos((prev) => prev - 1);
    }
  }, [segundos]);

  useEffect(() => {
    if (minutos === 0) {
      setMinutos(60);
      setHoras((prev) => prev - 1);
    }
  }, [minutos]);

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
