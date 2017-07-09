import React from 'react'
import './section.scss'

const element = 'section'

export default ({children, size}) => {
  const modifier = `${element} ${size}`
  return (
    <section className={modifier}>
      {children}
    </section>
  )
}
