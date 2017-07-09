import React from 'react'
import './scss/toggle.scss'

const element = 'refast-toggle'
class Toggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    const {isOpen} = this.state
    this.setState({
      isOpen: !isOpen,
    })
  }

  render() {
    const {
      toggler,
      children,
    } = this.props

    const {
      isOpen,
    } = this.state

    const elemClass = isOpen ? 'is-active' : 'blabla'
    const elemOnClick = isOpen ? _ => this.toggle() : _ => _

    return (
      <span className={element}>
        {
          React.cloneElement(toggler, {
            ...toggler.props,
            onClick: this.toggle,
            className: `${toggler.props.className} ${elemClass}`,
          })
        }
        {
          React.cloneElement(children, {
            ...children.props,
            onClick: elemOnClick,
            className: `${children.props.className} ${elemClass}`,
          })
        }
      </span>
    )
  }
}

export default Toggle
