import React, { useState } from "react";
import StyledForm from "./Form.styled";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

import Button from "../button";

import { useSelector, useDispatch } from "react-redux";
import { setUserName, setPassword, fetchToken} from "../../features/auth-slice/authSlice";
import { selectPassword, selectUserName, selectToken, selectStatus} from "../../features/auth-slice/authSlice";


const Form = () => {

  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const password = useSelector(selectPassword)
  const token = useSelector(selectToken)
  const status = useSelector(selectStatus)

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'username' ? dispatch(setUserName(value)) : dispatch(setPassword(value))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submited");
    try {
      dispatch(fetchToken({email: userName, password}))
      // const response = await axios.post('/login', { email: username, password })
      // console.log(response)
    } catch (err) {
      console.log(err)
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
          onChange={handleChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <Button className="sign-in-button">Sign in</Button>
    </StyledForm>
  );
};

export default Form;
