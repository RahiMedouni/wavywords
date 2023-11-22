import { createContext, useReducer } from "react";

export const BooksContext = createContext();

export const booksReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.payload,
      };
    case "CREATE_BOOK":
      return {
        books: [action.payload, ...state.books],
      };
    case "DELETE_BOOK":
      return {
        books: state.books.filter((b) => b._id !== action.payload),
      };
    case "APPROVE_BOOK":
      // Update the approved status of a book
      return {
        books: state.books.map((book) =>
          book._id === action.payload ? { ...book, approved: true } : book
        ),
      };
    case "EDIT_BOOK":
      // Update the book data
      return {
        books: state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        ),
      };
    default:
      return state;
  }
};

export const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, {
    books: [],
  });

  return (
    <BooksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};
