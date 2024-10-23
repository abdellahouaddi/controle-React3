import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BookDetails = ({ show, handleClose, book }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={book.poster} alt={book.title} className="img-fluid mb-3" />
        <p><strong>Auteur:</strong> {book.author}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetails;
