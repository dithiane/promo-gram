import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import helloReducer from './helloReducer';

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    hello: helloReducer
})

export default rootReducer;