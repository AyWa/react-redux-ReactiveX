import React from 'react'
import './media-object.scss'

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
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-reply" /></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-retweet" /></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-heart" /></span>
            </a>
          </div>
        </nav>
      </div>
      <div className="media-right">
        {right}
      </div>
    </article>
  )
}
