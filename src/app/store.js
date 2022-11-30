import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login-slice/loginSlice";
import profileReducer from "../features/profile-slice/profileSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        profile: profileReducer
    }
})

export default store