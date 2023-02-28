import { Modal } from 'bootstrap';
import React from 'react';

const PopUpProduct = product => {
  return (
    <Modal id='productModal' show={product.showModal} onHide={product.closeModal}>
      <Modal.Header>
        <h1>{product.name}</h1>
        <h2>dzkgjhdfglh</h2>
      </Modal.Header>
    </Modal>
  );
};

export default PopUpProduct;
