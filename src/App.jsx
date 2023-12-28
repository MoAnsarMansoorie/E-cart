import NavBar from "./components/NavBar"
import Product from "./components/Product"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import SearchItems from "./components/SearchItems"
import Cart from "./components/Cart"
import { items } from "./components/Data"
import { useState } from "react"


function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
      <Router>
        <NavBar setData={setData} cart={cart} />
        <Routes>
          <Route path="/" element={<Product items={data} cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItems cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
