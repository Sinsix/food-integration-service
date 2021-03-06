import React from 'react'
import LogoSide from './../../assets/Logo-FIS-Triangle.png'
import { Link, withRouter } from 'react-router-dom'
import './index.scss'

const LoginPanel = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(props)
    props.history.push('/shop')
  }

  return (
    <section className="LoginPanel">
      <div id="SideLogo">
          <img src={LogoSide} alt="Sinsix/FIS" />
      </div>
      <div className="LoginForm">
          <h1>Bem Vindo</h1>
          <h3>Entrar</h3>
          <form action=" " onSubmit={handleSubmit}>
              <input type="text" className="FormInput" placeholder="usuário" name="UserLogin" />
              <input type="password" className="FormInput" placeholder="senha" name="UserPassword" />
              <Link to="/">Esqueceu a senha?</Link>
              <input type="submit" value="Login" className="SubmitButton" name="SubmitButton" />
          </form>
          <div id="Register">
              <div className="stroke"> </div>
              <p>Ou</p>
              <div className="stroke"> </div>
          </div>
          <Link to="/register"><h4>Registrar</h4></Link>
      </div>
    </section>
  )
}

export default withRouter(LoginPanel)
