import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBooksContext } from "../../hooks/useBooksContext";

const AddBook = () => {
  const { dispatch } = useBooksContext();
  const { user } = useAuthContext();

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Unknown");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [addedToWish, setAddedToWish] = useState(false);
  const [approved, setApproved] = useState(false);
  const [frontCover, setFrontCover] = useState(null); // Holds file data
  const [backCover, setBackCover] = useState(null); // Holds file data
  const [error, setError] = useState(null);

  const handleFrontFileChange = (e) => {
    setFrontCover(e.target.files[0]); // Store file data
  };

  const handleBackFileChange = (e) => {
    setBackCover(e.target.files[0]); // Store file data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    // Create a FormData object to send the book data and files
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("pages", pages);
    formData.append("isbn", isbn);
    formData.append("rating", rating);
    formData.append("addedToWish", addedToWish);
    formData.append("approved", approved);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("frontCover", frontCover); // Add the file data
    formData.append("backCover", backCover); // Add the file data

    // // Initialize emptyFields as an empty array
    // let updatedEmptyFields = [];

    // // Check for empty fields including cover images
    // if (!title) {
    //   updatedEmptyFields.push("title");
    // }
    // if (!author) {
    //   updatedEmptyFields.push("author");
    // }
    // if (!pages) {
    //   updatedEmptyFields.push("pages");
    // }
    // if (!isbn) {
    //   updatedEmptyFields.push("isbn");
    // }
    // if (!description) {
    //   updatedEmptyFields.push("description");
    // }
    // if (!coverUrl) {
    //   updatedEmptyFields.push("coverUrl");
    // }
    // if (!category) {
    //   updatedEmptyFields.push("category");
    // }
    // if (!price) {
    //   updatedEmptyFields.push("price");
    // }
    // if (!frontCover) {
    //   updatedEmptyFields.push("frontCover");
    // }
    // if (!backCover) {
    //   updatedEmptyFields.push("backCover");
    // }

    // setEmptyFields(updatedEmptyFields);

    const response = await fetch("/api/books", {
      method: "POST",
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
      setTitle("");
      setAuthor("");
      setPages("");
      setIsbn("");
      setDescription("");
      setCategory("Unknown");
      setPrice("");
      setRating(0);
      setAddedToWish(false);
      setApproved(false);
      setFrontCover(null);
      setBackCover(null);
      setError(null);
      dispatch({ type: "CREATE_BOOK", payload: json });
    }
  };

  return (
    <div
      className='adding-movie'
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <form
        onSubmit={handleSubmit}
        encType='multipart/form-data'
        style={{
          width: "50%",
        }}>
        TITLE:
        <input
          type='text'
          className='form-control'
          placeholder='enter title here'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        AUTHOR:
        <input
          type='text'
          className='form-control'
          placeholder='author name'
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        PAGES:
        <input
          type='text'
          className='form-control'
          placeholder='number of pages'
          onChange={(e) => setPages(e.target.value)}
          value={pages}
        />
        ISBN
        <input
          type='text'
          className='form-control'
          placeholder='enter title here'
          onChange={(e) => setIsbn(e.target.value)}
          value={isbn}
        />
        DESCRIPTION:
        <input
          type='text'
          className='form-control'
          placeholder='enter description here'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        Category:
        <Form.Select
          aria-label='Default select example'
          onChange={(e) => setCategory(e.target.value)}
          value={category}>
          <option value='Unknown'>Unknown</option>
          <option value='Drama'>Drama</option>
          <option value='Action'>Action</option>
          <option value='Comedy'>Comedy</option>
          <option value='Horror'>Horror</option>
          <option value='Fiction'>Fiction</option>
        </Form.Select>
        setPrice:
        <input
          type='number'
          className='form-control'
          placeholder='enter price here'
          onChange={(e) => setPrice(e.target.value)}
          value={price}
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

export default AddBook;
