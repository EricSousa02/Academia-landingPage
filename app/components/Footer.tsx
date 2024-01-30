import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
             <footer className="section__container footer__container">
        <span className="bg__blur"></span>
        <span className="bg__blur footer__blur"></span>
        <div className="footer__col">
          <div className="footer__logo">
            {/* <img src="assets/logo.png" alt="logo" /> */}
            <h1>LOGO</h1>
          </div>
          <p>
            Dê o primeiro passo em direção a um você mais saudável e mais forte
            com nossos planos de preços imbatíveis. Vamos suar, conquistar e
            vencer juntos!
          </p>
          <div className="footer__socials">
            <Link href="#" target="_blank">
              <i className="ri-facebook-fill"></i>
            </Link>
            <Link href="#" target="_blank">
              <i className="ri-instagram-line"></i>
            </Link>
            <Link href="#" target="_blank">
              <i className="ri-twitter-fill"></i>
            </Link>
            <Link href="https://maps.app.goo.gl/CheJH87jQhoDc8gq6" target="_blank">
              <i className="ri-map-pin-line"></i>
            </Link>
          </div>
        </div>
        <div className="footer__col">
          <h4>Empresa</h4>
          <a href="#">Negócios</a>
          <a href="#">Franquia</a>
          <a href="#">Parceria</a>
          <a href="#">Rede</a>
        </div>
        <div className="footer__col">
          <h4>Sobre Nós</h4>
          <a href="#">Blogs</a>
          <a href="#">Segurança</a>
          <a href="#">Carreiras</a>
        </div>
        <div className="footer__col">
          <h4>Contato</h4>
          <a href="#">Contate-nos</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos e Condições</a>
          <a href="#">Calcular IMC</a>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2023. Todos os direitos reservados.
      </div>
    </div>
  )
}

export default Footer