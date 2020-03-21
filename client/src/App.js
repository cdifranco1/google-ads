import React from 'react';
import { Container } from './styles/CampaignListStyles'
import { CampaignList } from './components/CampaignList';
import './App.css';


function App() {
  return (
    <Container>
      <CampaignList />
    </Container>
  );
}

export default App;
