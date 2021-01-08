import React from 'react'
import './App.scss'

import Header from './components/Header'

function App () {
  const menu = ['Administrador', 'Ajuda']

  return (
    <Header menu={menu} color="blue"/>
  )
}

export default App
