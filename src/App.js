import ItemListContainer from "./components/Landing/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemsProvider } from "./contexts/ItemsContext";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>

        <ItemsProvider>

          <Navbar />

          <Routes>

            <Route exact path="/" element={<ItemListContainer greeting='Bienvenidos a mi tienda! 🐕' />} />
            <Route exact path="/product/:id" element={<ItemDetailContainer />} />
            <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<Cart />} />

          </Routes>

        </ItemsProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
