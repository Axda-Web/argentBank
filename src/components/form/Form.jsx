import React from 'react'
import StyledForm from './Form.styled'
import { Link } from 'react-router-dom'

import Button from '../button'

const Form = () => {
  return (
    <StyledForm>
      <div className="input-wrapper">
        <label for="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">Remember me</label>
      </div>
      <Link to='/profile'>
        <Button className='sign-in-button'>Sign in</Button>
      </Link>
    </StyledForm>
  )
}

export default Form