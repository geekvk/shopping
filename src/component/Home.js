import React from 'react'
import './Home.css';
import Product from './Product';
import ProductList from './ProductList'
function Home() {
  return (
    <div className='home'>
        <img className='home_image' src='https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU=' alt=''/>

        {/* product List */}
        <div className='product_list'>
            {ProductList.map((product, key) => (
                <Product
                    key={product.id}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                 />
            ))}
        </div>
    </div>
  )
}

export default Home