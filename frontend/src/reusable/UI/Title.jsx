import React from 'react'
import './title.scss'

const title = 'title'
const subtitle = 'subtitle'

export default (props) => {
  const {
    isSubtitle,
    children,
    modifier,
  } = props
  const element = isSubtitle ? subtitle : title
  return React.cloneElement(
    children,
    {...props, className: `${element} ${modifier}`},
  )
}
