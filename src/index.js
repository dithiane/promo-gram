import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';

const store = createStore(rootReducer, 
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig, { 
        useFirestoreForProfile: true, 
        userProfile: 'users', 
        attachAuthIsReady: true 
      })
  ) 
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>, 
    document.getElementById('root')
  );
  serviceWorker.unregister();
})

// If you want your app to work offline and load faster, you can change
// unregister() to register(). Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
