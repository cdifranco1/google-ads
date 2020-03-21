import styled from 'styled-components';

export const Container = styled.div`
  padding: 2%;
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
  padding: 0.5%;
  display: flex;
  width: 100%;
`

export const TableHeader = styled(ListItem)`
  background-color: #2F4F4F;
`

export const Column = styled.p`
  width: 25%;
  text-align: left;
`


export const ListHeading = styled(Column)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFAFA;
  &:hover { 
    cursor: pointer;
  } 
`

export const TableContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`