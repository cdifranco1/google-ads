import React, { useState, useReducer } from 'react';
import { ListHeading, TableHeader } from '../styles/CampaignListStyles'
import { headingReducer } from '../reducers/headingReducer';


export const ListHeadings = () => {
  const [ tableHeadings, dispatch ] = useReducer(headingReducer, {
    id: {
      title: 'ID #: ',
      selected: false
      }, 
    name: {
      title: 'Name: ',
      selected: false
      },
    status: {
      title: 'Status: ',
      selected: false
      },
    targetRoa: {
      title: 'Target ROA: ',
      selected: false
      }
  })

  const updateSelected = (heading) => {
    dispatch({type: 'SELECT_COLUMN', payload: heading})
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
      
      {tableHeadings.targetRoa.selected ?
      <ListHeading onClick={() => updateSelected('targetRoa')}>&#x25B2;{' '}{tableHeadings.targetRoa.title}</ListHeading> :
      <ListHeading onClick={() => updateSelected('targetRoa')}>{tableHeadings.targetRoa.title}</ListHeading>}
    </TableHeader>
  )
}