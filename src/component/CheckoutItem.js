import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutItem.css'

function CheckoutItem({ id, description, price, image}) {
    const[{cart}, dispatch] = useStateValue();
    
    const removeFromCart = () => {
        dispatch({
            type:"REMOVE_ITEM_CART",
            id: id,

        })

    }
  return (
    <div className='checkout_item'>
        <img src={image} alt=""/>
        <div className='checkout_details'>
            <p>{description}</p>
            <p> $ {price}</p>
            <button onClick={removeFromCart}>Remove Item</button>
        </div>
    </div>
  )
}

export default CheckoutItem