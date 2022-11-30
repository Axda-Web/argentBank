import { useEffect } from "react";
import StyledForm from "./Form.styled";
import { useNavigate } from "react-router-dom";

// import { addToLocalStorage, removeFromLocalStorage } from "../../utils/localStorage";


import { useSelector, useDispatch } from "react-redux";
import { setUserName, setPassword, toggleRememberUser, getToken} from "../../features/login-slice/loginSlice";
import { selectPassword, selectUserName, selectToken, selectRememberUser} from "../../features/login-slice/loginSlice";

import { toggleIsLoggedIn } from "../../features/profile-slice/profileSlice";


const Form = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const password = useSelector(selectPassword)
  const token = useSelector(selectToken)
  const rememberUser = useSelector(selectRememberUser)

  useEffect( () => {
    if (token) {
      navigate('/profile')
      dispatch(toggleIsLoggedIn())
    }

  }, [token])

  const handleInputFieldChange = (e) => {
    const { name, value } = e.target;
    name === 'username' ? dispatch(setUserName(value)) : dispatch(setPassword(value))
  };

  const handleCheckboxChange = e => {
    dispatch(toggleRememberUser())
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(getToken({email: userName, password}))
    } catch (err) {
      console.log(err.response)
    }

    if (token) {

      // // Manage 'Remember me' checkbox
      // rememberUser ? addToLocalStorage() : removeFromLocalStorage()

      // Manage navigation
      // navigate('/profile')
      // dispatch(toggleIsLoggedIn())
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
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
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputFieldChange}
        />
      </div>
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
