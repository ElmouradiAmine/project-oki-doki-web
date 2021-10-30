import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import useAuthEffect from 'hooks/useAuthEffect';
import { Login } from 'pages/Login';
import { Signup } from 'pages/Signup';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import Home from 'pages/Home';

const App = () => {
  useAuthEffect();
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />;
        <PublicRoute exact path="/signup" component={Signup} />;
      </Switch>
    </Router>
  );
};

export default App;
