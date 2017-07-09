import React, { Component } from 'react'
import Modal from 'components/Modal'
import Alerts from 'components/Alerts'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar';
import 'styles/common.scss'
import Container from './Container'

const element = 'routes-container'
const routesClass = `${element} is-relative`
export default class App extends Component {
  render() {
    return (
      <div className={routesClass}>
        <Navbar />
        <Container />
        <Modal />
        <Alerts />
        <Footer />
      </div>
    );
  }
}
