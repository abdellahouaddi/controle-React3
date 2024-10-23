import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import BookDetails from './BookDetails';

const BookList = ({ books, dispatch }) => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleDelete = (isbn) => {
    dispatch({ type: 'DELETE_BOOK', payload: { isbn } });
    navigate('/');
  };

  const handleShow = (book) => {
    setSelectedBook(book);
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
    setSelectedBook(null);
  };

  return (
    <>
      <div className="row">
        {books.map(book => (
          <div key={book.isbn} className="col-md-4 mb-4">
            <div className="card">
              <img src={book.poster} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">Auteur: {book.author}</p>
                <button className="btn btn-info" onClick={() => handleShow(book)}>
                  Détails
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(book.isbn)}>
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedBook && (
        <BookDetails
          show={showDetails}
          handleClose={handleClose}
          book={selectedBook}
        />
      )}
    </>
  );
};

export default BookList;
