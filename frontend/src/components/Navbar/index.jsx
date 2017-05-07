import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Toggle from 'reusable/UI/Toggle'
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
            <span className="icon">
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/AyWa/react-redux-ReactiveX">
                <i className="fa fa-github" />
              </a>
            </span>
          </a>
        </div>
        <Toggle
          toggler={
            <span className="nav-toggle">
              <span />
              <span />
              <span />
            </span>
          }
        >
          <div className="nav-right nav-menu">
            <Link className="nav-item" to="/">
              Home
            </Link>
            <Link className="nav-item" to="/add">
              Add
            </Link>
          </div>
        </Toggle>
      </nav>
    );
  }
}
