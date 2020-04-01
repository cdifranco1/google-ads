import React from 'react';
import { ListItem, CampaignInput, MediumCampaignInputDiv, LargeCampaignInputDiv, Button, CampaignForm, CampaignFormButtonDiv, MediumColumnP } from '../styles/CampaignListStyles';

export const CampaignUpdateForm = (props) => {
  return (
    <ListItem>
      <CampaignForm onSubmit={props.onSubmit}>
        <MediumColumnP>{props.campaign.id}</MediumColumnP>
        <LargeCampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="name" value={props.campaign.name} />
        </LargeCampaignInputDiv>
        <MediumColumnP>{props.campaign.status}</MediumColumnP>
        <MediumCampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="targetRoas" value={props.campaign.targetRoas}/>
        </MediumCampaignInputDiv>
        <CampaignFormButtonDiv>
          <Button type="submit">Update</Button>
        </CampaignFormButtonDiv>
      </CampaignForm>      
    </ListItem>
  )
}