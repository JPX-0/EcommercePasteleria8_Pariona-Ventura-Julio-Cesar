import { createContext, useState } from "react";

export const CartContext = createContext();

let itemFound;
const isInCart = (arrProd, itemId) => {
  itemFound = arrProd.find(elem => elem.idItem === itemId.id);
}

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([])
  const addItem = (item, cantProd) => {
    isInCart(cartList, item)
    if(!itemFound) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          imgItem: item.pictureURL,
          nameItem: item.title,
          priceItem: item.price,
          qtyItem: cantProd
        }
      ])
    } else {
      itemFound.qtyItem += cantProd;
      setCartList([...cartList])
    }
  }
  const removeItem = (itemId) => {
    let itemRemove = cartList.filter(elem => elem.idItem !== itemId);
    setCartList(itemRemove);
  }
  const clear = () => {
    setCartList([]);
  }
  const counterProducts = () => {
    let count = cartList.map(elem => elem.qtyItem);
    return count.reduce(((previousVal, currentVal) => previousVal + currentVal), 0)
  }
  return(
    <CartContext.Provider value={{cartList, addItem, removeItem, clear, counterProducts}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;