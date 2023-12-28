import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";

function NavBar({ setData, cart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category == category);
    // console.log(element);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    console.log(element);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-CART
          </Link>
          <form className="search-box" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsCartCheckFill style={{fontSize:"1.5rem"}} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="item">Filter by {"->"}</div>
            <div className="item" onClick={() => setData(items)}>
              No Filter
            </div>
            <div className="item" onClick={() => filterByCategory("mobiles")}>
              Mobiles
            </div>
            <div className="item" onClick={() => filterByCategory("laptops")}>
              Laptops
            </div>
            <div className="item" onClick={() => filterByCategory("tablets")}>
              Tablets
            </div>

            <div className="item" onClick={() => filterByPrice(29999)}>
              {">="}29999
            </div>
            <div onClick={() => filterByPrice(49999)} className="item">
              {">="}49999
            </div>
            <div onClick={() => filterByPrice(69999)} className="item">
              {">="}69999
            </div>
            <div onClick={() => filterByPrice(89999)} className="item">
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default NavBar;
