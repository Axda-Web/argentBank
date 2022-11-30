import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from '../../utils/axios'

export const getToken = createAsyncThunk('login/getToken', async (credentials, thunkAPI) => {
    const token = await login(credentials)
    return token;
  });

const options = {
    name: 'login',
    initialState: {
        userName: '',
        password: '',
        getTokenStatus: '',
        token: '',
        rememberUser: false
    },
    reducers: {
        setUserName: (state, action) => ({
            ...state,
            userName: action.payload
        }),
        setPassword: (state, action) => ({
            ...state,
            password: action.payload
        }),
        toggleRememberUser: (state) => ({
            ...state,
            rememberUser: !state.rememberUser
        }), 
        resetToken: (state) => ({
            ...state,
            token: ''
        })
    },
    extraReducers: {
        [getToken.pending]: (state) => ({
            ...state,
            getTokenStatus: 'PENDING'
        }),
        [getToken.fulfilled]: (state, action) => ({
            ...state,
            getTokenStatus: 'OK',
            token: action.payload
        }),
        [getToken.rejected]: (state) => ({
            ...state,
            getTokenStatus: 'KO',
        })
    }
}


const loginSlice = createSlice(options)

// Action creators
export const { setUserName, setPassword, toggleRememberUser, resetToken } = loginSlice.actions

// Reducer
export default loginSlice.reducer

// Selectors
export const selectUserName = state => state.login.userName
export const selectPassword = state => state.login.password
export const selectToken = state => state.login.token
export const selectRememberUser = state => state.login.rememberUser