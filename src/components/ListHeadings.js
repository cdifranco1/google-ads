import React, { useReducer } from 'react';
import { SmallListHeading, MediumListHeading, LargeListHeading, TableHeader } from '../styles/CampaignListStyles'
import { headingReducer } from '../reducers/headingReducer';


export const initialHeadingState = {
  id: {
    title: 'ID',
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
    title: 'Target ROAS',
    ascending: false,
    descending: false
    }
}

export const ListHeadings = ({handleSort, ...props}) => {
  const [ tableHeadings, dispatch ] = useReducer(headingReducer, initialHeadingState)
  const updateSelected = (heading) => {
    dispatch({ type: 'SELECT_COLUMN', payload: heading})
  }

  return (
    <TableHeader>
      <MediumListHeading hover={props.hover} onClick={() => {
        if (props.sortable){
          updateSelected('id'); 
          handleSort('ID')
        }}}>
        {tableHeadings.id.title}
        {(tableHeadings.id.ascending && <span>{' '} &#x25B2;</span>) ||
        (tableHeadings.id.descending && <span>{' '} &#x25bc;</span>)}
      </MediumListHeading>
      
      <LargeListHeading  hover={props.hover} onClick={() => {
        if (props.sortable){
          updateSelected('name'); 
          handleSort('NAME')
        }}}>
        {tableHeadings.name.title}
        {(tableHeadings.name.ascending && <span>{' '} &#x25B2;</span>) ||
        (tableHeadings.name.descending && <span>{' '} &#x25bc;</span>)}
      </LargeListHeading>
      
      <MediumListHeading hover={props.hover} onClick={() => {
        if (props.sortable){
          updateSelected('status'); 
          handleSort('STATUS')
        }}}>
        {tableHeadings.status.title}
        {(tableHeadings.status.ascending && <span>{' '} &#x25B2;</span>) ||
        (tableHeadings.status.descending && <span>{' '} &#x25bc;</span>)}
      </MediumListHeading>
      
      <MediumListHeading hover={props.hover} onClick={() => {
        if (props.sortable){
          updateSelected('targetRoas'); 
          handleSort('TARGET')
        }}}>
        {tableHeadings.targetRoas.title}
        {(tableHeadings.targetRoas.ascending && <span>{' '} &#x25B2;</span>) ||
        (tableHeadings.targetRoas.descending && <span>{' '} &#x25bc;</span>)}
      </MediumListHeading>
      <SmallListHeading/>
    </TableHeader>
  )
}