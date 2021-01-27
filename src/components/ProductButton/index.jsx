import React from 'react'
import './index.scss'

const ProductButton = () => {
  return (
    <div>
        <div id="Buttons">
            <input type="button" value="+" className="Button" id="Add"/>
            <input type="button" value="-" className="Button" id="NoAdd"/>
        </div>
    </div>
  )
}

export default ProductButton
