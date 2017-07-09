import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from 'components/Errors/404'
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
        <Switch>
          <Route path="/" component={Container} />
          <Route component={NotFound} />
        </Switch>
        <Modal />
        <Alerts />
        <Footer />
      </div>
    );
  }
}
