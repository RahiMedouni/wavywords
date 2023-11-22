import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBooksContext } from "../../hooks/useBooksContext";

const BookAdminCards = (props) => {
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
  if (!props.book) {
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
  } = props.book;

  // Function to handle book approval
  const handleApprove = async (bookId) => {
    try {
      const response = await fetch(`/api/books/approve/${bookId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        dispatch({ type: "DELETE_BOOK", payload: bookId });
      }
    } catch (error) {
      console.error("Approve book error:", error);
    }
  };

  return (
    <div className='container justify-content-evenly'>
      <div className='row justify-content-lg-evenly w-100'>
        <div className='col-12 col-md-4 col-sm-6 col-lg-3  mb-5 mt-5'>
          <div className='card rounded-3' style={{ backgroundColor: "white" }}>
            <div className='container'>
              <img
                className='card-img-top py-2 px-0 rounded-2'
                src={`/uploads/${frontCover}`}
                alt='Books'
              />
              <p className='btnn'>{category}</p>
            </div>
            <Link
              to={"/storeadmin/" + title}
              style={{ textDecoration: "none" }}>
              <div className='card-body img-fluid p-0'>
                <span
                  style={{
                    textAlign: "center",
                    lineHeight: 1,
                    color: "black",
                  }}>
                  <h4
                    className='card-title'
                    style={{ fontSize: 16, textAlign: "center" }}>
                    {title}
                  </h4>
                  <h6 className='card-subtitle mb-2 text-muted'>{author}</h6>
                  <p className='lh-sm'>{description}</p>
                </span>
              </div>
            </Link>

            <div className='card-img-overlay d-flex flex-column justify-content-between h-50 p-0 rounded-2'>
              <div className='row'>
                <div className='col d-flex justify-content-between align-items-center m-1'>
                  <IconButton
                    className='btn'
                    onClick={() => handleAdminDelete(title)}>
                    <ClearIcon
                      style={{
                        color: "red",
                        fontSize: 36,
                        fontWeight: "bolder",
                      }}
                    />
                  </IconButton>

                  {!props.book?.approved && (
                    <IconButton
                      className='btn'
                      onClick={() => handleApprove(props.book._id)}>
                      <AddIcon style={{ color: "white", fontSize: 32 }} />
                    </IconButton>
                  )}
                </div>
              </div>
            </div>

            <div className='card-footer d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <h5 className='mt-2'>{price}$</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAdminCards;
