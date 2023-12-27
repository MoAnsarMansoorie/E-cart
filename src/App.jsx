import NavBar from "./components/NavBar"
import Product from "./components/Product"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import SearchItems from "./components/SearchItems"
import Cart from "./components/Cart"


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search/:id" element={<SearchItems />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
