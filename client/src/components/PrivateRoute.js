import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, loggedIn, ...rest}) => {
  return (
    <Route {...rest} render={(props) => {
      if (localStorage.getItem('loggedIn')){
        return <Component {...props} />
      } else {
        return <Redirect to="/" />
      }
    }}/>
  )
} 