import React, { useState, useReducer, useEffect } from 'react';
import { ListItem, Column, ListGroup } from '../styles/CampaignListStyles'
import { ListHeadings } from './ListHeadings';
import { convertToNum, convertToPercentage } from '../utils'

import _ from 'lodash';
import axios from 'axios';


const path = 'http://localhost:8000'
const url = `https://fast-refuge-34078.herokuapp.com/api/get-campaigns`

console.log(convertToNum('1000.00%'))

export const CampaignList = () => {
  const [ campaigns, setCampaigns ] = useState([])
  const  [ sortColumn, setSortColumn ] = useState('NONE')
  console.log(campaigns)

  const handleSort = (column) => {
    setSortColumn(column)
    console.log(sortColumn)
  }

  const sortedCampaigns = _.sortBy(campaigns, sortColumn)


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
    <ListGroup>
      <ListHeadings handleSort={handleSort} />
      {sortedCampaigns.map(campaign =>
        <ListItem> 
          <Column>{campaign.id}</Column>
          <Column>{campaign.name}</Column>
          <Column>{campaign.status}</Column>
          <Column>{convertToPercentage(campaign.targetRoas)}</Column>
        </ListItem>
      )}
    </ListGroup>
  )
}