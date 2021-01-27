import React, { Fragment } from 'react'
// importing components
import Header from './../../components/Header'
import BodyPanel from './../../components/BodyPanel'
// Login page (Main page)
function Login () {
  const options = ['Administrador', 'Ajuda']

  return (
    <Fragment>
        <Header options={options} />
        <BodyPanel />
    </Fragment>
  )
}

export default Login
