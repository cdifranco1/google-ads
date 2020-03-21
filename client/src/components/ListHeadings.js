import React, { useState, useReducer } from 'react';
import { ListHeading, TableHeader } from '../styles/CampaignListStyles'
import { headingReducer } from '../reducers/headingReducer';


export const initialHeadingState = {
  id: {
    title: 'ID #',
    selected: false
    }, 
  name: {
    title: 'Name',
    selected: false
    },
  status: {
    title: 'Status',
    selected: false
    },
  targetRoas: {
    title: 'Target ROA',
    selected: false
    }
}

export const ListHeadings = ({handleSort}) => {
  const [ tableHeadings, dispatch ] = useReducer(headingReducer, initialHeadingState)
  
  const updateSelected = (heading) => {
    dispatch({type: 'SELECT_COLUMN', payload: heading})
  }

  return (
    <TableHeader>
      {tableHeadings.id.selected ?
      <ListHeading onClick={() => {updateSelected('id'); handleSort('ID')}}>&#x25B2;{' '}{tableHeadings.id.title}</ListHeading> :
      <ListHeading onClick={() => {updateSelected('id'); handleSort('ID')}}>{tableHeadings.id.title}</ListHeading>}
      
      {tableHeadings.name.selected ?
      <ListHeading onClick={() => {updateSelected('name'); handleSort('NAME')}}>&#x25B2;{' '}{tableHeadings.name.title}</ListHeading> :
      <ListHeading onClick={() => {updateSelected('name'); handleSort('NAME')}}>{tableHeadings.name.title}</ListHeading>}
      
      {tableHeadings.status.selected ?
      <ListHeading onClick={() => {updateSelected('status'); handleSort('STATUS')}}>&#x25B2;{' '}{tableHeadings.status.title}</ListHeading> :
      <ListHeading onClick={() => {updateSelected('status'); handleSort('STATUS')}}>{tableHeadings.status.title}</ListHeading>}
      
      {tableHeadings.targetRoas.selected ?
      <ListHeading onClick={() => {updateSelected('targetRoas'); handleSort('TARGET')}}>&#x25B2;{' '}{tableHeadings.targetRoas.title}</ListHeading> :
      <ListHeading onClick={() => {updateSelected('targetRoas'); handleSort('TARGET')}}>{tableHeadings.targetRoas.title}</ListHeading>}
    </TableHeader>
  )
}