import React from 'react'

import './alert.scss'

export const Alert = ({modifier, dismiss, header, body}) => {
  return (
    <article className={`message ${modifier}`}>
      <div className="message-header">
        <p>
          {header}
        </p>
        <button
          onClick={dismiss}
          className="delete"
        />
      </div>
      <div className="message-body">
        {body}
      </div>
    </article>
  )
}

export default Alert
