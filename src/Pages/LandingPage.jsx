import React from "react"
import BookCarousel from "../Components/BookCarousel.js"
import BookCard from "../Components/BookCard.jsx"
import BookCards from "./books/BookCards.js"


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



{/* <BookCards 
title= "Poor Dad Rich Dad"
author= "someone"
description= "bla bla blaa blabla blab lbala blab abalab abalan"
category= "finance"
price= "22$"
frontCover= ""
addedToWish= {false}
/>
<BookCards 
title= "Poor Dad Rich Dad"
author= "someone"
description= "bla bla blaa blabla blab lbala blab abalab abalan"
category= "finance"
price= "22$"
frontCover= ""
addedToWish= {false}
/>
<BookCards 
title= "Poor Dad Rich Dad"
author= "someone"
description= "bla bla blaa blabla blab lbala blab abalab abalan"
category= "finance"
price= "22$"
frontCover= ""
addedToWish= {false}
/> */}