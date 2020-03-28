import React from 'react';
import { Container } from './styles/CampaignListStyles'
import { CampaignList } from './components/CampaignList';
import { UpdatedCampaigns } from './components/UpdatedCampaigns';
import './App.css';

import { Route } from 'react-router-dom';
import { Nav } from './components/Nav';


function App() {
  return (
    <Container>
      <Nav />
      <Route path='/campaigns'>
        <CampaignList />
      </Route>
    </Container>
  );
}

export default App;
