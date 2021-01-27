import React from 'react'
import PropTypes from 'prop-types'

import logo from './../../assets/Logotipo.png'

import './index.scss'

const Header = (props) => {
  return (
    <header className="Header">
      <div className="NavBar">
        <div className="Logotype">
          <img src={logo} alt="Sinsix" id="Logo"/>
        </div>
        <div className="Menu">
          {
           Array.isArray(props.options) && props.options.map((option, index) => <a href="/" key={index}>{option}</a>)
          }
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  options: PropTypes.object
}

export default Header
