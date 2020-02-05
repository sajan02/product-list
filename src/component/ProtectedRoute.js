import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

export default function ProtectedRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn ?(
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }