import React from 'react'
import LogoSide from './../../assets/Logo Side Colunm.png'
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
                    <input type="text" placeholder="Nome" id="Name" name="Name" />
                    <input type="text" placeholder="Sobrenome" id="Surname" name="Surname" />
                    <input type="text" placeholder="Nome de Usuário" id="Surname" name="Surname" />
                    <input type="password" placeholder="Senha" className="UserPassword" name="UserPassword" />
                    <input type="password" placeholder="Confirme a senha" className="UserPassword" name="UserPassword" />
                    <input type="email" placeholder="E-mail" id="email" name="email"/>
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
