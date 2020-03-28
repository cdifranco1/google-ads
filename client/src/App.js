import React from 'react';
import { Container } from './styles/CampaignListStyles'
import { CampaignList } from './components/CampaignList';
import { UpdatedCampaigns } from './components/UpdatedCampaigns';
import './App.css';

import { Route } from 'react-router-dom';


function App() {
  return (
    <Container>
      <Route path='/campaigns'>
        <CampaignList />
      </Route>
    </Container>
  );
}

export default App;
