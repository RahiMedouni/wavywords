import React from "react";
import BookCarousel from "../Components/BookCarousel";

function LandingPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}>
        <BookCarousel />
      </div>
    </div>
  );
}

export default LandingPage;
