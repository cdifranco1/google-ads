import React, { useState, useEffect } from 'react';

import { CampaignUpdateForm } from './CampaignUpdateForm';
import { CampaignItem } from './CampaignItem';
import { campaignPreviouslyEdited } from '../utils';


export const Campaign = (props) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ edited, setEdited ] = useState(false)
  const [ updatedCampaign, setUpdatedCampaign ] = useState(props.campaign)

  const handleChange = (e) => {
    setUpdatedCampaign({
      ...updatedCampaign,
      [e.target.name]: e.target.value
    })
  }

  //Closes editing form and updates edited campaign list. Sets current campaign with updated fields.
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)

    if (campaignPreviouslyEdited(props.editedCampaigns, updatedCampaign)){
      props.setEditedCampaigns(props.editedCampaigns.map(el => 
        el.id === updatedCampaign.id ? updatedCampaign : el))
    } else {
      props.setEditedCampaigns([...props.editedCampaigns, updatedCampaign]) 
    }
    
    setEdited(true)
  }


  useEffect(() => {
    if (!props.editedCampaigns.find(el => el.id === props.campaign.id)){
      setUpdatedCampaign(props.campaign)
      setEdited(false)
    }
  }, [props.editedCampaigns])

  const edit = () => {
    setIsEditing(true)
  }

  return (
    <>
      {isEditing ?
        <CampaignUpdateForm onSubmit={handleSubmit} onChange={handleChange} updatedCampaign={updatedCampaign}/>
        :
        <CampaignItem campaign={props.campaign} onClick={edit} buttonText="Edit" edited={edited} />}
    </>
  )
}