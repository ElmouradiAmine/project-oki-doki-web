import React from 'react';
import { PublicRoute } from 'routes/PublicRoute';
import { Login } from './Login';
import { Signup } from './Signup';

export const AuthRoutes = () => (
  <>
    <PublicRoute exact path="/login" component={Login} />
    <PublicRoute exact path="/signup" component={Signup} />
  </>
);
