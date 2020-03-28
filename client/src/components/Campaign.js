import React, { useState, useEffect } from 'react';

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

    setCampaign(updatedCampaign)
    setEdited(true)
  }

  useEffect(() => {
    if (!props.editedCampaigns.find(el => el.id === campaign.id)){
      setCampaign(props.campaign)
      setEdited(false)
    }
  }, [props.editedCampaigns])



  const edit = (e) => {
    e.preventDefault()
    setIsEditing(true)
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