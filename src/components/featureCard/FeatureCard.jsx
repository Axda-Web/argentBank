import React from 'react'
import StyledFeatureCard from './FeatureCard.styled'

import PropTypes from 'prop-types'


/**
 * FeatureCard component
 * @component
 * @param {String} icon 
 * @param {String} title
 * @param {String} description
 * @returns {JSX.Element} 
 */
const FeatureCard = ({icon, title, description}) => {
  return (
    <StyledFeatureCard>
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </StyledFeatureCard>
  )
}

export default FeatureCard


FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}