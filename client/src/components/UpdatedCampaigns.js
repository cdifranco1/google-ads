import React from 'react';
import { ListHeadings } from './ListHeadings';
import { CampaignItem } from './CampaignItem';



export const UpdatedCampaigns = (props) => {
  console.log(props)
  return (
    <>
      <ListHeadings/>
      {props.editedCampaigns.map(el => 
        <CampaignItem edited buttonText='Remove Changes' campaign={el} />
      )}
    </>
  )
}