import React from 'react'
import {modifier} from 'utilities/types'
import './button.scss'

export default (props) => {
  const {
    isDelete,
    size,
    color,
    isOutlined,
    isLoading,
    disabled,
    title = '',
    className = '',
    type = 'button',
    onClick = _ => _,
  } = props

  const loadingClass = isLoading ? modifier.loading : ''
  const outlinedClass = isOutlined ? modifier.outlined : ''
  const elemClass = isDelete ? `delete ${size}`
    : `button ${size} ${color} ${loadingClass} ${outlinedClass} ${className}`

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={elemClass}
    >
      {title}
    </button>
  )
}
