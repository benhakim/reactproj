import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Cart from './pages/Cart';
import Products from './pages/Products';
import GlobalState from './context/GlobalState';


const App = props  => {
  return (
    <GlobalState>
<Router>
<Routes>
<Route path='/' element={<Products />} />
<Route path='/cart' element={<Cart />} />
</Routes>
</Router>
</GlobalState>
  )
  }

export default App;
