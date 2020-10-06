import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Wrapper = styled.nav`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  padding: 10px;
`

export const ContactButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border-radius: 50px;
  background-color: rgb(204, 0, 0);
  color: white;
  border: none;
  height: 65px;
  width: 180px;
  font-size: 20px;
`

export const Link = styled(LinkRouter)`
  padding: 20px;
  text-align: center;
  text-decoration: none;

  &:visited {
    color: black;
  }
`