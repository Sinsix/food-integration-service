import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Product = (props) => {
  return (
        <div className="product">
            <div className="titleProduct">{ props.title }</div>
            <div className="imgProduct">
              <img src={ props.img } alt=""/>
            </div>
            <div className="buttonsProduct">
                <button className="btn btnAdd"> + </button>
                <button className="btn btnRemove"> - </button>
            </div>
        </div>
  )
}

Product.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string
}

export default Product
