import React from 'react'
import "./BestSellerCard.css"
import bookCover from ".././assets/book-cover.jpg"

export default function BestSellerCard() {
  return (
    <div className="bs-card--container">
          <div className="bs-cover--container">
            <img src={bookCover} alt="book cover" />
          </div>
          <div className="bs-details">
            <div className="bs-title">RICH DAD POOR DAD</div>
            <div className="bs-author">Robert T.kiyosaki</div>
            <div className="bs-description">rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure  </div>
            <div className="order--section">
                <div className="rating--section">
                    <div className="publishing-house">EL BAM FATEH - للنشر و التوزيع</div>
                    <div className="rating"></div>
                </div>
                <button className="bs--order-btn">get yours now</button>
            </div>
          </div>
         </div>
  )
}
