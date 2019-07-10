import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
// import data from "./dataReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    // projt: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;