import React, { Fragment } from 'react'
// importing components
import Header from './../../components/Header'
import RegisterPanel from './../../components/RegisterPanel'
// Register page
function Register () {
  const options = ['Administrador', 'Ajuda']

  return (
    <Fragment>
        <Header options={options}/>
        <RegisterPanel/>
    </Fragment>
  )
}

export default Register
