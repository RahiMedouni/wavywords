import React from 'react'
import "./Store.css"
import filterIcon from ".././assets/filter.png"
import StoreBookCard from "../Components/StoreBookCard.jsx"
import Footer from "../Components/Footer.jsx"

export default function Store() {
  return (
    <>
    <div className="store--page">
        <div className="filters--section">
            <div className="filters--title">
                <img src={filterIcon} alt="" />
                <h3>Filter</h3>
            </div>
            <div className="filters--container">
                <div className="filter-type">
                    <h4 className="title">
                        Categories
                    </h4>
                     <p> Arabic Books - كتب عربية(515) </p> 
                     <p> Art Books(449) </p> 
                     <p> Comics & Manga(947) </p> 
                     <p> Fiction Books(496) </p> 
                     <p> Health & Wellbeing(368) </p> 
                     <p> Islamic Books & prayer(173) </p> 
                     <p> Kids & Teens Books(1,927) </p> 
                     <p> Livres en français - French Books(205) </p> 
                     <p> Non-Fiction Books(968) </p> 
                </div>
                <div className="filter-type">
                    <div className="title">
                        Collections/Series
                    </div>
                    <p> 20th Century Boys(4) </p> 
                    <p> A Man and His Cat(2) </p> 
                    <p> A Silent Voice(8) </p> 
                    <p> Akira(5) </p> 
                    <p> Ao Haru Ride(5) </p> 
                    <p> Assassination Classroom(17) </p> 
                    <p> Assouline - The Classics Collection(41) </p> 
                    <p> Assouline - The Icons Collection(3) </p> 
                    <p> Assouline - The Legends Collection(9) </p> 
                    <p> Assouline - The Ultimate Collection(19) </p> 
                    <p> Attack on Titan(42) </p> 
                    <p> Avatar The Last Airbender(2) </p> 
                    <p> Bakuman(3) </p> 
                    <p> Batman(1) </p> 
                    <p> Boruto Naruto Next Generations(13) </p> 
                    <p> Bungo Stray Dogs(1) </p> 
                    <p> Chainsaw Man(6) </p> 
                    <p> Death Note(6) </p> 
                    <p> Demon Slayer Kimetsu No Yaiba(22) </p> 
                    <p> Demon Slayer Kimetsu no Yaiba(1) </p> 
                    <p> Diary of a Wimpy Kid(25) </p> 
                    <p> Dog Man(12) </p> 
                    <p> Don't Toy With Me Miss Nagatoro(5) </p> 
                    <p> Dr. Stone(14) </p> 
                    <p> Dragon Ball(14) </p> 
                    <p> Fairy Tail(3) </p> 
                    <p> Final Fantasy(1) </p> 
                    <p> Fire Force(3) </p> 
                    <p> Fly Me to The Moon(4) </p> 

                </div>
            </div>


        </div>
        <div className="line"> </div>
        <div className="books--section">
            <div className="search-bar">
                <input type="text" />
                <button>search</button>

            </div>
            <div className="books--container">
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                <StoreBookCard />
                

            </div>
        </div>
        
    </div>
    <Footer />
    </>
  )
}


