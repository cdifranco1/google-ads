import React from 'react';
import { ListHeadings } from './ListHeadings';
import { CampaignItem } from './CampaignItem';
import { TableContainer, Button, VerticalSpacer } from '../styles/CampaignListStyles';


export const UpdatedCampaigns = (props) => {
  return (
    <TableContainer>
      <h1>Updated Campaigns</h1>
      <ListHeadings/>
      {props.editedCampaigns.map(el => 
        <CampaignItem edited buttonText='Remove Changes' campaign={el} onClick={() => props.removeCampaignUpdates(el.id)} />
      )}
      <VerticalSpacer />
      <Button onClick={props.updateCampaigns}>Submit Campaign Updates</Button>
    </TableContainer>
  )
}