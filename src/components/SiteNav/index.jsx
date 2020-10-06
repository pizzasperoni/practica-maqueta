import React from 'react'
import { Wrapper, ContactButton, Link } from './index.styled'
import { ServiceCategories } from './components/ServiceCategories/index'


export const SiteNav = () => {
  
  return (
    <Wrapper>
      {/* <Link to='/home'>OUR SERVICES</Link> */}
      <ServiceCategories />
      <Link to='/about'>ABOUT US</Link>
      <ContactButton>CONTACT</ContactButton>
    </Wrapper>
  )
}