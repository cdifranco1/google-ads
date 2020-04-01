import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, loggedIn, ...rest}) => {
  console.log(loggedIn)
  return (
    <Route {...rest} render={(props) => {
      if (loggedIn){
        return <Component {...props} />
      } else {
        return <Redirect to="/" />
      }
    }}/>
  )
} 