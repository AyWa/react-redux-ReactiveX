import React from 'react'
import sizeModifier from 'utilities/types'
import Maybe from 'reusable/Maybe'
import Button from './Button'
import './scss/tag.scss'

export default ({color, size, title, onClick}) => {
  return (
    <span className={`tag ${color} ${size}`}>
      {title}
      <Maybe cond={onClick}>
        <Button
          isDelete
          sizeModifier={sizeModifier.small}
          onClick={onClick}
        />
      </Maybe>
    </span>
  )
}
