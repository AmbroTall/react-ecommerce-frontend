// import React, {useState} from 'react'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ProductList from './pages/ProductListView'
import ProductPage from './pages/ProductPage'
import {BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

const App = () => {

  const user = useSelector(state =>state.user.currentUser)

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/login" >
            { user ?  <Redirect to="/" /> : <Login /> }
          </Route>
          <Route path="/register">
          { user ?  <Redirect to="/" /> : <Register /> }
            
          </Route>
          <Route path="/cart">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App