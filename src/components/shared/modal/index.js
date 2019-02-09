import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class ModalComponent extends Component {
render() {
    const { toggleModal = () => {}, openModal, children, travelSelected = {} } = this.props;

  return (
    <MDBContainer>
      <MDBModal isOpen={openModal} toggle={toggleModal} size="lg">
        <MDBModalHeader toggle={toggleModal}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          {children}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggleModal}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalComponent;
