import React, { useState } from 'react';

import { CampaignUpdateForm } from './CampaignUpdateForm';
import { CampaignItem } from './CampaignItem';
import { campaignPreviouslyEdited } from '../utils';


export const Campaign = (props) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ edited, setEdited ] = useState(false)
  const [ campaign, setCampaign ] = useState(props.campaign)
  const [ updatedCampaign, setupdatedCampaign ] = useState(props.campaign)

  const handleChange = (e) => {
    setupdatedCampaign({
      ...updatedCampaign,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)

    if (campaignPreviouslyEdited(props.editedCampaigns, updatedCampaign)){
      props.setEditedCampaigns(props.editedCampaigns.map(el => 
        el.id === updatedCampaign.id ? updatedCampaign : el))
    } else {
      props.setEditedCampaigns([...props.editedCampaigns, updatedCampaign]) 
    }

    setCampaign(updatedCampaign)
  }

  const removeCampaignEdits = (e) => {
    e.preventDefault()

  }

  const edit = (e) => {
    e.preventDefault()
    setIsEditing(true)
    setEdited(true)
  }

  return (
    <>
      {isEditing ?
        <CampaignUpdateForm onSubmit={handleSubmit} onChange={handleChange} updatedCampaign={updatedCampaign}/>
      :
        <CampaignItem campaign={campaign} onClick={edit} buttonText="Edit" edited={edited} />}
    </>
  )
}