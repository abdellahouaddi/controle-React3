import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const BookForm = ({ selectedBook, onSubmit }) => {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [poster, setPoster] = useState('');
  const [description, setDescription] = useState('');
    const navigate=useNavigate();
  useEffect(() => {
    if (selectedBook) {
      setIsbn(selectedBook.isbn);
      setTitle(selectedBook.title);
      setAuthor(selectedBook.author);
      setPoster(selectedBook.poster);
      setDescription(selectedBook.description);
    }
  }, [selectedBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = { isbn, title, author, poster, description };
    onSubmit(bookData);
    // Réinitialisation du formulaire
    setIsbn('');
    setTitle('');
    setAuthor('');
    setPoster('');
    setDescription('');
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>ISBN</label>
        <input type="text" className="form-control" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN" required />
      </div>
      <div className="form-group">
        <label>Titre</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre" required />
      </div>
      <div className="form-group">
        <label>Auteur</label>
        <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Auteur" required />
      </div>
      <div className="form-group">
        <label>Poster</label>
        <input type="text" className="form-control" value={poster} onChange={(e) => setPoster(e.target.value)} placeholder="URL du poster" required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      </div>
      <button type="submit" className="btn btn-primary">
        {selectedBook ? 'Mettre à jour' : 'Ajouter'}
      </button>
    </form>
  );
};

export default BookForm;
