import React, { Component } from 'react'
import Modal from 'reusable/components/Modal'
import Alerts from 'reusable/components/Alerts'
import Footer from 'reusable/components/Footer'
import Navbar from 'reusable/components/Navbar';
import 'styles/common.scss'
import Routes from './Routes'

const element = 'routes-container'
const routesClass = `${element} is-relative`
export default class App extends Component {
  render() {
    return (
      <div className={routesClass}>
        <Navbar />
        <Routes />
        <Modal />
        <Alerts />
        <Footer />
      </div>
    );
  }
}
