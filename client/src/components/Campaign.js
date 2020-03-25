import React, { useState } from 'react';
import { ListItem, Column, CampaignInput, CampaignForm, CampaignInputDiv, Button } from '../styles/CampaignListStyles';
import { convertToPercentage } from '../utils';
import axios from 'axios';

export const Campaign = ({campaign}) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ editableCampaign, setEditableCampaign ] = useState(campaign)

  const handleChange = (e) => {
    setEditableCampaign({
      ...editableCampaign,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    axios.post()
  }

  return (
    <>
      {isEditing ?
        <ListItem>
          <CampaignForm onSubmit={handleSubmit}>
            <CampaignInputDiv>
              <CampaignInput onChange={handleChange} name="id" value={editableCampaign.id} />
            </CampaignInputDiv>
            <CampaignInputDiv>
              <CampaignInput onChange={handleChange} name="name" value={editableCampaign.name} />
            </CampaignInputDiv>
            <CampaignInputDiv>
              <CampaignInput onChange={handleChange} name="status" value={editableCampaign.status} />
            </CampaignInputDiv>
            <CampaignInputDiv>
              <CampaignInput onChange={handleChange} name="targetRoas" value={editableCampaign.targetRoas}/>
            </CampaignInputDiv>
            <Button type="submit">Update Campaign</Button>
          </CampaignForm>      
        </ListItem>
      :
      <ListItem style={{border: '1px solid black'}}> 
        <Column>{campaign.id}</Column>
        <Column>{campaign.name}</Column>
        <Column>{campaign.status}</Column>
        <Column>{convertToPercentage(campaign.targetRoas)}</Column>
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </ListItem>}
    </>
  )
}