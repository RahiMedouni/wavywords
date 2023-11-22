import React from "react";
import BookCards from "./BookCards";

const BookList = (props) => {
  return (
    <div className='container justify-content-evenly'>
      <div className='row justify-content-lg-evenly w-100'>
        {/* <BookCards /> */}
        {props.books.map((book, index) => (
          <BookCards
            index={index}
            key={index}
            book={book}
            handleAdminDelete={props.handleAdminDelete}
            addToWish={props.addToWish}
            updateWish={props.updateWish}
            handleDeleteWish={props.handleDeleteWish}
          />
        ))}
      </div>
    </div> //container
  );
};

export default BookList;
