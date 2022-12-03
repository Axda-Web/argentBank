import React from 'react'
import StyledAccountCard from './AccountCard.styled'
import PropTypes from 'prop-types'


/**
 * AccountCard component
 * @component
 * @param {String} title 
 * @param {String} amount
 * @param {String} description
 * @returns {JSX.Element} 
 */
const AccountCard = ({title, amount, description}) => {
  return (
    <StyledAccountCard>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="btn">View transactions</button>
      </div>
    </StyledAccountCard>
  )
}

export default AccountCard


//Proptypes
AccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}