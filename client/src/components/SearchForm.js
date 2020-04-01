import React from 'react';
import { SearchLabel, SearchFormContainer, SearchInput } from '../styles/CampaignListStyles'

export const SearchForm = (props) => {
  const handleSearch = (e) => {
    props.setSearchTerm(e.target.value)
  }

  return (
    <SearchFormContainer>
      <SearchLabel htmlFor="search">Search by Name: </SearchLabel>
      <SearchInput type="text" name="search" onChange={handleSearch} value={props.searchTerm} placeholder="NFL Matchups" />
    </SearchFormContainer>
  )
}