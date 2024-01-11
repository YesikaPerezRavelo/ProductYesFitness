import { useForm } from "react-hook-form";
import classes from "./Contact.module.css";
import { db } from "../../services/firebase/firebaseConfig";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const send = (data) => {
    const db = firebase.firestore();
    db.collection("contacts")
      .add(data)
      .then(() => {
        console.log("Data sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending data: ", error);
      });
  };

  return (
    <div className={classes.container}>
      <h1 className="main-title">Información del contacto</h1>
      <form className="form" onSubmit={handleSubmit(send)}>
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
          type="tel"
          placeholder="Ingresá tu teléfono"
          {...register("Phone")}
        />
        <h1>Mensaje</h1>
        <input
          className={classes.message}
          type="message"
          placeholder="Mensaje"
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
