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
        error: false,
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
        setRememberUser: (state, action) => ({
            ...state,
            rememberUser: action.payload
        }), 
        resetToken: (state) => ({
            ...state,
            token: ''
        }),
        resetTokenStatus: (state) => ({
            ...state,
            getTokenStatus: ''
        }),
        setError: (state, action) => ({
            ...state,
            error: action.payload
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
export const { setUserName, setPassword, setRememberUser, resetToken, resetTokenStatus, setError } = loginSlice.actions

// Reducer
export default loginSlice.reducer

// Selectors
export const selectUserName = state => state.login.userName
export const selectPassword = state => state.login.password
export const selectToken = state => state.login.token
export const selectGetTokenStatus = state => state.login.getTokenStatus
export const selectError = state => state.login.error
export const selectRememberUser = state => state.login.rememberUser