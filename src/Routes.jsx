import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Pages
import Login from './pages/Login'
import Register from './pages/Register'
import Shop from './pages/Shop'

function Routes () {
  return (
  <BrowserRouter>
      <Route path="/" exact render={() => (<Login />)} /> {/* The login page being the main route */}
      <Route path="/register" render={() => (<Register/>)} /> {/* Route to register page */}
      <Route path="/shop" render={() => (<Shop />)} /> {/* The login page being the main route */}
   </BrowserRouter>
  )
};

export default Routes
