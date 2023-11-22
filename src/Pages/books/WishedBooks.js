import WishCard from "./WishCard";

const WishedBooks = (props) => {
  //console.log({ wishedList: props.wishedList });
  return (
    <div className='container justify-content-evenly'>
      <div className='row justify-content-lg-evenly w-100'>
        {props.wishedList?.map((book, index) => (
          <WishCard
            index={index}
            key={index}
            book={book}
            addToWish={props.addToWish}
            updateWish={props.updateWish}
            handleDeleteWish={props.handleDeleteWish}
          />
        ))}
      </div>
    </div>
  );
};

export default WishedBooks;
