import React from 'react'
import PropTypes from 'prop-types'

import logo from './../../assets/Logotipo.png'

import './index.scss'

const Header = function (props) {
  console.log(props.color)

  return (
    <header className="Header">
      <div className="wrap">

        <div className="logo">
          <img src={logo} alt="Sinsix"/>
        </div>

        <div className="actions">
          <a href="/"> {props.menu[0]} </a>
          <a href="/">{props.menu[1]}</a>
          <a href="/">{props.menu[2]}</a>
        </div>

      </div>
    </header>
  )
}

Header.propTypes = {
  altura: PropTypes.number
}

export default Header
