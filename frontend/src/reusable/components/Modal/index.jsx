import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'reusable/UI/Modal'
import {dismissModal} from 'actions'
// import all the reusable modal
import modalSelector from 'reusable/Modals'

class ModalContainer extends Component {
  render() {
    const {
      modals,
    } = this.props
    const MyChildren = modalSelector[modals.modal]

    return MyChildren ? (
      <Modal
        isActive
        dismiss={dismissModal}
      >
        <MyChildren {...modals} />
      </Modal>
    ) : null
  }
}

export default connect(
  state => (
    {
      modals: state.modals,
    }
  ),
)(ModalContainer);
