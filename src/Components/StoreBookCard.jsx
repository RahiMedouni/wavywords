import React from 'react'
import bookCover from ".././assets/book-cover.jpg"
import stars from ".././assets/rating.png"
import './StoreBookCard.css'
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBooksContext } from "../hooks/useBooksContext";


export default function StoreBookCard(props) {
  const { user } = useAuthContext();
  const { dispatch } = useBooksContext();

  const handleAdminDelete = async () => {
    if (!user) {
      return;
    }

    try {
      const response = await fetch(`/api/books/${props.book._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        dispatch({ type: "DELETE_BOOK", payload: props.book._id });
      }
    } catch (error) {
      console.error("Delete book error:", error);
    }
  };

  // Check if props.book is defined
  if (!props) {
    return null; // Render nothing if book is undefined
  }

  const {
    title,
    author,
    description,
    category,
    price,
    frontCover,
    addedToWish,
  } = props;
  return (
    <Link to="/store/:id" className="bc-card--container">
          <div className="bc-cover--container">
            <img src={frontCover} alt="book cover" />
          </div>
        <div className="bc-details">
            <div className="bc-title">{title}</div>
            <div className="bc-author">{author}</div>
            <div className="order--section">
                <div className="rating--section">
                <img src={stars} className="rating" alt="" />
                    <div className="price">{price}</div>
               
                </div>
                <button className="bc--order-btn">add</button>
            </div>
          </div>
    </Link>
  )
}
