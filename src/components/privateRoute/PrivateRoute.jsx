import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, user, restrictedTo, ...rest }) => {
  const userIsLogged = user != null;
  const userHasPermission =
    userIsLogged && (!restrictedTo || restrictedTo.indexOf(user.rol) !== -1);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userHasPermission ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: userIsLogged ? '/not-allowed' : '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default connect(
  store => ({
    user: store.login.userInfo
  }),
  null
)(PrivateRoute);