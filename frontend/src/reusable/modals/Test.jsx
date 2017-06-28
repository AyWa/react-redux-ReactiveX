import React from 'react';
import Box from 'reusable/UI/Box'
import Image from 'reusable/UI/Image'

export default () => {
  return (
    <Box>
      <article className="media">
        <figure className="media-left">
          <Image
            alt="img"
            src="http://bulma.io/images/placeholders/128x128.png"
            size="64x64"
          />
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
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
      </article>
    </Box>
  )
}
