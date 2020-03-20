import React, { useState, useReducer, useEffect } from 'react';
import { ListItem, Column, ListGroup } from '../styles/CampaignListStyles'
import { ListHeadings } from './ListHeadings';
import axios from 'axios';


const path = 'http://localhost:8000'
const url = `https://fast-refuge-34078.herokuapp.com/api/get-campaigns`

export const CampaignList = () => {
  const [campaigns, setCampaigns ] = useState([])

  useEffect(() => {
    axios
      .get(`${path}`)
      .then(res => setCampaigns(res.data.campaigns))
  }, [])

  return (
    <ListGroup>
      <ListHeadings />
      {campaigns.map(campaign =>
        <ListItem> 
          <Column>{campaign.id}</Column>
          <Column>{campaign.name}</Column>
          <Column>{campaign.status}</Column>
          <Column>{campaign.targetRoas}</Column>
        </ListItem>
      )}
    </ListGroup>
  )
}