const initialState = {};

const authReducer =(state=initialState,action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log("login error");
            return {
                ...state,
                authError: 'LOGIN_ERROR'
            }
        case 'LOGIN_SUCCESS':
            console.log("login success");
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log("signout success");
            return {
                state
            }
        case 'RESET_PASSWORD':
            console.log("password link sent");
            // window.location.href= "/admins/";
            return Promise.resolve({
                state
            })
        default:
            return state;
    }
}

export default authReducer;