import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import AddBook from "./books/AddBooks";
import { useBooksContext } from "../hooks/useBooksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import BookAdminCards from "./books/BookAdminCards";
import BookDetails from "./books/BookDetails";
import BookList from "./books/BookList";

const BooksDetails = (props) => {
  let params = useParams();

  return (
    <div>
      <BookDetails params={params} books={props.books} />
    </div>
  );
};

function Store() {
  const { books, dispatch } = useBooksContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      if (user && user.token) {
        try {
          const response = await fetch("/api/books/unapproved", {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });

          if (response.ok) {
            const json = await response.json();
            dispatch({ type: "SET_BOOKS", payload: json });
          } else if (response.status === 401) {
            // Handle unauthorized access, e.g., redirect to login
            navigate("/login");
          } else {
            // Handle other errors
            console.error("Error fetching books:", response.status);
          }
        } catch (error) {
          // Handle network or other errors
          console.error("Fetch error:", error);
        }
      }
    };

    fetchBooks();
    // }, [dispatch, navigate]);
  }, [dispatch, user, navigate]);

  const [title, setTitle] = useState("");

  const handleAddBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    dispatch({ type: "SET_BOOKS", payload: updatedBooks });
  };

  const BooksAdminList = ({ books, title, handleAddBook }) => {
    return (
      <div>
        <AddBook handleAddBook={handleAddBook} />
        <BookList
          books={books.filter((book) =>
            book.title.toUpperCase().includes(title.toUpperCase())
          )}
        />
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}>
        <div style={{ width: "100%", marginTop: 80, marginBottom: 100 }}>
          <Routes>
            <Route
              path='/addbooks'
              element={
                <BooksAdminList
                  books={books}
                  handleAddBook={handleAddBook}
                  title={title}
                />
              }
            />
            <Route
              path='/'
              element={
                books &&
                books.map((book) => (
                  <BookAdminCards
                    book={book}
                    title={title}
                    handleAddBook={handleAddBook}
                    key={book._id}
                  />
                ))
              }
            />

            <Route path='/:title' element={<BooksDetails books={books} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Store;
