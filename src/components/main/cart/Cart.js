import { AiFillDelete } from "react-icons/ai";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useContext, useState } from "react";

const Cart = () => {
  const test = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const [btnVar, setBtnVar] = useState(false);
  const deleteItem = (itemId) => {
    const asideAlert = document.querySelector(".aside");
    let productFound = test.cartList.find(item => item.idItem === itemId);
    setBtnVar(true);
    setProduct(productFound);
    asideAlert.classList.add("aside--active");
  }
  const deleteItems = () => {
    const asideAlert = document.querySelector(".aside");
    setBtnVar(false);
    asideAlert.classList.add("aside--active");
  }
  const btnCancel = () => {
    const asideAlert = document.querySelector(".aside");
    asideAlert.classList.remove("aside--active");
  }
  const btnConfirm = () => {
    const asideAlert = document.querySelector(".aside");
    asideAlert.classList.remove("aside--active");
    if(btnVar === true) {
      test.removeItem(product.idItem);
    } else if(btnVar === false){
      test.clear();
    }
  }
  return (
    <>
      <h1 className="main__title">Este es el carrito</h1>
      {
        test.cartList.length === 0 ?
        <p>El carrito está vacio, regrese a la página de <Link to="/" className="btn__link btn__link--blue">Inicio</Link> y ralize sus pedidos.</p> :
        <>
          <section className="cart">
            <section className="cart--top">
              <p className="cart__table">Imagen</p>
              <p className="cart__table cart--division">Nombre</p>
              <p className="cart__table cart--division">Precio x Cantidad</p>
            </section>
            <section className="cart--middle">
              {
                test.cartList.map(elem => 
                <figure key={`figureCart${elem.idItem}`} className="cart__figure">
                  <picture className="cart__picture cart__table">
                    <img src={elem.imgItem} alt={elem.nameItem} className="card__img"/>
                  </picture>
                  <h2 className="cart__table cart--division"><span>{elem.nameItem}</span></h2>
                  <div className="cart__table cart--division">
                    <p>${elem.priceItem} x {elem.qtyItem}</p>
                    <p>${elem.priceItem * elem.qtyItem}</p>
                  </div>
                  <div className="cart__table cart--division">
                    <button className="btn" onClick={() => deleteItem(elem.idItem)}><AiFillDelete/></button>
                  </div>
                </figure>
                )
              }
            </section>
            <section className="cart--bottom">
              <button className="btn btn__addToCar" onClick={deleteItems}>Borrar Carrito <MdOutlineDeleteSweep/></button>
            </section>
          </section>
          <aside className="aside">
            <section className="alert">
              {
                btnVar ?
                <p className="alert__text">¿Está seguro/a que desea eliminar <span>{product.nameItem}</span>?</p> :
                <p className="alert__text">¿Está seguro/a que desea limpiar su carrito?</p>
              }
              <button className="btn btn__cancel" onClick={btnCancel}>Cancelar</button>
              <button className="btn btn__confirm" onClick={btnConfirm}>Confirmar</button>
            </section>
          </aside>
        </>
      }
    </>
  )
}
export default Cart;