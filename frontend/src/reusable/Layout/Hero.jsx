import React from 'react'
import Container from './Container'
import './hero.scss'

const element = 'hero'
const bodyClass = `${element}-body`

export default ({children}) => {
  return (
    <section className={element}>
      <div className={bodyClass}>
        <Container>
          {children}
        </Container>
      </div>
    </section>
  )
}
