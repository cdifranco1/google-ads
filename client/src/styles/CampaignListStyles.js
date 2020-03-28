import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//General

export const Container = styled.div`
  padding: 2%;
`
export const CampaignPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`
export const FlexContainer = styled.div`
  border: 1px solid black;
  display: flex;
`


//List item styles

export const TableContainer = styled.div`
  width: 100%;
`

export const ListGroup = styled.div`
  border: 1px solid #A9A9A9;
  max-height: 80vh;
  overflow: scroll;
`

export const ListItem = styled.div`
  border-top: 1px solid #A9A9A9;
  border-bottom: 1px solid #A9A9A9;
  max-width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.edited === true ? '#D3D3D3' : 'none'}
`

export const LargeColumnP = styled.p`
  width: 30%;
  text-align: left;
  padding: 0 1%;
`

export const MediumColumnP = styled(LargeColumnP)`
  width: 17.5%;
`

export const SmallColumnP = styled(LargeColumnP)`
  width: 17.5%;
`

export const SmallColumnDiv = styled.div`
  width: 17.5%;
  display: flex;
  justify-content: center;
`

//Table header styles

export const TableHeader = styled.div`
  border-top: 1px solid #A9A9A9;
  border-bottom: 1px solid #A9A9A9;
  max-width: 100%;
  padding: 0 0.5%;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #2F4F4F;  
`

export const SmallListHeading = styled(SmallColumnP)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #FFFAFA;
  &:hover { 
    cursor: pointer;
  } 
`
export const MediumListHeading = styled(SmallListHeading)`
  width: 17.5%;
`
export const LargeListHeading = styled(SmallListHeading)`
  width: 30%;
`

//Campaign form styles

export const CampaignForm = styled.form`
  display: flex;
  align-items: center;
  padding: 1% 0;
  width: 100%;
`

export const CampaignInput = styled.input`
  text-align: left;
  width: 100%;
`

export const CampaignFormButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 17.5%;
`

export const MediumCampaignInputDiv = styled.div`
  padding: 0 1%;
  width: 17.5%;
`

export const LargeCampaignInputDiv = styled.div`
  width: 30%;
`

export const Button = styled.button`
  padding: 2%;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  background-color: #708090;
  color: #FFFFFF;
  width: 60%;
  padding: 2%;
`

//Nav Styles

export const StyledNavLink = styled(NavLink)`
  padding: 0 2%;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
`

export const NavContainer = styled(FlexContainer)`
  padding: 2%;
  justify-content: flex-end;
  background-color: #000000
`

export const HorizontalSpacer = styled.div`
  margin-left: 2%; 
`
export const VerticalSpacer = styled.div`
  margin-bottom: ${props => props.mb} 
`

export const LoginFormDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const LoginInput = styled.input`
  border-radius: 5px;
  padding: 3%;
  &:focus {
    border-radius: 0;
  }
`

export const LoginButton = styled(Button)`
  width: 100%;
`