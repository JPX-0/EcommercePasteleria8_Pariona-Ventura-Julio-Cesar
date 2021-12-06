import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../main/cart/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const CartWidget = () => {
  const test = useContext(CartContext);
  return (
    <li className="header__list">
      <Link to="/cart" className="btn btn__shop">
        <i className="btn__shop-icon"><AiOutlineShoppingCart /></i>
        {
          test.counterProducts() !== 0 &&
          <span className="btn__shop-indicator">{test.counterProducts()}</span>
        }
      </Link> 
    </li>
  )};
export default CartWidget;