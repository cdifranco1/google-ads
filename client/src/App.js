import React from 'react';
import { Container } from './styles/CampaignListStyles'
import { CampaignList } from './components/CampaignList';
import { Login } from './components/Login';
import './App.css';

import { Route } from 'react-router-dom';
import { Nav } from './components/Nav';


function App() {
  return (
    <>
      <Nav />
      <Container>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/campaigns'>
          <CampaignList />
        </Route>
      </Container>
    </>
  );
}

export default App;
