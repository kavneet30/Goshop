import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { items } from "./Data";
import Products from "./Products";


const Cart = ({cart, setCart}) => {

  toast.info('Items Removed Successfully!', {
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
      <div className="cart-container my-5 text-center" style={{width: "54%"}}>
      {
        cart.length != 0 && (
          <div className="top-cart">
                <button className="top-btn"> Total Price - ₹{cart.map ( product => parseInt(product.price * product.qty)).reduce((total,value) => total + value,0)} </button>
                <button className="top-btn"> Total Quantity - {cart.map ( product => parseInt(product.qty)).reduce((total,value) => total + value,0)}</button>
          </div>
        )
      }
        
        {
          cart.length==0 ? (
            <>
            <div className="cart-zero">
              <h1>Cart is Empty!</h1>
              <Link to={"/"} className="btn btn-primary my-3 ">Continue Shopping...</Link>
            </div>
            </>
          ):

        cart.map((product) => {
          return (
            <>
              <div key = {product.id} className="card mb-3 my-5" style={{ maxWidth: "44rem" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src= {product.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        {product.description}
                      </p>
                      <h2 className = "price">₹{product.price}</h2>
                      <div className="all-all-btn">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {
        cart.length != 0 && (
          <div className="remove-container text-center" >
            <button className="btn btn-primary"> Pay ₹{cart.map ( product => parseInt(product.price * product.qty)).reduce((total,value) => total + value,0)}</button>
          <button onClick={() => setCart("")} className="remove-btn"> <RiDeleteBinFill style = {{fontSize: '0.99rem'}} />{" "}Remove All</button>
        </div>
        

        )
      }
    </>
  );
};

export default Cart;
