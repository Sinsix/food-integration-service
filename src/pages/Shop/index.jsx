import React from 'react'
import NavBar from './../../components/NavBar'
import CartFooter from './../../components/CartFooter'
import Product from './../../components/Product'

import './styles.scss'

function Shop () {
  const operator = ['Marcos da Silva']
  return (
      <div className="ShopPage">
          <NavBar operator={operator}></NavBar>
          <div className="Container">
            <div className="Topics">
              que que pega
            </div>
            <div className="Products">
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
            </div>
          </div>
          <CartFooter />
      </div>
  )
}

export default Shop
