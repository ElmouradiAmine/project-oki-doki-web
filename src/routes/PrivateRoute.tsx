import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from 'store';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      render={(props) =>
        isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />
      }
      {...rest}
    />
  );
};
