import React from 'react'
import bookCover from ".././assets/book-cover.jpg"
import stars from ".././assets/rating.png"
import './StoreBookCard.css'

export default function StoreBookCard() {
  return (
    <div className="bc-card--container">
          <div className="bc-cover--container">
            <img src={bookCover} alt="book cover" />
          </div>
        <div className="bc-details">
            <div className="bc-title">RICH DAD POOR DAD</div>
            <div className="bc-author">Robert T.kiyosaki</div>
            <div className="order--section">
                <div className="rating--section">
                <img src={stars} className="rating" alt="" />
                    <div className="price">2500 DA</div>
               
                </div>
                <button className="bc--order-btn">add</button>
            </div>
          </div>
    </div>
  )
}
