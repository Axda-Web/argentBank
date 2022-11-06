import React from 'react'
import StyledHeader from './Header.styled'
import Logo from '../../assets/img/argentBankLogo.png'

import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <StyledHeader>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header