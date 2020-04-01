import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginFormDiv, LoginForm, LoginInput, LoginButton, VerticalSpacer } from '../styles/CampaignListStyles';
import axios from 'axios'


export const Login = ({setLoggedIn, loggedIn}) => {
  const history = useHistory()
  const [ user, setUser ] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setUser({
      ...user, 
      [ e.target.name ] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`https://fast-refuge-34078.herokuapp.com/api/authorization`, user)
      .then(res => {
        // setLoggedIn(res.data.auth)
        localStorage.setItem('loggedIn', res.data.auth)
        history.push('/campaigns')
      })
      .catch(err => console.log(err))
  }



  return (
    <>
      <VerticalSpacer mb='50px' />
      <LoginFormDiv>
        <LoginForm onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
          <LoginInput name="username" type="text" placeholder="Username" value={user.username} onChange={handleChange}/>
          <VerticalSpacer mb="3px" />
          <LoginInput name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange}/>
          <VerticalSpacer mb="5px" />
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </LoginFormDiv>  
    </>
  )
}