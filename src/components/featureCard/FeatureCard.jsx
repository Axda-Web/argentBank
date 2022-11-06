import React from 'react'
import StyledFeatureCard from './FeatureCard.styled'


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