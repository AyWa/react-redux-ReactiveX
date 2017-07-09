import React from 'react'
import './scss/media-object.scss'

export default ({left, children, footer, right}) => {
  return (
    <article className="media">
      <figure className="media-left">
        {left}
      </figure>
      <div className="media-content">
        <div className="content">
          {children}
        </div>
        <nav className="level is-mobile">
          {footer}
        </nav>
      </div>
      <div className="media-right">
        {right}
      </div>
    </article>
  )
}
