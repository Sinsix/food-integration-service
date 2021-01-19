import React from 'react'
import LogoSide from './../../assets/Logo-FIS-Triangle.png'
import './index.scss'

const RegisterPanel = (props) => {
  return (
        <section className="RegisterPanel">
            <div id="SideLogo">
                <img src={LogoSide} alt="Sinsix/FIS" />
            </div>
            <div className="Register">
                <h1>Registro</h1>
                <form action=" ">
                    <input type="text" className="FormInput" placeholder="Nome" id="Name" name="Name" />
                    <input type="text" className="FormInput" placeholder="Sobrenome" id="Surname" name="Surname" />
                    <input type="text" className="FormInput" placeholder="Nome de Usuário" id="Surname" name="Surname" />
                    <input type="password" className="FormInput" placeholder="Senha" name="UserPassword" />
                    <input type="password" className="FormInput" placeholder="Confirme a senha" name="UserPassword" />
                    <input type="email" className="FormInput" placeholder="E-mail" id="email" name="email"/>
                    <div id="Terms">
                    <input type="checkbox" id="TermsConfirm" name="TermsConfirm" required/>
                    <label htmlFor="TermsConfirm">Você concorda com os termos e codições?</label>
                    </div>
                    <input type="submit" value="Enviar" id="SubmitButton" name="SubmitButton" />
                </form>
            </div>
        </section>
  )
}

export default RegisterPanel
