import { AiFillDelete } from "react-icons/ai";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { SiShopify } from "react-icons/si";
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
            <section className="cart--first">
              <section className="cart--top">
                <p className="cart__table center">Imagen</p>
                <p className="cart__table cart--division center">Nombre</p>
                <p className="cart__table cart--division center">Precio x U</p>
              </section>
              <section className="cart--middle">
                {
                  test.cartList.map(elem => 
                  <figure key={`figureCart${elem.idItem}`} className="cart__figure">
                    <Link to={`/item/${elem.idItem}`} title="da 'click' para ir al producto">
                      <picture className="cart__picture cart__table">
                        <img src={elem.imgItem} alt={elem.nameItem} className="card__img"/>
                      </picture>
                    </Link>
                    <h2 className="cart__table cart--division center" title={elem.nameItem}><span>{elem.nameItem}</span></h2>
                    <div className="cart__table cart--division center">
                      <p>${elem.priceItem} x {elem.qtyItem}</p>
                      <p>${elem.priceItem * elem.qtyItem}</p>
                    </div>
                    <div className="cart__table cart--division center">
                      <button className="btn" title="Eliminar este producto." onClick={() => deleteItem(elem.idItem)}><AiFillDelete/></button>
                    </div>
                  </figure>
                  )
                }
              </section>
              <section className="cart--bottom">
                <button className="btn btn__addToCar" onClick={deleteItems}>Borrar Carrito <MdOutlineDeleteSweep/></button>
              </section>
            </section>
            <section className="cart--second">
              <section className="cart__container">
                <p className="cart__table">Detalles de la compra</p>
                <p className="cart__table">Precio toal:</p>
                <p className="cart__table">${test.calcTotal()}</p>
                <p className="cart__table">IVA (19.2%):</p>
                <p className="cart__table">${test.calcIva()}</p>
                <p className="cart__table">Precio Final:</p>
                <p className="cart__table cart--division">$.{test.calcTotalFinal()}</p>
                <div className="cart--bottom">
                  <button className="btn btn__addToCar">Comprar <SiShopify/></button>
                </div>
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
          </section>
        </>
      }
    </>
  )
}
export default Cart;