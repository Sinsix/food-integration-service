import React from 'react'
import LogoSide from './../../assets/Logo-FIS-Triangle.png'
import { Link } from 'react-router-dom'
import './index.scss'

const BodyPanel = (props) => {
  return (
    <section className="BodyPanel">
      <div id="SideLogo">
          <img src={LogoSide} alt="Sinsix/FIS" />
      </div>
      <div className="LoginPanel">
          <h1>Bem Vindo</h1>
          <h3>Entrar</h3>
          <form action=" ">
              <input type="text" className="FormInput" placeholder="usuário" id="UserLogin" name="UserLogin" />
              <input type="password" className="FormInput" placeholder="senha" id="UserPassword" name="UserPassword" />
                <a href="/">Esqueceu a senha?</a> {/* route link to registration page */}
              <input type="submit" value="Login" id="SubmitButton" name="SubmitButton" />
              {/* Submit button for login form */}
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

export default BodyPanel
