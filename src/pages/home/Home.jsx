import React from 'react'
import StyledHome from './Home.styled'

import FeatureCardContainer from '../../components/featureCardContainer'

import { useDispatch } from 'react-redux'
import { setError } from '../../features/login-slice/loginSlice'


/**
 * Home component
 * @component
 * @returns {JSX.Element} 
 */
const Home = () => {

  const dispatch = useDispatch()
  dispatch(setError())

  return (
    <StyledHome>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <FeatureCardContainer />
    </StyledHome>
  )
}

export default Home