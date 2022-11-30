import React from 'react'
import StyledHeader from './Header.styled'
import Logo from '../../assets/img/argentBankLogo.png'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleIsLoggedIn, selectFirstName, selectIsLoggedIn, selectDisplayEditNameForm, toggleDisplayEditNameForm, setFirstName, setLastName } from '../../features/profile-slice/profileSlice';
import { selectToken, resetToken } from '../../features/login-slice/loginSlice';



const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const token = useSelector(selectToken)
  const firstName = useSelector(selectFirstName)
  const displayEditNameForm = useSelector(selectDisplayEditNameForm)


  const handleSignClick = e => {
    if (token) {

      if (displayEditNameForm) {
        dispatch(toggleDisplayEditNameForm())
        dispatch(setFirstName(''))
        dispatch(setLastName(''))
      }

      dispatch(toggleIsLoggedIn())
      dispatch(resetToken())
      navigate('/')
    } else {
      navigate('/login')
    }
  }

  const handleProfileClick = e => {
    if (displayEditNameForm) {
      dispatch(toggleDisplayEditNameForm())
      dispatch(setFirstName(''))
      dispatch(setLastName(''))
    }
    navigate('/profile')
  }


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
          { isLoggedIn && <button className='profile-btn' onClick={handleProfileClick}><CgProfile className='profile-icon'/> {firstName}</button> }
          <button onClick={handleSignClick} className="main-nav-item" to="/login">
            { isLoggedIn ? 
            <>
              <RiLogoutBoxRLine className='logout-icon' /> Sign out
              </> : 'Sign In' }
          </button>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header