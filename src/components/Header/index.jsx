import React from 'react'
import PropTypes from 'prop-types'

import logo from './../../assets/Logotipo.png'

import './index.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="Header">
      <div className="NavBar">
        <div className="Logotype">
          <Link to="/">
            <img src={logo} alt="Sinsix" className="Logo"/>
          </Link>
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
  options: PropTypes.array
}

export default Header
