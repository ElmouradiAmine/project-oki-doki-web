import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useAuthEffect from 'hooks/useAuthEffect';
import SignupPage from 'pages/Signup';
import { PublicRoute } from 'routes/PublicRoute';
import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';

const App = () => {
  useAuthEffect();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={LoginPage} />;
        <PublicRoute exact path="/signup" component={SignupPage} />;
      </Switch>
    </Router>
  );
};

export default App;
