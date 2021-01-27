import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import MenuBars from './../MenuBars/index'

import './index.scss'

const NavBar = (props) => {
  const zeroFill = n => {
    return ('0' + n).slice(-2)
  }

  useEffect(() => {
    setInterval(() => {
      const now = new Date()
      const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes())
      document.getElementById('Hour').innerHTML = dataHora
    }, 1000)
  }, [])

  return (
    <header className="NavBar">
      <div className="OperatorName">
        <p id="Name">{props.operator}</p>
      </div>
      <div id="Container">
        <div className="SideMenu">
          <MenuBars/>
        </div>
        <div id="Hour">00:00</div>
      </div>
    </header>
  )
}

NavBar.propTypes = {
  Operator: PropTypes.string
}

export default NavBar
