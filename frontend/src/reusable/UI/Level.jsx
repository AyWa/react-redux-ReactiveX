import React from 'react'
import _ from 'lodash'
import './scss/level.scss'

const element = 'level'
// a LevelContainer props component="div" etc that contain either
// 2 LevelChildren that containe LevelItems(optional)
// or LevelItems
export default (props) => {
  const {
    component,
    ...otherProps
  } = props

  return React.createElement(
    component,
    _.merge(
      {},
      otherProps,
      {className: element},
    ),
  )
}

export const LevelChildren = (props) => {
  const {
    isRight = false,
    className = '',
    children,
  } = props
  const modifier = isRight ? `${className} ${element}-right`
    : `${className} ${element}-left`
  return (
    <div className={modifier}>
      {children}
    </div>
  )
}

export const LevelItem = ({children, className}) =>
  <div className={`${element}-item ${className}`}>
    {children}
  </div>
