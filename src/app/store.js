import { configureStore } from "@reduxjs/toolkit";

// Import slice reducers
import loginReducer from "../features/login-slice/loginSlice";
import profileReducer from "../features/profile-slice/profileSlice";

// Create App store
const store = configureStore({
    reducer: {
        login: loginReducer,
        profile: profileReducer
    }
})

export default store