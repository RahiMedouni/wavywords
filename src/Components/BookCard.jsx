import React from 'react'
import "./BookCard.css"
import bookCover from ".././assets/book-cover.jpg"

export default function BookCard() {
  return (
    <div className="card--container">
    <div className="image--container">
        <div className="category"></div>
        <img className="book-cover" src={bookCover} alt="add to favorite" />
        <input type="checkbox" />
    </div>
    <h3 className="title">Rich dad Poor dad</h3>
    <h4 className="author">Robert T.kiyosaki</h4>
    <p className="description">rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure  </p>
    <div className="order--section">
    <p className="price">2500 DA</p>
    <button className="cta--button">order now</button>
    </div>
    </div>
  )
}
