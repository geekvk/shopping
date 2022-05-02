import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

function SubTotal() {
    const [ {cart}, dispatch] = useStateValue();
  return (
    <div className='sub_total'>
        <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal ({cart.length}  items):
                            <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value= {getBasketTotal(cart)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            
            />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal