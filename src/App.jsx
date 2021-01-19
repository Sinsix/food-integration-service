import React, { Fragment } from 'react'
import './App.scss'

import Header from './components/Header'
// import BodyPanel from './components/BodyPanel'
import RegisterPanel from './components/RegisterPanel'

function App () {
  const options = ['Administrador', 'Ajuda']

  return (
    <Fragment>
    <Header options={options}/>
    {/* <BodyPanel/> */}
    <RegisterPanel/>
    </Fragment>
  )
}

export default App
