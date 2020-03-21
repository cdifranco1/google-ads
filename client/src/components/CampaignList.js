import React, { useState, useReducer, useEffect } from 'react';
import { ListItem, Column, ListGroup, TableContainer } from '../styles/CampaignListStyles'
import { ListHeadings } from './ListHeadings';
import { convertToNum, convertToPercentage } from '../utils'

import { sortBy } from 'lodash';
import axios from 'axios';


const path = 'http://localhost:8000'
const url = `https://fast-refuge-34078.herokuapp.com/api/get-campaigns`

const SORTS = {
  NONE: list => list, 
  ID: list => sortBy(list, 'id'),
  NAME: list => sortBy(list, 'name'),
  STATUS: list => sortBy(list, 'status'),
  TARGET: list => sortBy(list, 'targetRoas'),
  ID_REVERSE: list => sortBy(list, 'id').reverse(),
  NAME_REVERSE: list => sortBy(list, 'name').reverse(),
  STATUS_REVERSE: list => sortBy(list, 'status').reverse(),
  TARGET_REVERSE: list => sortBy(list, 'targetRoas').reverse()
}

export const CampaignList = () => {
  const [ campaigns, setCampaigns ] = useState([])
  const  [ sortKey, setSortKey ] = useState('NONE')

  const handleSort = (key) => {
    if (sortKey.includes(key) && sortKey.includes('REVERSE')){
      setSortKey('NONE')
    } else if (key === sortKey) {
      setSortKey(`${key}_REVERSE`)
    } else {
      setSortKey(key)
    }
  }

  const sortFunction = SORTS[sortKey]
  const sortedCampaigns = sortFunction(campaigns)

  useEffect(() => {
    axios
      .get(`${path}`)
      .then(res => {
        const parsedList = res.data.campaigns.map(item => {
          return {...item, targetRoas: convertToNum(item.targetRoas)}
        })
        setCampaigns(parsedList)
      })
  }, [])

  return (
    <TableContainer>
      <ListHeadings handleSort={handleSort} />
      <ListGroup>
      {sortedCampaigns.map(campaign =>
        <ListItem> 
          <Column>{campaign.id}</Column>
          <Column>{campaign.name}</Column>
          <Column>{campaign.status}</Column>
          <Column>{convertToPercentage(campaign.targetRoas)}</Column>
        </ListItem>
      )}
      </ListGroup>
    </TableContainer>
  )
}