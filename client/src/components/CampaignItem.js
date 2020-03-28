import React, { useState } from 'react';
import { convertToPercentage } from '../utils';

import { ListItem, LargeColumnP, SmallColumnDiv, MediumColumnP, Button } from '../styles/CampaignListStyles';

export const CampaignItem = (props) => {
  return (
    <ListItem edited={props.edited} > 
      <MediumColumnP>{props.campaign.id}</MediumColumnP>
      <LargeColumnP>{props.campaign.name}</LargeColumnP>
      <MediumColumnP>{props.campaign.status}</MediumColumnP>
      <MediumColumnP>{convertToPercentage(props.campaign.targetRoas)}</MediumColumnP>
      <SmallColumnDiv>
        {props.buttonText && <Button onClick={props.onClick}>{props.buttonText}</Button>}
      </SmallColumnDiv>
    </ListItem>
  )
}
