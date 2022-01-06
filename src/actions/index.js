export const addUser = (user) => {
    return {
        type: 'ADD',
        payload: user
    }
}