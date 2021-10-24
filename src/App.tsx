import { AuthRoutes } from 'features/auth/routes';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <AuthRoutes />
      </Switch>
    </Router>
  );
};

export default App;
