import React from 'react'
import StyledProfile from './Profile.styled'

import Button from '../../components/button'
import AccountCardContainer from '../../components/accountCardContainer'

const Profile = () => {
  return (
    <StyledProfile>
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <Button className="edit-button">Edit Name</Button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountCardContainer />
    </StyledProfile>
  )
}

export default Profile