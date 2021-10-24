import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from 'store';

interface PublicRouteProps extends RouteProps {
  component: any;
}

export const PublicRoute: FC<PublicRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      render={(props) =>
        isAuthenticated === true ? <Redirect to="/" /> : <Component {...props} />
      }
      {...rest}
    />
  );
};
