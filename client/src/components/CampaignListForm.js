import React from 'react';
import { ListItem, CampaignInput, CampaignInputDiv, Button, CampaignForm } from '../styles/CampaignListStyles';

export const CampaignUpdateForm = (props) => {
  console.log(props)
  return (
    <ListItem>
      <CampaignForm onSubmit={props.onSubmit}>
        <CampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="id" value={props.updatedCampaign.id} />
        </CampaignInputDiv>
        <CampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="name" value={props.updatedCampaign.name} />
        </CampaignInputDiv>
        <CampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="status" value={props.updatedCampaign.status} />
        </CampaignInputDiv>
        <CampaignInputDiv>
          <CampaignInput onChange={props.onChange} name="targetRoas" value={props.updatedCampaign.targetRoas}/>
        </CampaignInputDiv>
        <Button type="submit">Update Campaign</Button>
      </CampaignForm>      
    </ListItem>
  )
}