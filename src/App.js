import ItemListContainer from "./components/Landing/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/Landing/Detail/ItemDetailContainer";


function App() {

  

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route exact path="/" element={<ItemListContainer greeting='Bienvenidos a mi tienda! 🐕' />}/>
        <Route exact path="/product/:id" element={<ItemDetailContainer/>} />
        <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
