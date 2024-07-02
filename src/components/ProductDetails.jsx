import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Products from './Products'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({cart, setCart}) => {
    const {id} = useParams()

    const [product , setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
      const filterProduct = items.filter((product) => product.id == id)
      setProduct(filterProduct[0]);
      const relatedProducts = items.filter((p) => p.category === product.category)
      setRelatedProducts(relatedProducts)
    }, [id, product.category])

    const addToCart  = (id, title, imgSrc, description, price, qty) =>{
      const obj = {
        id, title, imgSrc, description, price, qty
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
      position="top-right"
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
    <div className="prod-details-container">
        <div className="img">
            <img src={product.imgSrc} alt="" />
        </div>
        <div className="title">
          <h1>{product.title}</h1>
          <div className="description">
            <p>{product.description}</p>
          </div>
          <div className="price">
            <h3>₹{product.price}</h3>
          </div>
          <div className="addtocart">
          <button onClick={() => addToCart(product.id, product.title, product.imgSrc, product.description, product.price, product.qty)} className="btn btn-primary my-2">Add To Cart</button>
          </div>
        </div>  
    </div>
    <h2 className="relatedproducts">Related Products</h2>
    <Products cart = {cart} setCart= {setCart} items = {relatedProducts} />
    </>

  )
}

export default ProductDetails