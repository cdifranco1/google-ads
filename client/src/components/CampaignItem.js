import React, { useState } from 'react';
import { convertToPercentage } from '../utils';

import { ListItem, Column, Button } from '../styles/CampaignListStyles';

export const CampaignItem = ({campaign, edit, editedCampaigns}) => {
  
  const [edited, setEdited] = useState(() => {
    if (editedCampaigns.find(el => el.id === campaign.id)){
      return true
    } else {
      return false
    }
  })

  return (
    <ListItem edited={edited}> 
      <Column>{campaign.id}</Column>
      <Column>{campaign.name}</Column>
      <Column>{campaign.status}</Column>
      <Column>{convertToPercentage(campaign.targetRoas)}</Column>
      <Button onClick={edit}>Edit</Button>
    </ListItem>
  )
}
