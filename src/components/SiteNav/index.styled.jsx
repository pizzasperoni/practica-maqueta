import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Wrapper = styled.nav`
  height: 50px;
  display: flex;
  justify-content: flex-end;
`

export const ContactButton = styled.button`
  
`

export const Link = styled(LinkRouter)`
  padding: 20px;
  text-align: center;
`