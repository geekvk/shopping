import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutItem from './CheckoutItem';
import './Cart.css';
import SubTotal from './SubTotal';

function Cart() {
  const[{cart}] = useStateValue();

  return (
    <div className='cart'>
      { cart?.length === 0 ? (
        <div>
          <h2>Cart is Empty</h2>
        </div>
      ) : (
        <div>
          {cart.map(item => (
            <CheckoutItem 
              id={item.id}
              description = {item.description}
              price = {item.price}
              image = {item.image}
            />
          ))}
        </div>
        
      )}
      {cart.length > 0 && (
        <div className='checkout_total'>
          <SubTotal />
        </div>
      )}
      
    </div>
  )
}

export default Cart