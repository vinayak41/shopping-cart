import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Shop from './Components/Shop'
import Products from './Components/Products'
import Cart from './Components/Cart';

function App() {

  const [cartItemCount, setCartItemCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const addItemInCart = (item) => {
    setCartItems([...cartItems, item])
    setCartItemCount(cartItemCount + 1)
  }



  return (
    <React.Fragment>
      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to="/" >Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Shop" >Shop</Link></li>
        <li className="nav-item ml-auto mr-5"><Link className="nav-link" to="/Cart" ><i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;{cartItemCount}</Link></li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/Shop" render={(props) => <Shop {...props} addItemInCart={addItemInCart} products={Products} />} ></Route>
        <Route path="/Cart" render={(props) => <Cart {...props} cartItems={cartItems} />}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
