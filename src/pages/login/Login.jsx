import React from 'react'
import StyledLogin from './Login.styled'

import Form from '../../components/form'

const Login = () => {
  return (
    <StyledLogin>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form />
      </section>
    </StyledLogin>
  )
}

export default Login