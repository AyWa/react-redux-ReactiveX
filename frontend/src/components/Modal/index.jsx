import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'reusable/UI/Modal'
import {dismissModal} from 'actions'

class ModalContainer extends Component {
  render() {
    const {
      modals,
    } = this.props
    const isActive = Object.keys(modals).length
    return (
      <Modal
        isActive={isActive}
        dismiss={dismissModal}
      >
        <div> children </div>
      </Modal>
    )
  }
}

export default connect(
  state => (
    {
      modals: state.modals,
    }
  ),
)(ModalContainer);
