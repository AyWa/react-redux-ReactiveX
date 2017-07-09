import React from 'react'
import './scss/grid.scss'

export const Column = ({children, className}) =>
  <div className={`${className} column`}>
    {children}
  </div>
export default ({children}) =>
  <div className="columns">
    {children}
  </div>
