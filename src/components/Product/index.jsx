import React from 'react'
import './styles.scss'

const Product = (props) => {
  return (
        <div className="product">
            <div className="titleProduct">{props.title}</div>
            <div className="imgProduct">{props.img}</div>
            <div className="buttonsProduct">
                <button className="btn btnAdd">+</button>
                <button className="btn btnRemove">-</button>
            </div>
        </div>
  )
}

export default Product
