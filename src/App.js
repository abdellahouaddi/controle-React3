import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './Books/BookList'; // Liste des livres
import BookForm from './Books/BookForm'; // Formulaire pour ajouter/éditer un livre
import BookDetails from './Books/BookDetails'; // Détails d'un livre
import { useBookReducer } from './Books/Bookreducer';// Reducer pour la gestion des livres
import Navbar from './Books/Navbar';
const App = () => {
  const [state, dispatch] = useBookReducer();

  return (
    <Router>
      <Navbar />
      <div className="container">
        <h1>Gestion des Livres</h1>
        <Routes>
          <Route path="/books" element={<BookList books={state.books} dispatch={dispatch} />} />
          <Route path="/books/add" element={<BookForm onSubmit={(book) => dispatch({ type: 'ADD_BOOK', payload: book })} />} />
          <Route path="/books/edit/:isbn" element={<BookForm onSubmit={(book) => dispatch({ type: 'UPDATE_BOOK', payload: book })} />} />
          <Route path="/books/details/:isbn" element={<BookDetails />} />
          <Route path="/" element={<BookList books={state.books} dispatch={dispatch} />} /> {/* Page d'accueil */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
