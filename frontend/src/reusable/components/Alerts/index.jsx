import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'reusable/UI/Alert'
import {dismissAlert} from 'actions'
import './alerts.scss'

const element = 'alerts-container'

class AlertsContainer extends Component {
  render() {
    const {
      alerts,
    } = this.props
    return (
      <div className={element}>
        {
          alerts.map(a => (
            <Alert
              {...a}
              dismiss={_ => dismissAlert(a.id)}
              key={a.id}
            />
          ))
        }
      </div>

    )
  }
}

export default connect(
  state => (
    {
      alerts: state.alerts,
    }
  ),
)(AlertsContainer);
