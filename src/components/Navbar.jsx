import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ setData, cart }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="heading">
            Goshop
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products Here..."
            ></input>
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <HiMiniShoppingCart style = {{fontSize: '1.5rem'}} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {
          location.pathname == '/' && (
            <div className="nav-bar-2">
          <div onClick={() => setData(items)} className="items">
            Home
          </div>
          <div
            onClick={() => filterByCategory("smartphones")}
            className="items"
          >
            Smartphones
          </div>
          <div onClick={() => filterByCategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterByCategory("watches")} className="items">
            Watches
          </div>
          <div onClick={() => filterByCategory("tablets")} className="items">
            Tablets
          </div>

          {
            isAuthenticated ? (
              <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="items">Logout</div>

            ) : (
              <div onClick={() => loginWithRedirect()} className="items">Login</div>

            )
          }

        </div>

          ) 
        }
        
      </header>
    </>
  );
};

export default Navbar;
