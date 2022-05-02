import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'

function Product({id, description, price, image}) {

  const[{cart}, dispatch] = useStateValue();

    const addToCart = () =>{
      //add item to cart
      dispatch({
        type: 'ADD_TO_CART',
        item:{
          id: id,
          description: description,
          image: image,
          price: price
        }
      })
      
    }
  return (
    <div className="product">
             <div className="product__info">
                 <p>{description}</p>
                 <p className="product__price">
                    <small> $</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image}
                    alt="" />
            <button onClick={addToCart}> Add to Cart </button>
        </div>
  )
}

export default Product