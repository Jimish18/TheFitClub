import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">

            <div className="social-links">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>            

            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>

            <div className="blur blur-f1"></div>
            <div className="blur blur-f2"></div>
        </div>
    </div>
  )
}

export default Footer;