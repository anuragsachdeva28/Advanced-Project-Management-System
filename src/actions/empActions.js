export const fetchEmp = (empId) =>(dispatch) => {
    // console.log("fetchidc");
    // return (dispatch) => {
        console.log("start");
        fetch("https://us-central1-dexpert-admin.cloudfunctions.net/api/employees/"+empId)
            .then(res => res.json())
            .then((data) => {
                    dispatch({
                        type: 'FETCH_EMPLOYEE',
                        payload: data
                    })
                }
            );

        // const firebase= getFirebase();

        // firebase.auth().signInWithEmailAndPassword(
        //     credentials.email,
        //     credentials.password
        // ).then(() => {
        //     dispatch({ type: 'LOGIN_SUCCESS' })
        // }).catch((err) => {
        //     dispatch( {
        //         type: 'LOGIN_ERROR',
        //         err
        //     });
        // })
    // }
}