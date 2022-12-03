import React from 'react'
import StyledAccountCardContainer from './AccountCardContainer.styled'

import AccountCard from '../accountCard'


/**
 * AccountCardContainer component
 * @component
 * @returns {JSX.Element} 
 */
const AccountCardContainer = () => {

  const accounts = [
    {
      id: 1,
      title: 'Argent Bank Checking (x8349)',
      amount: '2,082.79',
      description: 'Available Balance'
    }, {
      id: 2,
      title: 'Argent Bank Savings (x6712)',
      amount: '10,928.42',
      description: 'Available Balance'
    }, {
      id: 3,
      title: 'Argent Bank Credit Card (x8349)',
      amount: '184.30',
      description: 'Current Balance'
    }
  ]

  return (
    <StyledAccountCardContainer>
      {accounts.map( account => <AccountCard key={account.id} {...account} />)}
    </StyledAccountCardContainer>
  )
}

export default AccountCardContainer