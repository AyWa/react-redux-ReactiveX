import React from 'react'
import {modifier} from 'utilities/types'
import './button.scss'

export default (props) => {
  const {
    isOutlined,
    isLoading,
    isInverted,
    isFocused,
    isDelete,
    size,
    color,
    disabled,
    title = '',
    className = '',
    type = 'button',
    onClick = _ => _,
  } = props

  const loadingClass = isLoading ? modifier.loading : ''
  const outlinedClass = isOutlined ? modifier.outlined : ''
  const invertedClass = isInverted ? modifier.inverted : ''
  const focusedClass = isFocused ? modifier.focused : ''
  const elemClass = isDelete ? `delete ${size}`
    : `button ${size} ${color} ${loadingClass} ${outlinedClass}
      ${invertedClass} ${focusedClass} ${className}`

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
