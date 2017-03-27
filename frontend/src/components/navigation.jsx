import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </div>
    );
  }
}
