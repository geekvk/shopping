import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useStateValue } from '../StateProvider';

function Header() {
  const[{cart}, dispatch] = useStateValue();

  return (
    <nav className='header'>
      <Link to='/'>
        <img className='header_logo' src='https://www.seekpng.com/png/detail/253-2532852_shopping-cart-logo-png.png' alt=''/>
      </Link>
      <div className='header_search'>
        <input className='search_input' placeholder='Search...'/>
        <SearchIcon className="search_icon"/>
      </div>
      <div className='right_icons'>
          <Link to='/profile'>
            <PersonIcon className='profile_icon' />
          </Link>
          <div className='cart'>
            <Link to='/cart'>
                <ShoppingCartIcon  className='cart_icon'/>
                
            </Link>
            <span className='cart_count'>{cart?.length}</span>
          </div>
          
      </div>
    </nav>
  )
}

export default Header