import React from "react"
import BookCarousel from "../Components/BookCarousel.js"
import BookCard from "../Components/BookCard.jsx"
import AboutUsSection from "../Components/AboutUsSection.jsx"
import BestSellerCard from "../Components/BestSellerCard.jsx"
import JWLSection from "../Components/JWLSection.jsx"
import Footer from "../Components/Footer.jsx"
import bookCover from ".././assets/book-cover.jpg"
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
      <h3 className ="section--title">Popular Books</h3>
      <div className="popular-books--section">
          
        <BookCard 
        title="RICH DAD POOR DAD"
                author="Robert T.kiyosaki"
                price="2500 DA"
                frontCover={bookCover}
                description=""
        />
        <BookCard 
        title="RICH DAD POOR DAD"
                author="Robert T.kiyosaki"
                price="2500 DA"
                frontCover={bookCover}
                description=""
        />
        <BookCard 
        title="RICH DAD POOR DAD"
                author="Robert T.kiyosaki"
                price="2500 DA"
                frontCover={bookCover}
                description=""
        />
      </div>
      <h3 className ="section--title">Best Seller</h3>
      <div className="best-seller--section">
         <BestSellerCard />
      </div>
      <AboutUsSection />
      <h3 className ="section--title">Join our wait list</h3>
      <JWLSection />
      <Footer />
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