import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import bookCover from "../.././assets/book-cover.jpg"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBooksContext } from "../../hooks/useBooksContext";


const BookCards = (props) => {
  // const { user } = useAuthContext();
  // const { dispatch } = useBooksContext();

  // const handleAdminDelete = async () => {
  //   if (!user) {
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`/api/books/${props.book._id}`, {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });

  //     if (response.ok) {
  //       dispatch({ type: "DELETE_BOOK", payload: props.book._id });
  //     }
  //   } catch (error) {
  //     console.error("Delete book error:", error);
  //   }
  // };

  // Check if props.book is defined
  if (!props) {
    return null; // Render nothing if book is undefined
  }

  // const {
  //   title,
  //   author,
  //   description,
  //   category,
  //   price,
  //   frontCover,
  //   addedToWish,
  // } = props;

  return (
    <div className='container justify-content-evenly'>
      <div className='row justify-content-lg-evenly w-100'>
        <div className='col-12 col-md-4 col-sm-6 col-lg-3  mb-5 mt-5'>
          <div className='card rounded-3' style={{ backgroundColor: "white" }}>
            <div className='container'>
              <img
                className='card-img-top py-2 px-0 rounded-2'
                src={bookCover}
                alt='Books'
              />
              <p className='btnn'>{props.category}</p>
            </div>
            <Link to={"/store/" + props.title} style={{ textDecoration: "none" }}>
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
                    {props.title}
                  </h4>
                  <h6 className='card-subtitle mb-2 text-muted'>{props.author}</h6>
                  <p className='lh-sm'>{props.description}</p>
                </span>
              </div>
            </Link>

            <div className='card-img-overlay d-flex flex-column justify-content-between h-50 p-0 rounded-2'>
              <div className='row'>
                <div className='col d-flex justify-content-between align-items-center m-1'>
                  <IconButton
                    className='btn'
                    // onClick={() => handleAdminDelete(title)}
                    >
                    <ClearIcon
                      style={{
                        color: "red",
                        fontSize: 36,
                        fontWeight: "bolder",
                      }}
                    />
                  </IconButton>

                  <IconButton
                    // onClick={() => {
                    //   if (props.book) {
                    //     if (props.book.addedToWish) {
                    //       props.handleDeleteWish(props.book.title);
                    //     } else {
                    //       props.addToWish(props.index);
                    //     }
                    //     props.updateWish(props.index);
                    //   }
                    // }}
                    >
                    <StarIcon
                      style={{
                        color:
                          props.book && props.book.addedToWish
                            ? "yellow"
                            : "white",
                        fontSize:
                          props.book && props.book.addedToWish ? 36 : 32,
                      }}
                    />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className='card-footer d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <h5 className='mt-2'>{props.price}$</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCards;
