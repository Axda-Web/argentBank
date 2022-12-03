import React from 'react'
import StyledHeader from './Header.styled'
import Logo from '../../assets/img/argentBankLogo.png'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleIsLoggedIn, selectFirstName, selectIsLoggedIn, selectDisplayEditNameForm, toggleDisplayEditNameForm, setFirstName, setLastName } from '../../features/profile-slice/profileSlice';
import { selectToken, resetToken, resetTokenStatus } from '../../features/login-slice/loginSlice';


/**
 * Header component
 * @component
 * @returns {JSX.Element} 
 */
const Header = () => {

  // Connect hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Get values from the store
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const token = useSelector(selectToken)
  const firstName = useSelector(selectFirstName)
  const displayEditNameForm = useSelector(selectDisplayEditNameForm)


  /**
   * handleSignClick
   * If user is logged in: set isLoggedIn to false, reset auth token, navigate to home page and mask the edit name form
   * If user is logged out: navigate to login page
   * @param {*} e 
   * @return {void}
   */
  const handleSignClick = e => {
    if (token) {

      if (displayEditNameForm) {
        dispatch(toggleDisplayEditNameForm())
        dispatch(setFirstName(''))
        dispatch(setLastName(''))
      }

      dispatch(toggleIsLoggedIn())
      dispatch(resetToken())
      dispatch(resetTokenStatus())
      navigate('/')
    } else {
      navigate('/login')
    }
  }


  /**
   * handleProfileClick
   * Navigate to the profile page
   * If edit name form is displayed: mask edit name form and empty form input fields
   * @param {*} e 
   * @return {void}
   */
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