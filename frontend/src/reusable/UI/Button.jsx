import React from 'react'
import './button.scss'

export default (props) => {
  const {
    title = '',
    disabled,
    type = 'button',
    onClick = _ => _,
    className = '',
  } = props

  const elemClass = `button ${className}`
  return (
    <button
      title={title}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={elemClass}
    >
      {title}
    </button>
  )
}
