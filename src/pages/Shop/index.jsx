import React, { Fragment } from 'react'
import NavBar from './../../components/NavBar'
import CartFooter from './../../components/CartFooter'

function Shop () {
  const operator = ['Marcos da Silva']
  return (
      <Fragment>
          <NavBar operator={operator}></NavBar>
          <CartFooter />
      </Fragment>
  )
}

export default Shop
