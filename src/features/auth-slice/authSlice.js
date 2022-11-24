import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetchToken = createAsyncThunk('auth/fetchToken', async (credentials, thunkAPI) => {
    const response = await axios.post('/login', credentials)
    return response.data.body.token;
  });

const options = {
    name: 'auth',
    initialState: {
        userName: '',
        password: '',
        status: '',
        token: '',
        rememberToken: false
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
        toggleRememberToken: (state, action) => ({
            ...state,
            rememberToken: !state.rememberToken
        })
    },
    extraReducers: {
        [fetchToken.pending]: (state, action) => ({
            ...state,
            status: 'Status: pending...'

        }),
        [fetchToken.fulfilled]: (state, action) => ({
            ...state,
            status: 'Status: OK',
            token: action.payload
        }),
        [fetchToken.rejected]: (state, action) => ({
            ...state,
            status: 'Status: KO',
        })
    }
}


const authSlice = createSlice(options)

export const { setUserName, setPassword, toggleRememberToken } = authSlice.actions
export default authSlice.reducer

export const selectUserName = state => state.userName
export const selectPassword = state => state.password
export const selectToken = state => state.token
export const selectStatus = state => state.Status
export const selectRememberToken = state => state.rememberToken