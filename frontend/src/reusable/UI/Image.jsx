import React from 'react'
import './scss/image.scss'

export default (props) => {
  const {
    src,
    alt = 'img',
    size = '128x128',
    // see to http://bulma.io/documentation/elements/image/
  } = props

  return (
    <figure className={`image is-${size}`}>
      <img
        src={src}
        alt={alt}
      />
    </figure>
  )
}
