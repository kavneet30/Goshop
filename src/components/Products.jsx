import React from "react";
import { Link} from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { items } from "./Data";
import { useAuth0 } from "@auth0/auth0-react";

const Products = ({items, cart, setCart}) => {
  const {isAuthenticated, user } = useAuth0();

  const addToCart  = (id, title, imgSrc, description, price, qty) =>{
    const obj = {
      id, title, imgSrc, description, price, qty: 1
    }
    setCart([...cart, obj])
    
    toast.info('Item Added Successfully!', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
  return (
    <>
    <ToastContainer
      position="bottom-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    
    {isAuthenticated && <h3 className="hello-user"> Welcome to Goshop, {user.name}!! </h3>}
    <div className="container my-4">
      <div className="row">
        {items.map((product) => {
          return (
            <>
              <div key = {product.id} className="col-lg-4 my-3 text-center">
              <div className="card" style={{ width: "20.5rem" }}>
              <Link to={`/products/${product.id}`} className="card-image">
              <img src={product.imgSrc} className="card-img-top" alt="..." />
              </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                  <h2 className = "price">₹{product.price}</h2>
                  <button onClick={() => addToCart(product.id, product.title, product.imgSrc, product.description, product.price, product.qty)} className="btn btn-primary my-2">Add To Cart</button>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Products;
