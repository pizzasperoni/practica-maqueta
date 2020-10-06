import React, { useState } from 'react'
import { Wrapper, Button, Listas } from './index.styled'

export const ServiceCategories = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleServices = () => setOpen(!isOpen)

  return (
    <Wrapper>
      <Button onClick={toggleServices}>OUR SERVICES</Button>
      {
        isOpen && (
          <Listas>
            <ul>
              <li>Servicio 1</li>
              <li>Servicio 2</li>
              <li>Servicio 3</li>
            </ul>
            <ul>
              <li>Servicio 1</li>
              <li>Servicio 2</li>
              <li>Servicio 3</li>
            </ul>
          </Listas>
        )
      }
    </Wrapper>
  )
}