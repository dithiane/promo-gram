import firebase from 'firebase';
import { devUrl, port, functionsConfig } from '../../config/functionsConfig';

export const helloWorld = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
      var functions = firebase.app().functions();

      if (process.env.NODE_ENV === 'development' && port !== undefined) {
        functions.useFunctionsEmulator(`${devUrl}${port}`);
      }
      
      let greeting = functions.httpsCallable('helloWorld');

      greeting()
        .then(res => {
          dispatch({ type: 'GREETING',  payload: res.data });
        })
  }
}