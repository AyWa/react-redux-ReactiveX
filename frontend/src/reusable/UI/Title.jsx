import React from 'react'
import './scss/title.scss'

const title = 'title'
const subtitle = 'subtitle'

export default (props) => {
  const {
    isSubtitle,
    children,
    modifier,
    ...otherProps
  } = props
  const element = isSubtitle ? subtitle : title
  return React.cloneElement(
    children,
    {...otherProps, className: `${element} ${modifier}`},
  )
}
