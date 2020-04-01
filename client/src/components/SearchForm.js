import React from 'react';
import { SearchLabel } from '../styles/CampaignListStyles'

export const SearchForm = (props) => {
  const handleSearch = (e) => {
    props.setSearchTerm(e.target.value)
  }

  return (
    <form style={{display: 'flex'}}>
      <SearchLabel htmlFor="search">Search by Name: </SearchLabel>
      <input type="text" name="search" onChange={handleSearch} value={props.searchTerm} placeholder="NFL Matchups" />
    </form>
  )
}