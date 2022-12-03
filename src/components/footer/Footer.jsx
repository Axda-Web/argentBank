import React from 'react'
import StyledFooter from './Footer.styled'


/**
 * Footer component
 * @component
 * @returns {JSX.Element} 
 */
const Footer = () => {
  return (
    <StyledFooter>
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </StyledFooter>
  )
}

export default Footer