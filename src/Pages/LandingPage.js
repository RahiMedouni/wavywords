import React from "react";
import BookCarousel from "../Components/BookCarousel";

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
      <div
        className="popular-books--section">
        <h3>Popular Books</h3>
      </div>
    </div>
  );
}

export default LandingPage;
