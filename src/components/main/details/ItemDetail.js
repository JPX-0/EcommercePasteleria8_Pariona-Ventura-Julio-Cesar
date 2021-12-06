import ItemCount from "../buttons/ItemCount";
import { CartContext } from "../cart/CartContext";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

const ItemDetail = (props) => {
  const [itemCount, setItemCount] = useState(0)
  const test = useContext(CartContext);
  const onAdd = (cantProd) => {
    alert(`Se agregó al carrito ${cantProd} productos`);
    setItemCount(cantProd);
    test.addItem(props.content, cantProd);
  }
  return (
    <>
      {
        props.content.length !== 0 ?
        <section className="detail">
          <picture className="card__picture">
            <img src={props.content.pictureURL} alt={props.content.title} className="card__img"/>
          </picture>
          <article>
            <h2 className="card__title">{props.content.title}</h2>
            <p className="card__price">${props.content.price} x U</p>
            <p className="card__description">{props.content.description}</p>
          </article>
          {
            itemCount === 0 ?
            <ItemCount stock={props.content.stock} initial={itemCount} price={props.content.price} id={props.content.id} onAdd={onAdd}/> :
            <>
              <Link to="/cart" className="btn btn__addToCar">Terminar mi compra</Link>
              <Link to="/" className="btn btn__link btn__link--black">Seguir comprando</Link>
            </>
          }
        </section> :
        <p className="msg msg__cargando" id="messageDataD"></p> 
      }
    </>
  )};
  export default ItemDetail;