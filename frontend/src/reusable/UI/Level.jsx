import React from 'react'
import './scss/level.scss'

const element = 'level'
// a Level contain a LevelChildren that containe LevelItem
export default ({children, className}) =>
  React.cloneElement(children, {className: `${className} ${element}`})

export const LevelChildren = (props) => {
  const {
    isLeft = !props.isRight,
    isRight,
    className = '',
    children,
  }
  const modifier = isLeft ? `${className} ${element}-left`
    : `${className} ${element}-right`
  return (
    <div className={modifier}>
      {children}
    </div>
  )
}

export const LevelItem = ({children, className}) =>
  React.cloneElement(children, {className: `${className} ${element}-item`})
