import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useBooksContext } from "../hooks/useBooksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import BookAuthorCards from "./books/BookAuthorCards";
import BookDetails from "./books/BookDetails";
import EditBook from "./books/EditBook";

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
          const response = await fetch("/api/books/", {
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
              path='/'
              element={
                books &&
                books.map((book, index) => (
                  <BookAuthorCards book={book} title={title} key={book._id} />
                ))
              }
            />

            <Route path='/booksettings' element={<EditBook />} />

            <Route path='/:title' element={<BooksDetails books={books} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Store;
