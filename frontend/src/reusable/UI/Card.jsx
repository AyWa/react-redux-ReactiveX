import React, {Component} from 'react'
import {modifier} from "utilities/types"
import './card.scss'

const element = 'card'
const headerClass = `${element}-header`
const headerTitleClass = `${headerClass}-title`
const imgClass = `${element}-card`
const footerClass = `${element}-footer`
const footerItemClass = `${footerClass}-item`
// A card contain
// img: UI/Image
// footer: <a />
// {img, children, footer, headerTitle}
export default class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClose: props.initialState,
    }
  }

  render() {
    const {
      img,
      children,
      footer,
      headerTitle
    } = this.props
    console.log(this.state.isClose);
    const hiddenClass = this.state.isClose ? modifier.hidden : ''
    return (
      <div className={element}>
        <header className={headerClass}>
          <p className={headerTitleClass}>
            {headerTitle}
          </p>
          <a className="card-header-icon">
            <span className="icon">
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </header>
        <div className={`${imgClass} ${hiddenClass}`}>
          {img}
        </div>
        <div className={`card-content ${hiddenClass}`}>
          {children}
        </div>
        <footer className={`${footerClass} ${hiddenClass}`}>
          {footer}
        </footer>
      </div>
    )
  }
}
