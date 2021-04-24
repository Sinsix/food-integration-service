import React, { Fragment } from 'react'
import NavBar from './../../components/NavBar'
import CartFooter from './../../components/CartFooter'
import Topics from './../../components/ShopTopics'

function Shop () {
  const operator = ['Marcos da Silva']
  const topics = ['Topico1', 'Topico1', 'Topico1', 'Topico1', 'Topico1', 'Topico1']
  return (
      <Fragment>
          <NavBar operator={operator}></NavBar>
          <Topics topics={topics}></Topics>
          <CartFooter />
      </Fragment>
  )
}

export default Shop
