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
  return (
    <>
      <Router>
        <NavBar setData={setData} />
        <Routes>
          <Route path="/" element={<Product items={data} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search/:term" element={<SearchItems />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
