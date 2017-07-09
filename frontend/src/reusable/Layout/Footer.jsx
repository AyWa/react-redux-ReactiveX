import React from 'react'
import Container from './Container'
import './footer.scss'

const element = 'footer'

export default ({children, isFluid}) => {
  return (
    <footer className={element}>
      <Container isFluid={isFluid}>
        {children}
      </Container>
    </footer>
  )
}
