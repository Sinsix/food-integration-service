import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import components
import Login from './Pages/Login'
import Register from './Pages/Register'
import Shop from './Pages/Shop'
function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (<layout> <Login /> </layout>)} /> {/* The login page being the main route */}
        <Route path="/register" component={Register} /> {/* Route to register page */}
        <Route path="/shop" exact render={() => (<layout> <Shop /> </layout>)} /> {/* The login page being the main route */}
      </Switch>
    </BrowserRouter>
  )
};

export default Routes
