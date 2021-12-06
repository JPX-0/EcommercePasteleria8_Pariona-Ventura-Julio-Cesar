import { useState } from "react";

const ItemCount = (props) => {
  let valInitial = 0
  const [products, setProducts] = useState(valInitial);
  const increment = () => {
    if(products < props.stock) setProducts(products + 1);
  }
  const decrement = () => {
    if(products > valInitial + 1) setProducts(products - 1);
  }
  return (
    <>
      <div className="card__buttons">
        <button onClick={decrement} className="btn btn__count">-</button>
        <p className="card__products">Productos: {products} / {props.stock}</p>
        <button onClick={increment} className="btn btn__count">+</button>
      </div>
      {
        props.stock && products ?
        <button className="btn btn__addToCar" onClick={() => props.onAdd(products)}>Agregar al carrito</button> :
        <button className="btn btn__addToCar btn__addToCar--inactive">Agregar al carrito</button>
      }
    </>
  )};
export default ItemCount;