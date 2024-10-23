import  { useReducer } from 'react';

const initialState = {
  books: [],
};

const ADD_BOOK = 'ADD_BOOK';
const UPDATE_BOOK = 'UPDATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map(book => 
          book.isbn === action.payload.isbn ? action.payload : book
        ),
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.isbn !== action.payload.isbn),
      };
    default:
      return state;
  }
};

export const useBookReducer = () => {
  return useReducer(bookReducer, initialState);
};
