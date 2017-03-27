import React, { Component } from 'react';
import Nav from './navigation';

export default class Container extends Component {

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
