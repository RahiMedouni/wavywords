import React, { useState, useEffect } from "react";
import "./BookCarousel.css"; // Import your CSS file

// Fisher-Yates shuffle function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const BookCarousel = () => {
  const allBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel about the American Dream.",
      rating: 4.8,
      image: "twin.jpeg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A powerful exploration of racial injustice in the South.",
      rating: 4.7,
      image: "twin.jpeg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel exploring the dangers of totalitarianism.",
      rating: 4.5,
      image: "twin.jpeg",
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "A coming-of-age novel with a teenage protagonist.",
      rating: 4.3,
      image: "twin.jpeg",
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "A classic novel exploring love and class in early 19th-century England.",
      rating: 4.9,
      image: "twin.jpeg",
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "An epic fantasy adventure about a hobbit on a quest.",
      rating: 4.6,
      image: "twin.jpeg",
    },
    {
      id: 7,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      description: "A high fantasy novel set in the world of Middle-earth.",
      rating: 4.9,
      image: "twin.jpeg",
    },
    {
      id: 8,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      description: "The first book in the popular Harry Potter series.",
      rating: 4.7,
      image: "twin.jpeg",
    },
    {
      id: 9,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      description: "A dystopian novel set in a post-apocalyptic future.",
      rating: 4.4,
      image: "twin.jpeg",
    },
    {
      id: 10,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      description:
        "A mystery thriller involving a symbologist and a murder at the Louvre.",
      rating: 4.2,
      image: "twin.jpeg",
    },
  ];

  // Shuffle all books once
  const shuffledBooks = shuffleArray([...allBooks]);

  // Fixed order for displayed books
  const displayedBooksOrder = [0, 1, 2];

  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  useEffect(() => {
    // Change book every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentBookIndex(
        (prevIndex) => (prevIndex + 1) % displayedBooksOrder.length
      );
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentBookIndex, displayedBooksOrder.length]);

  return (
    <div className='book-carousel'>
      <div className='sold'>
        <h1>GET OOF 20%</h1>
      </div>
      <div className='book-details'>
        <div className='book-image'>
          <img
            src={shuffledBooks[displayedBooksOrder[currentBookIndex]].image}
            alt={shuffledBooks[displayedBooksOrder[currentBookIndex]].title}
          />
        </div>
        <div className='book-info'>
          <h2>{shuffledBooks[displayedBooksOrder[currentBookIndex]].title}</h2>
          <p>{shuffledBooks[displayedBooksOrder[currentBookIndex]].author}</p>
          <p>
            {shuffledBooks[displayedBooksOrder[currentBookIndex]].description}
          </p>
          <div>
            Rating:{" "}
            {shuffledBooks[displayedBooksOrder[currentBookIndex]].rating} stars
          </div>
        </div>
      </div>
      <div className='dots-container'>
        {displayedBooksOrder.map((index) => (
          <div
            key={shuffledBooks[index].id}
            className={`dot ${
              index === currentBookIndex ? "active" : ""
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default BookCarousel;
