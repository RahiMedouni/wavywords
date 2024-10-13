import React from 'react'
import "./BookCard.css"
import bookCover from ".././assets/book-cover.jpg"
import fullHeart from ".././assets/full-heart.png"
import emptyHeart from ".././assets/empty-heart.png"

export default function BookCard(props) {
  const [isChecked, setIsChecked] = React.useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const {
    title,
    author,
    description,
    category,
    price,
    frontCover,
    addedToWish,
  } = props;
  return (
    <div className="card--container">
    <div className="image--container">
        <div className="category"></div>
        <img className="book-cover" src={frontCover} alt="add to favorite" />
        <label class="heart">
           <input type="checkbox" class="heart-checkbox" checked={isChecked} onChange={toggleCheckbox}/>
           <img src={isChecked ? fullHeart : emptyHeart } alt="add to wishlist" />
        </label>
    </div>
    <h3 className="title">{title}</h3>
    <h4 className="author">{author}</h4>
    <p className="description">{description }</p>
    <div className="order--section">
    <p className="price">{price}</p>
    <button className="cta--button">order now</button>
    </div>
    </div>
  )
}
