import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Cart from './component/Cart';
import Profile from './component/Profile'

function App() {
  return <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
}

export default App;
