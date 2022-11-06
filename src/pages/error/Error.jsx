import React from 'react'
import StyledError from './Error.styled'

import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <StyledError>
        <p className="number">404</p>
        <p className="text">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="link" to='/'>Retourner sur la page d'acceuil</Link>
    </StyledError>
  )
}

export default Error