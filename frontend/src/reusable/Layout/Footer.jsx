import React from 'react'
import Container from './Container'
import './footer.scss'

const element = 'footer'

export default ({children}) => {
  return (
    <footer className={element}>
      <Container>
        {children}
      </Container>
    </footer>
  )
}
