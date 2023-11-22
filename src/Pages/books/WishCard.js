import { OverlayTrigger, Tooltip, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Ratestar from "./Ratestar";

const WishCard = (props, handleDeleteWish, updateWish) => {
  return (
    <div className='col-12 col-md-4 col-sm-6 col-lg-3  mb-5 mt-5'>
      <div className='card rounded-3' style={{ backgroundColor: "white" }}>
        <div className='container'>
          <img
            className='card-img-top p-2 rounded-2'
            src={props.book.coverUrl}
            alt='Books'
          />
          <p className='btnn'>{props.book.category}</p>
        </div>
        <Link
          to={"/store/" + props.book.title}
          style={{ textDecoration: "none" }}>
          <div className='card-body img-fluid p-0'>
            <span
              style={{ textAlign: "center", lineHeight: 1, color: "black" }}>
              <h4
                className='card-title'
                style={{ fontSize: 16, textAlign: "center" }}>
                {props.book.title} <span className='tooltiptext'>kkkkk</span>
              </h4>
              <h6 className='card-subtitle mb-2 text-muted'>
                {props.book.author}
              </h6>
              <p className='lh-sm'>{props.book.description}</p>{" "}
            </span>
          </div>
        </Link>

        <div className='card-img-overlay d-flex flex-column justify-content-between h-50 p-0 rounded-2'>
          <div className='row'>
            <div className='col d-flex justify-content-between align-items-center m-1'>
              <h3
                className='btn btn-danger'
                onClick={() => {
                  props.handleDeleteWish(props.book.title);
                  props.updateWish(props.index);
                }}>
                X
              </h3>

              {!props.book?.addedToWish && (
                <h5
                  className='btn btn-warning float-right'
                  onClick={() => {
                    props.addToWish(props.index);
                    props.updateWish(props.index);
                  }}>
                  wish
                </h5>
              )}

              {props.book?.addedToWish && (
                <h5
                  className='btn btn-warning float-right'
                  onClick={() => {
                    handleDeleteWish(props.index);
                    updateWish(props.index);
                  }}>
                  wished
                </h5>
              )}
            </div>
          </div>
        </div>

        <div className='card-footer d-flex align-items-center'>
          <h5 className='mt-2'>{props.book.price}$</h5>
          {/* <span><Ratestar/></span> */}
        </div>
      </div>
    </div>
  );
};

export default WishCard;
