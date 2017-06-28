import React from 'react'
import './button.scss'

export default (props) => {
  const {
    isDelete,
    sizeModifier,
    title = '',
    disabled,
    type = 'button',
    onClick = _ => _,
    className = '',
  } = props

  const elemClass = isDelete ? `delete ${sizeModifier}`
    : `button ${className} ${sizeModifier}`
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
