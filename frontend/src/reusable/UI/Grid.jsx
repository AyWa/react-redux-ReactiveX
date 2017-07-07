import React from 'react'
import './grid.scss'

const Column = ({children}) => {
  return React.cloneElement(children, {
    ...children.props,
    className: `${children.props.className} column`,
  })
}
export default ({children}) => {
  return (
    <div className="columns">
      {
        children.map(c => <Column>{c}</Column>)
      }
    </div>
  )
}
