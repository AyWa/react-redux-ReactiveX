import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss'

export default class Nav extends Component {

  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <Link className="nav-item" to="/">
              ReFast
            </Link>
          </a>
        </div>

        <div className="nav-center">
          <a className="nav-item">
            <span className="icon">
              <i className="fa fa-github" />
            </span>
          </a>
        </div>
        {
          // This "nav-toggle" hamburger menu is only visible on mobile -->
          // You need JavaScript to toggle the "is-active" className on "nav-menu" -->
        }
        <span className="nav-toggle">
          <span />
          <span />
          <span />
        </span>

        {
          // This "nav-menu" is hidden on mobile
          // Add the modifier "is-active" to display it on mobile
        }
        <div className="nav-right nav-menu">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/add">
            Add
          </Link>
        </div>
      </nav>
    );
  }
}
