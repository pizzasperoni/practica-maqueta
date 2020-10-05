import React from 'react'
import { Wrapper, ContactButton, Link } from './index.styled'

export const SiteNav = () => {
  
  return (
    <Wrapper>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About us</Link>
      <ContactButton>Contact US</ContactButton>
    </Wrapper>
  )
}