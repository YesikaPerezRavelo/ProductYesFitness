import ReactImg from "./assets/carrito.png";
import classes from "./CartWidget.module.css";
import { useCart } from '../../context/CartContext'

const CartWidget = () => {

  const { totalQuantity } = useCart()

  return (
    <div>
      <img src={ReactImg} />
      { totalQuantity }
    </div>
  );
};

export default CartWidget;
