import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class ModalComponent extends Component {
render() {
    const { toggleModal = () => {}, openModal, children, fullHeight = true } = this.props;
  return (
    <MDBContainer>
      <MDBModal isOpen={openModal} toggle={toggleModal} size="fluid">
        <MDBModalHeader toggle={toggleModal}>MOLICAL - INGRESO</MDBModalHeader>
        <MDBModalBody>
          {children}
        </MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="secondary" style={{margin: 'auto'}} onClick={toggleModal}>CERRAR</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalComponent;
