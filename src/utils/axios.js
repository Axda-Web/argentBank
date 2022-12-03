import axios from 'axios';

// Create Axios request config
const axiosRequest =  axios.create({
    baseURL: 'http://localhost:3001/api/v1/user'
});


// Get JWT from the API
export const login = async ({email, password}) => {
    try {
        const response = await axiosRequest.post('login', {email, password})
        return response.data.body.token
    } catch(err) {
        console.log(err)
    }
}


// Get profile User first name & last name from the API
export const userProfile = async (token) =>{

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    }

    try {
        const response = await axiosRequest.post('profile', null, config)   
        return ({
                firstName: response.data.body.firstName,
                lastName: response.data.body.lastName
            })
    } catch(err) {
        console.log(err)
    }
}


// Update user first name & last name on the API
export const updateUserProfile = async ( data, token ) => {

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        const response = await axiosRequest.put('profile', data, config)
        return ({
            firstName: response.data.body.firstName,
            lastName: response.data.body.lastName
        })
    } catch(err) {
        console.log(err)
    }
}
