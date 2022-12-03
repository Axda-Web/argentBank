import React from 'react'
import StyledLoader from './Loader.styled.js'


/**
 * Loader component
 * @component
 * @returns {JSX.Element} 
 */
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