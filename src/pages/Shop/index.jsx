import React from 'react'
import NavBar from './../../components/NavBar'
import CartFooter from './../../components/CartFooter'
<<<<<<< HEAD
import Topics from './../../components/ShopTopics'
=======
import Product from './../../components/Product'

import './styles.scss'
>>>>>>> af539a841102bea1c2dac4055eafd991695eac30

function Shop () {
  const operator = ['Marcos da Silva']
  const topics = ['Topico1', 'Topico1', 'Topico1', 'Topico1', 'Topico1', 'Topico1']
  return (
      <div className="ShopPage">
          <NavBar operator={operator}></NavBar>
<<<<<<< HEAD
          <Topics topics={topics}></Topics>
=======
          <div className="Container">
            <div className="Topics">
              topics
            </div>
            <div className="Products">
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
              <Product title="Teste product"/>
            </div>
          </div>
>>>>>>> af539a841102bea1c2dac4055eafd991695eac30
          <CartFooter />
      </div>
  )
}

export default Shop
