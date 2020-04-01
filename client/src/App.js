import React, { useState } from 'react';
import { Container } from './styles/CampaignListStyles'
import { CampaignList } from './components/CampaignList';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

import { Route } from 'react-router-dom';
import { Nav } from './components/Nav';


function App() {
  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <>
      <Nav />
      <Container>
        <Route exact path='/'>
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <PrivateRoute loggedIn={loggedIn} path='/campaigns' component={CampaignList}/>
      </Container>
    </>
  );
}

export default App;
