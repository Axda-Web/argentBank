import { useEffect } from 'react'
import StyledProfile from './Profile.styled'

import Loader from '../../components/loader'


import AccountCardContainer from '../../components/accountCardContainer'

import { useSelector, useDispatch } from "react-redux";
import {  setFirstName,
          setLastName,
          toggleDisplayEditNameForm,
          getUserData,
          updateUserData,
          selectFirstName,
          selectLastName,
          selectFirstNameEdit,
          selectLastNameEdit,
          selectDisplayEditNameForm,
          selectGetUserDataStatus 
        } from '../../features/profile-slice/profileSlice';

import { selectToken } from '../../features/login-slice/loginSlice';



const Profile = () => {

  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const getUserDataStatus = useSelector(selectGetUserDataStatus)

  useEffect( () => {
    dispatch(getUserData(token))
  }, [])

  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  const firstNameEdit = useSelector(selectFirstNameEdit)
  const lastNameEdit = useSelector(selectLastNameEdit)
  const displayEditNameFrom = useSelector(selectDisplayEditNameForm)


  const handleEditNameBtnClick = e => {
    dispatch(toggleDisplayEditNameForm())
    dispatch(setFirstName(''))
    dispatch(setLastName(''))
  }

  const handleInputFieldChange = e => {
    const { name, value } = e.target;
    name === 'firstName' ? dispatch(setFirstName(value)) : dispatch(setLastName(value));
  }

  const handleSaveNameClick = e => {
    try {
      dispatch(updateUserData({ data: { firstName: firstNameEdit, lastName: lastNameEdit }, token}))
      dispatch(toggleDisplayEditNameForm())
      dispatch(setFirstName(''))
      dispatch(setLastName(''))
    } catch (err) {
      console.log(err.response)
    }
  }

  return (
    <> 
      { getUserDataStatus === 'OK'
      ? (<StyledProfile>
          <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}</h1>
            {displayEditNameFrom ? 
              (<>
                <div className="input-wrapper">
                  <input
                    className='profile-input'
                    type="text"
                    name="firstName"
                    placeholder={firstName}
                    value={firstNameEdit}
                    onChange={handleInputFieldChange}
                  />
                  <input
                    className='profile-input'
                    type="text"
                    name="lastName"
                    placeholder={lastName}
                    value={lastNameEdit}
                    onChange={handleInputFieldChange}
                  />
                </div>
                <div className="btn-wrapper">
                  <button onClick={handleSaveNameClick} className="btn">Save</button>
                  <button onClick={handleEditNameBtnClick} className="btn">Cancel</button>
                </div>
              </>) :
              <button className="btn" onClick={handleEditNameBtnClick}>Edit name</button>
            }
          </div>
          <h2 className="sr-only">Accounts</h2>
          <AccountCardContainer />
        </StyledProfile>)
      : (<Loader />)
      }
    </>
  )
}

export default Profile