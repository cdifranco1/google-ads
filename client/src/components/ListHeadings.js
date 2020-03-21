import React, { useState, useReducer } from 'react';
import { ListHeading, TableHeader } from '../styles/CampaignListStyles'
import { headingReducer } from '../reducers/headingReducer';


export const initialHeadingState = {
  id: {
    title: 'ID # ',
    selected: false
    }, 
  name: {
    title: 'Name ',
    selected: false
    },
  status: {
    title: 'Status ',
    selected: false
    },
  targetRoas: {
    title: 'Target ROA ',
    selected: false
    }
}

export const ListHeadings = ({handleSort}) => {
  const [ tableHeadings, dispatch ] = useReducer(headingReducer, initialHeadingState)
  
  const updateSelected = (heading) => {
    dispatch({type: 'SELECT_COLUMN', payload: heading})
    handleSort(heading)
  }

  return (
    <TableHeader>
      {tableHeadings.id.selected ?
      <ListHeading onClick={() => updateSelected('id')}>&#x25B2;{' '}{tableHeadings.id.title}</ListHeading> :
      <ListHeading onClick={() => updateSelected('id')}>{tableHeadings.id.title}</ListHeading>}
      
      {tableHeadings.name.selected ?
      <ListHeading onClick={() => updateSelected('name')}>&#x25B2;{' '}{tableHeadings.name.title}</ListHeading> :
      <ListHeading onClick={() => updateSelected('name')}>{tableHeadings.name.title}</ListHeading>}
      
      {tableHeadings.status.selected ?
      <ListHeading onClick={() => updateSelected('status')}>&#x25B2;{' '}{tableHeadings.status.title}</ListHeading> :
      <ListHeading onClick={() => updateSelected('status')}>{tableHeadings.status.title}</ListHeading>}
      
      {tableHeadings.targetRoas.selected ?
      <ListHeading onClick={() => updateSelected('targetRoas')}>&#x25B2;{' '}{tableHeadings.targetRoas.title}</ListHeading> :
      <ListHeading onClick={() => updateSelected('targetRoas')}>{tableHeadings.targetRoas.title}</ListHeading>}
    </TableHeader>
  )
}