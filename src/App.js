import NavBar from './components/header/Navbar';
import ItemListContainer from './components/main/items/ItemListContainer';
import ItemDetailContainer from "./components/main/details/ItemDetailContainer"
import Cart from './components/main/cart/Cart';
import Error404 from './components/main/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/css/App.css';
import CartContextProvider from './components/main/cart/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="header">
          <NavBar/>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
            <Route path="/item/:idProduct" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/*" element={<Error404/>}/>
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </CartContextProvider>
  )};
export default App;
