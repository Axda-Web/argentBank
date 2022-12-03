// Add userName to the local storage
export const addToLocalStorage = (userName) => {
    localStorage.setItem('userName', userName)
}

// Remove userName from the local storage
export const removeFromLocalStorage = () => {
    localStorage.setItem('userName', '')
}

// Get userName from the local storage
export const getUserNameFromLocalStorage = () => {
    return localStorage.getItem('userName')
}