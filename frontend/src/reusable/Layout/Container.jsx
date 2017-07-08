import React from 'react'
import './container.scss'

const element = 'container'
const fluid = 'is-fluid'

export default ({children, isFluid}) => {
  const modifier = isFluid ? `${container} ${fluid}` : element
  return (
    <div className={modifier}>
      {children}
    </div>
  )
}
