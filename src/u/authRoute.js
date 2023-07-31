import { useSelector } from "react-redux";
import {  Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';



const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: "/login", state: { referer: props.location } }} />
        );
      }}
    />
  );
};

export default AuthRoute;