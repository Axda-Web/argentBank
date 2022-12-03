import React from 'react'
import StyledFeatureCardContainer from './FeatureCardContainer.styled'
import chatIcon from '../../assets/img/icon-chat.png'
import moneyIcon from '../../assets/img/icon-money.png'
import securityIcon from '../../assets/img/icon-security.png'

import FeatureCard from '../featureCard'


/**
 * FeatureCardContainer component
 * @component
 * @returns {JSX.Element} 
 */
const FeatureCardContainer = () => {

  const featureItems = [
    {
      id: 1,
      icon: chatIcon,
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    }, {
      id: 2,
      icon: moneyIcon,
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be!'
    }, {
      id: 3,
      icon: securityIcon,
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.'
    }
  ]

  return (
    <StyledFeatureCardContainer>
      {featureItems.map( featureItem => <FeatureCard key={featureItem.id} {...featureItem} />)}
    </StyledFeatureCardContainer>
  )
}

export default FeatureCardContainer