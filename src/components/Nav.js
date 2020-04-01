import React from 'react';
import { StyledNavLink, NavContainer, VerticalSpacer } from '../styles/CampaignListStyles'


export const Nav = () => {
  return (
    <>
      <NavContainer>
        <StyledNavLink to="/">
          Login
        </StyledNavLink>
        <StyledNavLink to="/campaigns">
          Campaigns
        </StyledNavLink>
      </NavContainer>
      <VerticalSpacer />
    </>
  )
}