import React, { useState, useEffect } from 'react';
import { ListGroup, TableContainer, HorizontalSpacer, CampaignPageContainer } from '../styles/CampaignListStyles'
import { ListHeadings } from './ListHeadings';
import { convertToNum } from '../utils'
import { Campaign } from './Campaign'
import { UpdatedCampaigns } from './UpdatedCampaigns';
import { SearchForm } from './SearchForm';

import { sortBy } from 'lodash';
import axios from 'axios';



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

export const CampaignList = (props) => {
  const [ campaigns, setCampaigns ] = useState([])
  const [ sortKey, setSortKey ] = useState('NONE')
  const [ editedCampaigns, setEditedCampaigns ] = useState([])
  const [ fetching, setFetching ] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchedCampaigns, setSearchedCampaigns ] = useState([])

  const sortFunction = SORTS[sortKey]
  const sortedCampaigns = sortFunction([...searchedCampaigns])    

  const handleSort = (key) => {
    if (sortKey.includes(key) && sortKey.includes('REVERSE')){
      setSortKey('NONE')
    } else if (key === sortKey) {
      setSortKey(`${key}_REVERSE`)
    } else {
      setSortKey(key)
    }
  }

  const fetchData = () => {
    setFetching(true)
    axios
      .get(`https://fast-refuge-34078.herokuapp.com/api/get-campaigns`)
      .then(res => {
        const parsedList = res.data.campaigns.map(item => {
          return {...item, targetRoas: convertToNum(item.targetRoas)}
        })
        setCampaigns(parsedList)
        setFetching(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const removeCampaignUpdates = (campaignId) => {
    setEditedCampaigns(editedCampaigns.filter(el => el.id !== campaignId))
  }

  const submitUpdates = () => {
    axios
      .put(`https://fast-refuge-34078.herokuapp.com/api/bulk_update_target`, {campaigns: editedCampaigns})
      .then(res => {
        console.log(res)
        setEditedCampaigns([])
      })
      .then(() => {fetchData()})
  }

  useEffect(() => {
    setSearchedCampaigns(campaigns.filter(el =>{
      return el.name.toLowerCase().includes(searchTerm.toLowerCase())
    }))
  }, [searchTerm, campaigns])

  return (
    fetching ?
    <h2>Loading data...</h2> : 
    (<>
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <CampaignPageContainer>
        <TableContainer>
          <ListHeadings handleSort={handleSort} sortable hover />
          <ListGroup>
          {sortedCampaigns.map(el =>
            <Campaign key={el.id} campaign={el} editedCampaigns={editedCampaigns} setEditedCampaigns={setEditedCampaigns} />
          )}
          </ListGroup>
        </TableContainer>
        {editedCampaigns.length 
          ? 
          <>
            <HorizontalSpacer />
            <UpdatedCampaigns editedCampaigns={editedCampaigns} submitUpdates={submitUpdates} removeCampaignUpdates={removeCampaignUpdates} /> 
          </>
          :
        null}
      </CampaignPageContainer>
    </>)
  )
}