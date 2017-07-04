import React from 'react'

import './message.scss'

export const Message = ({modifier, dismiss, header, body}) => {
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

export default Message
