import React from 'react';
import { ListItem, CampaignInput, MediumCampaignInputDiv, LargeCampaignInputDiv, Button, CampaignForm, CampaignFormButtonDiv, MediumColumnP } from '../styles/CampaignListStyles';

export const CampaignUpdateForm = (props) => {
  return (
    <ListItem>
      <CampaignForm onSubmit={props.onSubmit}>
        <MediumColumnP>{props.updatedCampaign.id}</MediumColumnP>
        <LargeCampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="name" value={props.updatedCampaign.name} />
        </LargeCampaignInputDiv>
        <MediumColumnP>{props.updatedCampaign.status}</MediumColumnP>
        <MediumCampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="targetRoas" value={props.updatedCampaign.targetRoas}/>
        </MediumCampaignInputDiv>
        <CampaignFormButtonDiv>
          <Button type="submit">Update Campaign</Button>
        </CampaignFormButtonDiv>
      </CampaignForm>      
    </ListItem>
  )
}