import React, {Component} from 'react'
import Maybe from 'reusable/Maybe'
import {modifier} from 'utilities/types'
import './card.scss'

const element = 'card'
const headerClass = `${element}-header`
const headerTitleClass = `${headerClass}-title`
const imgClass = `${element}-card`
const footerClass = `${element}-footer`
const footerItemClass = `${footerClass}-item`
// A card contain
// img: UI/Image
// footer: array of <a />
// headerTitle: if no title => no header
// {img, children, footer, headerTitle}
export default class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClose: props.initialState,
    }
    this.onToggle = this.onToggle.bind(this)
  }

  onToggle() {
    this.setState({
      isClose: !this.state.isClose,
    })
  }

  render() {
    const {
      img,
      children,
      footer = [],
      headerTitle,
    } = this.props
    const hiddenModifierClass = this.state.isClose && headerTitle ?
      modifier.hidden : ''
    const iconModifierClass = this.state.isClose ? '' : modifier.rotated
    return (
      <div className={element}>
        <Maybe cond={headerTitle}>
          <header className={headerClass} onClick={this.onToggle}>
            <p className={headerTitleClass}>
              {headerTitle}
            </p>
            <a className="card-header-icon">
              <span className={`icon ${iconModifierClass}`}>
                <i className="fa fa-angle-down" />
              </span>
            </a>
          </header>
        </Maybe>
        <div className={`${imgClass} ${hiddenModifierClass}`}>
          {img}
        </div>
        <div className={`card-content ${hiddenModifierClass}`}>
          {children}
        </div>
        <Maybe cond={footer.length !== 0}>
          <footer className={`${footerClass} ${hiddenModifierClass}`}>
            {footer.map(a =>
              React.cloneElement(a, {
                key: a.props.children,
                className: footerItemClass,
                ...a.props,
              }),
            )}
          </footer>
        </Maybe>
      </div>
    )
  }
}
