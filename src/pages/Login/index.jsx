import React, { Fragment } from 'react'
// importing components
import Header from './../../components/Header'
import LoginPanel from './../../components/LoginPanel'
// Login page (Main page)
function Login () {
  const options = ['Administrador', 'Ajuda']

  return (
    <Fragment>
        <Header options={options} />
        <LoginPanel />
    </Fragment>
  )
}

export default Login
