import React from 'react'
import StyledAccountCard from './AccountCard.styled'

import Button from '../button'

const AccountCard = ({title, amount, description}) => {
  return (
    <StyledAccountCard>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button className="transaction-button">View transactions</Button>
      </div>
    </StyledAccountCard>
  )
}

export default AccountCard