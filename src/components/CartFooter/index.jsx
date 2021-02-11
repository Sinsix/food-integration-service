import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import CartIcon from './../../assets/FooterCart/Cart.png'
const CartFooter = (props) => {
// arrow function
  return (
    <footer>
        <div className="CartIten" id="CartName">Carrinho</div>
        <div id="FooterCart">
            <div className="CartIten" id="CartIcon">
                <p>...</p>
                <img src={CartIcon} alt="Carrinho" id="CartImage"/>
            </div>
            <div className="CartIten" id="Price">
                <p id="Total">Total</p>
                <p>R$00,00</p>
            </div>
        </div>
    </footer>
  )
}

CartFooter.propTypes = {
  value: PropTypes.object
}

export default CartFooter
