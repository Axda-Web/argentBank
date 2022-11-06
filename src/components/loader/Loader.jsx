import React from 'react'
import StyledLoader from './Loader.styled.js'

const Loader = () => {
  return (
    <StyledLoader>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoader>
  )
}

export default Loader