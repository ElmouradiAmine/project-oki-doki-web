import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from './Login';
import { Signup } from './Signup';

export const AuthRoutes = () => (
  <>
    <Route exact path="/login" render={Login} />
    <Route exact path="/signup" render={Signup} />
  </>
);
