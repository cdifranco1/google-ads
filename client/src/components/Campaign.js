import React, { useState } from 'react';

import { CampaignUpdateForm } from './CampaignListForm';
import { CampaignItem } from './CampaignItem';
import { campaignEdited } from '../utils';




export const Campaign = ({campaign, editedCampaigns, setEditedCampaigns}) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ updatedCampaign, setupdatedCampaign ] = useState(campaign)

  const handleChange = (e) => {
    setupdatedCampaign({
      ...updatedCampaign,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)

    if (campaignEdited(editedCampaigns, updatedCampaign)){
      setEditedCampaigns(editedCampaigns.map(el => 
        el.id === updatedCampaign.id ? updatedCampaign : el))
    } else {
      setEditedCampaigns([...editedCampaigns, updatedCampaign]) 
    }
    console.log(editedCampaigns)
  }

  const edit = (e) => {
    e.preventDefault()
    setIsEditing(true)
  }

  return (
    <>
      {isEditing ?
        <CampaignUpdateForm onSubmit={handleSubmit} onChange={handleChange} updatedCampaign={updatedCampaign}/>
      :
        <CampaignItem campaign={campaign} edit={edit} editedCampaigns={editedCampaigns} />}
    </>
  )
}