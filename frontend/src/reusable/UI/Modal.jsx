import React from 'react'
import Button from 'reusable/UI/Button'
import './modal.scss'

const element = 'modal'
export const Modal = ({isActive, dismiss, children}) => {
  const modifier = isActive ? `${element} is-active` : element
  return (
    <div className={modifier}>
      <div
        className="modal-background"
        onClick={dismiss}
      />
      <div className="modal-content">
        {children}
      </div>
      <Button
        onClick={dismiss}
        className="modal-close"
      />
    </div>
  )
}

export default Modal
