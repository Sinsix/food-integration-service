import React, { useState } from 'react'
import './index.scss'

const MenuBars = () => {
  const [isActive, setActive] = useState('false')

  const Toggle = () => {
    setActive(!isActive)
  }
  return (
    <div id="ContainerBox" className={isActive ? null : 'change'} onClick={Toggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
  )
}

export default MenuBars
