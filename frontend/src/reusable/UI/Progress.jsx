import React from 'react'
import './scss/progress.scss'

export default ({value, max, color, size}) => {
  const classModifier = `progress ${color} ${size}`
  return (
    <progress className={classModifier} value={value} max={max} />
  )
}
