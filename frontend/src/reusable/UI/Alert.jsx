import React from 'react'

import './scss/alert.scss'

export const Alert = ({modifier, dismiss, body}) => {
  return (
    <div className={`notification ${modifier}`}>
      <button className="delete" onClick={dismiss} />
      {body}
    </div>
  )
}

export default Alert
