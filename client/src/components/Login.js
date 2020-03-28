import React, { useState } from 'react';
import { LoginFormDiv, LoginForm, LoginInput, LoginButton, VerticalSpacer } from '../styles/CampaignListStyles';


export const Login = () => {
  const [ user, setUser ] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({
      ...user, 
      [ e.target.name ] : e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(user)
  }

  return (
    <>
      <VerticalSpacer mb='50px' />
      <LoginFormDiv>
        <LoginForm onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
          <LoginInput name="username" type="text" placeholder="Username" value={user.username} onChange={handleChange}/>
          <VerticalSpacer mb="3px" />
          <LoginInput name="password" type="text" placeholder="Password" value={user.password} onChange={handleChange}/>
          <VerticalSpacer mb="5px" />
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </LoginFormDiv>  
    </>
  )
}