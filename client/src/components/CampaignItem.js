import React, { useState } from 'react';
import { convertToPercentage } from '../utils';

import { ListItem, Column, Button } from '../styles/CampaignListStyles';

export const CampaignItem = (props) => {
  console.log(props)
  // const [edited, setEdited] = useState(() => {
  //   if (props.editedCampaigns.find(el => el.id === props.campaign.id)){
  //     return true
  //   } else {
  //     return false
  //   }
  // })

  return (
    <ListItem edited={props.edited} > 
      <Column>{props.campaign.id}</Column>
      <Column>{props.campaign.name}</Column>
      <Column>{props.campaign.status}</Column>
      <Column>{convertToPercentage(props.campaign.targetRoas)}</Column>
      {props.buttonText && <Button onClick={props.onClick}>{props.buttonText}</Button>}
    </ListItem>
  )
}
