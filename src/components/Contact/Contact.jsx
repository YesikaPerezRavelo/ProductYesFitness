import { useForm } from "react-hook-form";
import classes from "./Contact.module.css";
import { db } from "../../services/firebase/firebaseConfig";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <h1 className="main-title">Información del contacto</h1>
      <form className="form" onSubmit={handleSubmit(enviar)}>
        <input
          className={classes.input}
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("name")}
        />
        <input
          className={classes.input}
          type="text"
          placeholder="Ingresá tu apellido"
          {...register("lastName")}
        />
        <input
          className={classes.input}
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          className={classes.input}
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("Phone")}
        />
        <h1>Mensaje</h1>
        <input
          className={classes.message}
          type="message"
          textarea="Mensaje"
          {...register("message")}
        />

        <button className={classes.button} type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Contact;
