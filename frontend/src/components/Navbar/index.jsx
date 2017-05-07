import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Toggle from 'reusable/UI/Toggle'
import './navbar.scss'

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <NavLink
              exact
              activeClassName="is-active"
              className="nav-item"
              to="/"
            >
              ReFast
            </NavLink>
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
            <NavLink
              exact
              activeClassName="is-active"
              className="nav-item"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-item"
              to="/add"
            >
              Add
            </NavLink>
          </div>
        </Toggle>
      </nav>
    );
  }
}
