import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isauthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => 
      isAuthenticated === true
        ? <Component {...props} />
        : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
      }
  />
);

export default PrivateRoute;