import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBooksContext } from "../../hooks/useBooksContext";

const EditBook = ({ bookId }) => {
  const { dispatch } = useBooksContext();
  const { user } = useAuthContext();

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    pages: "",
    isbn: "",
    description: "",
    category: "Unknown",
    price: "",
    rating: 0,
    addedToWish: false,
    approved: false,
    frontCover: null,
    backCover: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        const bookDetails = {
          title: data.title || "",
          author: data.author || "",
          pages: data.pages || "",
          isbn: data.isbn || "",
          description: data.description || "",
          category: data.category || "Unknown",
          price: data.price || "",
          rating: data.rating || 0,
          addedToWish: data.addedToWish || false,
          approved: data.approved || false,
          frontCover: data.frontCover || null,
          backCover: data.backCover || null,
        };
        setBookData(bookDetails);
      })
      .catch((error) => setError("Failed to fetch book data."));
  }, [bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleFrontFileChange = (e) => {
    setBookData({ ...bookData, frontCover: e.target.files[0] });
  };

  const handleBackFileChange = (e) => {
    setBookData({ ...bookData, backCover: e.target.files[0] });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const formData = new FormData();
    formData.append("title", bookData.title);
    formData.append("author", bookData.author);
    formData.append("pages", bookData.pages);
    formData.append("isbn", bookData.isbn);
    formData.append("description", bookData.description);
    formData.append("category", bookData.category);
    formData.append("price", bookData.price);
    formData.append("frontCover", bookData.frontCover);
    formData.append("backCover", bookData.backCover);

    try {
      const response = await fetch(`/api/books/editbook/${bookId}`, {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.status === 400) {
        const data = await response.json();
        setError(data.error);
      } else if (response.status === 200) {
        const json = await response.json();
        setError(null);
        dispatch({ type: "EDIT_BOOK", payload: json });
      }
    } catch (error) {
      setError("Failed to update the book.");
      // You might want to log the error for further investigation
      console.error("Error updating the book:", error);
    }
  };

  return (
    <div className='adding-movie' style={{ textAlign: "center" }}>
      <form
        onSubmit={handleEditSubmit}
        encType='multipart/form-data'
        style={{ width: "50%" }}>
        <input
          type='text'
          name='title'
          value={bookData.title}
          onChange={handleInputChange}
          placeholder='Title'
        />
        <input
          type='text'
          name='author'
          value={bookData.author}
          onChange={handleInputChange}
          placeholder='Author'
        />
        <input
          type='text'
          name='pages'
          value={bookData.pages}
          onChange={handleInputChange}
          placeholder='Pages'
        />
        <input
          type='text'
          name='isbn'
          value={bookData.isbn}
          onChange={handleInputChange}
          placeholder='ISBN'
        />
        <input
          type='text'
          name='description'
          value={bookData.description}
          onChange={handleInputChange}
          placeholder='Description'
        />

        <Form.Select
          name='category'
          value={bookData.category}
          onChange={handleInputChange}>
          <option value='Unknown'>Unknown</option>
          <option value='Drama'>Drama</option>
          <option value='Action'>Action</option>
          <option value='Comedy'>Comedy</option>
          <option value='Horror'>Horror</option>
          <option value='Fiction'>Fiction</option>
        </Form.Select>

        <input
          type='number'
          name='price'
          value={bookData.price}
          onChange={handleInputChange}
          placeholder='Price'
        />

        <input
          type='file'
          accept='image/*'
          name='frontCover'
          onChange={handleFrontFileChange}
        />
        <input
          type='file'
          accept='image/*'
          name='backCover'
          onChange={handleBackFileChange}
        />

        <button variant='primary' type='submit'>
          Save Book
        </button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
};

export default EditBook;
