import React from "react"
import BookCarousel from "../Components/BookCarousel"
import BookCard from "../Components/BookCard.jsx"
import "./LandingPage.css"

function LandingPage() {
  return (
    <div style={{
      textAlign: "center"
    }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}>
        <BookCarousel />
      </div>
      <h3>Popular Books</h3>
      <div className="popular-books--section">
          
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}

export default LandingPage;
