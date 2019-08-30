import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */} {/* TODO - create Navbar component */}

      <Switch>
        <Route exact path="/" component={Home} /> {/* TODO - build Home component */}
        {/* <Route exact path="/login" component={Login} /> TODO - create Login component */}
        {/* <Route exact path="/register" component={Register} /> TODO - create Register component */}

        {/* TODO - implement auth and utilize PrivateRoute for auth-restricted 
        <PrivateRoute component={Dashboard} exact path="/dashboard" authed={props.userIsAuthenticated} />
        <Route
          path="/login"
          render={() => {
            return <Login authed={props.userIsAuthenticated} {...props} />;
          }}
        /> 
        */}
      </Switch>

      {/* <Footer /> */} {/* TODO - create Footer component */}
    </div>
  );
}

export default App;
