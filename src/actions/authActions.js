export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase= getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch( {
                type: 'LOGIN_ERROR',
                err
            });
        })
    }
}

export const reset = (email) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase= getFirebase();

        return firebase.auth().sendPasswordResetEmail(email).then((res) => {
            dispatch({ type: 'RESET_PASSWORD'})
            return res;
        })
    }
}




export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase =getFirebase();
        firebase.auth().signOut().then(()=> {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}