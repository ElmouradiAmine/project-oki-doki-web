import React from 'react';
import { AuthRoutes } from 'features/auth/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import useAuthEffect from 'hooks/useAuthEffect';
import Header from 'components/Header/Header';

const App = () => {
  useAuthEffect();
  return (
    <Router>
      <Header />
      <Switch>
        <AuthRoutes />
      </Switch>
    </Router>
  );
};

export default App;
