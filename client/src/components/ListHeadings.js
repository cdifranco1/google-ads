import React, { useState, useReducer } from 'react';
import { ListHeading, TableHeader } from '../styles/CampaignListStyles'
import { headingReducer } from '../reducers/headingReducer';


export const initialHeadingState = {
  id: {
    title: 'ID #',
    ascending: false,
    descending: false
    }, 
  name: {
    title: 'Name',
    ascending: false,
    descending: false
    },
  status: {
    title: 'Status',
    ascending: false,
    descending: false
    },
  targetRoas: {
    title: 'Target ROA',
    ascending: false,
    descending: false
    }
}

export const ListHeadings = ({handleSort}) => {
  const [ tableHeadings, dispatch ] = useReducer(headingReducer, initialHeadingState)
  
  const updateSelected = (heading) => {
    dispatch({ type: 'SELECT_COLUMN', payload: heading})
  }

  return (
    <TableHeader>
      <ListHeading onClick={() => {updateSelected('id'); handleSort('ID')}}>
        {(tableHeadings.id.ascending && <span>&#x25B2; {' '}</span>) ||
        (tableHeadings.id.descending && <span>&#x25bc; {' '}</span>)}
        {tableHeadings.id.title}
      </ListHeading>
      
      <ListHeading onClick={() => {updateSelected('name'); handleSort('NAME')}}>
        {(tableHeadings.name.ascending && <span>&#x25B2; {' '}</span>) ||
        (tableHeadings.name.descending && <span>&#x25bc; {' '}</span>)}
        {tableHeadings.name.title}
      </ListHeading>
      
      <ListHeading onClick={() => {updateSelected('status'); handleSort('STATUS')}}>
        {(tableHeadings.status.ascending && <span>&#x25B2; {' '}</span>) ||
        (tableHeadings.status.descending && <span>&#x25bc; {' '}</span>)}
        {tableHeadings.status.title}
      </ListHeading>
      
      <ListHeading onClick={() => {updateSelected('targetRoas'); handleSort('TARGET')}}>
        {(tableHeadings.targetRoas.ascending && <span>&#x25B2; {' '}</span>) ||
        (tableHeadings.targetRoas.descending && <span>&#x25bc; {' '}</span>)}
        {tableHeadings.targetRoas.title}
      </ListHeading>
    </TableHeader>
  )
}