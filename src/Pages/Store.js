import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import WishedBooks from "./books/WishedBooks";
import { useBooksContext } from "../hooks/useBooksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import BookCards from "./books/BookCards";
import BookDetails from "./books/BookDetails";

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
          const response = await fetch("/api/books/reader", {
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

  const [wishedList, setWishedList] = useState(
    JSON.parse(localStorage.getItem("wishedList")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishedList", JSON.stringify(wishedList));
  }, [wishedList]);

  const updateWish = (index) => {
    if (books[index] && books[index].addedToWish !== undefined) {
      const updatedBooks = [...books];
      updatedBooks[index] = {
        ...updatedBooks[index],
        addedToWish: !updatedBooks[index].addedToWish,
      };
      dispatch({ type: "SET_BOOKS", payload: updatedBooks });
    }
  };

  const addToWish = (index) => {
    if (books[index]) {
      setWishedList((prevWishedList) => [...prevWishedList, books[index]]);
    }
  };

  useEffect(() => {
    console.log(wishedList);
  }, [wishedList]);

  const handleDeleteWish = (bookTitle) => {
    setWishedList(wishedList.filter((book) => book.title !== bookTitle));
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
              path='/'
              element={
                books &&
                books.map((book, index) => (
                  <BookCards
                    book={book}
                    title={title}
                    addToWish={() => addToWish(index)}
                    updateWish={() => updateWish(index)}
                    handleDeleteWish={handleDeleteWish}
                    key={book._id}
                  />
                ))
              }
            />

            <Route
              path='/wishlist'
              element={
                <WishedBooks
                  wishedList={wishedList}
                  addToWish={addToWish}
                  updateWish={updateWish}
                  handleDeleteWish={handleDeleteWish}
                />
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
