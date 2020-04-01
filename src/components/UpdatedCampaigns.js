import React from 'react';
import { ListHeadings } from './ListHeadings';
import { CampaignItem } from './CampaignItem';
import { TableContainer, VerticalSpacer, UpdateCampaignsButton, FlexCenter } from '../styles/CampaignListStyles';


export const UpdatedCampaigns = (props) => {
  return (
    <TableContainer>
      <h1>Updated Campaigns</h1>
      <ListHeadings />
      {props.editedCampaigns.map(el => 
        <CampaignItem edited buttonText='Remove Changes' campaign={el} onClick={() => props.removeCampaignUpdates(el.id)} />
      )}
      <VerticalSpacer />
      <FlexCenter>
        <UpdateCampaignsButton onClick={props.submitUpdates} type="submit">Submit Campaign Updates</UpdateCampaignsButton>
      </FlexCenter>
    </TableContainer>
  )
}