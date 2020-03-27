import React, { useState, useEffect } from 'react';
import { ListGroup, TableContainer } from '../styles/CampaignListStyles'
import { ListHeadings } from './ListHeadings';
import { convertToNum } from '../utils'
import { Campaign } from './Campaign'

import { sortBy } from 'lodash';
import axios from 'axios';
import axiosRetry from 'axios-retry';


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
  const [ editedCampaigns, setEditedCampaigns ] = useState([])

  const sortFunction = SORTS[sortKey]
  const sortedCampaigns = sortFunction([...campaigns])    

  const handleSort = (key) => {
    if (sortKey.includes(key) && sortKey.includes('REVERSE')){
      setSortKey('NONE')
    } else if (key === sortKey) {
      setSortKey(`${key}_REVERSE`)
    } else {
      setSortKey(key)
    }
  }

  useEffect(() => {
    axios
      .get(`${url}`)
      .then(res => {
        const parsedList = res.data.campaigns.map(item => {
          return {...item, targetRoas: convertToNum(item.targetRoas)}
        })
        setCampaigns(parsedList)
      })
  }, [])

  return (
    <>
      <TableContainer>
        <ListHeadings handleSort={handleSort} />
        <ListGroup>
        {sortedCampaigns.map(el =>
          <Campaign key={el.id} campaign={el} editedCampaigns={editedCampaigns} setEditedCampaigns={setEditedCampaigns} />
        )}
        </ListGroup>
      </TableContainer>
      <button type="submit">Submit Updated Campaigns</button>
    </>
  )
}