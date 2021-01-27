/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ImageMan from './../../assets/NavBar/MenuLateral/Man.jpg'
import './index.scss'
// Import Icons
import MoneyOffIcon from '@material-ui/icons/MoneyOff'
import CloseIcon from '@material-ui/icons/Close'
import ReceiptIcon from '@material-ui/icons/Receipt'
import SettingsIcon from '@material-ui/icons/Settings'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

const MenuBars = (props) => {
  const [isActive, setActive] = useState('false')
  const menuItens = [
    {
      displayName: 'Estornar valor do pedido',
      icon: <MoneyOffIcon className="SettingsIcon"/>
    },
    {
      displayName: 'Cancelamento de pedidos',
      icon: <CloseIcon className="SettingsIcon"/>
    },
    {
      displayName: 'Extratos e Fechamentos',
      icon: <ReceiptIcon className="SettingsIcon"/>
    },
    {
      displayName: 'Configurações',
      icon: <SettingsIcon className="SettingsIcon"/>
    }
  ]
  const tam = menuItens.length
  const Toggle = () => {
    setActive(!isActive)
  }
  return (
    <div id="ContainerBox" className={isActive ? null : 'Change'}>
      <div className="MenuIcon" onClick={Toggle}>
        <div className="Bar1"></div>
        <div className="Bar2"></div>
        <div className="Bar3"></div>
      </div>
      <div id='Left' className={isActive ? null : 'Change'} >
        <div className={isActive ? 'SidebarNull' : 'SidebarChange'} >
          <div className={`SideContent${isActive ? 'Null' : 'Change'}`}>
            <div className='HeaderMenu'>
              <div className="CircleImage">
                <img src={ImageMan} alt="Operador do Caixa" />
              </div>
              <h3 className='Title'>
                {props.operator}
              </h3>
            </div>
            <div className='Content'>
              <ul className="OptionsMenu">
                {
                  menuItens.map((menuItens, index) =>
                    (<li key={index} className="MenuList">
                      <Link to="/shop">
                        <div>{menuItens.icon}</div>
                        <div>{menuItens.displayName}</div>
                      </Link>
                      {index !== tam - 1 ? <div className="Divisor"></div> : null}
                    </li>)
                  )}
              </ul>
              <PowerSettingsNewIcon className="PowerIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MenuBars.propTypes = {
  options: PropTypes.string
}

export default MenuBars
