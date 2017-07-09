import React from 'react'
import Container from './Container'
import './hero.scss'

const element = 'hero'
const bodyClass = `${element}-body`

export default ({children, color, isFluid}) => {
  return (
    <section className={`${element} ${color}`}>
      <div className={bodyClass}>
        <Container isFluid={isFluid}>
          {children}
        </Container>
      </div>
    </section>
  )
}
