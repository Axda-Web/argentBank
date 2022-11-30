import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userProfile, updateUserProfile } from '../../utils/axios'


export const getUserData = createAsyncThunk('profile/getUserData', async (token, thunkAPI) => {
    const fullName = await userProfile(token);
    return fullName;
  });

export const updateUserData = createAsyncThunk('profile/updateUserData', async ({ data, token }, thunkAPI) => {
    const fullName = await updateUserProfile(data, token);
    return fullName;
  });


const options = {
    name: 'profile',
    initialState: {
        firstName: '',
        lastName: '',
        firstNameEdit: '',
        lastNameEdit: '',
        isLoggedIn: false,
        displayEditNameForm: false,
        getUserDataStatus: '',
        updateUserDataStatus: '',
    },
    reducers: {
        setFirstName: (state, action) => ({
            ...state,
            firstNameEdit: action.payload
        }),
        setLastName: (state, action) => ({
            ...state,
            lastNameEdit: action.payload
        }),
        toggleIsLoggedIn: state => ({
            ...state,
            isLoggedIn: !state.isLoggedIn
        }),
        toggleDisplayEditNameForm: state => ({
            ...state,
            displayEditNameForm: !state.displayEditNameForm
        })
    },
    extraReducers: {
        [getUserData.pending]: state => ({
            ...state,
            getUserDataStatus: 'PENDING'
        }),
        [getUserData.fulfilled]: (state, action) => ({
            ...state,
            getUserDataStatus: 'OK',
            firstName: action.payload['firstName'],
            lastName: action.payload['lastName']
        }),
        [getUserData.rejected]: state => ({
            ...state,
            getUserDataStatus: 'KO',
        }),

        [updateUserData.pending]: (state, action) => ({
            ...state,
            updateUserDataStatus: 'PENDING'
        }),
        [updateUserData.fulfilled]: (state, action) => ({
            ...state,
            updateUserDataStatus: 'OK',
            firstName: action.payload['firstName'],
            lastName: action.payload['lastName']
        }),
        [updateUserData.rejected]: (state, action) => ({
            ...state,
            updateUserDataStatus: 'KO',
        })
    }
}

const profileSlice = createSlice(options)

// Action creators
export const { setFirstName, setLastName, toggleIsLoggedIn, toggleDisplayEditNameForm } = profileSlice.actions

//Reducer
export default profileSlice.reducer

//Selectors
export const selectFirstName = state => state.profile.firstName
export const selectLastName = state => state.profile.lastName
export const selectFirstNameEdit = state => state.profile.firstNameEdit
export const selectLastNameEdit = state => state.profile.lastNameEdit
export const selectGetUserDataStatus = state => state.profile.getUserDataStatus
export const selectIsLoggedIn = state => state.profile.isLoggedIn
export const selectDisplayEditNameForm = state => state.profile.displayEditNameForm
