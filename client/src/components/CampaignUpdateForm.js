import React from 'react';
import { ListItem, CampaignInput, MediumCampaignInputDiv, LargeCampaignInputDiv, Button, CampaignForm, CampaignFormButtonDiv } from '../styles/CampaignListStyles';

export const CampaignUpdateForm = (props) => {
  console.log(props)
  return (
    <ListItem>
      <CampaignForm onSubmit={props.onSubmit}>
        <MediumCampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="id" value={props.updatedCampaign.id} />
        </MediumCampaignInputDiv>
        <LargeCampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="name" value={props.updatedCampaign.name} />
        </LargeCampaignInputDiv>
        <MediumCampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="status" value={props.updatedCampaign.status} />
        </MediumCampaignInputDiv>
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