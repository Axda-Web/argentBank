import { useEffect } from "react";
import StyledForm from "./Form.styled";
import { useNavigate } from "react-router-dom";

import { getUserNameFromLocalStorage, addToLocalStorage, removeFromLocalStorage } from "../../utils/localStorage";


import { useSelector, useDispatch } from "react-redux";
import {
    setUserName,
    setPassword,
    setRememberUser,
    getToken,
    selectError,
    selectPassword,
    selectUserName,
    selectToken,
    selectRememberUser
  } from "../../features/login-slice/loginSlice";

import { toggleIsLoggedIn } from "../../features/profile-slice/profileSlice";



/**
 * Form component
 * @component
 * @returns {JSX.Element} 
 */
const Form = () => {

  // Connect hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Get values from the store
  const userName = useSelector(selectUserName)
  const password = useSelector(selectPassword)
  const token = useSelector(selectToken)
  const rememberUser = useSelector(selectRememberUser)
  const error = useSelector(selectError)
  const userNameFromLocalStorage = getUserNameFromLocalStorage()

  useEffect( () => {

    if (token) {
      navigate('/profile')
      dispatch(toggleIsLoggedIn())
    }

    // Check if userName exist in the localStorage
    if (userNameFromLocalStorage) {
      dispatch(setUserName(userNameFromLocalStorage))
    }

  }, [token])


  /**
   * handleInputFieldChange
   * Update userName and password value in the store
   * @param {*} e 
   * @return {void}
   */
  const handleInputFieldChange = e => {
    const { name, value } = e.target;
    name === 'username' ? dispatch(setUserName(value)) : dispatch(setPassword(value))
  };


  /**
   * handleCheckboxChange
   * Update checkbox state in the store
   * Add or remove the userName value to the local storage
   * @param {*} e 
   * @return {void}
   */
  const handleCheckboxChange = e => {
    const { checked } = e.target
    dispatch(setRememberUser(checked))

    !rememberUser ? addToLocalStorage(userName) : removeFromLocalStorage()
  }


  /**
   * handleSubmit
   * Send credentials to the API to get the auth token
   * Set error to true if the request failed
   * Empty form input fields
   * @param {*} e 
   * @return {void}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getToken({email: userName, password}))

    dispatch(setUserName(''))
    dispatch(setPassword(''))
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          className={error ? 'error-style' : undefined}
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={handleInputFieldChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          className={error ? 'error-style' : undefined}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputFieldChange}
        />
      </div>
      { error && <span className="error-message">Username or passwork incorrect</span> }
      <div className="input-remember">
        <input  
          type="checkbox"
          id="remember-me"
          checked={rememberUser}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button className="btn">Sign in</button>
    </StyledForm>
  );
};

export default Form;
